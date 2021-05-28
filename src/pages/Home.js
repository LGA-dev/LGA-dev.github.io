import { Container, Grid, Box } from "@chakra-ui/react"
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from '../components/Hero';
import Projects from '../components/Projects'
import Header from '../components/Header'
import Pattern from '../assets/pattern.svg';

const Home = () => {
  return (
    <Box
      maxW="100vw"
      background="#5d37a8"
      backgroundImage={Pattern}
    >
      <Header />
      <Grid
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
    </Box>
  );
}

export default Home;