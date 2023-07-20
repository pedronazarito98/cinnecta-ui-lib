import { useState, Fragment } from "react";

import _ from "lodash";
import moment from "moment";

import { Responsive } from "../Responsive/Responsive";

import { Dropdown } from "../Dropdown/Dropdown";
import { Grid } from "../Grid/Grid";
import { Cell } from "../Cell/Cell";
import { Visibility } from "../Visibility/Visibility";
import { CheckboxOnly } from "../CheckboxOnly/CheckboxOnly";
import { InputOnly } from "../InputOnly/InputOnly";
import { Icon } from "../Icon/Icon";
import { Spacing } from "../Spacing/Spacing";
import { SummaryItem } from "../SummaryItem/SummaryItem";

import {
  ListStyle,
  SummaryHeaderFilter,
  SummaryListHeader,
  SummaryListStyle,
} from "./styles";
import { ThrottledTextInput } from "../ThrottledTextInput/ThrottledTextInput";
import PropTypes from "prop-types";
import { Text } from "../Text/Text";

const propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  dateFormat: PropTypes.string,
  divided: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  maxResults: PropTypes.number,
  noResultComponent: PropTypes.object,
  customActions: PropTypes.any,
  sortOptions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  filterFor: PropTypes.arrayOf(PropTypes.oneOf(["title", "description"])),
  clean: PropTypes.bool,
  onItemAction: PropTypes.func,
  paginate: PropTypes.bool,
  icons: PropTypes.arrayOf(PropTypes.string),
  withFilter: PropTypes.bool,
  sortable: PropTypes.bool,
  selectableItems: PropTypes.bool,
  hideComboButton: PropTypes.bool,
};

const defaultProps = {
  data: [],
  dateFormat: "YYYY-MM-DD hh:mm:ss",
  maxResults: 0,
  noResultComponent: <Text>Nenhum resultado...</Text>,
  searchPlaceholder: "buscar...",
  sortOptions: [
    { label: "Data de criação", value: "createdAt" },
    { label: "Última atualização", value: "updatedAt" },
    { label: "Título", value: "title" },
  ],
  filterFor: ["title", "description"],
};

export const SummaryList = ({
  data,
  loading,
  divided,
  searchPlaceholder,
  noResultComponent,
  maxResults,
  customActions,
  sortOptions,
  clean,
  paginate,
  onItemAction,
  icons,
  withFilter,
  selectableItems,
  sortable,
  hideComboButton,
  ...props
}) => {
  const [checked, setChecked] = useState([]);
  const [sort, setSort] = useState(sortOptions ? sortOptions[0] : null);
  const [filterString, setFilterString] = useState("");

  const filterList = (data) => {
    const { filterFor, withFilter } = props;
    if (
      withFilter &&
      Array.isArray(filterFor) &&
      filterFor.length > 0 &&
      filterString.length > 2
    ) {
      return data.filter((item) => {
        return filterFor.some((filter) => {
          try {
            return (
              item[filter].toLowerCase().search(filterString.toLowerCase()) !==
              -1
            );
          } catch (e) {
            return false;
          }
        });
      });
    }

    return data;
  };

  const sortList = (data) => {
    if (
      sort?.value &&
      data &&
      Array.isArray(data) &&
      data.length > 0 &&
      data[0][sort.value] != null
    ) {
      const isTime = moment(data[0][sort.value], props.dateFormat).isValid();

      return _.orderBy(
        data,
        (item) => {
          return isTime
            ? moment(item[sort.value], props.dateFormat).valueOf()
            : item[sort.value];
        },
        isTime ? ["desc"] : ["asc"]
      );
    }

    return data;
  };

  const toggleItem = (id) => {
    let newChecked = [...checked];

    if (newChecked.includes(id)) {
      newChecked.splice(newChecked.indexOf(id), 1);
    } else {
      newChecked.push(id);
    }

    setChecked(newChecked);
  };

  const listPlaceholder = loading ? (
    <Fragment>
      {[...Array(maxResults ? maxResults : 10)].map((e, i) => (
        <SummaryItem divided={divided} key={i} loading />
      ))}
    </Fragment>
  ) : (
    <div>{noResultComponent}</div>
  );

  return (
    <SummaryListStyle clean={clean} edit={checked.length > 0}>
      {(withFilter || sortable || selectableItems) && (
        <SummaryListHeader>
          <Grid resetSpacing>
            {selectableItems && (
              <Cell shrink>
                <CheckboxOnly />
              </Cell>
            )}
            {withFilter && (
              <Responsive showFor="large">
                <Cell auto>
                  <SummaryHeaderFilter>
                    <ThrottledTextInput
                      debouncedOnChange={(value) => setFilterString(value)}
                      debounceTimeoutMs={500}
                    >
                      <InputOnly
                        name="filterInput"
                        placeholder={searchPlaceholder}
                        shimmer={loading}
                        prefix={<Icon name="search" />}
                        removeMargins
                      />
                    </ThrottledTextInput>
                  </SummaryHeaderFilter>
                </Cell>
              </Responsive>
            )}
            {customActions && (
              <Responsive showFor="large">
                <Cell shrink>{customActions}</Cell>
              </Responsive>
            )}
            {sortable && (
              <Cell shrink>
                <span>
                  <Text small inline loading={loading}>
                    Ordernar por:
                  </Text>
                  <Spacing left={0.1} inline>
                    <Dropdown
                      button
                      label={sort && sort?.label}
                      options={sortOptions}
                      onSelectOption={(value) => setSort(value)}
                      shimmer={loading}
                      loading={loading}
                      closeOnSelect
                      inverse
                      compact
                      noSpacing
                    />
                  </Spacing>
                </span>
              </Cell>
            )}
          </Grid>
        </SummaryListHeader>
      )}
      <ListStyle>
        {data.length < 1
          ? listPlaceholder
          : sortList(filterList(data)).map((item) => {
              if (item) {
                return (
                  <SummaryItem
                    key={item.id}
                    item={loading ? {} : item}
                    clean={clean}
                    divided={divided}
                    checked={checked.includes(item.id)}
                    onAction={(action) => onItemAction(action, item.id)}
                    onChange={() => toggleItem(item.id)}
                    loading={loading}
                    selectable={selectableItems}
                    hideComboButton={hideComboButton}
                  >
                    <Fragment>
                      {item.custom}
                      {icons && !item.custom ? (
                        <Fragment>
                          {item.icons.map((icon) => (
                            <i className={`icon-${icon}`} key={icon} />
                          ))}
                        </Fragment>
                      ) : null}
                    </Fragment>
                  </SummaryItem>
                );
              } else {
                return false;
              }
            })}
      </ListStyle>
      <Visibility unmount showIf={paginate}>
        paginação
      </Visibility>
    </SummaryListStyle>
  );
};

SummaryList.propTypes = propTypes;
SummaryList.defaultProps = defaultProps;
