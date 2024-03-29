// React Native
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

// Styles
import { Container, Title } from "./styles";

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
}

export const Button = ({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  ...rest
}: Props) => {
  const theme = useTheme();

  return (
    <Container
      {...rest}
      color={color}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
};
