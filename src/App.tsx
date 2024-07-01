import { Features } from "./components/Features/Features"
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { Testimonials } from "./components/Testimonials/Testimonials"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Features />

        <Testimonials />
      </main>

      <GlobalStyle />
    </>
  )
}

export default App
