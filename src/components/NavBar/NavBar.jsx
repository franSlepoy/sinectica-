import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
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
      {/* Barra de navegación superior */}
      <Box
        position={"absolute"}
        top={30}
        width={"100%"}
        height={"60px"}
        m={"auto"}
      >
        <Box
          position={"absolute"}
          top={"-5px"}
          left={"41%"}
          width={"20%"}
          m={"auto"}
          display={"flex"}
          justifyContent={"space-around"}
        >
          <Box>
            <Typography
              component={Link} to={"/contacto"}
              sx={{
                textDecoration: "none",
                fontFamily: "acumin-pro",
                fontSize: "18px",
                height: "30px",
                fontWeight: "normal",
                color: "white",
              }}
            >
              Somos
            </Typography>
          </Box>
          <Box component={Link} to={"/"}>
            <img src="/navBar/sNav.png" />
          </Box>
          <Box>
            <Typography
              component={Link} to={"/proyectos"}
              sx={{
                textDecoration: "none",
                fontFamily: "acumin-pro",
                fontSize: "18px",
                height: "30px",
                fontWeight: "normal",
                color: "white",
                
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
          <img src="/navBar/logo.png" alt="logo" />
        </Box>

        {/* Enlaces de Hacemos y Contacto, visibles solo si menuVisible es true */}
        {menuVisible && (
          <Box>
            <Typography
              component={Link} to={"/proyectos"}
              sx={{
                display: "block",
                textDecoration: "none",
                fontFamily: "acumin-pro",
                fontSize: "16px",
                height: "20px",
                fontWeight: "100",
                color: "white",
                mt: 1,
              }}
            >
              Hacemos
            </Typography>
            <Typography
              component={Link} to={"/contacto"}
              sx={{
                textDecoration: "none",
                fontFamily: "acumin-pro",
                fontSize: "16px",
                height: "20px",
                fontWeight: 100,
                color: "white",
                mt: 1,
              }}
            >
              Contacto
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default NavBar;
