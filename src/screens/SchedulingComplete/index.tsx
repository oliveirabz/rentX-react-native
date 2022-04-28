// React & React Native
import React from "react";
import { StatusBar } from "react-native";
import { useWindowDimensions } from "react-native";

// Components
import { ConfirmButton } from "../../components/ConfirmButton";

// assets
import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

// Styles
import { Container, Content, Title, Message, Footer } from "./styles";

export const SchedulingComplete = () => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você precisa ir Agora você precisa ir {"\n"}
          até a concessionária da RentX {"\n"}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" />
      </Footer>
    </Container>
  );
};
