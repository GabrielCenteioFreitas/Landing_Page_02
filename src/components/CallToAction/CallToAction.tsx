import { colors } from "../../constants/colors";
import { PrimaryButton } from "../Buttons/PrimaryButton/PrimaryButton";
import { ArrowIcon } from "../Icons/ArrowIcon/ArrowButton";
import { Container } from "./styles";

export const CallToAction = () => {
  return (
    <Container>
      <h2>
        Monitor your website like a pro
      </h2>

      <p>
        Join over 800+ happy site owners boosting productivity and efficiency!
      </p>

      <div>
        <PrimaryButton
          text="Try for free"
          bgColor={colors.white}
          hoverBgColor={colors.lightPink}
          textColor={colors.pink}
        />

        <a href="#">
          Contact Sales
          <ArrowIcon
            arrowColor={colors.pink}
            bgColor={colors.white}
          />
        </a>
      </div>
    </Container>
  );
}
