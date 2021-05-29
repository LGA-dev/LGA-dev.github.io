import { Button } from "@chakra-ui/button";
import { GridItem, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs } from 'react-icons/fa';
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <GridItem
      gridArea="projects"
      width={"100%"}
      minHeight={"100vh"}
      textAlign="left"
      background="#f4f4f4"
      // background="tomato"
      textColor="#111"
      py={12}
    >
      <Heading textAlign="center">Proyectos</Heading>
      <Stack
        spacing={6}
        mt={3}
        p={3}
        boxShadow="base"
        rounded="md"
        background="#ffffff"
      >
        <Text>
          A continuación podes encontrar todos mis proyectos terminados. 
          Aca podes ver todas las tecnologias con las cuales trabajo.
          Selecciona una tecnología para ver sólo los proyectos en los que se ha utilizado.
        </Text>
        <SimpleGrid
          p={2}
          columns={[2,3]}
          spacing={2}
        >
          <Button>React</Button>
          <Button>Javascript</Button>
          <Button>HTML</Button>
          <Button>CSS</Button>
          <Button>Sass</Button>
          <Button>Bootstrap</Button>
          <Button>Node.js</Button>
          <Button>Postgres</Button>
        </SimpleGrid>
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