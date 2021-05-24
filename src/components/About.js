import { GridItem, Heading, Link, Stack, Text } from "@chakra-ui/layout";

const About = () => {
  return (
    <GridItem gridArea="about" bg="orange" w={"100%"} minH={"100vh"} textAlign="left">
      <Heading textAlign="center">Sobre mi</Heading>
      <Stack spacing={4} bg="blue.100" mt={4}>
        <Heading size="lg">Quién soy</Heading>
        <Text bg="green.100">
          Hola, soy Luciano, un programador autodidacta.
          Un día decidí cambiar de profesión y dejar de ser reparador de computadoras.
          Lo que no sabía entonces es que en el proceso de aprender a programar pronto descubriría una verdadera pasión.
        </Text>
        {/* TODO: Remove below in mobile */}
        <Text bg="green.100">
          Actualmente estoy siguiendo el curriculum de FreeCodeCamp, podes visitar mi perfil <Link to="https://www.freecodecamp.org/lga-dev">acá</Link>
        </Text>
        {/* TODO: Remove below in mobile */}
        <Stack bg="green.100">
          <Text>Certificaciones obtenidas:</Text>
          <Link to="https://www.freecodecamp.org/certification/lga-dev/responsive-web-design">Responsive WebDesign</Link>
          <Link to="https://www.freecodecamp.org/certification/lga-dev/javascript-algorithms-and-data-structures">JavaScript Algorithms and Data Structures</Link>
          <Link to="https://www.freecodecamp.org/certification/lga-dev/front-end-libraries">Front End Libraries (React)</Link>
        </Stack>
        <Heading size="lg">A qué me dedico?</Heading>
        <Text bg="green.100">
          Tengo un año de experiencia desarrollando aplicaciones web, 
          construyendo sitios web.
          Mi mundo gira en torno a React, es la tecnología que más me gusta y con la que trabajo a diario.
        </Text>
      </Stack>
    </GridItem>
  );
}

export default About;