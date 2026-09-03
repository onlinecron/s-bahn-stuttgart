import * as React from 'react';
/** Rectangular toggle for immediate on/off system state — mechanical, no animation. */
export interface SwitchProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Switch(props: SwitchProps): JSX.Element;
