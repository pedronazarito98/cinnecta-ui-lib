import { Loader } from "../Loader/Loader";
import { FlexLoading, FlexRow, FlexTable, TableContainer } from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  loading: PropTypes.bool,
  header: PropTypes.array,
  body: PropTypes.array,
};

export const Table = ({ loading, header, body }) => {
  return (
    <TableContainer>
      <FlexTable>
        {header.map((column, key) => {
          return <FlexRow key={key}>{column}</FlexRow>;
        })}
      </FlexTable>

      {loading ? (
        <FlexLoading>
          <Loader primary={true} />
        </FlexLoading>
      ) : (
        body?.map((line, key) => {
          return (
            <FlexTable key={key}>
              {line.map((column, i) => {
                return <FlexRow key={i}>{column}</FlexRow>;
              })}
            </FlexTable>
          );
        })
      )}
    </TableContainer>
  );
};
Table.propTypes = propTypes;
