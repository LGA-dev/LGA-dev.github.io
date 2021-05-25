import { Box, Center, GridItem, Heading, Flex, Link, Stack, Text } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react"
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false)
  const handleOpen = (test) => {
    setIsOpen(test)
  }
  console.log(isOpen)
  return (
      <div>
        {isOpen ?
        
        <Flex ml="-1rem" py={2} px={5} overflow="hidden" position="fixed" bg="green.500" minW="100vw" minH="100vh" justifyContent="space-between" alignItems="start">
          {/* This hidden icon helps me to keep the links container in the center of the page layout*/}
          <Icon visibility="hidden" bg="blue.500" boxSize="2rem"/>
          <Stack spacing={10} bg="green.100" flexDirection="column" alignSelf="center">
            <Link size=""bg="red.500">
              <Heading>
                Sobre mi
              </Heading>
            </Link>
            <Link size=""bg="red.500">
              <Heading>
                Proyectos
              </Heading>
            </Link>
            <Link size=""bg="red.500">
              <Heading>
                Contacto
              </Heading>
            </Link>
          </Stack>
          <Icon bg="blue.500" boxSize="2rem" as={ FaTimes } onClick={() => handleOpen(false)}/>
        </Flex>
        
        : 
        
        <Flex ml="-1rem" py={2} px={5} position="fixed" bg="green.500" minW="100vw" justifyContent="space-between" alignItems="center">
          <Heading bg="red.500" size="md">Luciano Alcaraz</Heading>
          <Icon bg="blue.500" boxSize="2rem" as={ FaBars } onClick={() => handleOpen(true)}/>
        </Flex>
        
        }
      </div>
  );
}

export default Navbar;