import { Box, Hidden, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../NavBar/NavBar";
import NavBar1 from "../NavBar/NavBar1";
import NavMobile from "../NavBar/NavMobile";

const FadingImage = styled(Box)`
  position: absolute;
  top: 2730px;

  transition: opacity 0.3s ease-in-out;
`;
const FadingImage1 = styled(Box)`
  position: absolute;
  top: 3600px;

  /* transition: opacity 0.3s ease-in-out; */
`;
const FadingImage2 = styled(Box)`
  position: absolute;
  top: 4800px;

  /* 
  transition: opacity 0.3s ease-in-out; */
`;
const FadingImage3 = styled(Box)`
  position: absolute;
  /*  top: 5520px; */
  /* 
  transition: opacity 0.3s ease-in-out; */
`;

const SanMartin1 = () => {
  const { t, i18n } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImage1, setCurrentImage1] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 4); // Cambiado a 4 para cuatro imágenes
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage1((prev) => (prev + 1) % 2); // Cambiado a 4 para cuatro imágenes
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Hidden smDown>
        <NavBar1 />
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"782px"}
            width={"100%"}
            src="sanMartin1/sanMartin1-1.png"
            alt="portada de San Martín"
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
              {t("clienteProyectos")}: Municipalidad de San Martín
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
              {t("proyecto")}: Comunicación institucional
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
              {t("fecha")}: 2014 - 2022
            </Typography>
          </Box>
        </Box>

        <Box>
          <Box mt={"-4px"}>
            <img
              style={{ objectFit: "cover" }}
              height={"741px"}
              width={"100%"}
              src="/sanMartin1/sanMartin1-2.png"
              alt="libros de 8M"
            />
          </Box>

          <Box mt={"-5px"}>
            <img
              style={{ objectFit: "cover" }}
              height={"841px"}
              width={"100%"}
              src="/sanMartin1/sanMartin1-3.png"
              alt="libros de 8M"
            />
          </Box>
        </Box>

        <Box p={8} width={"100%"} m={"auto"}>
          <img
            style={{ objectFit: "cover" }}
            height={"210px"}
            width={"100%"}
            src="sanMartin1/sanMartin1-4.png"
            alt="afiche de club en San Martín"
          />
        </Box>

        <Box>
          <Box position={"absolute"} left={"68px"} mt={10} zIndex={10}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Secretaría de Educación
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "medium",
                color: "black",
              }}
            >
              Brochure Educación y trabajo
            </Typography>
          </Box>

          {/* Aquí empieza el carrusel de imágenes */}
          <FadingImage
            sx={{
              opacity: currentImage === 0 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"870px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-8.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              opacity: currentImage === 1 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"870px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-6.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              opacity: currentImage === 2 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"870px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-7.png"
              alt=""
            />
          </FadingImage>
        </Box>

        <Box>
          <Box position={"absolute"} top={"3700px"} left={"68px"} zIndex={10}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Secretaría de Educación
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "medium",
                color: "black",
              }}
            >
              Brochure Educación y trabajo
            </Typography>
          </Box>

          {/* Aquí empieza el carrusel de imágenes */}
          <FadingImage1
            sx={{
              opacity: currentImage1 === 0 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"1270px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-9.png"
              alt=""
            />
          </FadingImage1>
          <FadingImage1
            sx={{
              opacity: currentImage1 === 1 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"1270px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-10.png"
              alt=""
            />
          </FadingImage1>
        </Box>
        {/* 
        <Box mt={200} >
          <img
            width={"100%"}
            height={"965px"}
            style={{ objectFit: "cover" }}
            src="sanMartin1/sanMartin1-13.png"
            alt="afiche Plaza de la mujer"
          />
        </Box> */}

        <Box>
          <Box position={"absolute"} top={"4860px"} left={"68px"} zIndex={10}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: "bold",
                color: "black",
                width: "271px",
                lineHeight: "28px",
              }}
            >
              Secretaría de Mujeres, Género e infancias
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "medium",
                color: "black",
                width: "271px",
                lineHeight: "20px",
                mt: 1,
              }}
            >
              Diseño de identidad Congreso de las Juventudes
            </Typography>
          </Box>

          {/* Aquí empieza el carrusel de imágenes */}
          <FadingImage2
            sx={{
              opacity: currentImage === 0 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"800px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-14.png"
              alt=""
            />
          </FadingImage2>
          <FadingImage2
            sx={{
              opacity: currentImage === 1 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"800px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-15.png"
              alt=""
            />
          </FadingImage2>
          <FadingImage2
            sx={{
              opacity: currentImage === 2 ? 1 : 0,
              width: "100%",
            }}
          >
            <img
              width={"100%"}
              height={"800px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-16.png"
              alt=""
            />
          </FadingImage2>
        </Box>

        <Box>
          <Box position={"absolute"} top={"5600px"} left={"68px"} zIndex={10}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "24px",
                fontWeight: "bold",
                color: "black",
                width: "271px",
                lineHeight: "28px",
              }}
            >
              Diseño de identidad
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "18px",
                fontWeight: "medium",
                color: "black",
                width: "271px",
                lineHeight: "20px",
                mt: 1,
              }}
            >
              40 años de Democracia
            </Typography>
          </Box>

          {/* Aquí empieza el carrusel de imágenes */}
          <FadingImage3
            sx={{
              opacity: currentImage === 0 ? 1 : 0,
              width: "100%",
              top: "5520px",
            }}
          >
            <img
              width={"100%"}
              height={"800px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-17.png"
              alt=""
            />
          </FadingImage3>
          <FadingImage3
            sx={{
              opacity: currentImage === 1 ? 1 : 0,
              width: "100%",
              top: "5520px",
            }}
          >
            <img
              width={"100%"}
              height={"800px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-18.png"
              alt=""
            />
          </FadingImage3>

          <FadingImage3
            sx={{
              opacity: currentImage === 3 ? 1 : 0,
              width: "100%",
              top: "5520px",
            }}
          >
            <img
              width={"100%"}
              height={"800px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-19.png"
              alt=""
            />
          </FadingImage3>
        </Box>
      </Hidden>

      <Hidden smUp>
        <NavMobile />
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"497px"}
            width={"100%"}
            src="sanMartin1/sanMartin1-1.png"
            alt="portada de San Martín"
          />
        </Box>

        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.16)",
            position: "absolute",
            top: "320px",
            width: "80%",
            left: "10%",
            height: "158px",
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
              {t("clienteProyectos")}: Municipalidad de San Martín
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
              {t("proyecto")}: Comunicación institucional
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
              {t("fecha")}: 2014 - 2022
            </Typography>
          </Box>
        </Box>

        <Box>
          <Box mt={"-4px"}>
            <img
              style={{ objectFit: "cover" }}
              width={"100%"}
              src="/sanMartin1/sanMartin1-2.png"
              alt="libros de 8M"
            />
          </Box>

          <Box mt={"-5px"}>
            <img
              style={{ objectFit: "cover" }}
              width={"100%"}
              src="/sanMartin1/sanMartin1-3.png"
              alt="libros de 8M"
            />
          </Box>
        </Box>

        <Box pt={"10px"} pb={"10px"} height={"70px"} width={"74%"} m={"auto"}>
          <img
            height={"42x"}
            style={{ objectFit: "cover" }}
            width={"100%"}
            src="sanMartin1/sanMartin1-4.png"
            alt="afiche de club en San Martín"
          />
        </Box>

        {/* Aquí empieza el carrusel de imágenes */}

        {/* Aquí empieza el carrusel de imágenes */}

        {/* Aquí empieza el carrusel de imágenes */}
        {/*  <FadingImage3
            sx={{
              opacity: currentImage === 0 ? 1 : 0,
              width: "100%",
              height:"300px",
              top:"145%"
            }}
          >
            <img
              width={"100%"}
              height={"300px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-17.png"
              alt=""
            />
          </FadingImage3>
          <FadingImage3
            sx={{
              opacity: currentImage === 1 ? 1 : 0,
              width: "100%",
              height:"300px",
              top:"145%"
            }}
          >
            <img
              width={"100%"}
              height={"300px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-18.png"
              alt=""
            />
          </FadingImage3>

          <FadingImage3
            sx={{
              opacity: currentImage === 3 ? 1 : 0,
              width: "100%",
              height:"300px",
              top:"145%"
            }}
          >
            <img
              width={"100%"}
              height={"300px"}
              style={{ objectFit: "cover" }}
              src="sanMartin1/sanMartin1-19.png"
              alt=""
            />
          </FadingImage3> */}
        <img
          width={"100%"}
          height={"300px"}
          style={{ objectFit: "cover" }}
          src="sanMartin1/sanMartin1-17.png"
          alt=""
        />

        <img
          width={"100%"}
          height={"300px"}
          style={{ objectFit: "cover" }}
          src="sanMartin1/sanMartin1-18.png"
          alt=""
        />
        <img
          width={"100%"}
          height={"300px"}
          style={{ objectFit: "cover" }}
          src="sanMartin1/sanMartin1-19.png"
          alt=""
        />
      </Hidden>
    </>
  );
};

export default SanMartin1;
