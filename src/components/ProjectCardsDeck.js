import { Box } from "@chakra-ui/layout";
import CSS3 from '../assets/icons/css.svg';
import HTML5 from '../assets/icons/html.svg';
import Javascript from '../assets/icons/javascript.svg';
import ProjectCard from "./ProjectCard";

const ProjectCardsDeck = ({activeStack}) => {
  // techStack property is being used to filter the projects by tech and is not being passed into the ProjectCard component
  // techStackIcons property is used to pass an array of icons/images to ProjectCard component
  const initialCards = [
    {
      projectName: "Project #1",
      projectDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim ducimus et error consequuntur est?",
      imageURL: "https://via.placeholder.com/1280x720",
      techStack: ["HTML5", "CSS3"],
      techStackIcons: [HTML5, CSS3],
      projectDemo: "https://www.google.com",
      projectRepo: "https://www.github.com"
    },
    {
      projectName: "Project #2",
      projectDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim ducimus et error consequuntur est?",
      imageURL: "https://via.placeholder.com/1280x720",
      techStack: ["HTML5", "Javascript"],
      techStackIcons: [HTML5, Javascript],
      projectDemo: "https://www.google.com",
      projectRepo: "https://www.github.com"
    }
  ]
  
  const filteredCards = initialCards.filter(card => !activeStack || card.techStack.includes(activeStack));
  
  console.log("Current active stack");
  console.log(activeStack);
  console.log("Initial cards");
  console.log(initialCards);
  console.log("Filtered cards");
  console.log(filteredCards);
  
  return (
    <Box>
      <h2>{activeStack}</h2>
      {filteredCards.map(card => (
        <ProjectCard
          projectName={card.projectName}
          projectDescription={card.projectDescription}
          imageURL={card.imageURL}
          techStackIcons={card.techStackIcons}
          projectDemo={card.projectDemo}
          projectRepo={card.projectRepo}
        />
      ))}
    </Box>
  );
}

export default ProjectCardsDeck;