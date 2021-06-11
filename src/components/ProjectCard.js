import { Button } from "@chakra-ui/button";
import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const ProjectCard = ({ projectName, projectDescription, imageURL, techStackIcons }) => {
  return (
    <Stack
      spacing={6}
      p={3}
      mt={6}
      boxShadow="base"
      borderRadius="lg"
      background="#ffffff"
    >
      {/* Project name */}
      <Heading size="lg">{projectName}</Heading>
      {/* Project image */}
      <Image src={imageURL} />
      {/* Project description */}
      <Text>{projectDescription}</Text>
      {/* Project tech stack icons */}
      <Flex justifyContent="center">
        {
          techStackIcons.map(techIcon => (
            <Image w={12} mr={2} src={techIcon} />
          ))
        }
      </Flex>
      {/* Project links */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
      >
        <Button position="static">Demo online</Button>
        <Button position="static">Código fuente</Button>
      </Flex>
    </Stack>
  );
}

export default ProjectCard;