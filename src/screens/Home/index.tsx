// function back, parameter p function navigation e tipagem da nova atualização v6


// React
import React, { useEffect, useState } from "react";

// React Native
import { StatusBar } from "react-native";

// React Navigator
import { useNavigation } from "@react-navigation/native";

// services
import api from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";

// fontsize
import { RFValue } from "react-native-responsive-fontsize";

// Components
import { Car } from "../../components/Car/index";
import { Load } from "../../components/Load";

// assets
import Logo from "../../assets/logo.svg";

// Styles
import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";

interface NavigationProps {
  navigate: (
    screen: string,
    carObject: {
      car: CarDTO;
    }
  ) => void;
}

export const Home = () => {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<NavigationProps>();

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

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

      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
    </Container>
  );
};
