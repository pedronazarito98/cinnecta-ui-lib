import { PopoverUi, PopoverOnly, PopoverTrigger } from "./PopoverOnly";

export const Popover = ({ title, children }) => {
  return (
    <PopoverUi>
      <PopoverTrigger>{title}</PopoverTrigger>
      <PopoverOnly>{children}</PopoverOnly>
    </PopoverUi>
  );
};
