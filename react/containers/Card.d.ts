import * as React from 'react';
/**
 * Bordered content container with a grey section header. No shadow, no radius.
 * @startingPoint section="Containers" subtitle="Bordered panel with grey section header" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Uppercase header label. Omit (with no actions) for a plain bordered box. */
  title?: React.ReactNode;
  /** Mono sub-label in the header — timestamp, count, ID. */
  meta?: React.ReactNode;
  /** Header-right controls, usually IconButtons. */
  actions?: React.ReactNode;
  /** Set false when the body is a full-bleed table. @default true */
  padded?: boolean;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
