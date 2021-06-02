import { Box, Center, Flex, GridItem, Heading, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { FaCaretSquareDown, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link as ReactLink } from "react-router-dom";

const Hero = () => {
  return (
    <GridItem
      gridArea="hero"
      textColor="#f3f3f3"
    >
      {/* This hidden empty box helps me to keep the Hero Content in the center of the page layout */}
      <Box
        height="10%"
        visibility="hidden"
      >
        {/* Empty box*/}
      </Box>
      {/* Hero Section Content */}
      <Stack
        spacing={16}
        p={3}
        height="80%"
        justifyContent="center"
      >
        {/* Heading Text */}
        <Stack
          spacing={3}
          textAlign="center"
        >
          <Heading size="xl">Luciano Alcaraz</Heading>
          <Heading size="2xl">Desarrollador Front-end</Heading>
        </Stack>
        {/* Profile Icons */}
        <Flex
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {/* Link to Github */}
          <Link
            width={24}
            href="https://github.com/alstroemerieae"
          >
            <Center flexDirection="column">
              {/* Square container for Icon */}
              <Box
                p={3}
                borderRadius="lg"
                backgroundColor="#7e57c2"
              >
                <Icon
                  boxSize={12}
                  as={FaGithubSquare}
                />
              </Box>
              {/* Icon name */}
              <Text
                mt={1}
                fontWeight="600"
              >
                Github
              </Text>
            </Center>
          </Link>
          {/* Link to Linkedin */}
          <Link
            width={24}
            href="https://www.linkedin.com/in/luciano-alcaraz-39aa10189/"
          >
            <Center flexDirection="column">
              {/* Square container for Icon */}
              <Box
                p={3}
                borderRadius="lg"
                backgroundColor="#7e57c2"
              >
                <Icon
                  boxSize={12}
                  as={FaLinkedin}
                />
              </Box>
              {/* Icon name */}
              <Text
                mt={1}
                fontWeight="600"
              >
                Linkedin
              </Text>
            </Center>
          </Link>
        </Flex>
      </Stack>
      {/* Header Arrow Icon (Next Section) */}
      <Box height="10%">
        <Center height="100%">
          <Link href="#about">
            <Icon
              boxSize={12}
              as={FaCaretSquareDown}
            />
          </Link>
        </Center>
      </Box>
    </GridItem>
  );
}

export default Hero;