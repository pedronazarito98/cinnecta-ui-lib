import { TabCustomTrigger } from "./TabIndex";
import { styled } from "../../styles/theme";
import { Title } from "../Title/Title";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.any,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  onActivate: PropTypes.func,
  tabKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const defaultProps = {
  level: 3,
};

export const TabTitle = ({ children, level = 3, onActivate, tabKey }) => {
  return (
    <TabCustomTrigger>
      {({ activeTab, setActiveTab }) => (
        <TabStyle
          active={activeTab === tabKey}
          onClick={() => {
            setActiveTab(tabKey);
            onActivate && onActivate(tabKey);
          }}
        >
          <Title primary={activeTab === tabKey} level={level}>
            {children}
          </Title>
        </TabStyle>
      )}
    </TabCustomTrigger>
  );
};
TabTitle.propTypes = propTypes;
TabTitle.defaultProps = defaultProps;
const TabStyle = styled("div", {
  display: "inline-block",
  marginRight: 24,
  cursor: "pointer",
  opacity: 0.5,

  variants: {
    active: {
      true: {
        opacity: "1",
      },
    },
  },
});
