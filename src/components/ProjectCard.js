import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Image, Link } from "@chakra-ui/react";

const ProjectCard = ({ projectName, projectDescription, imageURL, techStackIcons, projectDemo, projectRepo }) => {
  return (
    <Stack
      spacing={6}
      p={6}
      mt={6}
      mx={3}
      boxShadow="base"
      borderRadius="lg"
      background="white"
      // background="red.100"
      justifyContent="space-between"
      w={{md:"95%", xl: "400px"}}
    >
      {/* Project name */}
      <Heading
          as="u"
          textDecorationColor="primary.light"
          pb={2}
          textAlign="center"
        >
          {projectName}
        </Heading>
      {/* Project image */}
      <Image border="2px solid" borderColor="primary.light" src={imageURL} />
      {/* Project description */}
      <Box minHeight={{base:0, md:60}}>
        <Text>{projectDescription}</Text>
      </Box>
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
        <Link href={projectDemo}>
          <Button position="static">Demo online</Button>
        </Link>
        <Link href={projectRepo}>
          <Button position="static">Código fuente</Button>
        </Link>
      </Flex>
    </Stack>
  );
}

export default ProjectCard;