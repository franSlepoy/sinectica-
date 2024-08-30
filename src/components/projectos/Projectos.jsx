import { Box, Typography, styled } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar1 from "../NavBar/NavBar1";

// Estilos para las imágenes de los proyectos
const ProjectCard = styled(Box)`
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const ProjectImage = styled("img")`
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s ease-in-out;
`;

const ProjectTitle = styled(Typography)`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #2f5183;
  font-family: "acumin-pro";
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const Button = styled("button")`
  margin: 10px;
  background: none;
  border: none;
  font-family: "acumin-pro";
  font-size: 20px;
  cursor: pointer;
  color: #000;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};

  &:hover {
    font-weight: bold;
  }
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
  {
    id: 2,
    title: "circulo",
    category: "Digital",
    img1: "/proyectos/proyecto2.png",
    img2: "/proyectos/proyecto2Hover.png",
  },
  {
    id: 3,
    title: "Obras Publicas",
    category: "Editorial",
    img1: "/proyectos/proyecto3.png",
    img2: "/proyectos/proyecto3Hover.png",
    link: "/DrayTek",
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
    id: 5,
    title: "Honda",
    category: "Editorial",
    img1: "/proyectos/proyecto5.png",
    img2: "/proyectos/proyecto5Hover.png",
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
    category: "Institucionales",
    img1: "/proyectos/proyecto7.png",
    img2: "/proyectos/proyecto7Hover.png",
    link: "/SanMartín1",
  },
  {
    id: 8,
    title: "PSA",
    category: "Institucionales",
    img1: "/proyectos/proyecto8.png",
    img2: "/proyectos/proyecto8Hover.png",
    link: "/PSA",
  },
  {
    id: 9,
    title: "Gramon",
    category: "Editorial",
    img1: "/proyectos/proyecto9.png",
    img2: "/proyectos/proyecto9Hover.png",
    link: "/Gramon",
  },
  {
    id: 10,
    title: "Honda",
    category: "Editorial",
    img1: "/proyectos/proyecyo10.png",
    img2: "/proyectos/proyecto10Hover.png",
    link: "/Honda",
  },
  {
    id: 11,
    title: "IMB Platex",
    category: "Digital",
    img1: "/proyectos/proyecto11.png",
    img2: "/proyectos/proyecto11Hover.png",
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
    title: "Honda1",
    category: "Institucionales",
    img1: "/proyectos/proyecto14.png",
    img2: "/proyectos/proyecto14Hover.png",
    link: "/Honda1",
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

export default function Proyectos() {
  const [activeCategory, setActiveCategory] = useState("");
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <NavBar1 />
      <Box m={"auto"} mt={5} width={"80%"} p={4}>
        <Box
          sx={{ width: "40%", m: "auto" }}
          display="flex"
          justifyContent="center"
        >
          {["Digital", "Editorial", "Institucionales"].map((category) => (
            <Button
              key={category}
              sx={{
                width: "33.3%",
                
              }}
              onClick={() => handleCategoryClick(category)}
              isActive={activeCategory === category}
            >
              <Typography
                sx={{
                  fontFamily: "acumin-pro",
                  fontSize: "18px",
                  lineHeight: "40px",
                  fontWeight: activeCategory === category ? "bold" : "normal",
                  color: "#2F5183",
                  "&:hover": {
                    fontWeight: "bold",
                  },
                }}
              >
                {category}
              </Typography>
            </Button>
          ))}
        </Box>

        <Box mt={2} display="flex" flexWrap="wrap" justifyContent="center">
          {projectsData.map((project) => (
            <Link to={project.link} key={project.id}>
              <ProjectCard
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <ProjectImage
                  src={project.img1}
                  alt={project.title}
                  style={{
                    opacity:
                      (activeCategory && project.category === activeCategory) ||
                      hoveredProject === project.id
                        ? 0
                        : 1,
                  }}
                />
                <ProjectImage
                  src={project.img2}
                  alt={project.title}
                  style={{
                    opacity:
                      (activeCategory && project.category === activeCategory) ||
                      hoveredProject === project.id
                        ? 1
                        : 0,
                  }}
                />
                <ProjectTitle>{project.title}</ProjectTitle>
              </ProjectCard>
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
}
