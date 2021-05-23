import './App.css';
import { Container, Grid } from "@chakra-ui/react"

function App() {
  return (
    <Container maxW="container.xl" bg="tomato">
      <Grid
        bg="blue.100"
        templateColumns={{ base: "1fr"}}
        templateRows={{ base: "auto auto auto auto"}}
        templateAreas={{ 
          base: '"hero" "about" "projects" "contact"'
        }}
      >
        
      </Grid>
    </Container>
  );
}

export default App;
