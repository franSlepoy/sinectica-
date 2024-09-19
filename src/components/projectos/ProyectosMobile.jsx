import React, { useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

// Styles
const ProjectCard = styled(Box)`
  width: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 16px;
`;

const ProjectImage = styled("img")`
  width: 100%;
  height: auto;
`;

const ProjectTitle = styled(Typography)`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #2f5183;
  font-family: "acumin-pro";
  background-color: rgba(255, 255, 255, 0.7);
  padding: 4px 8px;
  border-radius: 4px;
`;

const Button = styled("button")`
  margin: 5px;
  background: none;
  border: none;
  font-family: "acumin-pro";
  font-size: 16px;
  cursor: pointer;
  color: #2f5183;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  padding: 5px 10px;
  border-radius: 15px;
  transition: background-color 0.3s;

  
`;

const projectsData = [
  {
    id: 1,
    title: "Franca",
    category: "Digital",
    img1: "/proyectos/proyecto1.png",
    img2: "/proyectos/proyecto1Hover.png",
    link: "/Franca",
  },
 /*  {
    id: 2,
    title: "circulo",
    category: "Digital",
    img1: "/proyectos/proyecto2.png",
    img2: "/proyectos/proyecto2Hover.png",
  }, */
  {
    id: 3,
    title: "Obras Publicas",
    category: "Editorial",
    img1: "/proyectos/proyecto3.png",
    img2: "/proyectos/proyecto3Hover.png",
    link: "/MinisterioDeObrasPublicas",
  },
  {
    id: 4,
    title: "TnPlatex",
    category: "Digital",
    img1: "/proyectos/proyecto4.png",
    img2: "/proyectos/proyecto4Hover.png",
    link: "/TNyPlatex",
  },
 
  {
    id: 6,
    title: "DrayTek",
    category: "Digital",
    img1: "/proyectos/proyecto6.png",
    img2: "/proyectos/proyecto6Hover.png",
    link: "/DrayTek",
  },
  {
    id: 7,
    title: "San Martín",
    category: "Institucional",
    img1: "/proyectos/proyecto7.png",
    img2: "/proyectos/proyecto7Hover.png",
    link: "/SanMartín1",
  },
  {
    id: 8,
    title: "PSA",
    category: "Institucional",
    img1: "/proyectos/proyecto8.png",
    img2: "/proyectos/proyecto8Hover.png",
    link: "/PSA",
  },
  {
    id: 9,
    title: "Institucionales",
    category: "Institucional",
    img1: "/proyectos/proyecto9.png",
    img2: "/proyectos/proyecto9Hover.png",
    link: "/Gramon",
  },
  {
    id: 10,
    title: "Honda",
    category: "Institucional",
    img1: "/proyectos/proyecyo10.png",
    img2: "/proyectos/proyecto10Hover.png",
    link: "/Honda1",
  },
  
  {
    id: 12,
    title: "8M",
    category: "Editorial",
    img1: "/proyectos/proyecto12.png",
    img2: "/proyectos/proyecto12Hover.png",
    link: "/SanMartín",
  },
  {
    id: 13,
    title: "Tyme",
    category: "Digital",
    img1: "/proyectos/proyecto13.png",
    img2: "/proyectos/proyecto13Hover.png",
    link: "/Tyme",
  },
  {
    id: 14,
    title: "HondaSinergia",
    category: "Editorial",
    img1: "/proyectos/proyecto14.png",
    img2: "/proyectos/proyecto14Hover.png",
    link: "/Honda",
  },
  {
    id: 15,
    title: "PSA",
    category: "Editorial",
    img1: "/proyectos/proyecto15.png",
    img2: "/proyectos/proyecto15Hover.png",
    link: "/psa",
  },
];

export default function ProyectosMobile() {
  const [activeCategory, setActiveCategory] = useState("");

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? "" : category);
  };

  const filteredProjects = activeCategory
    ? projectsData.filter((project) => project.category === activeCategory)
    : projectsData;

  return (
    <Box m={"auto"} mt={12} width={"70%"} >
      <Box
        sx={{ width: "100%" }}
        display="flex"
        justifyContent="space-between"
        flexWrap="nowrap"
        mb={2}
        ml={-1}
      >
        {["Digital", "Editorial", "Institucional"].map((category) => (
          
          <Button
            key={category}
            onClick={() => handleCategoryClick(category)}
            isActive={activeCategory === category}
            
          >
            <Typography sx={{ fontFamily: "acumin-pro", width:"33.3%"}} fontSize={"13px"} >
            {category}
            </Typography>
            
          </Button>
        ))}
      </Box>

      <Box mt={2} display="flex" flexDirection="column">
        {filteredProjects.map((project) => (
          <Link to={project.link} key={project.id}>
            <ProjectCard>
              <ProjectImage src={project.img2} alt={project.title} />
              {/* <ProjectTitle variant="subtitle2">{project.title}</ProjectTitle> */}
            </ProjectCard>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
