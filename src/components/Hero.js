import { Box, Center, Flex, GridItem, Heading, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { FaCaretSquareDown, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link as ReactLink } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";
import customTheme from '../customTheme';


const Hero = () => {
  return (
    <GridItem
      gridArea="hero"
      display="flex"
      flexDirection="column"
      alignItems="center"
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
        // bg="red.100"
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
          <ProfileIcon
            url={"https://github.com/alstroemerieae"}
            icon={FaGithubSquare}
            iconDescription={"Github"}
          />
          {/* Link to Linkedin */}
          <ProfileIcon
            url={"https://www.linkedin.com/in/luciano-alcaraz-39aa10189/"}
            icon={FaLinkedin}
            iconDescription={"Linkedin"}
          />
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