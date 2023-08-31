import React, { ReactNode } from "react";
import { PopoverUi, PopoverOnly, PopoverTrigger } from "./PopoverOnly";

export interface PopoverProps {
  title: ReactNode;
  children: ReactNode;
}

export const Popover: React.FC<PopoverProps> = ({ title, children }) => {
  return (
    <PopoverUi>
      <PopoverTrigger>{title}</PopoverTrigger>
      <PopoverOnly>{children}</PopoverOnly>
    </PopoverUi>
  );
};
