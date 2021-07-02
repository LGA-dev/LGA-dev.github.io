import { Box, Flex, GridItem, Heading, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { FaFreeCodeCamp } from 'react-icons/fa';

const About = () => {
  return (
    <GridItem
      id="about"
      gridArea="about"
      // This padding top helps the title not to be hidden under the navbar
      pt={12}
      // This padding bottom helps to separate the about section of the projects section a bit
      pb={1}
      textAlign="left"
      background="isabelline"
      textColor="black"
    >
      {/* About Section Content */}
      <Stack
        spacing={6}
        p={6}
        mt={3}
        mx={3}
        borderRadius="lg"
        boxShadow="base"
        background="white"
      >
        <Heading
          as="u"
          textDecorationColor="primary.light"
          size="xl"
          pb={2}
          textAlign="center"
        >
          Sobre mí
        </Heading>
        <Stack>
          <Heading
            as="u"
            textDecorationColor="primary.light"
            size="lg"
          >
            Quién soy?
          </Heading>
          <Text>
            Hola, soy Luciano, un programador autodidacta.
            Un día decidí cambiar de profesión y dejar de ser reparador de computadoras.
            {/* Lo que no sabía entonces es que en el proceso de aprender a programar pronto descubriría una verdadera pasión. */}
          </Text>
          <Text>
            Mis recursos principales para aprender fueron videos de Youtube,
            libros, y diferentes cursos de Udemy.
          </Text>
          <Text>
            Otro gran recurso fué FreeCodeCamp, gracias a este pude consolidar mis conocimientos gracias a su curriculum 
            y a la creación de proyectos que asignan como prueba final.
            Podes ver mis certificaciones acá:
          </Text>
          <Box as="u">
            <Link href="https://www.freecodecamp.org/certification/lga-dev/responsive-web-design">
              <Flex alignItems="center">
                <Icon as={FaFreeCodeCamp} mr={2}></Icon>
                <Text>Responsive WebDesign</Text>
              </Flex>
            </Link>
            <Link href="https://www.freecodecamp.org/certification/lga-dev/javascript-algorithms-and-data-structures">
              <Flex alignItems="center">
                <Icon as={FaFreeCodeCamp} mr={2}></Icon>
                <Text>JavaScript Algorithms and DS</Text>
              </Flex>
            </Link>
            <Link href="https://www.freecodecamp.org/certification/lga-dev/front-end-libraries">
              <Flex alignItems="center">
                <Icon as={FaFreeCodeCamp} mr={2}></Icon>
                <Text>Front End Libraries</Text>
              </Flex>
            </Link>
          </Box>
        </Stack>
        <Stack>
          <Heading
            as="u"
            textDecorationColor="primary.light"
            size="lg"
          >
            A qué me dedico?
          </Heading>
          <Text>
            Tengo un año de experiencia desarrollando aplicaciones web y construyendo sitios web.
            Mi mundo gira en torno a React, es la tecnología que más me gusta y con la que trabajo a diario.
          </Text>
        </Stack>
      </Stack>
    </GridItem>
  );
}

export default About;