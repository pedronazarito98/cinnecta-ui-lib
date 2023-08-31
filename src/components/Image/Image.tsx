import React, { FC } from "react";
import { Shimmer } from "../Shimmer/Shimmer";
import { ImageContainer, ImageStyle, LoadingContainer } from "./styles";

interface ImageProps {
  inline?: boolean;
  inside?: boolean;
  loading?: boolean;
  aspectRatio?: number;
  rectangular?: boolean;
  source?: string;
  transparent?: boolean;
  width?: number | string;
}

const Image: FC<ImageProps> = ({
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

export default Image;
