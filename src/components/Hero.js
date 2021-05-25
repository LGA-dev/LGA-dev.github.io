import { Box, Center, GridItem, Heading, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { FaArrowAltCircleDown, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <div>
      <GridItem gridArea="hero" bg="blue.500" w={"100%"} h={"100vh"}>
        {/* Header Content */}
        <Stack spacing={8} h="90%" bg="yellow.100" justifyContent="center">
          {/* Text */}
          <Stack spacing={3} bg="blue.500" textAlign="center" textColor="red.200">
            <Heading size="xl">Luciano Alcaraz</Heading>
            <Heading size="2xl">Desarrollador Front-end</Heading>
          </Stack>
          {/* Icons */}
          <Box bg="red.500" textColor="red.200" d="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center" >
              <Link mx={3} bg="green.500">
                <Center flexDirection="column">
                  {/* Circle container */}
                  <Box p={3} bg="cyan.500" borderRadius="100%">
                    <Icon boxSize="3rem" as={ FaGithubSquare } />
                  </Box>
                  <Text mx={3} bg="yellow.500">Github</Text>
                </Center>
              </Link>
              <Link mx={3} bg="green.500">
                <Center flexDirection="column">
                  {/* Circle container */}
                  <Box p={3} bg="cyan.500" borderRadius="100%">
                    <Icon boxSize="3rem" as={ FaLinkedin } />
                  </Box>
                  <Text mx={3} bg="yellow.500">Linkedin</Text>
                </Center>
              </Link>
          </Box>
        </Stack>
        {/* Header Arrow */}
        <Box h="10%" bg="red.100">
          <Center h="100%">
            <Link>
              <Icon boxSize="3rem" as={ FaArrowAltCircleDown } />
            </Link>
          </Center>
        </Box>
      </GridItem>
    </div>
  );
}

export default Hero;