import { Container } from "./styles";
import Google from "@/assets/logos/google.svg";
import Slack from "@/assets/logos/slack.svg";
import Trustpilot from "@/assets/logos/trustpilot.svg";
import CNN from "@/assets/logos/cnn.svg";
import Clutch from "@/assets/logos/clutch.svg";

export const Companies = () => {
  return (
    <Container>
      <span>Trusted by these companies</span>

      <div>
        <img src={Google} alt="Google Logo" />
        <img src={Slack} alt="Slack Logo" />
        <img src={Trustpilot} alt="Trustpilot Logo" />
        <img src={CNN} alt="CNN Logo" />
        <img src={Clutch} alt="Clutch Logo" />
      </div>
    </Container>
  );
}
