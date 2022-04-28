// React
import * as React from "react";
import 'react-native-gesture-handler'
// import { NavigationContainer } from '@react-navigation/native';

// Fonts
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

// Screens
import { Routes } from "./src/Routes"; 

// Expo
import AppLoading from "expo-app-loading";

// Theme
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
