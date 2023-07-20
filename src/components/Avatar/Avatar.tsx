import * as React from "react";
import { Shimmer } from "../Shimmer/Shimmer";
import { AvatarStyle } from "./styles";

export interface AvatarProps {
  inline?: boolean;
  large?: boolean;
  loading?: boolean;
  micro?: boolean;
  size?: number;
  small?: boolean;
  source: string;
  square?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  inline,
  large,
  loading,
  micro,
  size,
  small,
  source,
  square,
}) => {
  return (
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
      {loading && <Shimmer width="100%" height="100%" />}
    </AvatarStyle>
  );
};
