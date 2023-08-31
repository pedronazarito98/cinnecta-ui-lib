import React, { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Transition from "react-transition-group/Transition";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/icon";

import {
  DropdownArrow,
  DropdownContainer,
  DropdownList,
  DropdownMenuStyle,
  DropdownStyles,
} from "./styles";

export interface DropdownProps {
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  block?: boolean;
  bottom?: boolean;
  combo?: boolean;
  compact?: boolean;
  container?: boolean;
  leftMarged?: boolean;
  icon?: string | React.ReactElement;
  inverse?: boolean;
  isOpen?: boolean;
  mono?: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  noBorder?: boolean;
  noSpacing?: boolean;
  shade?: boolean;
  soft?: boolean;
  shimmer?: boolean;
  primary?: boolean;
  rectangular?: boolean;
  removeIcon?: boolean;
  secondary?: boolean;
  side?: boolean;
  short?: boolean;
  transparent?: boolean;
  children?: React.ReactNode;
  button?: boolean;
  label?: string | React.ReactNode;
  only?: boolean;
  relative?: boolean;
  left?: boolean;
  options?: { label: string; value: any }[];
  onSelectOption?: (option?: { label: string; value: any }) => void;
  closeOnSelect?: boolean;
  onToggleMenu?: (isOpen?: boolean) => void;
  small?: boolean;
  large?: boolean;
  tall?: boolean;
  wide?: boolean;
}

export interface DropdownMenuProps {
  children: React.ReactNode;
  left?: boolean;
  isOpen?: boolean;
  insideAButton?: boolean;
  bottom?: boolean;
  combo?: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  side?: boolean;
  onClickOutside?: () => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  bottom,
  children,
  combo,
  left,
  isOpen,
  insideAButton,
  mountOnEnter,
  unmountOnExit,
  side,
  onClickOutside,
}) => {
  return (
    <OutsideClickHandler onOutsideClick={onClickOutside}>
      <Transition
        in={isOpen}
        timeout={300}
        mountOnEnter={mountOnEnter}
        unmountOnExit={unmountOnExit}
        onEnter={(node) => node.scrollTop}
      >
        {(state) => (
          <DropdownMenuStyle
            insideAButton={!combo && insideAButton}
            left={left && !side}
            right={!left && !side}
            leftSide={left && side}
            rightSide={!left && side}
            sideBottom={side && bottom}
            sideTop={side && !bottom}
            entering={state === "entering" || state === "entered"}
            exiting={state === "exiting" || state === "exited"}
          >
            {children}
          </DropdownMenuStyle>
        )}
      </Transition>
    </OutsideClickHandler>
  );
};

export const Dropdown: React.FC<DropdownProps> = ({
  isOpen: initialIsOpen,
  onToggleMenu,
  onSelectOption,
  closeOnSelect,
  children,
  button,
  bottom,
  container,
  label,
  only,
  relative,
  left,
  options,
  disabled,
  loading,
  fullWidth,
  block,
  combo,
  compact,
  icon,
  inverse,
  mono,
  mountOnEnter,
  unmountOnExit,
  noBorder,
  noSpacing,
  shade,
  side,
  soft,
  shimmer,
  primary,
  rectangular,
  removeIcon,
  secondary,
  short,
  transparent,
  small,
  tall,
  large,
}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const [closedByOutsideClick, setClosedByOutsideClick] = useState<any>(false);

  useEffect(() => {
    if (initialIsOpen !== isOpen) {
      setIsOpen(initialIsOpen);
    }
  }, [initialIsOpen, isOpen]);

  useEffect(() => {
    onToggleMenu && onToggleMenu(isOpen);
  }, [isOpen, onToggleMenu]);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) =>
      closedByOutsideClick && !prevIsOpen ? false : !prevIsOpen
    );
  };

  const onClickOutsideMenu = () => {
    setIsOpen(false);
    setClosedByOutsideClick(isOpen);
  };

  const handleSelectOption = (option: { label: string; value: any }) => {
    onSelectOption && onSelectOption(option);
    closeOnSelect && toggleMenu();
  };

  return container ? (
    <DropdownContainer noSpacing relative>
      <div onClick={toggleMenu}>{children}</div>
      <DropdownMenu
        isOpen={isOpen}
        onClickOutside={onClickOutsideMenu}
        left={left}
        side={side}
        bottom={bottom}
        mountOnEnter={mountOnEnter}
        unmountOnExit={unmountOnExit}
      >
        <DropdownList>
          {options?.map((option) => (
            <li key={option.value}>
              <Button
                short
                compact
                inverse
                noSpacing
                block
                onClick={() => handleSelectOption(option)}
              >
                {option.label}
              </Button>
            </li>
          ))}
        </DropdownList>
      </DropdownMenu>
    </DropdownContainer>
  ) : (
    <DropdownContainer
      asAButton={button}
      noSpacing={noSpacing}
      relative={!combo && combo && (container || button || only || relative)}
    >
      {button ? (
        <Button
          noSpacing
          disabled={disabled}
          loading={loading}
          shimmer={shimmer}
          fullWidth={fullWidth}
          block={block}
          compact={compact}
          inverse={inverse}
          mono={mono}
          noBorder={noBorder}
          soft={soft}
          primary={primary}
          rectangular={rectangular}
          secondary={secondary}
          shade={shade}
          short={short}
          transparent={transparent}
          small={small}
          tall={tall}
          large={large}
          type="button"
          onClick={toggleMenu}
        >
          {label}
          {!removeIcon &&
            (icon ? (
              typeof label === "string" ? (
                <Icon name={icon} primary smaller noPadding />
              ) : (
                icon
              )
            ) : (
              <DropdownArrow
                mono={mono}
                leftMarged={label}
                primary={soft || inverse || transparent}
                secondary={secondary}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10.4 6.3"
              >
                <path d="M5.2,6.3A.91.91,0,0,1,4.5,6L.3,1.8A1,1,0,0,1,.3.4,1,1,0,0,1,1.7.4L5.2,3.9,8.7.3a1,1,0,0,1,1.4,0,1,1,0,0,1,0,1.4L5.9,6a4.88,4.88,0,0,1-.7.3Z" />
              </DropdownArrow>
            ))}
        </Button>
      ) : (
        <DropdownStyles only={only} type="button" onClick={toggleMenu}>
          <DropdownArrow
            mono={mono}
            primary={soft || inverse || transparent}
            secondary={secondary}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10.4 6.3"
          >
            <path d="M5.2,6.3A.91.91,0,0,1,4.5,6L.3,1.8A1,1,0,0,1,.3.4,1,1,0,0,1,1.7.4L5.2,3.9,8.7.3a1,1,0,0,1,1.4,0,1,1,0,0,1,0,1.4L5.9,6a4.88,4.88,0,0,1-.7.3Z" />
          </DropdownArrow>
        </DropdownStyles>
      )}
      <DropdownMenu
        isOpen={isOpen}
        onClickOutside={onClickOutsideMenu}
        insideAButton={button}
        combo={combo}
        left={left}
        side={side}
        bottom={bottom}
        mountOnEnter={mountOnEnter}
        unmountOnExit={unmountOnExit}
      >
        {children ? (
          children
        ) : (
          <DropdownList>
            {options?.map((option) => (
              <li key={option.value}>
                <Button
                  short
                  compact
                  inverse
                  noSpacing
                  simple
                  block
                  onClick={() => handleSelectOption(option)}
                >
                  {option.label}
                </Button>
              </li>
            ))}
          </DropdownList>
        )}
      </DropdownMenu>
    </DropdownContainer>
  );
};
