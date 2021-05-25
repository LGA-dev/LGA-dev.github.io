import { Button } from "@chakra-ui/button";
import { Link } from "@chakra-ui/layout";
import { Box, Heading, Text, Flex, Stack } from "@chakra-ui/layout";
import { Image, Icon } from "@chakra-ui/react"

const ProjectCard = ({projectName, projectDescription, imageURL, techStack}) => {
  // console.log(techStack)
  return (
    <Stack spacking={5} bg="white" borderWidth="1px" borderRadius="lg" boxShadow="md" p="6" mt="4" rounded="md">
      <Heading size="lg">{projectName}</Heading>
      <Image src={imageURL}/>
      <Text fontSize="md">{projectDescription}</Text>
      <Flex justifyContent="space-between" alignItems="center" bg="tomato">
        <Button>Demo online</Button>
        <Button>Código fuente</Button>
      </Flex>
      <Flex justifyContent="center">
          {techStack && techStack.map((tech) => {
            return <Icon boxSize="3rem" as={ tech }/>
          })}
        </Flex>
    </Stack>
  );
}

export default ProjectCard;