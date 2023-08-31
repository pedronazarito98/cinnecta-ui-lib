import React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  TriggerStyle,
} from "./styles";

export const PopoverUi = PopoverPrimitive.Root;
export const PopoverTrigger = TriggerStyle;

export const PopoverOnly = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <PopoverPrimitive.Portal>
      <PopoverContent sideOffset={5} {...props} ref={forwardedRef}>
        {children}
        <PopoverClose aria-label="Close"></PopoverClose>
        <PopoverArrow />
      </PopoverContent>
    </PopoverPrimitive.Portal>
  )
);
