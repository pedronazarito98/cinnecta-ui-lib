import * as React from "react";
import { BlanketStyles } from "./styles";
import { Responsive } from "../Responsive/Responsive";
import Transition from "react-transition-group/Transition";

export interface BlanketProps {
  showFor?: "small" | "medium" | "large" | "xlarge";
  hideFor?: "small" | "medium" | "large" | "xlarge";
  global?: boolean;
  primary?: boolean;
  visible?: boolean;
  onClick?: () => void;
  onClose?: () => void;
  onClickBlanket?: () => void;

  zIndex?: number;
  absolute?: boolean;
}

export const Blanket: React.FC<BlanketProps> = ({
  absolute,
  showFor,
  hideFor,
  global,
  visible,
  onClick,
  onClose,
  onClickBlanket,
  primary,
}) => (
  <Transition
    in={visible}
    timeout={300}
    mountOnEnter
    unmountOnExit
    onEnter={(node: any) => node.scrollTop}
    onExited={() => onClose && onClose()}
  >
    {(state: String) => (
      <Responsive showFor={showFor} hideFor={hideFor}>
        <BlanketStyles
          absolute={absolute}
          fixed={!absolute}
          global={global}
          primary={primary}
          entering={state === "entering" || state === "entered"}
          exiting={state === "exiting" || state === "exited"}
          onClick={() =>
            onClick ? onClick() : onClickBlanket ? onClickBlanket() : null
          }
        />
      </Responsive>
    )}
  </Transition>
);
