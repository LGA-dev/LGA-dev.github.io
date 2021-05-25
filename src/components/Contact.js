import { GridItem, Heading, Text, Stack, Box, SimpleGrid, Flex } from "@chakra-ui/layout";
import { Center, Icon, Link } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';


const Contact = () => {
  return (
    <GridItem gridArea="contact" bg="blue.100" w={"100%"} minH={"100vh"}>
      <Heading h="10%" textAlign="center">Contacto</Heading>
      <Stack h="90%" flexDirection="column" justifyContent="center" bg="yellow.300">
        <Text px={6} bg="green.100">
          Si crees que encajaría con tu equipo, 
          entonces no dudes en enviarme un correo o un mensaje en LinkedIn! 
        </Text>
        <Box bg="red.500" textColor="red.200" d="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center" >
          <Link mx={3} bg="green.500">
            <Center flexDirection="column">
              {/* Circle container */}
              <Box p={3} bg="cyan.500" borderRadius="100%">
                <Icon boxSize="3rem" as={ FaEnvelope } />
              </Box>
              <Text mx={3} bg="yellow.500">Email</Text>
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
    </GridItem>
  );
}

export default Contact;