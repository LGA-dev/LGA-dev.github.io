import { Button } from "@chakra-ui/button";
import { GridItem, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs } from 'react-icons/fa';
import ProjectCard from "./ProjectCard";

const Projects = () => {
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
            <Button position="static">React</Button>
            <Button position="static">Javascript</Button>
            <Button position="static">HTML</Button>
            <Button position="static">CSS</Button>
            <Button position="static">Sass</Button>
            <Button position="static">Bootstrap</Button>
            <Button position="static">Node.js</Button>
            <Button position="static">Postgres</Button>
          </SimpleGrid>
        </Stack>
      </Stack>
      <ProjectCard
        projectName={"Project #1"}
        projectDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim ducimus et error consequuntur est?"}
        imageURL={"https://via.placeholder.com/1280x720"}
        techStack={[FaHtml5, FaCss3Alt, FaJs, FaBootstrap]}
      />
      <ProjectCard
        projectName={"Project #2"}
        projectDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corrupti qui numquam libero soluta."}
        imageURL={"https://via.placeholder.com/1280x720"}
        techStack={[FaHtml5, FaJs]}
      />
    </GridItem>
  );
}

export default Projects;