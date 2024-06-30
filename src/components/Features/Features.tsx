import { features } from "@/constants/features";
import { Container } from "./styles";
import { Feature } from "./Feature";

export const Features = () => {
  return (
    <Container>
      {features.map((feature: TFeature) => 
        <Feature.Root>
          <Feature.Content position={feature.image.position}>
            <Feature.Info feature={feature} />

            {feature.topics && (
              <Feature.Topics topics={feature.topics} />
            )}

            {feature.statistics && (
              <Feature.Statistics statistics={feature.statistics} />
            )}

            <Feature.LearnMore color={feature.color} />
          </Feature.Content>

          <Feature.Image image={feature.image} />
        </Feature.Root>
      )}
    </Container>
  );
}
