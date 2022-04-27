// React
import React from "react";

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
import { SchedulingDetails } from "./src/screens/SchedulingDetails";

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
      <SchedulingDetails />
    </ThemeProvider>
  );
}
