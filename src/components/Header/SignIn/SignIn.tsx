import UserPortrait from '@/assets/user-portrait.svg'
import { Container } from './styles';

export const SignIn = () => {
  return (
    <Container href="#">
      <img src={UserPortrait} alt="Foto de perfil" />

      <span>Sign In</span>
    </Container>
  );
}
