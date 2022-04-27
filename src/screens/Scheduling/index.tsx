// React
import React from "react";
import { StatusBar } from "react-native";

// theme
import { useTheme } from "styled-components";

// assets
import ArrowSvg from "../../assets/arrow.svg";

// Components
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";

// Styles
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  DateValueWrapper,
  Content,
  Footer,
} from "./styles";

export const Scheduling = () => {
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={() => {}} color={theme.colors.shape} />

        <Title>
          Escolha uma data {"\n"} de início e {"\n"} fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValueWrapper>
              <DateValue selected={false}>18/06/2022</DateValue>
            </DateValueWrapper>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValueWrapper>
              <DateValue selected={false}>18/06/2022</DateValue>
            </DateValueWrapper>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content></Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
};
