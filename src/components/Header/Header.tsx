import { AccountLinksContainer, Container, MenuContainer } from "./styles";

import Logo from "@/assets/logo.svg";
import { links } from "@/constants/links";
import { SignIn } from "./SignIn/SignIn";

export const Header = () => {
  return (
    <Container>
      <MenuContainer>
        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>

        <nav>
          <ul>
            {links.map((link: TLink) => 
              <li key={link.label}>
                <a href={link.href}>
                  {link.label}
                </a>
              </li>
            )}
          </ul>
        </nav>
      </MenuContainer>

      <AccountLinksContainer>
        <a href="#">
          Open an Account
        </a>
        
        <SignIn />
      </AccountLinksContainer>
    </Container>
  );
}
