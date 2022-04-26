// React
import React from "react";

// React Native
import { StatusBar } from "react-native";

// fontsize
import { RFValue } from "react-native-responsive-fontsize";

// Components
import { Car } from "../../components/Car/index";

// assets
import Logo from "../../assets/logo.svg";

// Styles
import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";

export const Home = () => {
  const carData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
  };

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

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item: any): any => String(item)}
        renderItem={({ item }) => <Car data={carData} />}
      />
    </Container>
  );
};
