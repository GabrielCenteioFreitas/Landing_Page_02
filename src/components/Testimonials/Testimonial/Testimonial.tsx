import { Client } from "../Testimonials";
import { Container } from "./styles";
import Google from "@/assets/brands/google.png"
import Twitter from "@/assets/brands/twitter.png"
import Facebook from "@/assets/brands/facebook.png"
import AppStore from "@/assets/brands/app-store.png"

interface TestimonialProps {
  client: Client;
}

export const Testimonial = ({ client }: TestimonialProps) => {
  const fullName = `${client.name.first} ${client.name.last}`
  const brandsImages = [Google, Twitter, Facebook, AppStore]
  const brandImage = brandsImages[Math.floor(Math.random() * 4)]

  return (
    <Container>
      <div>
        <div>
          <img src={client.picture.large} alt={fullName}/>

          <div>
            <span>{fullName}</span>
            <span>CEO of Biffco Enterprises Ltd.</span>
          </div>
        </div>

        <img src={brandImage}/>
      </div>

      <p>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet? Ut enim ad minima veniam, quis nostrum exercitationem ullam.
      </p>
    </Container>
  );
}
