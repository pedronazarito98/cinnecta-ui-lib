import React, { ReactNode } from "react";
import { LabelStyle, TableRow } from "./styles";

export interface LabelProps {
  children: ReactNode;
  htmlFor?: string;
  inline?: boolean;
  table?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  inline,
  table,
}) => {
  return (
    <LabelStyle inline={inline} table={table} htmlFor={htmlFor}>
      {table ? <TableRow>{children}</TableRow> : children}
    </LabelStyle>
  );
};
