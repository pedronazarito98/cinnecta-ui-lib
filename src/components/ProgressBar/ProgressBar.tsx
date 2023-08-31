import React from "react";
import {
  ContainerProgressBar,
  InsideProgressBar,
  OutsideProgressBar,
  ProgressionStyles,
} from "./styles";

export interface ProgressBarProps {
  large?: boolean;
  loading?: boolean;
  micro?: boolean;
  small?: boolean;
  square?: boolean;
  progression: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
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
