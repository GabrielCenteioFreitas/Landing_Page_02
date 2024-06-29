import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
      </main>

      <GlobalStyle />
    </>
  )
}

export default App
