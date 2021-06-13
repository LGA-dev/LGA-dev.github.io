import { Box, Flex, GridItem, Heading, Stack, Text } from "@chakra-ui/layout";
import { Center, Icon, Link } from "@chakra-ui/react";
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import ProfileIcon from "./ProfileIcon";

const Contact = () => {
  return (
    <GridItem
      id="contact"
      gridArea="contact"
      py={12}
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
          backgroundColor="primary.base"
        >
          Si crees que encajaría con tu equipo,
          entonces no dudes en enviarme un correo o un mensaje en LinkedIn!
        </Text>
        <Flex
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {/* Link to Email */}
          <ProfileIcon
            url={"mailto:LGA-dev@hotmail.com"}
            icon={FaEnvelope}
            iconDescription={"Email"}
          />
          {/* Link to Linkedin */}
          <ProfileIcon
            url={"https://www.linkedin.com/in/luciano-alcaraz-39aa10189/"}
            icon={FaLinkedin}
            iconDescription={"Linkedin"}
          />
        </Flex>
      </Stack>
    </GridItem>
  );
}

export default Contact;