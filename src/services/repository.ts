const SIMULATED_LATENCY_MS = 500;

function delay<T>(value: T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), SIMULATED_LATENCY_MS);
  });
}

function generateId(prefix: string): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `${prefix}_${crypto.randomUUID().slice(0, 8)}`;
  }
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
}

export interface EntityRepository<T extends { id: string }> {
  getAll: () => Promise<T[]>;
  getById: (id: string) => Promise<T | null>;
  create: (payload: Omit<T, 'id'> & { id?: string }) => Promise<T>;
  update: (id: string, patch: Partial<Omit<T, 'id'>>) => Promise<T>;
  delete: (id: string) => Promise<void>;
  reset: () => Promise<T[]>;
}

export function createSimulatedRepository<T extends { id: string }>(
  tableName: string,
  initialSeed: T[],
): EntityRepository<T> {
  const storageKey = `motoclub.db.${tableName}.v2`;
  let memoryCache: T[] | null = null;

  function loadStore(): T[] {
    if (memoryCache) return memoryCache;

    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        const raw = window.localStorage.getItem(storageKey);
        if (raw) {
          const parsed = JSON.parse(raw) as T[];
          if (Array.isArray(parsed)) {
            memoryCache = parsed;
            return memoryCache;
          }
        }
      } catch {
        // Fallback to seed if storage is corrupted or unavailable
      }
    }

    memoryCache = initialSeed.map((item) => structuredClone(item));
    saveStore(memoryCache);
    return memoryCache;
  }

  function saveStore(items: T[]): void {
    memoryCache = items;
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(items));
      } catch {
        // Ignore storage quota errors
      }
    }
  }

  return {
    async getAll(): Promise<T[]> {
      const items = loadStore().map((item) => structuredClone(item));
      return delay(items);
    },

    async getById(id: string): Promise<T | null> {
      const found = loadStore().find((item) => item.id === id) ?? null;
      return delay(found ? structuredClone(found) : null);
    },

    async create(payload: Omit<T, 'id'> & { id?: string }): Promise<T> {
      const items = loadStore();
      const created = {
        ...(structuredClone(payload) as Omit<T, 'id'>),
        id: payload.id ?? generateId(tableName.slice(0, 3)),
      } as T;
      saveStore([...items, created]);
      return delay(structuredClone(created));
    },

    async update(id: string, patch: Partial<Omit<T, 'id'>>): Promise<T> {
      const items = loadStore();
      const index = items.findIndex((item) => item.id === id);
      if (index === -1) {
        return delay(Promise.reject(new Error(`Registro "${id}" não encontrado em ${tableName}.`)));
      }
      const updated = { ...items[index], ...structuredClone(patch), id } as T;
      const next = [...items];
      next[index] = updated;
      saveStore(next);
      return delay(structuredClone(updated));
    },

    async delete(id: string): Promise<void> {
      const items = loadStore();
      const exists = items.some((item) => item.id === id);
      if (!exists) {
        return delay(Promise.reject(new Error(`Registro "${id}" não encontrado em ${tableName}.`)));
      }
      saveStore(items.filter((item) => item.id !== id));
      return delay(undefined);
    },

    async reset(): Promise<T[]> {
      const seeded = initialSeed.map((item) => structuredClone(item));
      saveStore(seeded);
      return delay(seeded);
    },
  };
}
