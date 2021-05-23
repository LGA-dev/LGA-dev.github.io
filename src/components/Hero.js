import { GridItem, Box, Heading, Center, Flex, Stack, Text, Link } from "@chakra-ui/react"
// Remove this later
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons' 
import { Icon } from "@chakra-ui/react"
import { FaGithubSquare, FaLinkedin, FaArrowAltCircleDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <div>
      <GridItem gridArea="hero" bg="blue.500" w={"100%"} h={"100vh"}>
        {/* TODO: Create Navbar component */}
        {/* Header Navbar */}
        <Center h="10%" bg="green.100">
          <Link bg="green.500" mx={3}>Sobre mi</Link>
          <Link bg="green.500" mx={3}>Proyectos</Link>
          <Link bg="green.500" mx={3}>Contacto</Link>
        </Center>
        {/* Header Content */}
        <Stack spacing={8} h="80%" bg="yellow.100" justifyContent="center">
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