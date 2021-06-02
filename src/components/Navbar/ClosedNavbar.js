import { Flex, Heading } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import { useContext } from "react";
import { FaBars } from 'react-icons/fa';
import { HandleOpenContext } from "../../context/HandleOpenContext";

const ClosedNavbar = () => {
  const { handleOpen } = useContext(HandleOpenContext)

  return (
    <Flex
      // ml={-4}
      py={2}
      px={5}
      position="fixed"
      height={12}
      minW="100vw"
      justifyContent="space-between"
      alignItems="center"
      background="#7e57c2"
      textColor="#f3f3f3"
    >
      <Heading size="md">Luciano Alcaraz</Heading>
      <Icon
        as={ FaBars }
        boxSize={8}
        onClick={() => handleOpen(true)}
      />
    </Flex>
  );
}

export default ClosedNavbar;