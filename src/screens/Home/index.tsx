// React
import React from "react";

// React Native
import { StatusBar } from "react-native";

// fontsize
import { RFValue } from "react-native-responsive-fontsize";

// assets
import Logo from "../../assets/logo.svg";

// Styles
import { Container, Header, TotalCars, HeaderContent } from "./styles";

export const Home = () => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
    </Container>
  );
};
