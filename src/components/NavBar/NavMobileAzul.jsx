import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavMobileAzul = () => {
  const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar la visibilidad del menú
  const toggleMenu = () => {
    setMenuVisible(!menuVisible); // Cambia la visibilidad del menú al hacer clic en el logo
  };
  return (
    <>
      <Box position={"fixed"} left={"15%"} top={40} zIndex={20} >
       {/*  <Typography
          sx={{
            fontFamily: "acumin-pro",
            fontSize: "28px",
            mt: -1,
            fontWeight: "normal",
            color: "#202B61",
          }}
        >
          Sinestesia
        </Typography> */}
        <img src="/navBar/Sinestesia.svg" alt="" />
      </Box>

      {/* Menú de contacto y logo */}
      <Box
        position={"fixed"}
        top={40} // Posición fija desde el top de la ventana
        right={"15%"} // Ajusta según sea necesario
        display={"flex"}
        flexDirection={"column"}
        alignItems={"end"}
        zIndex={100}
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
                fontWeight: "normal",
                color: "#202B61",
                mt: 1,
                textAlign: "right",
              }}
            >
              Hacemos
            </Typography>
            <a
              style={{ textDecoration: "none" }}
              href="https://wa.me/5491131992441"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography
                sx={{
                  textDecoration: "none",
                  fontFamily: "acumin-pro",
                  fontSize: "16px",
                  fontWeight: "normal",
                  height: "20px",

                  color: "#202B61",
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
    </>
  );
};

export default NavMobileAzul;
