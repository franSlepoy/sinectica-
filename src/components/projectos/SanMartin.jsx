import { Box, Hidden, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../NavBar/NavBar";
import NavBar1 from "../NavBar/NavBar1";
import NavMobile from "../NavBar/NavMobile";

const FadingImage = styled(Box)`
  position: absolute;
  /* top: 1808px;
  left: 258px; */
  transition: opacity 0.3s ease-in-out;
`;

const SanMartin = () => {
  const { t, i18n } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 4); // Cambiado a 4 para cuatro imágenes
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [imageIndices, setImageIndices] = useState([0, 0, 0]);

  const imageSets = [
    [{ src: "sanMartin/sanMartin7.png" }, { src: "sanMartin/sanMartin8.png" }],
    [
      { src: "sanMartin/sanMartin11.png" },
      { src: "sanMartin/SanMartin12.png" },
    ],
  ];
  const imageSets1 = [
    [{ src: "sanMartin/sanMartin9.png" }, { src: "sanMartin/sanMartin10.png" }],
    [
      { src: "sanMartin/sanMartin13.png" },
      { src: "sanMartin/sanmMartin14.png" },
    ],
  ];
  useEffect(() => {
    const intervals = [
      setInterval(() => {
        setImageIndices((prev) => [
          (prev[0] + 1) % imageSets.length,
          prev[1],
          prev[2],
        ]);
      }, 4000),
      setInterval(() => {
        setImageIndices((prev) => [
          prev[0],
          (prev[1] + 1) % imageSets.length,
          prev[2],
        ]);
      }, 4500),
      setInterval(() => {
        setImageIndices((prev) => [
          prev[0],
          prev[1],
          (prev[2] + 1) % imageSets.length,
        ]);
      }, 5000),
    ];

    return () => intervals.forEach(clearInterval);
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
            src="sanMartin/sanMartin.png"
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
                fontWeight: "100",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "white",
                ml: 2,
                mt: 2,
              }}
            >
              {t("clienteProyectos")}:{" "}
              <strong>Municipalidad de San Martín</strong>
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
              {t("proyecto")}: <strong>Libro #JuntasLibresIguales</strong>
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
              {t("fecha")}: <strong>2022</strong>
            </Typography>
          </Box>
        </Box>

        <Box mt={"-4px"}>
          <img
            style={{ objectFit: "cover" }}
            height={"856px"}
            width={"100%"}
            src="/sanMartin/sanMartin1.png"
            alt="libros de 8M"
          />
        </Box>
        <Box height={"856px"} mt={-2} mr={0}>
          <img
            style={{ objectFit: "cover" }}
            width={"100%"}
            height={"935px"}
            src="sanMartin/sanMartin2.png"
            alt="foto de evento de 8M en San Martín"
          />
          {/* Aquí empieza el carrusel de imágenes */}
          <FadingImage
            sx={{
              top: "1808px",
              left: "50%",
              transform: "translateX(-50%)",

              opacity: currentImage === 0 ? 1 : 0,
            }}
          >
            <img width={"900px"} src="sanMartin/sanMartin3.png" alt="" />
          </FadingImage>
          <FadingImage
            sx={{
              top: "1808px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: currentImage === 1 ? 1 : 0,
            }}
          >
            <img width={"900px"} src="sanMartin/sanMartin4.png" alt="" />
          </FadingImage>
          <FadingImage
            sx={{
              top: "1808px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: currentImage === 2 ? 1 : 0,
            }}
          >
            <img width={"900px"} src="sanMartin/sanMartin5.png" alt="" />
          </FadingImage>
          <FadingImage
            sx={{
              top: "1808px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: currentImage === 3 ? 1 : 0,
            }}
          >
            <img width={"900px"} src="sanMartin/sanMartin6.png" alt="" />
          </FadingImage>
        </Box>

        <Box
          mt={-1}
          width={"100%"}
          sx={{
            background: "linear-gradient(225deg, #E3E3E1 0%, #E4E0D4 100%)",
          }}
        >
          <Box display={"flex"} justifyContent={"space-around"}>
            {[0, 1].map((index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  pt: 16,

                  bgcolor: imageSets[imageIndices[index]][index].bgColor,
                }}
              >
                <img
                  width={"600px"}
                  src={imageSets[imageIndices[index]][index].src}
                  alt=""
                />
              </Box>
            ))}
          </Box>
          <Box display={"flex"} justifyContent={"space-around"}>
            {[0, 1].map((index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  pt: 4,

                  bgcolor: imageSets1[imageIndices[index]][index].bgColor,
                }}
              >
                <img
                  width={"600px"}
                  src={imageSets1[imageIndices[index]][index].src}
                  alt=""
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Hidden>

      <Hidden smUp>
        <NavMobile />
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"497px"}
            width={"100%"}
            src="sanMartin/sanMartin.png"
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
            height: "148px",
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
                width: "200px",
                ml: 2,
                mt: 2,
              }}
            >
              {t("clienteProyectos")}:{" "}
              <strong>Municipalidad de San Martín</strong>
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
              {t("proyecto")}: <strong>Libro #JuntasLibresIguales</strong>
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
              {t("fecha")}: <strong>2022</strong>
            </Typography>
          </Box>
        </Box>

        <Box mt={"-4px"}>
          <img
            style={{ objectFit: "cover" }}
            height={"436px"}
            width={"100%"}
            src="/sanMartin/juntasMobile.png"
            alt="libros de 8M"
          />
        </Box>

        <Box bgcolor={"#E4E1D5"} height={"300px"} mt={-2} mr={0}>
          {/* Aquí empieza el carrusel de imágenes */}
          <FadingImage
            sx={{
              top: "978px",
              left: "50%",
              transform: "translateX(-50%)",

              opacity: currentImage === 0 ? 1 : 0,
            }}
          >
            <img width={"300px"} src="sanMartin/sanMartin3.png" alt="" />
          </FadingImage>
          <FadingImage
            sx={{
              top: "978px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: currentImage === 1 ? 1 : 0,
            }}
          >
            <img width={"300px"} src="sanMartin/sanMartin4.png" alt="" />
          </FadingImage>
          <FadingImage
            sx={{
              top: "978px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: currentImage === 2 ? 1 : 0,
            }}
          >
            <img width={"300px"} src="sanMartin/sanMartin5.png" alt="" />
          </FadingImage>
          <FadingImage
            sx={{
              top: "978px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: currentImage === 3 ? 1 : 0,
            }}
          >
            <img width={"300px"} src="sanMartin/sanMartin6.png" alt="" />
          </FadingImage>
        </Box>

        <Box>
          {[0, 1].map((index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",

                bgcolor: imageSets[imageIndices[index]][index].bgColor,
              }}
            >
              <img
                width={"100%"}
                src={imageSets[imageIndices[index]][index].src}
                alt=""
              />
            </Box>
          ))}
        </Box>
        <Box>
          <img width={"100%"} height={"320px"} style={{objectFit:"cover"}} src="/sanMartin/juntasMobile2.png" alt="" />
        </Box>
      </Hidden>
    </>
  );
};

export default SanMartin;
