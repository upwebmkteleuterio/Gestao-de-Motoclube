import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { PapelVinculo } from '../types';

export type ThemeMode = 'dark' | 'light';

interface AppState {
  theme: ThemeMode;
  activeRole: PapelVinculo;
  activeClubId: string;
  activeMemberId: string;
  sidebarCollapsed: boolean;
  openModals: Record<string, boolean>;
  draftForms: Record<string, Record<string, unknown>>;
  scrollPositions: Record<string, number>;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  setActiveRole: (role: PapelVinculo) => void;
  setActiveClubId: (clubId: string) => void;
  setActiveMemberId: (memberId: string) => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  setModalOpen: (modalKey: string, open: boolean) => void;
  setDraftForm: (formKey: string, data: Record<string, unknown>) => void;
  clearDraftForm: (formKey: string) => void;
  setScrollPosition: (routeKey: string, y: number) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'dark',
      activeRole: 'gestor',
      activeClubId: 'C01',
      activeMemberId: 'M02',
      sidebarCollapsed: false,
      openModals: {},
      draftForms: {},
      scrollPositions: {},

      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
      setActiveRole: (activeRole) => set({ activeRole }),
      setActiveClubId: (activeClubId) => set({ activeClubId }),
      setActiveMemberId: (activeMemberId) => set({ activeMemberId }),
      setSidebarCollapsed: (sidebarCollapsed) => set({ sidebarCollapsed }),
      setModalOpen: (modalKey, open) =>
        set((state) => ({
          openModals: { ...state.openModals, [modalKey]: open },
        })),
      setDraftForm: (formKey, data) =>
        set((state) => ({
          draftForms: { ...state.draftForms, [formKey]: data },
        })),
      clearDraftForm: (formKey) =>
        set((state) => {
          const next = { ...state.draftForms };
          delete next[formKey];
          return { draftForms: next };
        }),
      setScrollPosition: (routeKey, y) =>
        set((state) => ({
          scrollPositions: { ...state.scrollPositions, [routeKey]: y },
        })),
    }),
    {
      name: 'motoclub.ui-state.v1',
    },
  ),
);
