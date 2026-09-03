import * as React from 'react';
export interface NavItem { value: string; label: React.ReactNode }
/**
 * Application top bar: blue wordmark block, boxed segments, 2px charcoal base rule.
 * @startingPoint section="Navigation" subtitle="Application top bar with boxed segments" viewport="1280x64"
 */
export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  /** Wordmark text in the blue block. */
  product?: string;
  items?: (string | NavItem)[];
  value?: string;
  onChange?: (value: string) => void;
  /** Right-aligned status area (clock, StatusLed, IconButtons). */
  right?: React.ReactNode;
}
export declare function NavBar(props: NavBarProps): JSX.Element;
