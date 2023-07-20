import { Avatar } from "../Avatar/Avatar";
import { Text } from "../Text/Text";
import { Tooltip } from "../Tooltip/Tooltip";
import { AvatarStyle, Container, Others } from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  large: PropTypes.bool,
  micro: PropTypes.bool,
  small: PropTypes.bool,
  square: PropTypes.string,
  apps: PropTypes.array,
  showItems: PropTypes.number,
  messageTop: PropTypes.bool,
  messageBottom: PropTypes.bool,
  messageLeft: PropTypes.bool,
  messageRight: PropTypes.bool,
  rawCounter: PropTypes.number,
};

export const AvatarGroup = ({
  large,
  micro,
  small,
  square,
  apps,
  showItems = 4,
  messageTop,
  messageBottom,
  messageRight,
  messageLeft,
  rawCounter,
}) => {
  return (
    <Container>
      {apps
        ?.filter((app, count) => count < showItems)
        ?.map((app, key) => {
          return (
            <AvatarStyle key={key} squareAvatar={square}>
              <Tooltip
                top={messageTop}
                left={messageLeft}
                right={messageRight}
                bottom={messageBottom}
                text={app && app?.name}
              >
                <Avatar
                  source={app?.icon}
                  small={small}
                  micro={micro}
                  large={large}
                  square={square}
                />
              </Tooltip>
            </AvatarStyle>
          );
        })}

      {rawCounter && (
        <Others>
          <Text small muted bold>{`+${rawCounter?.toLocaleString(
            "pt-BR"
          )}`}</Text>
        </Others>
      )}

      {!rawCounter && apps?.length > showItems && (
        <Others>
          <Tooltip
            top={messageTop}
            left={messageLeft}
            right={messageRight}
            bottom={messageBottom}
            text={apps
              ?.filter((app, count) => count >= showItems)
              ?.map((app, count) => (
                <Text
                  key={app ? app?.name : count}
                  micro
                  center
                  inverse
                  truncate
                >
                  {app && app?.name}
                </Text>
              ))}
          >
            <Text small muted bold>
              {`+${apps?.length - showItems}`}
            </Text>
          </Tooltip>
        </Others>
      )}
    </Container>
  );
};
AvatarGroup.propTypes = propTypes;
