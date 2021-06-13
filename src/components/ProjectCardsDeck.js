import { Box } from "@chakra-ui/layout";
import CSS3 from '../assets/icons/css.svg';
import HTML5 from '../assets/icons/html.svg';
import Javascript from '../assets/icons/javascript.svg';
import React from '../assets/icons/react.svg';
import Sass from '../assets/icons/sass.svg';
import ChakraUI from '../assets/icons/chakra.png';
import Redux from '../assets/icons/redux.svg';
import Bootstrap5 from '../assets/icons/bootstrap.svg';
import Gulp from '../assets/icons/gulp.png'
import ProjectCard from "./ProjectCard";
import screenshotProjectManager from '../assets/images/project-react-sass.png';
import screenshotSomosMasONG from '../assets/images/project-somosmas-ong.png';
import screenshotBlog from '../assets/images/project-blog.png'
import screenshotBudgetManager from '../assets/images/project-budget-manager.png'
import screenshotBrewRight from '../assets/images/project-brew-right.png'
import screenshotOnlineLearning from '../assets/images/project-online-learning.png'

const ProjectCardsDeck = ({activeStack}) => {
  // techStack property is being used to filter the projects by tech and is not being passed into the ProjectCard component
  // techStackIcons property is used to pass an array of icons/images to ProjectCard component
  const initialCards = [
    {
      projectName: "Project Manager",
      projectDescription: "Esta aplicación fue creada para volver a poner en práctica mis conocimientos de Sass. Se puede crear, leer, actualizar y eliminar proyectos. También se le puede asignar proyectos a diferentes personas y darle un estado de activo o inactivo a cada proyecto.",
      imageURL: screenshotProjectManager,
      techStack: ["HTML5", "Sass", "React"],
      techStackIcons: [HTML5, Sass, React],
      projectDemo: "https://react-sass-client.herokuapp.com/",
      projectRepo: "https://github.com/alstroemerieae/react-sass"
    },
    {
      projectName: "ONG - Somos más",
      projectDescription: "Este sitio web fue creado en conjunto con el grupo 29 de Alkemy. A lo largo de un mes fuimos desarrollando e intercambiando ideas sobre el proyecto. Incluye registro/login y un backoffice para cambiar el contenido. También aprendimos a usar JIRA y Clockify para organizarnos con las tareas.",
      imageURL: screenshotSomosMasONG,
      techStack: ["HTML5", "React", "ChakraUI", "Redux"],
      techStackIcons: [HTML5, React, ChakraUI, Redux],
      // TODO: Fix CORS error when deploying to heroku
      projectDemo: "https://www.google.com",
      // TODO: Ask to change the repo to public visibility
      projectRepo: "https://www.github.com"
    },
    {
      projectName: "The Blog",
      projectDescription: "Esta aplicación fue creada a partir del segundo challenge que me envió Alkemy para reforzar algunos conceptos de React. Se puede crear, leer, actualizar y eliminar blogs.",
      imageURL: screenshotBlog,
      techStack: ["HTML5", "CSS3", "React"],
      techStackIcons: [HTML5, CSS3, React],
      projectDemo: "https://objective-wilson-701f35.netlify.app/",
      projectRepo: "https://github.com/alstroemerieae/alkemy-react-challenge"
    },
    {
      projectName: "Budget Manager",
      projectDescription: "Esta aplicación fue creada a partir del primer challenge que me envió Alkemy. Se pueden crear, actualizar y eliminar diferentes items. Los item creados van a ser visualizados en la pantalla principal, en las categorías de ingreso o egreso. También contiene un backed, el link está en el readme del repo.",
      imageURL: screenshotBudgetManager,
      techStack: ["HTML5", "CSS3", "Javascript", "React"],
      techStackIcons: [HTML5, CSS3, Javascript, React],
      projectDemo: "https://budget-manager-alkemy.herokuapp.com/",
      projectRepo: "https://github.com/alstroemerieae/alkemy-challenge"
    }
    ,
    {
      projectName: "Brew Right",
      projectDescription: "Este sitio web fue creado para aplicar todo lo aprendido sobre Bootstrap 5. Para el diseño me basé en un template y le fui agregando cosas propias. También aprendí a usar Gulp para automatizar tareas.",
      imageURL: screenshotBrewRight,
      techStack: ["HTML5", "Sass", "Bootstrap5", "Gulp"],
      techStackIcons: [HTML5, Sass, Bootstrap5, Gulp],
      projectDemo: "https://vibrant-knuth-615579.netlify.app/",
      projectRepo: "https://github.com/alstroemerieae/coffee-shop-website"
    }
    ,
    {
      projectName: "Online Learning",
      projectDescription: "Este sitio web fue creado para aplicar todo lo aprendido sobre Sass. Para el diseño me basé en un template y le fui agregando cosas propias.",
      imageURL: screenshotOnlineLearning,
      techStack: ["HTML5", "Sass"],
      techStackIcons: [HTML5, Sass],
      projectDemo: "https://youthful-brattain-217b8e.netlify.app/",
      projectRepo: "https://github.com/alstroemerieae/online-learning-website"
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