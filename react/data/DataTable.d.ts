import * as React from 'react';
export interface DataTableColumn {
  key: string;
  header: React.ReactNode;
  align?: 'left' | 'right' | 'center';
  /** CSS width for the column. */
  width?: string | number;
  /** Render the cell in the mono data face with tabular numerals. */
  mono?: boolean;
  /** Allow wrapping; cells are nowrap by default. */
  wrap?: boolean;
  /** Custom cell renderer. */
  render?: (row: any, index: number) => React.ReactNode;
}
/**
 * High-density ruled table — the core surface of the system.
 * @startingPoint section="Data" subtitle="Ruled, zebra-striped high-density table" viewport="700x260"
 */
export interface DataTableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  columns: DataTableColumn[];
  rows: any[];
  /** Light grey alternating rows. @default true */
  zebra?: boolean;
  /** 4px vertical padding instead of 8px. */
  dense?: boolean;
  onRowClick?: (row: any, index: number) => void;
  emptyText?: string;
}
export declare function DataTable(props: DataTableProps): JSX.Element;
