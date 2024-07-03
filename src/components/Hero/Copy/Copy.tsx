import { ArrowIcon } from "@/components/Icons/ArrowIcon/ArrowButton";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton/PrimaryButton";
import { Container } from "./styles";
import { colors } from "../../../constants/colors";

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
          textColor={colors.white}
          bgColor={colors.purple}
        />

        <a href="#">
          View Pricing

          <ArrowIcon
            arrowColor={colors.purple}
            bgColor={`${colors.purple}15`}
          />
        </a>
      </div>
    </Container>
  );
}
