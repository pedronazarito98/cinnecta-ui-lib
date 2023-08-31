import React, { Fragment, ReactNode } from "react";
import { Blanket } from "../Blanket/Blanket";

import { CloseButton, Container, ModalStyles } from "./styles";

export interface ModalProps {
  children: ReactNode;
  flex?: boolean;
  fullHeight?: boolean;
  fullScreen?: boolean;
  global?: boolean;
  large?: boolean;
  medium?: boolean;
  centralize?: boolean;
  micro?: boolean;
  noPadding?: boolean;
  onClickBlanket?: () => void;
  onClose?: () => void;
  removeBlanket?: boolean;
  removeCloseButton?: boolean;
  small?: boolean;
  visible: boolean;
  xlarge?: boolean;
  zIndex?: number;
}

export const Modal: React.FC<ModalProps> = ({
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
