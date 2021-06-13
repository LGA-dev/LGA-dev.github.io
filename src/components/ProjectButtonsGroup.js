import { Flex, Heading, SimpleGrid, Stack, HStack, Box } from "@chakra-ui/layout";
import bootstrapIcon from '../assets/icons/bootstrap.svg';
import chakraIcon from '../assets/icons/chakra.png';
import cssIcon from '../assets/icons/css.svg';
import htmlIcon from '../assets/icons/html.svg';
import jsIcon from '../assets/icons/javascript.svg';
import reactIcon from '../assets/icons/react.svg';
import reduxIcon from '../assets/icons/redux.svg';
import sassIcon from '../assets/icons/sass.svg';
import gulpIcon from '../assets/icons/gulp.png'
import ProjectButton from "./ProjectButton";

const ProjectButtonsGroup = () => {
  return (
    <Stack>
      <Heading size="lg">Tecnologías</Heading>
      <Flex wrap="wrap">
        <ProjectButton icon={htmlIcon} iconDescription={"HTML5"}/>
        <ProjectButton icon={jsIcon} iconDescription={"Javascript"}/>
        <ProjectButton icon={cssIcon} iconDescription={"CSS3"}/>
        <ProjectButton icon={sassIcon} iconDescription={"Sass"}/>
        <ProjectButton icon={bootstrapIcon} iconDescription={"Bootstrap5"}/>
        <ProjectButton icon={chakraIcon} iconDescription={"ChakraUI"}/>
        <ProjectButton icon={reactIcon} iconDescription={"React"}/>
        <ProjectButton icon={reduxIcon} iconDescription={"Redux"}/>
        <ProjectButton icon={gulpIcon} iconDescription={"Gulp"}/>
      </Flex>
    </Stack>
  );
}

export default ProjectButtonsGroup;