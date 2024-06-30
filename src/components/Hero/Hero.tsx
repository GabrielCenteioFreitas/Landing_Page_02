import { Companies } from "./Companies/Companies";
import { Copy } from "./Copy/Copy";
import { Preview } from "./Preview/Preview";
import { Container, GradientsContainer } from "./styles";
import Gradient1 from "@/assets/gradients/gradient-1.png"
import Gradient2 from "@/assets/gradients/gradient-2.png"

export const Hero = () => {
  return (
    <Container>
      <Copy />

      <Preview />

      <Companies />

      <GradientsContainer>
        <img src={Gradient1} />
        <img src={Gradient2} />
      </GradientsContainer>
    </Container>
  );
}
