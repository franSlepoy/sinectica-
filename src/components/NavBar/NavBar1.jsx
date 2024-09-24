import { Box, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Links from "./Links";

const floatAnimationX = `
  @keyframes floatAnimationX {
    0% { transform: translateX(0) rotate(0deg); }
    25% { transform: translateX(-5px) rotate(0.5deg); }
    50% { transform: translateX(0) rotate(-0.5deg); }
    75% { transform: translateX(5px) rotate(0.25deg); }
    100% { transform: translateX(0) rotate(0deg); }
  }
`;

const FloatingImageX = styled("img")`
  ${floatAnimationX}
  animation: floatAnimationX 4s ease-in-out infinite;
`;

const floatAnimation = `
  @keyframes floatAnimation {
    0% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-5px) rotate(0.5deg); }
    50% { transform: translateY(0) rotate(-0.5deg); }
    75% { transform: translateY(5px) rotate(0.25deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }
`;

const FloatingImage = styled("img")`
  ${floatAnimation}
  animation: floatAnimation 4s ease-in-out infinite;
`;

const floatAnimation1 = `
  @keyframes floatAnimation1 {
    0% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-3px) rotate(0.6deg); }
    35% { transform: translateY(-6px) rotate(0.8deg); }
    50% { transform: translateY(0) rotate(-0.4deg); }
    60% { transform: translateY(1px) rotate(-0.1deg); }
    75% { transform: translateY(3px) rotate(0.27deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }
`;
const FloatingImage1 = styled("img")`
  ${floatAnimation1}
  animation: floatAnimation1 8s ease-in-out infinite;
`;

const NavBar1 = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar la visibilidad del menú

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 800); // Cambia a true cuando el scroll es mayor a 800px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // Cambia la visibilidad del menú al hacer clic en el logo
  };
  return (
    <>
      <Box
        width={"100%"}
        height={"44px"}
        overflow={"hidden"}
        bgcolor={"transarent"}
      >
        <Box>
          <img
            style={{ objectFit: "cover" }}
            width={"100%"}
            height={"44px"}
            src="/navBar/navBar.png"
            alt=""
          />
        </Box>

        <Box
          bgcolor={"transparent"}
          display={"flex"}
          position={"absolute"}
          top={0}
          width={"100%"}
          m={"auto"}
          height={"44px"} // Altura mayor para las esferas
          overflow={"hidden"} // Corta las esferas que se salen del Navbar
        >
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/home38.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/home40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"60px"}
            height={"60px"} // Tamaño más grande
            src="/home/home40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/home41.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-42.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"80px"}
            height={"80px"} // Tamaño más grande
            src="/home/home36.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"60px"}
            height={"60px"} // Tamaño más grande
            src="/home/home37.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"200px"}
            height={"200px"} // Tamaño más grande
            src="/home/home44.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"70px"}
            height={"70px"} // Tamaño más grande
            src="/home/home43.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"40px"}
            height={"40px"}
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"120px"}
            height={"120px"}
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/fondos-36.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-38.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-36.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"70px"}
            height={"70px"} // Tamaño más grande
            src="/home/fondos-37.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"40px"}
            height={"40px"}
            src="/home/fondos-37.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-42.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"120px"}
            height={"120px"} // Tamaño más grande
            src="/home/fondos-38.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-39.png"
            alt="drayTek"
          />{" "}
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"130px"}
            height={"130px"} // Tamaño más grande
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"50px"}
            height={"50px"} // Tamaño más grande
            src="/home/fondos-41.png"
            alt="drayTek"
          />
          {/* Agrega más esferas según lo necesites */}
        </Box>

        <Box
          bgcolor={"transparent"}
          display={"flex"}
          position={"absolute"}
          sx={{ top: "0", left: "0%", zIndex: 0 }}
          width={"100%"}
          m={"auto"}
          height={"44px"} // Altura mayor para las esferas
          overflow={"hidden"} // Corta las esferas que se salen del Navbar
        >
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/home38.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/home41.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"60px"}
            height={"60px"} // Tamaño más grande
            src="/home/home36.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-41.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/home41.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-38.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"80px"}
            height={"80px"} // Tamaño más grande
            src="/home/home36.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"100px"}
            height={"100px"} // Tamaño más grande
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"50px"}
            height={"50px"} // Tamaño más grande
            src="/home/fondos-41.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-36.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"60px"}
            height={"60px"} // Tamaño más grande
            src="/home/home38.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-41.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"60px"}
            height={"60px"} // Tamaño más grande
            src="/home/home37.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"200px"}
            height={"200px"} // Tamaño más grande
            src="/home/home44.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"70px"}
            height={"70px"} // Tamaño más grande
            src="/home/home43.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/fondos-36.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"70px"}
            height={"70px"} // Tamaño más grande
            src="/home/fondos-37.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"120px"}
            height={"120px"} // Tamaño más grande
            src="/home/fondos-38.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"100px"}
            height={"100px"} // Tamaño más grande
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"50px"}
            height={"50px"} // Tamaño más grande
            src="/home/fondos-41.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/home38.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/home40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"60px"}
            height={"60px"} // Tamaño más grande
            src="/home/home40.png"
            alt="drayTek"
          />

          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/home41.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-42.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"80px"}
            height={"80px"} // Tamaño más grande
            src="/home/home36.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"60px"}
            height={"60px"} // Tamaño más grande
            src="/home/home37.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"200px"}
            height={"200px"} // Tamaño más grande
            src="/home/home44.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"70px"}
            height={"70px"} // Tamaño más grande
            src="/home/home43.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/fondos-36.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"70px"}
            height={"70px"} // Tamaño más grande
            src="/home/fondos-37.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"120px"}
            height={"120px"} // Tamaño más grande
            src="/home/fondos-38.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"100px"}
            height={"100px"} // Tamaño más grande
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"50px"}
            height={"50px"} // Tamaño más grande
            src="/home/fondos-41.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/home38.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"60px"}
            height={"60px"} // Tamaño más grande
            src="/home/home40.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"80px"}
            height={"80px"} // Tamaño más grande
            src="/home/home38.png"
            alt="drayTek"
          />

          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/home41.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-42.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"80px"}
            height={"80px"} // Tamaño más grande
            src="/home/home36.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"100px"}
            height={"100px"} // Tamaño más grande
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"50px"}
            height={"50px"} // Tamaño más grande
            src="/home/fondos-41.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"60px"}
            height={"60px"} // Tamaño más grande
            src="/home/home37.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"100px"}
            height={"100px"} // Tamaño más grande
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"50px"}
            height={"50px"} // Tamaño más grande
            src="/home/fondos-41.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"200px"}
            height={"200px"} // Tamaño más grande
            src="/home/home44.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"70px"}
            height={"70px"} // Tamaño más grande
            src="/home/home43.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/fondos-36.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"70px"}
            height={"70px"} // Tamaño más grande
            src="/home/fondos-37.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"120px"}
            height={"120px"} // Tamaño más grande
            src="/home/fondos-38.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"100px"}
            height={"100px"} // Tamaño más grande
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"50px"}
            height={"50px"} // Tamaño más grande
            src="/home/fondos-41.png"
            alt="drayTek"
          />

          {/* Agrega más esferas según lo necesites */}
        </Box>

        <Box
          position={"absolute"}
          top={"0px"}
          left={"40.5%"}
          width={"20%"}
          m={"auto"}
          display={"flex"}
          justifyContent={"space-around"}
        >
          <Box
            component={Link}
            to={"/somos"}
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontFamily: "acumin-pro",
                fontSize: "18px",
                color: "white",
                mt: "5px",
              }}
            >
              Somos
            </Typography>
          </Box>
          <Box
            component={Link}
            to={"/"}
            style={{ textDecoration: "none" }}
            mt={1}
          >
            <img
              height={"25px"}
              style={{ objectFit: "cover" }}
              src="/navBar/sNav.png"
              alt="navBar"
            />
          </Box>
          <Box
            component={Link}
            to={"/proyectos"}
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontFamily: "acumin-pro",
                fontSize: "18px",
                color: "white",
                mt: "5px",
                ml: -2,
              }}
            >
              Hacemos
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* Menú de contacto y logo */}
      <Box
        position={"fixed"}
        top={40} // Posición fija desde el top de la ventana
        right={"5%"} // Ajusta según sea necesario
        display={"flex"}
        flexDirection={"column"}
        alignItems={"end"}
        zIndex={100}
        style={{
          opacity: isSticky ? 1 : 0, // Oculta el elemento si no es sticky
        }}
      >
        <Box onClick={toggleMenu} style={{ cursor: "pointer" }}>
          <img
            height={"35px"}
            style={{ objectFit: "cover" }}
            src="/navBar/logo.png"
            alt="logo"
          />
        </Box>

        {/* Enlaces de Hacemos y Contacto, visibles solo si menuVisible es true */}
        {menuVisible && (
          <Box>
            <Typography
              component={Link}
              to={"/proyectos"}
              sx={{
                display: "block",
                textDecoration: "none",
                fontFamily: "acumin-pro",
                fontSize: "16px",
                height: "20px",
                fontWeight: "100",
                color: "white",
                mt: 1,
                textAlign: "right",
              }}
            >
              Hacemos
            </Typography>
            <a
             style={{textDecoration:"none"}}
              href="https://wa.me/5491131992441"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography
                sx={{
                  textDecoration: "none",
                  fontFamily: "acumin-pro",
                  fontSize: "16px",
                  height: "20px",
                  fontWeight: 100,
                  color: "white",
                  mt: 1,
                  ml: "3px",
                  textAlign: "end",
                  
                }}
              >
                Contacto
              </Typography>
            </a>
          </Box>
        )}
      </Box>

      <Links />
    </>
  );
};

export default NavBar1;
