import { Flex, Heading, Link, Stack } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { useContext } from "react";
import { FaTimes } from 'react-icons/fa';
import { HandlerContext } from "../../context/HandlerContext";

const OpenNavbar = () => {
  const { handleOpen } = useContext(HandlerContext)

  return (
    <Flex
      // ml={-4}
      py={2}
      px={5}
      position="fixed"
      minW="100vw"
      minH="100vh"
      justifyContent="space-between"
      alignItems="start"
      background="#7e57c2"
      textColor="#f3f3f3"
      >
      {/* This hidden Icon helps me to keep the links container in the center of the page layout*/}
      <Icon
        visibility="hidden"
        boxSize={8}
      />
      {/* Mobile Navbar links */}
      <Stack
        spacing={10}
        flexDirection="column"
        alignSelf="center"
      >
        <Link
          href="#about"
          onClick={() => handleOpen(false)}
        >
          <Heading>
            Sobre mi
          </Heading>
        </Link>
        <Link
          href="#projects"
          onClick={() => handleOpen(false)}
        >
          <Heading>
            Proyectos
          </Heading>
        </Link>
        <Link
          href="#contact"
          onClick={() => handleOpen(false)}
        >
          <Heading>
            Contacto
          </Heading>
        </Link>
      </Stack>
      {/* Close menu Icon */}
      <Icon
        as={ FaTimes }
        boxSize={8}
        onClick={() => handleOpen(false)}
      />
    </Flex>
  );
}

export default OpenNavbar;