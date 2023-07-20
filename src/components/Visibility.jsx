export const Visibility = ({ hideIf, showIf, unmount, children }) => {
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
