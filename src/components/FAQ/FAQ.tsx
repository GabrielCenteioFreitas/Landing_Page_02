import { colors } from "../../constants/colors";
import { questions } from "../../constants/questions";
import { Container } from "./styles";

export const FAQ = () => {
  return (
    <Container color={colors.pink}>
      <div>
        <h3>
          Frequently Asked Questions
        </h3>

        <h2>
          Let’s clarify some of your questions
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </p>
      </div>

      <div>
        {questions.map(question => 
          <details>
            <summary>
              {question}
            </summary>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
          </details>
        )}
      </div>
    </Container>
  );
}
