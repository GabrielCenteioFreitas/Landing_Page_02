import { useEffect, useState } from "react";
import { Testimonial } from "./Testimonial/Testimonial";
import {
  Container,
  Heading,
  TestimonialsContainer,
  TestimonialsRowContainer,
} from "./styles";

export type Client = {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  }
}

export const Testimonials = () => {
  const [clients, setClients] = useState<Client[] | null>(null)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://randomuser.me/api/?results=9"
      )
      const data = await response.json()

      if (!data || data.results.length === 0) return

      setClients(data.results)
    }

    fetchData()
  }, [])

  if (!clients) return null

  return (
    <Container>
      <Heading>
        <h2>Testimonials</h2>

        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
      </Heading>

      <TestimonialsContainer>
        {Array.from({ length: 3}).map((_, i) => 
          <TestimonialsRowContainer number={i}>
            {clients.slice(i*3, (i+1)*3).map(client => 
              <Testimonial client={client} />
            )}
          </TestimonialsRowContainer>
        )}
      </TestimonialsContainer>
    </Container>
  );
}
