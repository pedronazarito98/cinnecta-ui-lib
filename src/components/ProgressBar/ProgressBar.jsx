import {
  ContainerProgressBar,
  InsideProgressBar,
  OutsideProgressBar,
  ProgressionStyles,
} from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  large: PropTypes.bool,
  loading: PropTypes.bool,
  micro: PropTypes.bool,
  small: PropTypes.bool,
  square: PropTypes.bool,
  progression: PropTypes.number,
};
export const ProgressBar = ({
  large,
  loading,
  micro,
  small,
  square,
  progression,
}) => {
  const getProgression = () => (progression <= 7 ? 7 : progression);

  return (
    <ContainerProgressBar>
      <ProgressionStyles>{`${progression}%`}</ProgressionStyles>
      <OutsideProgressBar
        large={large}
        micro={micro}
        small={small}
        square={square}
        medium={!micro && !small && !large}
      >
        <InsideProgressBar
          square={square}
          loading={loading}
          css={{ width: `${getProgression()}%` }}
        />
      </OutsideProgressBar>
    </ContainerProgressBar>
  );
};
ProgressBar.propTypes = propTypes;
