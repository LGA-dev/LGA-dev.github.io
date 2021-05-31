import { GridItem, Heading, Stack, Text } from "@chakra-ui/layout";

const About = () => {
  return (
    <GridItem
      gridArea="about"
      py={6}
      textAlign="left"
      textColor="#111"
      background="#f4f4f4"
    >
      <Heading textAlign="center">Sobre mi</Heading>
      {/* About Section Content */}
      <Stack
        spacing={6}
        p={3}
        mt={3}
        borderRadius="lg"
        boxShadow="base"
        background="#ffffff"
      >
        <Stack>
          <Heading size="lg">Quién soy</Heading>
          <Text>
            Hola, soy Luciano, un programador autodidacta.
            Un día decidí cambiar de profesión y dejar de ser reparador de computadoras.
            Lo que no sabía entonces es que en el proceso de aprender a programar pronto descubriría una verdadera pasión.
          </Text>
        </Stack>
        <Stack>
          <Heading size="lg">A qué me dedico?</Heading>
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