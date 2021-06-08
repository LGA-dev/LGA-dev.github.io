import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const ProjectButton = ({icon, iconDescription}) => {
  return (
    <Box>
      <Button position="static">
        <Image w={6} mr={2} src={icon}></Image>
        {iconDescription}
      </Button>
    </Box>
  );
}

export default ProjectButton;