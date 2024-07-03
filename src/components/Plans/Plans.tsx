import { plans } from "@/constants/plans";
import {
  Container,
  HeadingContainer,
  PlansContainer,
} from "./styles";
import { Plan } from "./Plan/Plan";

export const Plans = () => {
  return (
    <Container>
      <HeadingContainer>
        <h2>
          Flexible plans for you
        </h2>

        <span>
          No hidden fees!
        </span>
      </HeadingContainer>

      <PlansContainer>
        {plans.map((plan: TPlan) => 
          <Plan plan={plan} />
        )}
      </PlansContainer>
    </Container>
  );
}
