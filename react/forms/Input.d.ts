import * as React from 'react';
/** Bordered text field with the label stacked directly above it. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  /** Uppercase label rendered above the field. */
  label?: string;
  /** Helper line below the field. */
  hint?: string;
  /** Error message; also switches the border to 2px signal red. */
  error?: string;
  /** Fixed leading affix (unit, protocol, station code). */
  prefix?: React.ReactNode;
  /** Fixed trailing affix. */
  suffix?: React.ReactNode;
  /** Render the value in the mono data face — timestamps, cron, IDs. */
  mono?: boolean;
}
export declare function Input(props: InputProps): JSX.Element;
