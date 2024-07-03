import {
  Container,
  LogoMenuContainer,
  CopyrightSocialsContainer,
} from "./styles";
import Twitter from '@/assets/icons/twitter.svg';
import Facebook from '@/assets/icons/facebook.svg';
import Feed from '@/assets/icons/feed.svg';
import Logo from '@/assets/logo.svg';
import { footerLinks } from "../../constants/footerLinks";

export const Footer = () => {
  return (
    <Container>
      <LogoMenuContainer>
        <a href="#">
          <img src={Logo} alt="Logo" />

          <h2>YOUR SITE</h2>
        </a>

        <div>
          {footerLinks.map(footerLink => 
            <div>
              <h3>{footerLink.title}</h3>

              {footerLink.topics.map(topic =>
                <a href="#">
                  {topic}
                </a>
              )}
            </div>
          )}
        </div>
      </LogoMenuContainer>

      <CopyrightSocialsContainer>
        <p>
          © Copyright 2024. Your Site. All rights reserved.
        </p>

        <div>
          <a href="#">
            <img src={Twitter} alt="Twitter Logo" />
          </a>

          <a href="#">
            <img src={Facebook} alt="Facebook Logo" />
          </a>

          <a href="#">
            <img src={Feed} alt="Feed Logo" />
          </a>
        </div>
      </CopyrightSocialsContainer>
    </Container>
  );
}
