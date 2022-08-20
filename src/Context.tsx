import { createContext, CSSProperties } from "react";

export interface AlertButtonProps {
  label: string;
  onClick: Function;
  style?: CSSProperties;
}

export interface AlertProps {
  message: string;
  buttons?: AlertButtonProps[];
}

export interface AlertContextProps {
  open: (data: AlertProps) => void;
  close: () => void;
}

export const AlertContext = createContext<AlertContextProps>(
  {} as AlertContextProps
);
