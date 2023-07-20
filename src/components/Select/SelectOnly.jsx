import { Fragment } from "react";
import ReactSelect from "react-select";
import Creatable from "react-select/creatable";
import Async from "react-select/async";
import AsyncSelect from "react-select/async";
import { font, input, units } from "../../styles/theme";
import { colors } from "@/styles/foundations/colors";
import {
  SelectOnlyPrefix,
  SelectOnlyStyle,
  SelectOnlySuffix,
  Separator,
} from "./styles";
import { Shimmer } from "../Shimmer/Shimmer";
import PropTypes from "prop-types";

const propTypes = {
  actionLink: PropTypes.string,
  autoCapitalize: PropTypes.bool,
  autoComplete: PropTypes.oneOf(["off", "on"]),
  autoCorrect: PropTypes.any,
  autoFocus: PropTypes.bool,
  book: PropTypes.bool,
  borderless: PropTypes.bool,
  cacheOptions: PropTypes.bool,
  clearable: PropTypes.bool,
  closeMenuOnSelect: PropTypes.bool,
  defaultOptions: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  defaultValue: PropTypes.object,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  floating: PropTypes.bool,
  focusBorderless: PropTypes.bool,
  getOptionLabel: PropTypes.func,
  getOptionValue: PropTypes.func,
  id: PropTypes.string,
  inline: PropTypes.bool,
  inputRef: PropTypes.func,
  insidePrefix: PropTypes.bool,
  insideSuffix: PropTypes.bool,
  invalid: PropTypes.bool,
  inverse: PropTypes.bool,
  loading: PropTypes.bool,
  loadOptions: PropTypes.func,
  large: PropTypes.bool,
  loadingMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  mask: PropTypes.func,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  noOptionsMessage: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onCreateOption: PropTypes.func,
  onFocus: PropTypes.func,
  onInputChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  prefix: PropTypes.object,
  prefixSeparator: PropTypes.bool,
  readOnly: PropTypes.bool,
  refForFocus: PropTypes.func,
  removeMargins: PropTypes.bool,
  removePrefixSpacing: PropTypes.bool,
  removeSuffixSpacing: PropTypes.bool,
  right: PropTypes.bool,
  shimmer: PropTypes.bool,
  showFakeValuePlaceholder: PropTypes.bool,
  showOverflowEllipsis: PropTypes.bool,
  small: PropTypes.bool,
  spellCheck: PropTypes.any,
  suffix: PropTypes.object,
  suffixSeparator: PropTypes.bool,
  suffixText: PropTypes.any,
  type: PropTypes.string,
  underlineFocus: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
};

const defaultProps = {
  options: [],
  placeholder: "Selecione...",
  clearable: false,
  closeMenuOnSelect: true,
  noOptionsMessage: "Sem opções...",
  loadingMessage: "Buscando...",
};

const selectStyles = {
  option: (base, state) => ({
    //...base,
    appearance: "none",
    borderWidth: 0,
    height: units(2),
    paddingTop: units(0.25),
    paddingRight: units(0.75),
    paddingBottom: units(0.25),
    paddingLeft: units(0.75),
    borderRadius: 4,
    fontSize: units(0.95),
    display: "flex",
    alignItems: "center",
    outline: 0,
    position: "relative",
    margin: 0,
    fontWeight: 500,
    fontFamily: font.default,
    cursor: "pointer",
    boxSizing: "border-box",
    background: state.isSelected
      ? "#7a96cc"
      : state.isFocused
      ? "#f5f5f5"
      : "#fff",
    color: state.isSelected ? "#fff" : "#001166",
    whiteSpace: "nowrap",

    "&:hover": {
      background: !state.isSelected && "#ecf2fb",
    },

    "&:active": {
      background: !state.isSelected && "#c5d2e3",
    },
  }),

  menu: () => ({
    position: "absolute",
    marginTop: units(0.25),
    top: "100%",
    backgroundColor: "#fff",
    boxShadow: `0 ${units(0.5)} ${units(0.75)} ${units(
      -0.45
    )} rgba(0, 0, 0, .2)`,
    padding: units(0.5),
    borderRadius: 3,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ecf2fb",
    zIndex: 2,
    minWidth: "100%",
    boxSizing: "border-box",
  }),

  menuList: (base) => ({
    ...base,
    padding: 0,
  }),

  control: () => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    flex: 1,
    flexWrap: "wrap",
    position: "relative",
    boxSizing: "border-box",
  }),

  container: () => ({
    width: "100%",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  dropdownIndicator: (base, state) => ({
    ...base,
    fill: "#9B9B9B",
    color: state.isFocused ? "#464646" : "#9B9B9B",
    opacity: 1,
    width: 32,

    "&:hover": {
      color: "#464646",
    },
  }),

  singleValue: (base) => ({
    ...base,
    transition: "opacity 300ms",
    color: "#464646",
    position: "static",
    transform: "none",
    maxWidth: "100%",
    order: 2,
  }),

  input: (base) => ({
    ...base,
    color: "#464646",
    margin: 0,
    padding: 0,
    order: 1,
  }),

  placeholder: (base) => ({
    ...base,
    color: input.placeholderColor,
    position: "static",
    transform: "none",
    order: 2,
  }),

  multiValue: (base) => ({
    ...base,
    background: "#ececec",
    color: "#464646",
  }),

  multiValueRemove: (base) => ({
    ...base,
    borderRadius: "50%",
    height: 18,
    width: 18,
    padding: 0,
    marginTop: 2,
    marginLeft: 4,
    marginRight: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#464646",
    fill: "#464646",

    "&:hover": {
      background: "rgba(0, 0, 0, .1)",
      color: "$464646",
      fill: "$464646",
    },
  }),

  multiValueLabel: (base) => ({
    ...base,
    color: "$464646",
  }),
};

export const SelectOnly = ({
  autocomplete,
  borderless,
  cacheOptions,
  clearable,
  closeMenuOnSelect,
  defaultOptions,
  defaultValue,
  disabled,
  flat,
  floating,
  focusBorderless,
  getOptionLabel,
  getOptionValue,
  inline,
  insidePrefix,
  insideSuffix,
  invalid,
  inverse,
  loading,
  loadingMessage,
  loadOptions,
  multiple,
  name,
  noOptionsMessage,
  onBlur,
  onChange,
  onCreateOption,
  onFocus,
  onInputChange,
  onKeyDown,
  options,
  placeholder,
  prefix,
  prefixSeparator,
  removeMargins,
  removePrefixSpacing,
  removeSuffixSpacing,
  shimmer,
  small,
  suffix,
  suffixSeparator,
  value,
}) => {
  const selectProps = {
    closeMenuOnSelect: closeMenuOnSelect,
    defaultValue: defaultValue,
    isDisabled: disabled,
    isLoading: loading,
    isClearable: clearable,
    isMulti: multiple,
    isSearchable: autocomplete,
    getOptionLabel: getOptionLabel,
    getOptionValue: getOptionValue,
    name: name,
    noOptionsMessage: () => noOptionsMessage,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    onInputChange: onInputChange,
    onKeyDown: onKeyDown,
    options: options,
    loadingMessage: () => loadingMessage,
    placeholder: placeholder,
    styles: selectStyles,
    theme: (theme) => ({
      ...theme,
      width: "100%",
      borderRadius: 0,
      colors: {
        ...colors,
        text: "$orangered",
        primary25: "#c5d2e3",
        primary: "#001166",
      },
    }),
    value: value,
  };

  const selectComponent = () => {
    if (!!loadOptions) {
      if (!!onCreateOption) {
        return (
          <AsyncSelect
            {...selectProps}
            cacheOptions={cacheOptions}
            defaultOptions={defaultOptions}
            formatCreateLabel={(value) => `Criar "${value}"`}
            isValidNewOption={(inputValue, selectValue, selectOptions) => {
              const isNotDuplicated = !selectOptions
                .map((option) => option.label)
                .includes(inputValue);
              const isNotEmpty = inputValue !== "";
              return isNotEmpty && isNotDuplicated;
            }}
            loadOptions={loadOptions}
            onCreateOption={onCreateOption}
          />
        );
      } else {
        return (
          <Async
            {...selectProps}
            cacheOptions={cacheOptions}
            defaultOptions={defaultOptions}
            loadOptions={loadOptions}
          />
        );
      }
    } else {
      if (!!onCreateOption) {
        return (
          <Creatable
            {...selectProps}
            formatCreateLabel={(value) => `Criar "${value}"`}
            isValidNewOption={(inputValue, selectValue, selectOptions) => {
              const isNotDuplicated = !selectOptions
                .map((option) => option.label)
                .includes(inputValue);
              const isNotEmpty = inputValue !== "";
              return isNotEmpty && isNotDuplicated;
            }}
            onCreateOption={onCreateOption}
          />
        );
      } else {
        return <ReactSelect {...selectProps} />;
      }
    }
  };
  return (
    <SelectOnlyStyle
      inline={inline}
      borderless={borderless}
      disabled={disabled}
      invalid={invalid}
      inverse={inverse}
      flat={flat}
      floating={floating}
      focusBorderless={focusBorderless}
      loading={loading}
      small={small}
      removeMargins={removeMargins}
      insidePrefix={insidePrefix}
      insideSuffix={insideSuffix}
    >
      {shimmer && (
        <ShimmerButton>
          <Shimmer width="100%" height="100%" />
        </ShimmerButton>
      )}
      {prefix && (
        <Fragment>
          <SelectOnlyPrefix removePrefixSpacing={removePrefixSpacing}>
            {prefix}
          </SelectOnlyPrefix>
          {prefixSeparator && (
            <Separator prefix removePrefixSpacing={removePrefixSpacing} />
          )}
        </Fragment>
      )}
      {selectComponent()}
      {suffix && (
        <Fragment>
          {suffixSeparator && (
            <Separator suffix removePrefixSpacing={removePrefixSpacing} />
          )}
          <SelectOnlySuffix removeSuffixSpacing={removeSuffixSpacing}>
            {suffix}
          </SelectOnlySuffix>
        </Fragment>
      )}
    </SelectOnlyStyle>
  );
};
SelectOnly.propTypes = propTypes;
SelectOnly.defaultProps = defaultProps;
