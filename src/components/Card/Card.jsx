import { styled, units } from "../../styles/theme";

export const Card = ({ children, css }) => {
  return <CardStyle css={css}>{children}</CardStyle>;
};

const CardStyle = styled("div", {
  width: "100%",
  borderBottomLeftRadius: units(0.6),
  borderBottomRightRadius: units(0.6),
  "-webkit-box-shadow": "0px 10px 13px rgba(17, 38, 146, 0.05)",
  "box-shadow": "0px 10px 13px rgba(17, 38, 146, 0.05)",
});
