import { LoaderBall, LoaderStyles } from "./styles";

export interface LoaderProps {
  small?: boolean;
  large?: boolean;
  secondary?: boolean;
  primary?: boolean;
  mono?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({
  small,
  large,
  secondary,
  primary,
  mono,
}) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <LoaderStyles>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <LoaderBall
      mono={mono}
      large={large}
      small={small}
      primary={primary}
      secondary={secondary}
    />
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <LoaderBall
      second
      mono={mono}
      small={small}
      large={large}
      primary={primary}
      secondary={secondary}
    />
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <LoaderBall
      third
      mono={mono}
      small={small}
      large={large}
      primary={primary}
      secondary={secondary}
    />
  </LoaderStyles>
);
