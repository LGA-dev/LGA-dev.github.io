import { GridItem, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { useContext } from "react";
import bootstrapIcon from '../assets/icons/bootstrap.svg';
import chakraIcon from '../assets/icons/chakra.png';
import cssIcon from '../assets/icons/css.svg';
import htmlIcon from '../assets/icons/html.svg';
import jsIcon from '../assets/icons/javascript.svg';
import nodeIcon from '../assets/icons/nodejs.svg';
import postgresIcon from '../assets/icons/postgres.svg';
import reactIcon from '../assets/icons/react.svg';
import reduxIcon from '../assets/icons/redux.svg';
import sassIcon from '../assets/icons/sass.svg';
import { HandlerContext } from "../context/HandlerContext";
import ProjectButton from "./ProjectButton";
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
        <Stack>
          <Heading size="lg">Tecnologías</Heading>
          <SimpleGrid
            p={2}
            columns={[2, 3]}
            spacing={2}
          >
            <ProjectButton icon={htmlIcon} iconDescription={"HTML5"}/>
            <ProjectButton icon={jsIcon} iconDescription={"Javascript"}/>
            <ProjectButton icon={cssIcon} iconDescription={"CSS3"}/>
            <ProjectButton icon={sassIcon} iconDescription={"Sass"}/>
            <ProjectButton icon={bootstrapIcon} iconDescription={"Bootstrap5"}/>
            <ProjectButton icon={chakraIcon} iconDescription={"ChakraUI"}/>
            <ProjectButton icon={reactIcon} iconDescription={"React"}/>
            <ProjectButton icon={reduxIcon} iconDescription={"Redux"}/>
            <ProjectButton icon={nodeIcon} iconDescription={"Node.js"}/>
            <ProjectButton icon={postgresIcon} iconDescription={"PostgreSQL"}/>
          </SimpleGrid>
        </Stack>
      </Stack>
      <ProjectCardsDeck activeStack={activeStack}/>
    </GridItem>
  );
}

export default Projects;