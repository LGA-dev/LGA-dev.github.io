import { Flex, Heading, Link, Stack } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { useContext } from "react";
import { FaTimes } from 'react-icons/fa';
import { HandleOpenContext } from "../../context/HandleOpenContext";

const OpenNavbar = () => {
  const { handleOpen } = useContext(HandleOpenContext)

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
        <Link>
          <Heading>
            Sobre mi
          </Heading>
        </Link>
        <Link>
          <Heading>
            Proyectos
          </Heading>
        </Link>
        <Link>
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