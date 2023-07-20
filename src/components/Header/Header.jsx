import { HeaderContainer, WrapperText } from "./styles";

export const Header = ({ icon, title, description }) => {
  return (
    <>
      <HeaderContainer>
        {icon}
        <WrapperText>
          <p>{title}</p>
          <span>{description}</span>
        </WrapperText>
      </HeaderContainer>
    </>
  );
};
