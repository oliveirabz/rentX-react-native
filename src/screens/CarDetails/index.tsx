// React
import React from "react";

// React Navigation
import { useNavigation, useRoute } from "@react-navigation/native";

// Types
import { CarDTO } from "../../dtos/CarDTO";

// Components
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";

// utils
import { getAccesoryIcon } from "../../utils/getAccesoryIcon";

// Styles
import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from "./styles";

interface Params {
  car: CarDTO;
}

export const CarDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;
  // this is to retrieve parameters that come from a route. It is also necessary type too.
  function handleConfirmRental() {
    navigation.navigate("Scheduling", { car });
  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>{`R$ ${car.rent.price}`}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map((accesory) => (
            <Accessory
              key={accesory.type}
              name={accesory.name}
              icon={getAccesoryIcon(accesory.type)} // put with as arrow function, it waits for a click
            />
          ))}
        </Accessories>

        <About>{car.about}</About>
      </Content>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
};
