import { Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import NavBar1 from "../NavBar/NavBar1";

// Estilo para el fondo cuadriculado
const GridBackground = styled(Box)`
  background-color: white;
  background-image: linear-gradient(to right, blue 1px, transparent 1px),
    linear-gradient(to bottom, blue 1px, transparent 1px);
  background-size: 100px 100px; /* Tamaño de las cuadrículas */
  width: 100%;
  height: 100vh; /* Altura total de la pantalla */
`;

// Estilo para los proyectos en forma de cuadrado y círculo con imagen de fondo
const ProjectItem = styled(Box)`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 20px; */
  background-size: cover;
  background-position: center;
  border-radius: ${(props) => (props.shape === "circle" ? "50%" : "0%")};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: rgba(255, 204, 0, 0.8);
    box-shadow: 0px 0px 10px rgba(255, 204, 0, 0.8);
  }

  &:hover .project-title {
    display: block;
  }
`;

// Estilo para el título, inicialmente oculto
const ProjectTitle = styled(Typography)`
  display: none;
  color: white;
  font-weight: bold;
  text-align: center;
`;

const Proyectos1 = () => {
  return (
    <>
      {/*   <GridBackground>  */}
      <NavBar1 />
      <Box mt={15} ml={5}>
        <Box display={"flex"} justifyContent={"space-evenly"}>
          <Typography variant="h4" mb={4}>
            Digitales
          </Typography>
          <Typography variant="h4" mb={4}>
            Institucionales
          </Typography>
          <Typography variant="h4" mb={4}>
            Editorial
          </Typography>
        </Box>

        {/* Ejemplo de listado de proyectos con imágenes */}
        <Box width={"70%"} m={"auto"} display="flex" flexWrap="wrap">
          <ProjectItem
            component={Link}
            to="/PSA"
            shape="square"
            sx={{ backgroundImage: "url(/psa/psa1.png)" }}
          >
            <ProjectTitle className="project-title">
              PSA Peugeot Citroën
            </ProjectTitle>
          </ProjectItem>
          <ProjectItem
            component={Link}
            to="/Franca"
            shape="circle"
            sx={{ backgroundImage: "url(/franca/franca.png)" }}
          >
            <ProjectTitle className="project-title">Franca</ProjectTitle>
          </ProjectItem>
          <ProjectItem
            component={Link}
            to="/DrayTek"
            shape="square"
            sx={{ backgroundImage: "url(/drayTek/drayTek.png)" }}
          >
            <ProjectTitle className="project-title">DrayTek</ProjectTitle>
          </ProjectItem>
          {/* <ProjectItem
            component={Link}
            to="/IMB"
            shape="circle"
            sx={{ backgroundImage: 'url(/path/to/imb-image.jpg)' }}
          > 
            <ProjectTitle className="project-title">IMB</ProjectTitle>
          </ProjectItem>  */}
          <ProjectItem
            component={Link}
            to="/honda"
            shape="circle"
            sx={{ backgroundImage: "url(/honda/honda.png)" }}
          >
            <ProjectTitle className="project-title">Honda</ProjectTitle>
          </ProjectItem>
          <ProjectItem
            component={Link}
            to="/honda1"
            shape="circle"
            sx={{ backgroundImage: "url(/honda1/honda1-1.png)" }}
          >
            <ProjectTitle className="project-title">Honda1</ProjectTitle>
          </ProjectItem>
          <ProjectItem
            component={Link}
            to="/TNyPlatex"
            shape="square"
            sx={{ backgroundImage: "url(/tn/tn.png)" }}
          >
            <ProjectTitle className="project-title">IMB Platex</ProjectTitle>
          </ProjectItem>
          <ProjectItem
            component={Link}
            to="/MinisterioDeObrasPublicas"
            shape="circle"
            sx={{ backgroundImage: "url(/obrasPublicas/obras1.png)" }}
          >
            <ProjectTitle className="project-title">
              Ministerio de obras públicas
            </ProjectTitle>
          </ProjectItem>
          <ProjectItem
            component={Link}
            to="/SanMartín"
            shape="square"
            sx={{ backgroundImage: "url(/sanMartin1/sanMartin1-1.png)" }}
          >
            <ProjectTitle className="project-title">
              Municipalidad de San Martín
            </ProjectTitle>
          </ProjectItem>
          <ProjectItem
            component={Link}
            to="/SanMartín1"
            shape="circle"
            sx={{ backgroundImage: "url(/sanMartin/sanMartin.png)" }}
          >
            <ProjectTitle className="project-title">
              Municipalidad de San Martín 1
            </ProjectTitle>
          </ProjectItem>
          <ProjectItem
            component={Link}
            to="/Tyme"
            shape="square"
            sx={{ backgroundImage: "url(/tyme/tyme.png)" }}
          >
            <ProjectTitle className="project-title">Tyme</ProjectTitle>
          </ProjectItem>
        </Box>
      </Box>
      {/*  </GridBackground>  */}
    </>
  );
};

export default Proyectos1;
