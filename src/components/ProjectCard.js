import { Button } from "@chakra-ui/button";
import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Icon, Image } from "@chakra-ui/react";

const ProjectCard = ({projectName, projectDescription, imageURL, techStack}) => {
  // console.log(techStack)
  return (
    <Stack
      spacing={6}
      p={6}
      mt={3}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="base"
      rounded="md"
      background="#ffffff"
    >
      <Heading size="lg">{projectName}</Heading>
      <Image src={imageURL}/>
      <Text fontSize="md">{projectDescription}</Text>
      <Flex justifyContent="center">
        {techStack && techStack.map((tech) => {
          return <Icon boxSize={12} as={ tech }/>
        })}
      </Flex>
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