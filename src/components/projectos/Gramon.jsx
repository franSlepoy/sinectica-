import { Box, Hidden, Typography, styled } from "@mui/material";
import NavBar1 from "../NavBar/NavBar1";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { useTranslation } from "react-i18next";
import NavMobileAzul from "../NavBar/NavMobileAzul";

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
      <Hidden smDown >
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
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "white",
                ml: 2,
                mt: 2,
              }}
            >
              {t("clienteProyectos")}: Laboratorio Gramon
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "acumin-pro",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "white",
                ml: 2,
                mt: 1,
              }}
            >
              {t("proyecto")}: Diseño de identidad Megacistin
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "acumin-pro",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "white",
                ml: 2,
                mt: 1,
              }}
            >
              {t("fecha")}: 2010
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

      <Hidden smUp >
        <NavMobileAzul />
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"497px"}
            width={"100%"}
            src="/gramon/gramon1.png"
            alt=""
          />
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.16)",
            position: "absolute",
            top: "320px",
            width: "80%",
            left: "10%",
            height: "138px",
           
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "acumin-pro",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "white",
                ml: 2,
                mt: 2,
              }}
            >
              {t("clienteProyectos")}: Laboratorio Gramon
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "acumin-pro",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "white",
                ml: 2,
                mt: 1,
              }}
            >
              {t("proyecto")}: Diseño de identidad Megacistin
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "acumin-pro",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "white",
                ml: 2,
                mt: 1,
              }}
            >
              {t("fecha")}: 2010
            </Typography>
          </Box>
        </Box>

     

        
        <Box mt={-1}>
          <img
          style={{ objectFit: "cover" }}
            width={"100%"}
            height={"444px"}
            src="/gramon/gramon3.png"
            alt=""
          />
        </Box>

        <Box>
          <FadingImage
            sx={{
              top: "610px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: showSecondImage ? 0 : 1,
            }}
          >
            <img width={"200px"} src="/gramon/Gramon5.png" alt="PSA revista" />
          </FadingImage>
          <FadingImage
            sx={{
              top: "610px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: showSecondImage ? 1 : 0,
            }}
          >
            <img width={"200px"} src="/gramon/gramon6.png" alt="PSA revista" />
          </FadingImage>
        </Box>
        <Box mt={-3}>
        <img width={"100%"}     style={{ objectFit: "cover" }}  src="/gramon/gramon7.png" alt="" />
        </Box>
        <Box position={"absolute"}  sx={{
              top: "1398px",
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
