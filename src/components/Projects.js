import { GridItem, Heading, Stack, Text } from "@chakra-ui/layout";
import { useContext } from "react";
import { HandlerContext } from "../context/HandlerContext";
import ProjectButtonsGroup from "./ProjectButtonsGroup";
import ProjectCardsDeck from "./ProjectCardsDeck";

const Projects = () => {
  const { activeStack } = useContext(HandlerContext)

  return (
    <GridItem
      id="projects"
      gridArea="projects"
      // This padding top helps the title not to be hidden under the navbar
      pt={12}
      // This padding bottom helps to separate the projects section of the contact section a bit
      pb={6}
      // my={6}
      textAlign="left"
      background="isabelline"
      textColor="black"
    >
      {/* Projects Section Content */}
      <Stack
        spacing={6}
        p={3}
        mt={3}
        boxShadow="base"
        borderRadius="lg"
        background="white"
        // position="relative"
        // zIndex={5}
      >
        <Heading
          as="u"
          textDecorationColor="primary.light"
          py={3}
          textAlign="center"
        >
          Proyectos
        </Heading>
        <Text>
          A continuación podes encontrar todos mis proyectos terminados.
          Aca podes ver todas las tecnologias con las cuales trabajo.
          Selecciona una tecnología para ver sólo los proyectos en los que se ha utilizado.
        </Text>
        {/* Buttons to filter projects by tech */}
        <ProjectButtonsGroup/>
      </Stack>
      <ProjectCardsDeck activeStack={activeStack}/>
    </GridItem>
  );
}

export default Projects;