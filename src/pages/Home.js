import { Container, Grid } from "@chakra-ui/react"
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from '../components/Hero';
import Projects from '../components/Projects'
import Header from '../components/Header'

const Home = () => {
  return (
    <Container maxW="container.xl" bg="tomato">
      <Header />
      <Grid
        bg="blue.100"
        fontSize={["20px"]}
        templateColumns={{ base: "1fr"}}
        templateRows={{ base: "auto auto auto auto"}}
        templateAreas={{ 
          base: '"hero" "about" "projects" "contact"'
        }}
      >
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Grid>
    </Container>
  );
}

export default Home;