import * as React from "react";
import { Text } from "../Text/Text";
import { Tooltip } from "../Tooltip/Tooltip";
import { Box, Container, Others, Row, SubItens } from "./styles";

export interface Segment {
  name: string;
}

export interface BoxGroupProps {
  large?: boolean;
  micro?: boolean;
  small?: boolean;
  square?: boolean;
  segments: Segment[];
  showItems?: number;
  smallText?: boolean;
  largeText?: boolean;
}

export const BoxGroup: React.FC<BoxGroupProps> = ({
  large,
  micro,
  small,
  square,
  segments,
  showItems = 4,
}) => {
  const doubleSegment = (
    showSegments: Segment[],
    segment: Segment,
    key: number
  ) => {
    return (
      <SubItens key={key}>
        <Box
          micro={micro}
          small={small}
          large={large}
          medium={!micro && !small && !large}
        >
          {segment.name}
        </Box>
        <Box
          micro={micro}
          small={small}
          large={large}
          medium={!micro && !small && !large}
        >
          {showSegments[key + 1].name}
        </Box>
      </SubItens>
    );
  };

  const onlySegment = (segment: Segment, key: number) => {
    return (
      <SubItens key={key}>
        <Box
          micro={micro}
          small={small}
          large={large}
          medium={!micro && !small && !large}
        >
          {segment.name}
        </Box>
      </SubItens>
    );
  };

  const renderSegments = () => {
    const showSegments = segments.filter((segment, count) => count < showItems);

    return showSegments.map((segment, key) => {
      if (key + 1 < showSegments.length && key % 2 === 0)
        return doubleSegment(showSegments, segment, key);
      else if (showSegments.length % 2 !== 0 && key === showSegments.length - 1)
        return onlySegment(segment, key);
      return null;
    });
  };

  return (
    <Container>
      <Row>{renderSegments()}</Row>
      {segments.length > showItems && (
        <Others>
          <Tooltip
            bottom
            text={segments
              .filter((segment, count) => count >= showItems)
              .map((segment, count) => (
                <Text
                  key={segment ? segment.name : count}
                  micro
                  center
                  inverse
                  truncate
                >
                  {segment && segment.name}
                </Text>
              ))}
          >
            <Text small muted bold>
              {`+${segments.length - showItems}`}
            </Text>
          </Tooltip>
        </Others>
      )}
    </Container>
  );
};
