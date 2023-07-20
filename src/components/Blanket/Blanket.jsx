import PropTypes from "prop-types";
import { BlanketStyles } from "./styles";
import { Responsive } from "../Responsive/Responsive";
import Transition from "react-transition-group/Transition";

const propTypes = {
  showFor: PropTypes.oneOf(["small", "medium", "large", "xlarge"]),
  hideFor: PropTypes.oneOf(["small", "medium", "large", "xlarge"]),
  global: PropTypes.bool,
  primary: PropTypes.bool,
  visible: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  zIndex: PropTypes.number,
  absolute: PropTypes.bool,
};

export const Blanket = ({
  absolute,
  showFor,
  hideFor,
  global,
  visible,
  onClick,
  onClose,
  primary,
}) => (
  <Transition
    in={visible}
    timeout={300}
    mountOnEnter
    unmountOnExit
    onEnter={(node) => node.scrollTop}
    onExited={() => onClose && onClose()}
  >
    {(state) => (
      <Responsive showFor={showFor} hideFor={hideFor}>
        <BlanketStyles
          absolute={absolute}
          fixed={!absolute}
          global={global}
          primary={primary}
          entering={state === "entering" || state === "entered"}
          exiting={state === "exiting" || state === "exited"}
          onClick={() => onClick && onClick()}
        />
      </Responsive>
    )}
  </Transition>
);
Blanket.propTypes = propTypes;
