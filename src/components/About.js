import { GridItem, Heading, Stack, Text } from "@chakra-ui/layout";

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
        p={3}
        mt={3}
        borderRadius="lg"
        boxShadow="base"
        background="white"
      >
        <Heading
          as="u"
          textDecorationColor="primary.light"
          size="xl"
          py={3}
          textAlign="center"
        >
          Sobre mi
        </Heading>
        <Stack>
          <Heading
            as="u"
            textDecorationColor="primary.light"
            size="lg"
          >
            Quién soy
          </Heading>
          <Text>
            Hola, soy Luciano, un programador autodidacta.
            Un día decidí cambiar de profesión y dejar de ser reparador de computadoras.
            Lo que no sabía entonces es que en el proceso de aprender a programar pronto descubriría una verdadera pasión.
          </Text>
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