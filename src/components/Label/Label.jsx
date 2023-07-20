import { LabelStyle, TableRow } from "./styles";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.any,
  htmlFor: PropTypes.string,
  inline: PropTypes.bool,
  table: PropTypes.bool,
};

export const Label = ({ children, htmlFor, inline, table }) => {
  return (
    <LabelStyle inline={inline} table={table} htmlFor={htmlFor}>
      {table ? <TableRow>{children}</TableRow> : children}
    </LabelStyle>
  );
};
Label.propTypes = propTypes;
