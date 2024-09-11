import { Box, Hidden, Typography, styled } from "@mui/material";
import NavBar1 from "../NavBar/NavBar1";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { useTranslation } from "react-i18next";

const FadingImage = styled(Box)`
  position: absolute;

  /* left: 47%; */
  transition: opacity 0.5s ease-in-out;
`;

const Gramon = () => {
  const { t, i18n } = useTranslation();
  const [showSecondImage, setShowSecondImage] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecondImage((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Hidden lgDown>
        <NavBar1 />
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"782px"}
            width={"100%"}
            src="/gramon/gramon1.png"
            alt=""
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.16)",
            position: "absolute",
            top: "640px",
            width: "90%",
            left: "5%",
            height: "118px",
           
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "acumin-pro",
                fontWeight: "100",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "white",
                ml: 2,
                mt: 2,
              }}
            >
              {t("clienteProyectos")}: <strong>Laboratorio Gramon</strong>
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "acumin-pro",
                fontWeight: "bold",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "#52BAFF",
                ml: 2,
                mt: 1,
              }}
            >
              {t("proyecto")}: <strong>Diseño de identidad Megacistin</strong>
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "acumin-pro",
                fontWeight: "",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "#61FB65",
                ml: 2,
                mt: 1,
              }}
            >
              {t("fecha")}: <strong>2010</strong>
            </Typography>
          </Box>
        </Box>

     

        <Box mt={"-4px"}>
          <img
          style={{ objectFit: "cover" }}
            width={"100%"}
            height={"566px"}
            src="/gramon/gramon2.png"
            alt=""
          />
        </Box>
        <Box mt={-1}>
          <img
          style={{ objectFit: "cover" }}
            width={"100%"}
            height={"844px"}
            src="/gramon/gramon3.png"
            alt=""
          />
        </Box>

        <Box>
          <FadingImage
            sx={{
              top: "1100px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: showSecondImage ? 0 : 1,
            }}
          >
            <img  src="/gramon/Gramon5.png" alt="PSA revista" />
          </FadingImage>
          <FadingImage
            sx={{
              top: "1100px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: showSecondImage ? 1 : 0,
            }}
          >
            <img src="/gramon/gramon6.png" alt="PSA revista" />
          </FadingImage>
        </Box>
        <Box mt={-3}>
        <img width={"100%"}     style={{ objectFit: "cover" }}  src="/gramon/gramon7.png" alt="" />
        </Box>
        <Box position={"absolute"}  sx={{
              top: "1800px",
              left: "50%",
              transform: "translateX(-50%)",
           
            }}>
        <img width={"100%"}    style={{ objectFit: "cover" }}  src="/gramon/gramon8.png" alt="" />
        </Box>
        <Box m={-1}>
          <img width={"100%"}    style={{ objectFit: "cover" }}  src="/gramon/gramon4.png" alt="" />
        </Box>

      </Hidden>
    </>
  );
};

export default Gramon;
