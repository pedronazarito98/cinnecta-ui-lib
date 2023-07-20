import { Text } from "../Text/Text";
import { Tooltip } from "../Tooltip/Tooltip";
import { Box, Container, Others, Row, SubItens } from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  large: PropTypes.bool,
  micro: PropTypes.bool,
  small: PropTypes.bool,
  square: PropTypes.string,
  segments: PropTypes.array,
  showItems: PropTypes.number,
  smallText: PropTypes.bool,
  largeText: PropTypes.bool,
};

export const BoxGroup = ({
  large,
  micro,
  small,
  square,
  segments,
  showItems = 4,
}) => {
  const doubleSegment = (showSegments, segment, key) => {
    return (
      <SubItens key={key}>
        <Box
          square={square}
          micro={micro}
          small={small}
          large={large}
          medium={!micro && !small && !large}
        >
          {segment.name}
        </Box>
        <Box
          square={square}
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

  const onlySegment = (segment, key) => {
    return (
      <SubItens key={key}>
        <Box
          square={square}
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
      if (key + 1 < showSegments.length && key % 2 == 0)
        return doubleSegment(showSegments, segment, key);
      else if (showSegments.length % 2 != 0 && key == showSegments.length - 1)
        return onlySegment(segment, key);
      return false;
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
BoxGroup.propTypes = propTypes;
