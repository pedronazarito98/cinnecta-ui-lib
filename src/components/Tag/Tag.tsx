import React from "react";
import { Text } from "../Text/Text";
import { TagSTyle } from "./styles";

export interface TagProps {
  children: React.ReactNode;
  css?: React.CSSProperties;
  noSpacing?: boolean;
  secondary?: boolean;
  marginLeft?: boolean;
  warning?: boolean;
  borderFull?: boolean;
  primary?: boolean;
  gray?: boolean;
}

export const Tag: React.FC<TagProps> = ({
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
          primary={primary}
          noSpacing={noSpacing}
          marginLeft={marginLeft}
          warning={warning}
        >
          <Text secondary={secondary} primary={primary} micro>
            <span style={warning ? { color: "$alert" } : {}}>{children} </span>
          </Text>
        </TagSTyle>
      )}

      {borderFull && (
        <TagSTyle
          secondary={secondary}
          primary={primary}
          noSpacing={noSpacing}
          marginLeft={marginLeft}
          warning={warning}
          borderFull={borderFull}
        >
          <Text
            color={gray ? "gray" : undefined}
            primary={secondary}
            secondary={primary}
            small
          >
            <span style={warning ? { color: "$alert" } : {}}>{children} </span>
          </Text>
          {/* <button onClick={() => onClick()}>
            <Icon name="error" muted smaller />
          </button> */}
        </TagSTyle>
      )}
    </>
  );
};
