import { Container } from "./styles";
import MobilePreview from '@/assets/preview-mobile.png'
import WebPreview from '@/assets/preview-web.png'

export const Preview = () => {
  return (
    <Container>
      <img src={WebPreview} alt="Preview Web" />

      <img src={MobilePreview} alt="Preview Mobile" />
    </Container>
  );
}
