import { HeaderContainer, WrapperText } from "./styles";
import React from "react";

export interface HeaderProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Header: React.FC<HeaderProps> = ({ icon, title, description }) => {
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
