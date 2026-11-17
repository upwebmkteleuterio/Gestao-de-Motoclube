import type { ReactNode } from 'react';

export interface TableColumn<T> {
  key: string;
  header: string;
  align?: 'left' | 'right' | 'center';
  className?: string;
  render: (row: T) => ReactNode;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  keyExtractor: (row: T) => string;
  onRowClick?: (row: T) => void;
  emptyMessage?: string;
  footerNote?: string;
}

export function Table<T>({
  columns,
  data,
  keyExtractor,
  onRowClick,
  emptyMessage = 'Nenhum registro encontrado.',
  footerNote,
}: TableProps<T>) {
  return (
    <div className="overflow-hidden rounded-[7px] border border-[#d7dbe3] dark:border-[#424348] bg-white dark:bg-[#141518]">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left tabular-nums">
          <thead>
            <tr className="bg-[#eceef2] dark:bg-[#202124] text-xs font-semibold text-[#111318] dark:text-[#f6f7f9]">
              {columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className={[
                    'px-3 py-2.5 whitespace-nowrap',
                    col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left',
                    col.className ?? '',
                  ].join(' ')}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-3 py-6 text-center text-sm text-[#5c6270] dark:text-[#bfc2cb]">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row) => (
                <tr
                  key={keyExtractor(row)}
                  onClick={onRowClick ? () => onRowClick(row) : undefined}
                  className={[
                    'border-t border-[#e2e5ec] dark:border-[#3d3e42] text-sm text-[#111318] dark:text-[#f6f7f9] transition-colors',
                    onRowClick ? 'cursor-pointer hover:bg-[#f5f6f8] dark:hover:bg-[#1b1d22]' : '',
                  ].join(' ')}
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={[
                        'px-3 py-2.5 align-middle',
                        col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left',
                        col.className ?? '',
                      ].join(' ')}
                    >
                      {col.render(row)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {footerNote && (
        <div className="border-t border-[#e2e5ec] dark:border-[#3d3e42] bg-[#eceef2] dark:bg-[#202124] px-3 py-2 text-xs text-[#5c6270] dark:text-[#c1c2c6]">
          {footerNote}
        </div>
      )}
    </div>
  );
}
