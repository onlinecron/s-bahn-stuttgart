import * as React from 'react';
/**
 * Rectangular, zero-radius action button with a 1px charcoal border.
 * @startingPoint section="Actions" subtitle="Primary, secondary, attention and danger buttons" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual tone. @default "primary" */
  variant?: 'primary' | 'secondary' | 'attention' | 'danger' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  /** Renders the mechanical pressed (darker) state. */
  pressed?: boolean;
  /** Leading icon node (16px Lucide glyph). */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
