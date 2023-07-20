import { Fragment } from "react";
import { Blanket } from "../Blanket/Blanket";

import { CloseButton, Container, ModalStyles } from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.any.isRequired,
  flex: PropTypes.bool,
  fullHeight: PropTypes.bool,
  fullScreen: PropTypes.bool,
  global: PropTypes.bool,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  centralize: PropTypes.bool,
  micro: PropTypes.bool,
  noPadding: PropTypes.bool,
  onClickBlanket: PropTypes.func,
  onClose: PropTypes.func,
  removeBlanket: PropTypes.bool,
  removeCloseButton: PropTypes.bool,
  small: PropTypes.bool,
  visible: PropTypes.bool,
  xlarge: PropTypes.bool,
  zIndex: PropTypes.number,
};

export const Modal = ({
  children,
  flex,
  fullHeight,
  fullScreen,
  global,
  large,
  medium,
  centralize,
  micro,
  noPadding,
  onClickBlanket,
  onClose,
  removeBlanket,
  removeCloseButton,
  small,
  visible,
  xlarge,
}) => {
  return visible ? (
    <Fragment>
      <Container centralize={centralize}>
        <ModalStyles
          flex={flex}
          fullHeight={fullHeight}
          fullScreen={fullScreen}
          micro={micro}
          small={small}
          large={large}
          medium={medium}
          xlarge={xlarge}
          noPadding={noPadding}
          default={
            !fullScreen && !xlarge && !small && !large && !medium && !micro
          }
        >
          {!removeCloseButton && <CloseButton></CloseButton>}
          {children}
        </ModalStyles>
        {(removeBlanket || !fullScreen) && (
          <Blanket
            global={global}
            visible
            onClick={() =>
              onClickBlanket ? onClickBlanket() : onClose ? onClose() : null
            }
          />
        )}
      </Container>
    </Fragment>
  ) : null;
};
Modal.propTypes = propTypes;
