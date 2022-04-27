// React
import React from "react";
import { SvgProps } from "react-native-svg";

// Styles
import { Container, Name } from "./styles";

interface Props {
  name: string;
  icon: React.FC<SvgProps>;
}

export const Accessory = ({ name, icon: Icon }: Props) => {
  // icon: Icon --> make Icon a component!
  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{name}</Name>
    </Container>
  );
};
