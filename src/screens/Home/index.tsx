// React
import React from "react";

// React Native
import { StatusBar } from "react-native";

// React Navigator
import { useNavigation } from "@react-navigation/native";

// fontsize
import { RFValue } from "react-native-responsive-fontsize";

// Components
import { Car } from "../../components/Car/index";

// assets
import Logo from "../../assets/logo.svg";

// Styles
import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<any, "Home">;

export const Home = () => {
  const navigation = useNavigation<any>();

  const carData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
  };

  function handleCarDetails() {
    navigation.navigate({
      key: "CarDetails",
    });
  }

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
        onPress={handleCarDetails}
      />
    </Container>
  );
};
