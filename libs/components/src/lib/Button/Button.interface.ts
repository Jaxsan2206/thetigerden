import { Variant } from "../../types/common";

export interface IButtonProps {
  variant?: Variant; 
  icon?: {
    name: string;
    iconPosition: 'start' | 'end'
  };
  href?: string;
  onClick?: () => unknown;
  disabled?: boolean;
  [key: string]: any;
}