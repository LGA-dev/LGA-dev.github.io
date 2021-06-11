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
      background="#f4f4f4"
    >
      {/* Projects Section Content */}
      <Stack
        spacing={6}
        p={3}
        mt={3}
        boxShadow="base"
        borderRadius="lg"
        background="#ffffff"
        // position="relative"
        // zIndex={5}
      >
        <Heading
          as="u"
          textDecorationColor="#7e57c2"
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
        <ProjectButtonsGroup/>
      </Stack>
      <ProjectCardsDeck activeStack={activeStack}/>
    </GridItem>
  );
}

export default Projects;