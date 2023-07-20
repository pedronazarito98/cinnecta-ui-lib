import { Text } from "../Text/Text";
import { TagSTyle } from "./styles";

import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
  css: PropTypes.node,
  noSpacing: PropTypes.bool,
  secondary: PropTypes.bool,
  marginLeft: PropTypes.bool,
  warning: PropTypes.bool,
  borderFull: PropTypes.bool,
  primary: PropTypes.bool,
  gray: PropTypes.bool,
};

export const Tag = ({
  children,
  css,
  noSpacing,
  secondary,
  marginLeft,
  warning,
  borderFull,
  primary,
  gray,
}) => {
  return (
    <>
      {!borderFull && (
        <TagSTyle
          secondary={secondary}
          css={css}
          primary={primary}
          noSpacing={noSpacing}
          marginLeft={marginLeft}
          warning={warning}
        >
          <Text secondary={secondary} primary={primary} micro>
            <span style={warning && { color: "$alert" }}>{children} </span>
          </Text>
        </TagSTyle>
      )}

      {borderFull && (
        <TagSTyle
          css={css}
          secondary={secondary}
          primary={primary}
          noSpacing={noSpacing}
          marginLeft={marginLeft}
          warning={warning}
          borderFull={borderFull}
        >
          <Text
            color={gray && "gray"}
            primary={secondary}
            secondary={primary}
            small
          >
            <span style={warning && { color: "$alert" }}>{children} </span>
          </Text>
          {/* <button onClick={() => onClick()}>
            <Icon name="error" muted smaller />
          </button> */}
        </TagSTyle>
      )}
    </>
  );
};
Tag.propTypes = propTypes;
