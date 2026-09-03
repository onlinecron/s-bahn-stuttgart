import * as React from 'react';
/** Square icon-only button; always pass a `label` for accessibility. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Accessible name, also used as the tooltip title. */
  label: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  /** Icon glyph, typically a 16px Lucide SVG. */
  children?: React.ReactNode;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
