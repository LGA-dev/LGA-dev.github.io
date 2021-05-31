import { Button } from "@chakra-ui/button";
import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Icon, Image } from "@chakra-ui/react";

const ProjectCard = ({ projectName, projectDescription, imageURL, techStack }) => {
  return (
    <Stack
      spacing={6}
      p={3}
      mt={3}
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
      {/* Project stack icons */}
      <Flex justifyContent="center">
        {techStack && techStack.map((tech) => {
          return <Icon boxSize={12} as={tech} />
        })}
      </Flex>
      {/* Project links */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
      >
        <Button>Demo online</Button>
        <Button>Código fuente</Button>
      </Flex>
    </Stack>
  );
}

export default ProjectCard;