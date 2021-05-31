import { Box, Flex, GridItem, Heading, Stack, Text } from "@chakra-ui/layout";
import { Center, Icon, Link } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <GridItem
      gridArea="contact"
      py={12}
      textColor="#f3f3f3"
    >
      <Heading textAlign="center">Contacto</Heading>
      {/* Contact Section Content */}
      <Stack
        spacing={16}
        p={3}
        // Check if there are problems with this height at higher resolutions
        height="100%"
        justifyContent="center"
        textAlign="center"
      >
        <Text
          p={3}
          borderRadius="lg"
          bg="#7e57c2"
        >
          Si crees que encajaría con tu equipo,
          entonces no dudes en enviarme un correo o un mensaje en LinkedIn!
        </Text>
        <Flex
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Link width={24}>
            <Center flexDirection="column">
              {/* Square container for Icon */}
              <Box
                p={3}
                borderRadius="lg"
                bg="#7e57c2"
              >
                <Icon
                  boxSize={12}
                  as={FaEnvelope}
                />
              </Box>
              {/* Icon name */}
              <Text
                mt={1}
                fontWeight="600"
              >
                Email
              </Text>
            </Center>
          </Link>
          <Link width={24}>
            <Center flexDirection="column">
              {/* Square container for Icon */}
              <Box
                p={3}
                borderRadius="20%"
                bg="#7e57c2"
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
    </GridItem>
  );
}

export default Contact;