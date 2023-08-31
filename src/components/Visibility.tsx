import React, { ReactNode } from "react";

export interface VisibilityProps {
  hideIf?: boolean;
  showIf?: boolean;
  unmount?: boolean;
  children: ReactNode;
}

export const Visibility: React.FC<VisibilityProps> = ({
  hideIf,
  showIf,
  unmount,
  children,
}) => {
  if (unmount) {
    return hideIf === false || showIf === true ? <>{children}</> : null;
  } else {
    return hideIf === false || showIf === true ? (
      <>{children}</>
    ) : (
      <div style={{ display: "none" }}>{children}</div>
    );
  }
};
