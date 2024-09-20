import { Box, Hidden, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../NavBar/NavBar";
import NavBar1 from "../NavBar/NavBar1";
import NavMobile from "../NavBar/NavMobile";

const FadingImage = styled(Box)`
  /* transition: opacity 0.5s ease-in-out; */
`;

const Honda = () => {
  const { t, i18n } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 5); // Cambiado a 4 para cuatro imágenes
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Hidden only={"lg"} smDown>
        <NavBar />
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"1188px"}
            width={"100%"}
            src="honda/honda.png"
            alt="portada de PSA"
          />
        </Box>

        <Box
          pt={5}
          mt={-1}
          sx={{
            backgroundColor: "#E11F27",
            display: "flex",
            width: "100%",
            height: "102px",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "#FFFFFF",
              }}
            >
              {t("clienteProyectos")}: <strong>Honda Argentina</strong>
            </Typography>
          </Box>
          <Box width={"400px"}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "#FFFFFF",
              }}
            >
              {t("proyecto")}: <strong>Anuario institucional</strong>
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "#FFFFFF",
              }}
            >
              {t("fecha")}: <strong>2018</strong>
            </Typography>
          </Box>
        </Box>

        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"1290px"}
            width={"100%"}
            src="/honda/honda1.png"
            alt="foto de moto"
          />
        </Box>

        <Box textAlign={"center"} mt={20} height={"1550px"}>
          <img
            style={{ objectFit: "cover" }}
            height={"1350px"}
            width={"90%"}
            src="honda/honda2.png"
            alt="4 fotos de revista Honda"
          />
        </Box>
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"1165px"}
            width={"100%"}
            src="honda/honda3.png"
            alt="foto de auto honda"
          />
        </Box>

        <Box>
          {/* Aquí empieza el carrusel de imágenes */}
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "4450px",
              transform: "translateX(-50%)",
              opacity: currentImage === 0 ? 1 : 0,
            }}
          >
            <img
              width={"1137px"}
              height={"848px"}
              src="honda/honda4.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "4450px",
              transform: "translateX(-50%)",
              opacity: currentImage === 1 ? 1 : 0,
            }}
          >
            <img
              width={"1137px"}
              height={"848px"}
              src="honda/honda5.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "4450px",
              transform: "translateX(-50%)",
              opacity: currentImage === 2 ? 1 : 0,
            }}
          >
            <img
              width={"1137px"}
              height={"848px"}
              src="honda/honda6.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "4450px",
              transform: "translateX(-50%)",
              opacity: currentImage === 3 ? 1 : 0,
            }}
          >
            <img
              width={"1137px"}
              height={"848px"}
              src="honda/honda7.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "4450px",
              transform: "translateX(-50%)",
              opacity: currentImage === 4 ? 1 : 0,
            }}
          >
            <img
              width={"1137px"}
              height={"848px"}
              src="honda/honda8.png"
              alt=""
            />
          </FadingImage>
        </Box>
      </Hidden>

      <Hidden only={"xl"} smDown>
        <NavBar1 />
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"782px"}
            width={"100%"}
            src="honda/honda.png"
            alt="portada de PSA"
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
              {t("clienteProyectos")}: <strong>Honda Argentina</strong>
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
              {t("proyecto")}: <strong>Anuario institucional</strong>
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
              {t("fecha")}: <strong>2018</strong>
            </Typography>
          </Box>
        </Box>

        <Box mt={"-4px"}>
          <img
            style={{ objectFit: "cover" }}
            height={"856px"}
            width={"100%"}
            src="/honda/honda1.png"
            alt="foto de auto"
          />
        </Box>

        <Box textAlign={"center"} pt={5} pb={5}>
          <img
            style={{ objectFit: "cover" }}
            height={"767px"}
            width={"80%"}
            src="honda/honda2.png"
            alt="4 fotos de revista Honda"
          />
        </Box>
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"840px"}
            width={"100%"}
            src="honda/honda3.png"
            alt="foto de auto honda"
          />
        </Box>

        <Box>
          {/* Aquí empieza el carrusel de imágenes */}
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "2650px",
              transform: "translateX(-50%)",
              opacity: currentImage === 0 ? 1 : 0,
            }}
          >
            <img
              width={"820px"}
              height={"579px"}
              src="honda/honda4.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "2650px",
              transform: "translateX(-50%)",
              opacity: currentImage === 1 ? 1 : 0,
            }}
          >
            <img
              width={"820px"}
              height={"579px"}
              src="honda/honda5.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "2650px",
              transform: "translateX(-50%)",
              opacity: currentImage === 2 ? 1 : 0,
            }}
          >
            <img
              width={"820px"}
              height={"579px"}
              src="honda/honda6.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "2650px",
              transform: "translateX(-50%)",
              opacity: currentImage === 3 ? 1 : 0,
            }}
          >
            <img
              width={"820px"}
              height={"579px"}
              src="honda/honda7.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              left: "50%",
              top: "2650px",
              transform: "translateX(-50%)",
              opacity: currentImage === 4 ? 1 : 0,
            }}
          >
            <img
              width={"820px"}
              height={"579px"}
              src="honda/honda8.png"
              alt=""
            />
          </FadingImage>
        </Box>
      </Hidden>

      <Hidden only={"sm"}>
        <NavMobile />
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"497px"}
            width={"100%"}
            src="honda/honda.png"
            alt="portada de PSA"
          />
        </Box>

        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.16)",
            position: "absolute",
            top: "320px",
            width: "80%",
            left: "10%",
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
              {t("clienteProyectos")}: <strong>Honda Argentina</strong>
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
              {t("proyecto")}: <strong>Anuario institucional</strong>
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
              {t("fecha")}: <strong>2018</strong>
            </Typography>
          </Box>
        </Box>

        <Box bgcolor={"#E9E8E3"}>
          {/* Aquí empieza el carrusel de imágenes */}
          <FadingImage
            sx={{
              position: "absolute",
              top: "508px",
              width: "100%",
              opacity: currentImage === 0 ? 1 : 0,
            }}
          >
            <img
              width={"100%"}
              height={"235px"}
              src="honda/honda4.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              top: "508px",
              width: "100%",
              opacity: currentImage === 1 ? 1 : 0,
            }}
          >
            <img
              width={"100%"}
              height={"235px"}
              src="honda/honda5.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              top: "508px",
              width: "100%",
              opacity: currentImage === 2 ? 1 : 0,
            }}
          >
            <img
              width={"100%"}
              height={"235px"}
              src="honda/honda6.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              top: "508px",
              width: "100%",
              opacity: currentImage === 3 ? 1 : 0,
            }}
          >
            <img
              width={"100%"}
              height={"235px"}
              src="honda/honda7.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              position: "absolute",
              top: "508px",
              width: "90%",
              opacity: currentImage === 4 ? 1 : 0,
            }}
          >
            <img
              width={"100%"}
              height={"235px"}
              src="honda/honda2.png"
              alt=""
            />
          </FadingImage>
        </Box>

        <Box sx={{ position: "absolute", top: "758px", width: "100%" }}>
          <img width={"100%"} src="honda/hondaMobile.png" alt="" />
        </Box>
      </Hidden>
    </>
  );
};

export default Honda;
