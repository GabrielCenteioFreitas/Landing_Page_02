import { ArrowIcon } from "@/components/ArrowIcon/ArrowButton";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton/PrimaryButton";
import { Container } from "./styles";

export const Copy = () => {
  return (
    <Container>
      <h1>
        Start monitoring your<br />
        website like a pro
      </h1>

      <p>
        Get a bird's eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!
      </p>

      <div>
        <PrimaryButton
          text="Try for free"
          textColor="#FFFFFF"
          bgColor="#4328EB"
        />

        <a href="#">
          View Pricing

          <ArrowIcon
            arrowColor="#4328EB"
            bgColor="#D5CFFA50"
          />
        </a>
      </div>
    </Container>
  );
}
