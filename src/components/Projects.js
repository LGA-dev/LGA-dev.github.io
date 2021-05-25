import { Button, ButtonGroup } from "@chakra-ui/button";
import { GridItem, Heading, Text, Stack, Box, SimpleGrid } from "@chakra-ui/layout";
import ProjectCard from "./ProjectCard";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from 'react-icons/fa';


const Projects = () => {
  return (
    <GridItem gridArea="projects" bg="blue.100" w={"100%"} minH={"100vh"}>
      <Heading textAlign="center">Proyectos</Heading>
      <Text bg="green.100">
        A continuación podes encontrar todos mis proyectos terminados. 
        Aca podes ver todas las tecnologias con las cuales trabajo.
        Selecciona una tecnología para ver sólo los proyectos en los que se ha utilizado.
      </Text>
      <SimpleGrid p={2} columns={[2,3]} spacing={2} bg="orange.300">
        <Button>React</Button>
        <Button>Javascript</Button>
        <Button>HTML</Button>
        <Button>CSS</Button>
        <Button>Sass</Button>
        <Button>Bootstrap</Button>
        <Button>Node.js</Button>
        <Button>Postgres</Button>
      </SimpleGrid>
      <ProjectCard
        projectName={"Project #1"}
        projectDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim ducimus et error consequuntur est?"}
        imageURL={"https://bit.ly/dan-abramov"}
        techStack={[FaHtml5, FaCss3Alt, FaJs, FaBootstrap]}
      />
      <ProjectCard
        projectName={"Project #2"}
        projectDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corrupti qui numquam libero soluta."}
        imageURL={"https://pluralsight.imgix.net/author/lg/kyle-simpson-v1.jpg"}
        techStack={[FaHtml5, FaJs]}
      />
    </GridItem>
  );
}

export default Projects;