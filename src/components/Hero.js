import { Box, Center, Flex, GridItem, Heading, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { FaCaretSquareDown, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import Pattern from '../assets/pattern.svg';

const Hero = () => {
  return (
    <GridItem
      gridArea="hero"
      width={"100%"}
      height={"100vh"}
      background="#5d37a8"
      backgroundImage={Pattern}
    >
      {/* This hidden box helps me to keep the Header Content in the center of the page layout */}
      <Box height={"10%"} visibility="hidden">
        
      </Box>
      {/* Header Content */}
      <Stack
        spacing={16}
        height={"80%"}
        justifyContent="center"
      >
        {/* Heading Text */}
        <Stack
          spacing={3}
          textAlign="center"
          textColor="#f3f3f3"
        >
          <Heading size="xl">Luciano Alcaraz</Heading>
          <Heading size="2xl">Desarrollador Front-end</Heading>
        </Stack>
        {/* Profile Icons */}
        <Flex
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="center"
          textColor="#f3f3f3"
        >
          <Link width={24}>
            <Center flexDirection="column">
              {/* Circle container for Icon */}
              <Box
                p={3}
                borderRadius="20%"
                bg="#7e57c2"
              >
                <Icon
                  boxSize={12}
                  as={ FaGithubSquare }
                />
              </Box>
              <Text>Github</Text>
            </Center>
          </Link>
          <Link width={24}>
            <Center flexDirection="column">
              {/* Circle container for Icon */}
              <Box
                p={3}
                borderRadius="20%"
                bg="#7e57c2"
              >
                <Icon
                  boxSize={12}
                  as={ FaLinkedin }
                />
              </Box>
              <Text>Linkedin</Text>
            </Center>
          </Link>
        </Flex>
      </Stack>
      {/* Header Arrow Icon */}
      <Box height={"10%"} textColor="#f3f3f3">
        <Center height={"100%"}>
          <Link>
            <Icon
              boxSize={12}
              as={ FaCaretSquareDown }
            />
          </Link>
        </Center>
      </Box>
    </GridItem>
  );
}

export default Hero;