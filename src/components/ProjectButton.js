import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { useContext } from "react";
import { HandlerContext } from "../context/HandlerContext";

const ProjectButton = ({icon, iconDescription}) => {
  const { handleActiveStack } = useContext(HandlerContext)

  return (
    <Box>
      <Button m={1} position="static" onClick={() => handleActiveStack(iconDescription)}>
        <Image w={6} mr={2} src={icon}></Image>
        {iconDescription}
      </Button>
    </Box>
  );
}

export default ProjectButton;