import { Shimmer } from "../Shimmer/Shimmer";
import { Text } from "../Text/Text";
import { LabelColor, LabelContainer, ShimmerLabel } from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  color: PropTypes.string,
  loading: PropTypes.bool,
  text: PropTypes.string,
};
export const StatusIndicator = ({ text, color, loading }) => (
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
StatusIndicator.propTypes = propTypes;
