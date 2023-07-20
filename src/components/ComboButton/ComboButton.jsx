import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";
import { Loader } from "../Loader/Loader";
import {
  ComboButtonContent,
  ComboButtonLoader,
  ComboButtonSeparator,
  ComboButtonStyle,
} from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  mainOption: PropTypes.object,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.any,
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  block: PropTypes.bool,
  compact: PropTypes.bool,
  inverse: PropTypes.bool,
  mono: PropTypes.bool,
  noSpacing: PropTypes.bool,
  shimmer: PropTypes.bool,
  soft: PropTypes.bool,
  primary: PropTypes.bool,
  rectangular: PropTypes.bool,
  secondary: PropTypes.bool,
  short: PropTypes.bool,
  transparent: PropTypes.bool,
  closeOnSelect: PropTypes.bool,
};

const defaultProps = {
  mainOption: { label: "", value: null },
  options: [],
};

export const ComboButton = ({
  mainOption,
  disabled,
  loading,
  options,
  children,
  onClick,
  fullWidth,
  block,
  compact,
  inverse,
  mono,
  noSpacing,
  shimmer,
  soft,
  primary,
  rectangular,
  secondary,
  transparent,
  closeOnSelect,
  ...props
}) => {
  return (
    <ComboButtonStyle
      {...props}
      loading={loading}
      disabled={disabled}
      fullWidth={fullWidth}
      block={block}
      inverse={inverse}
      mono={mono}
      noSpacing={noSpacing}
      shimmer={shimmer}
      soft={soft}
      primary={primary}
      rectangular={rectangular}
      secondary={secondary}
      transparent={transparent}
    >
      <ComboButtonContent
        loading={loading}
        shimmer={shimmer}
        rectangular={rectangular}
      >
        <Button
          noSpacing
          short
          fullWidth={block || fullWidth}
          compact={compact}
          mono={mono}
          soft={soft}
          primary={primary}
          rectangular={rectangular}
          secondary={secondary}
          transparent={transparent}
          inverse={inverse}
          noBorder={mono || secondary || inverse}
          onClick={() => onClick && onClick(mainOption.value)}
        >
          {mainOption.label}
        </Button>
        <ComboButtonSeparator
          dark={inverse || transparent || soft}
          mono={mono}
          secondary={secondary}
        />
        <Dropdown
          combo
          button
          noSpacing
          short
          compact
          mono={mono}
          soft={soft}
          primary={primary}
          rectangular={rectangular}
          secondary={secondary}
          transparent={transparent}
          inverse={inverse}
          noBorder={mono || secondary || inverse}
          onSelectOption={(option) => onClick && onClick(option.value)}
          options={options}
          closeOnSelect={closeOnSelect}
        >
          {children}
        </Dropdown>
      </ComboButtonContent>
      {loading && (
        <ComboButtonLoader shimmer={shimmer} rectangular={rectangular}>
          {!shimmer && (
            <Loader
              small
              primary={inverse && soft}
              secondary={secondary}
              mono={mono}
            />
          )}
        </ComboButtonLoader>
      )}
    </ComboButtonStyle>
  );
};
ComboButton.propTypes = propTypes;
ComboButton.defaultProps = defaultProps;
