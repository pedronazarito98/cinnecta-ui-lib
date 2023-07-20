// @ts-expect-error TS(6142): Module '../Shimmer/Shimmer' was resolved to '/home... Remove this comment to see the full error message
import { Shimmer } from "../Shimmer/Shimmer";
import { AvatarStyle } from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  inline: PropTypes.bool,
  large: PropTypes.bool,
  loading: PropTypes.bool,
  micro: PropTypes.bool,
  small: PropTypes.bool,
  source: PropTypes.string,
  square: PropTypes.bool,
  size: PropTypes.number,
};
export const Avatar = ({
  inline,
  large,
  loading,
  micro,
  size,
  small,
  source,
  square,
}: any) => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <AvatarStyle
      inline={inline}
      large={large}
      micro={micro}
      small={small}
      square={square}
      medium={!micro && !small && !large && !size}
      css={{
        backgroundImage: `url(${source})`,
        width: size,
        height: size,
      }}
    >
      {/** @ts-expect-error */}
      {loading && <Shimmer width="100%" height="100%" />}
    </AvatarStyle>
  );
};
Avatar.propTypes = propTypes;
