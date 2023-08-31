import React from "react";
import { Shimmer } from "../Shimmer/Shimmer";
import { Text } from "../Text/Text";
import { LabelColor, LabelContainer, ShimmerLabel } from "./styles";

export interface StatusIndicatorProps {
  color?: string;
  loading?: boolean;
  text?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  text,
  color,
  loading,
}) => (
  <LabelContainer>
    <LabelColor css={{ backgroundColor: color }}>
      {loading && (
        <ShimmerLabel>
          <Shimmer width="100%" height="100%" />
        </ShimmerLabel>
      )}
    </LabelColor>
    <Text small shimmerWidth="3rem" loading={loading}>
      {text}
    </Text>
  </LabelContainer>
);
