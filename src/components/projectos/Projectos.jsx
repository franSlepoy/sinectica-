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
  height: 100%;
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
    title: "PSA Peugeot Citroën",
    category: "Digital",
    img1: "/proyectos/proyecto1.png",
    img2: "/proyectos/proyecto1Hover.png",
    link: "/PSA",
  },
  {
    id: 2,
    title: "Franca",
    category: "Digital",
    img1: "/proyectos/proyecto2.png",
    img2: "/proyectos/proyecto1Hover.png",
    link: "/Franca",
  },
  {
    id: 3,
    title: "DrayTek",
    category: "Digital",
    img1: "/proyectos/proyecto3.png",
    img2: "/proyectos/proyecto5Hover.png",
    link: "/DrayTek",
  },
  {
    id: 4,
    title: "IMB",
    category: "Editorial",
    img1: "/proyectos/proyecto4.png",
    img2: "/proyectos/proyecto8Hover.png",
    link: "/IMB",
  },
  {
    id: 5,
    title: "Honda",
    category: "Editorial",
    img1: "/proyectos/proyecto5.png",
    img2: "/proyectos/proyecto10Hover.png",
    link: "/Honda",
  },
  {
    id: 6,
    title: "IMB Platex",
    category: "Digital",
    img1: "/proyectos/proyecto6.png",
    img2: "/proyectos/proyecto10Hover.png",
    link: "/TNyPlatex",
  },
  {
    id: 7,
    title: "Ministerio de Obras Públicas",
    category: "Editorial",
    img1: "/proyectos/proyecto7.png",
    img2: "/proyectos/proyecto1Hover.png",
    link: "/MinisterioDeObrasPublicas",
  },
  {
    id: 8,
    title: "Municipalidad de San Martín",
    category: "Editorial",
    img1: "/proyectos/proyecto8.png",
    img2: "/proyectos/proyecto5Hover.png",
    link: "/SanMartín",
  },
  {
    id: 9,
    title: "Municipalidad de San Martín 1",
    category: "Institucionales",
    img1: "/proyectos/proyecto9.png",
    img2: "/proyectos/proyecto8Hover.png",
    link: "/SanMartín1",
  },
  {
    id: 10,
    title: "Tyme",
    category: "Digital",
    img1: "/proyectos/proyecyo10.png",
    img2: "/proyectos/proyecto10Hover.png",
    link: "/Tyme",
  },
  {
    id: 11,
    title: "IMB Platex",
    category: "Digital",
    img1: "/proyectos/proyecto11.png",
    img2: "/proyectos/proyecto11.png",
    link: "/TNyPlatex",
  },
  {
    id: 12,
    title: "Ministerio de Obras Públicas",
    category: "Editorial",
    img1: "/proyectos/proyecto12.png",
    img2: "/proyectos/proyecto12.png",
    link: "/MinisterioDeObrasPublicas",
  },
  {
    id: 13,
    title: "Municipalidad de San Martín",
    category: "Editorial",
    img1: "/proyectos/proyecto13.png",
    img2: "/proyectos/proyecto13.png",
    link: "/SanMartin",
  },
  {
    id: 14,
    title: "Municipalidad de San Martín 1",
    category: "Institucionales",
    img1: "/proyectos/proyecto14.png",
    img2: "/proyectos/proyecto14.png",
    link: "/SanMartin1",
  },
  {
    id: 15,
    title: "Tyme",
    category: "Digital",
    img1: "/proyectos/proyecto15.png",
    img2: "/proyectos/proyecto15.png",
    link: "/Tyme",
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
      <Box m={"auto"} mt={4} width={"80%"} p={4}>
        <Box
          sx={{ width: "40%", m: "auto" }}
          display="flex"
          justifyContent="center"
        >
          {["Digital", "Editorial", "Institucionales"].map((category) => (
            <Button
              key={category}
              sx={{ width: "33.3%" }}
              onClick={() => handleCategoryClick(category)}
              isActive={activeCategory === category}
            >
              <Typography
                sx={{
                  fontFamily: "acumin-pro",
                  fontSize: "20px",
                  lineHeight: "40px",
                  fontWeight: activeCategory === category ? "bold" : "normal",
                  color: "#2F5183",
                }}
              >
                {category}
              </Typography>
            </Button>
          ))}
        </Box>

        <Box mt={4} display="flex" flexWrap="wrap" justifyContent="center">
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