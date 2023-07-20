import { Shimmer } from "../Shimmer/Shimmer";
import { ImageContainer, ImageStyle, LoadingContainer } from "./styles";

import PropTypes from "prop-types";

const propTypes = {
  inline: PropTypes.bool,
  inside: PropTypes.bool,
  loading: PropTypes.bool,
  aspectRatio: PropTypes.number,
  rectangular: PropTypes.bool,
  source: PropTypes.string,
  transparent: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  aspectRatio: 1,
  width: "100%",
};

export const Image = ({
  inline,
  inside,
  loading,
  aspectRatio = 1,
  rectangular,
  source,
  transparent,
  width,
}) => {
  return (
    <ImageContainer
      inline={inline}
      rectangular={rectangular}
      css={{ width: width }}
    >
      <ImageStyle
        contain={inside}
        cover={!inside}
        transparent={transparent}
        opaque={!transparent}
        css={{
          paddingTop: `${aspectRatio * 100}%`,
          backgroundImage: source && `url(${source})`,
        }}
      />
      {loading && (
        <LoadingContainer>
          <Shimmer width="100%" height="100%" />
        </LoadingContainer>
      )}
    </ImageContainer>
  );
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;
