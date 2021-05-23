import './App.css';
import { Container, Grid } from "@chakra-ui/react"
import Hero from './components/Hero';

function App() {
  return (
    <Container maxW="container.xl" bg="tomato">
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
      </Grid>
    </Container>
  );
}

export default App;
