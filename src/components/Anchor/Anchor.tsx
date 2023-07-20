import Link from "next/link";
import PropTypes from "prop-types";
import { AnchorStyles } from "./styles";

const propTypes = {
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  href: PropTypes.string,
  loading: PropTypes.bool,
  openInNewWindow: PropTypes.bool,
  target: PropTypes.string,
  noHoverUnderline: PropTypes.bool,
  children: PropTypes.node,
};

export const Anchor = ({
  children,
  disabled,
  external,
  href,
  openInNewWindow,
  target,
  noHoverUnderline,
  ...props
}) =>
  !external && href ? (
    <AnchorStyles
      as={Link}
      {...props}
      underlined={!noHoverUnderline}
      href={href}
      disabled={disabled}
      target={openInNewWindow ? "_blank" : "_self"}
    >
      {children}
    </AnchorStyles>
  ) : (
    <AnchorStyles
      {...props}
      underlined={!noHoverUnderline}
      href={href}
      target={target}
    >
      {children}
    </AnchorStyles>
  );
Anchor.propTypes = propTypes;
