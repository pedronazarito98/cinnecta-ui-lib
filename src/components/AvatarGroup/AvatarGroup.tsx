import * as React from "react";
import { Avatar } from "../Avatar/Avatar";
import { Text } from "../Text/Text";
import { Tooltip } from "../Tooltip/Tooltip";
import { AvatarStyle, Container, Others } from "./styles";

export interface App {
  name: string;
  icon: string;
}

export interface AvatarGroupProps {
  large?: boolean;
  micro?: boolean;
  small?: boolean;
  square?: boolean;
  apps?: App[];
  showItems?: number;
  messageTop?: boolean;
  messageBottom?: boolean;
  messageLeft?: boolean;
  messageRight?: boolean;
  rawCounter?: number;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  large,
  micro,
  small,
  square,
  apps = [], // Definindo valor padrão como array vazio
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

      {!rawCounter && apps.length > showItems && (
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
              {`+${apps.length - showItems}`}
            </Text>
          </Tooltip>
        </Others>
      )}
    </Container>
  );
};
