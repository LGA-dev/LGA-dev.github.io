import { Box, Grid } from "@chakra-ui/react";
import Pattern from '../assets/pattern.svg';
import About from "../components/About";
import Contact from "../components/Contact";
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
// import theme from '../theme';

const Home = () => {
  return (
    <Box
      maxWidth="100vw"
      fontSize={["18px"]}
      backgroundColor="primary.dark"
      textColor="white"
      backgroundImage={Pattern}
    >
      <Header />
      <Grid
        templateColumns={{ base: "1fr" }}
        templateRows={{ base: "100vh auto auto auto" }}
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