// Styles
import { Container, Title } from "./styles";

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
}

export const Button = ({ title, color, onPress, ...rest }: Props) => {
  return (
    <Container {...rest} color={color} onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};
