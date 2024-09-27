import { Box, Hidden, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../NavBar/NavBar";
import NavBar1 from "../NavBar/NavBar1";
import WithLoader from "../WithLoader";
import NavMobile from "../NavBar/NavMobile";

const ScrollableImageContainer = styled(Box)`
  position: absolute;
  /* top: 1096px; */
  /* left: 19.9%;
  transform: translateX(-20%); */
  width: 406px;
  height: 245px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const ScrollableImageContainer1 = styled(Box)`
  position: absolute;
  /* top: 7954px;
  left: 254px; */
  width: 406px;
  height: 245px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
const FadingImage = styled(Box)`
  position: absolute;

  /* left: 47%; */
`;

const FadingImage1 = styled(Box)``;

const FadingImage2 = styled(Box)`
  position: absolute;
  transition: opacity 0.5s ease-in-out;
`;

const FadingImage3 = styled(Box)`
  transition: opacity 0.5s ease-in-out;
`;
const FadingImage4 = styled(Box)`
  position: absolute;
  transition: opacity 0.5s ease-in-out;
`;
const FadingImage5 = styled(Box)`
  position: absolute;
  transition: opacity 0.5s ease-in-out;
`;
const FadingImage6 = styled(Box)`
  position: absolute;
  transition: opacity 0.5s ease-in-out;
`;

const PSA = () => {
  const { t, i18n } = useTranslation();
  const [imageIndices, setImageIndices] = useState([0, 0, 0]);
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const imageSets = [
    [
      { src: "psa/psa3.png", bgColor: "#F04F50" },
      { src: "psa/psa4.png", bgColor: "#E9E8E3" },
      { src: "psa/psa5.png", bgColor: "white" },
    ],
    [
      { src: "psa/psa6.png", bgColor: "#E9E8E3" },
      { src: "psa/psa7.png", bgColor: "#F04F50" },
      { src: "psa/psa8.png", bgColor: "#2F5183" },
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

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecondImage((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
  
      <Hidden  smDown>
        <NavBar1 />
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"782px"}
            width={"100%"}
            src="psa/psa.png"
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
              {t("clienteProyectos")}: PSA Peugeot Citroën
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "acumin-pro",
                fontWeight: "100",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "white",
                ml: 2,
                mt: 1,
              }}
            >
              {t("proyecto")}: Programa de comunicación interna
            </Typography>
          </Box>
          <Box>
            <Typography
               sx={{
                fontFamily: "acumin-pro",
                fontWeight: "100",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "white",
                ml: 2,
                mt: 1,
              }}
            
            >
              {t("fecha")}: 2010 - 2020
            </Typography>
          </Box>
        </Box>

        <Box mt={"-4px"}>
          <img
            style={{ objectFit: "cover" }}
            height={"856px"}
            width={"100%"}
            src="/psa/psa1.png"
            alt="foto de auto"
          />
        </Box>

        <Box
          position={"absolute"}
          top={"1038px"}
          sx={{ left: "20%", transform: "translateX(-29%)" }}
        >
          <img
            width={"568px"}
            height={"384px"}
            style={{ objectFit: "cover" }}
            src="psa/psa38.png"
            alt="computadora"
          />
        </Box>

        <ScrollableImageContainer
          top={"1096px"}
          sx={{ left: "20%", transform: "translateX(-20%)" }}
        >
          <img
            width={"398px"}
            height={"573px"}
            style={{ objectFit: "cover" }}
            src="/psa/psa2.png"
            alt="diseño de comunicación"
          />
        </ScrollableImageContainer>

        <Box height={"650px"} display={"flex"} mt={-1}>
          {[0, 1, 2].map((index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                pt: 8,
                pb: 8,
                width: "33.3%",
                bgcolor: imageSets[imageIndices[index]][index].bgColor,
              }}
            >
              <img
                width={"320px"}
                src={imageSets[imageIndices[index]][index].src}
                alt="carrusel de imágenes"
              />
            </Box>
          ))}
        </Box>

        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"782px"}
            width={"100%"}
            src="/psa/psa9.png"
            alt="PSA revista"
          />
        </Box>
        <FadingImage
          sx={{
            top: "2400px",
            left: "70%",
            transform: "translateX(-50%)",
            opacity: showSecondImage ? 0 : 1,
          }}
        >
          <img width={"636px"} src="/psa/psa10.png" alt="PSA revista" />
        </FadingImage>
        <FadingImage
          sx={{
            top: "2400px",
            left: "70%",
            transform: "translateX(-50%)",
            opacity: showSecondImage ? 1 : 0,
          }}
        >
          <img width={"636px"} src="/psa/psa11.png" alt="PSA revista" />
        </FadingImage>

        <Box mt={-1}>
          <img
            style={{ objectFit: "cover" }}
            height={"756px"}
            width={"100%"}
            src="/psa/psa12.png"
            alt="públicidad de seguridad vial"
          />
        </Box>

        <Box width={"100%"} display={"flex"} height={"782px"}>
          <Box width={"50%"} height={"782px"}>
            <img
              width={"100%"}
              style={{ objectFit: "cover" }}
              height={"782px"}
              src="/psa/psa13.png"
              alt="compu"
            />
          </Box>
          <Box width={"50%"} height={"782px"} bgcolor={"#F04F50"}>
            <FadingImage1
              sx={{
                position: "absolute",
                top: "3866px",
                width: "50%",
                /*   left: '75%',
          transform: 'translateX(-50%)', */
                opacity: showSecondImage ? 0 : 1,
              }}
            >
              <img
                width={"100%"}
                style={{ objectFit: "cover" }}
                height={"782px"}
                src="/psa/psa14.png"
                alt="seguridad vial amarillo"
              />
            </FadingImage1>
            <FadingImage1
              sx={{
                position: "absolute",
                top: "3866px",
                opacity: showSecondImage ? 1 : 0,
                width: "50%",
              }}
            >
              <img
                style={{ objectFit: "cover" }}
                width={"100%"}
                height={"782px"}
                src="/psa/psa15.png"
                alt="seguridad vial celeste"
              />
            </FadingImage1>
          </Box>
        </Box>

        <Box position="relative" height="782px">
          <FadingImage2
            sx={{
              opacity: showSecondImage ? 0 : 1,
              top: "0",
              left: 0,
              right: 0,
            }}
          >
            <img
              width={"100%"}
              style={{ objectFit: "cover" }}
              height={"782px"}
              src="/psa/psa16.png"
              alt="imagenes de fondo, autos"
            />
          </FadingImage2>
          <FadingImage2
            sx={{
              opacity: showSecondImage ? 1 : 0,
              top: "0",
              left: 0,
              right: 0,
            }}
          >
            <img
              width={"100%"}
              style={{ objectFit: "cover" }}
              height={"782px"}
              src="/psa/psa17.png"
              alt="imagenes de fondo, autos"
            />
          </FadingImage2>
        </Box>

        

        <Box>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            bgcolor={"#E9E8E3"}
            pt={8}
            pb={6}
          >
            <Box>
              <img
                height={"1080px"}
                width={"100%"}
                src="/psa/psa19.png"
                alt="publicidad, doy una mano"
              />
            </Box>
            <Box>
              <img
               height={"1080px"}
                width={"100%"}
                src="/psa/psa20.png"
                alt="publicidad, doy una mano"
              />
            </Box>
          </Box>
        </Box>

        <Box display={"flex"}>
          <Box width={"50%"}>
            <Box position="relative" mt={12} ml="18%">
              <FadingImage3
                sx={{
                  opacity: currentImage === 0 ? 1 : 0,
                  position: "absolute",
                  top: 0,
                  left: "40%",
                  transform: "translateX(-50%)",
                }}
              >
                <img
                  width={"382px"}
                  height={"516px"}
                  src="/psa/psa22.png"
                  alt="tapa de revista en carrusel"
                />
              </FadingImage3>
              <FadingImage3
                sx={{
                  opacity: currentImage === 1 ? 1 : 0,
                  position: "absolute",
                  top: 0,
                  left: "40%",
                  transform: "translateX(-50%)",
                }}
              >
                <img
                  width={"382px"}
                  height={"516px"}
                  src="/psa/psa23.png"
                  alt="tapa de revista en carrusel"
                />
              </FadingImage3>
              <FadingImage3
                sx={{
                  opacity: currentImage === 2 ? 1 : 0,
                  position: "absolute",
                  top: 0,
                  left: "40%",
                  transform: "translateX(-50%)",
                }}
              >
                <img
                  width={"382px"}
                  height={"516px"}
                  src="/psa/psa24.png"
                  alt="tapa de revista en carrusel"
                />
              </FadingImage3>
            </Box>
          </Box>

          <Box width={"50%"}>
            <img
              width={"100%"}
              style={{ objectFit: "cover" }}
              height={"782px"}
              src="psa/psa21.png"
              alt="imagen de tablet"
            />
          </Box>
        </Box>

        <Box mt={-1}>
          <img
            style={{ objectFit: "cover" }}
            height={"856px"}
            width={"100%"}
            src="/psa/psa1.png"
            alt=""
          />
        </Box>
        <Box
          position={"absolute"}
          top={"7664px"}
          sx={{ left: "32%", transform: "translateX(-50%)" }}
        >
          <img
            width={"568px"}
            height={"384px"}
            style={{ objectFit: "cover" }}
            src="psa/psa38.png"
            alt="computadora"
          />
        </Box>

        <ScrollableImageContainer1
          top={"7716px"}
          sx={{ left: "32.1%", transform: "translateX(-50%)" }}
        >
          <img
            width={"399px"}
            height={"673px"}
            style={{ objectFit: "cover" }}
            src="/psa/psa26.png"
            alt=""
          />
        </ScrollableImageContainer1>

        <Box mt={-1}>
          <img
            style={{ objectFit: "cover" }}
            height={"782px"}
            width={"100%"}
            src="psa/psa27.png"
            alt="foto de auto honda"
          />
        </Box>

        <Box mt={-1} position="relative" height="782px">
          <FadingImage4
            sx={{
              opacity: showSecondImage ? 0 : 1,
              top: "0",
              left: 0,
              right: 0,
            }}
          >
            <img
              style={{ objectFit: "cover" }}
              height={"782px"}
              width={"100%"}
              src="/psa/psa29.png"
              alt=""
            />
          </FadingImage4>
          <FadingImage4
            sx={{
              opacity: showSecondImage ? 1 : 0,
              top: "0",
              left: 0,
              right: 0,
            }}
          >
            <img
              style={{ objectFit: "cover" }}
              height={"782px"}
              width={"100%"}
              src="/psa/psa28.png"
              alt="imagen de fondo, autos"
            />
          </FadingImage4>
        </Box>

        <Box>
          <FadingImage5
            sx={{
              opacity: showSecondImage ? 0 : 1,
              top: "9200px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img
              width={"354px"}
              height={"567px"}
              src="/psa/psa30.png"
              alt="imagen de fondo, autos"
            />
          </FadingImage5>
          <FadingImage5
            sx={{
              opacity: showSecondImage ? 1 : 0,
              top: "9200px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <img width={"354px"} height={"567px"} src="/psa/psa31.png" alt="" />
          </FadingImage5>
        </Box>
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"856px"}
            width={"100%"}
            src="psa/psa32.png"
            alt="foto de auto honda"
          />
        </Box>
        <Box>
          <FadingImage6
            sx={{
              opacity: showSecondImage ? 0 : 1,
              top: "10006px",
              left: "23%",
              transform: "translateX(-50%)",
            }}
          >
            <img width={"423px"} height={"598px"} src="/psa/psa34.png" alt="" />
          </FadingImage6>
          <FadingImage6
            sx={{
              opacity: showSecondImage ? 1 : 0,
              top: "10006px",
              left: "23%",
              transform: "translateX(-50%)",
            }}
          >
            <img width={"423px"} height={"567px"} src="/psa/psa35.png" alt="" />
          </FadingImage6>
        </Box>
      </Hidden>

      <Hidden smUp>
        <NavMobile />
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"497px"}
            width={"100%"}
            src="psa/psa.png"
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
            height: "158px",
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
              {t("clienteProyectos")}: PSA Peugeot Citroën
            </Typography>
          </Box>
          <Box>
            <Typography
               sx={{
                fontFamily: "acumin-pro",
                fontWeight: "100",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "white",
                ml: 2,
                mt: 1,
              }}
            >
              {t("proyecto")}: Programa de comunicación interna
            </Typography>
          </Box>
          <Box>
            <Typography
               sx={{
                fontFamily: "acumin-pro",
                fontWeight: "100",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "white",
                ml: 2,
                mt: 1,
              }}
            >
              {t("fecha")}:2010 - 2020
            </Typography>
          </Box>
        </Box>

        <Box
          position={"absolute"}
          top={"542px"}
          sx={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <img
            width={"300px"}
            style={{ objectFit: "cover" }}
            src="franca/compuMobile.png"
            alt="computadora"
          />
        </Box>

        <ScrollableImageContainer
          style={{
            top: "558px",
            left: "50.2%",
            transform: "translateX(-50%)",

            width: "228px",
            height: "142px",
          }}
        >
          <img
            width={"220px"}
            style={{ objectFit: "cover" }}
            src="/psa/psa2.png"
            alt="imagen de home de pagina"
          />
        </ScrollableImageContainer>

       

        <Box m={"auto"} width={"80%"} height={"900px"} pb={10}>
          <FadingImage
            sx={{
              top: "768px",
              left: "51.4%",
              transform: "translateX(-50%)",
              width: "320px",
              pb: 2,

              opacity: currentImage === 0 ? 1 : 0,
            }}
          >
            <img
                width={"320px"}
                height={"543px"}
                src="/psa/psa3.png"
                alt="PSA revista"
            />
          </FadingImage>
          <FadingImage
            sx={{
              top: "768px",
              left: "51.4%",
              transform: "translateX(-50%)",
              width: "320px",
              opacity: currentImage === 1 ? 1 : 0,
            }}
          >
            <img
                width={"320px"}
                height={"543px"}
                src="/psa/psa4.png"
                alt="PSA revista"
            />
          </FadingImage>
          <FadingImage
            sx={{
              top: "768px",
              left: "51.4%",
              transform: "translateX(-50%)",
              width: "320px",
              opacity: currentImage === 2 ? 1 : 0,
            }}
          >
            <img
                 width={"320px"}
                 height={"543px"}
                 src="/psa/psa3.png"
                 alt="PSA revista"
            />
          </FadingImage>
          <FadingImage
            sx={{
              top: "768px",
              left: "51.4%",
              transform: "translateX(-50%)",
              width: "320px",

              opacity: currentImage === 3 ? 1 : 0,
            }}
          >
            <img
                 width={"320px"}
                 height={"543px"}
                 src="/psa/psa4.png"
                 alt="PSA revista"
            />
          </FadingImage>
        </Box>

        <Box bgcolor={"#D7D6D5"}>
          <FadingImage
            sx={{
              top: "1325px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: showSecondImage ? 0 : 1,
            }}
          >
            <img  height={"279px"} src="/psa/psa10.png" alt="PSA revista" />
          </FadingImage>
          <FadingImage
            sx={{
              top: "1325px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: showSecondImage ? 1 : 0,
            }}
          >
            <img height={"279px"} src="/psa/psa11.png" alt="PSA revista" />
          </FadingImage>
        </Box>

        <Box
          position={"absolute"}
          top={"1640px"}
          sx={{ }}
        >
          <img
            style={{ objectFit: "cover" }}
            
            width={"100%"}
            src="/psa/psa12.png"
            alt="públicidad de seguridad vial"
          />
        </Box>

        <Box>
          <Box width={"100%"} height={"677px"} >
            <FadingImage1
              sx={{
                position: "absolute",
                top: "1886px",
                width: "100%",
                /*   left: '75%',
          transform: 'translateX(-50%)', */
                opacity: showSecondImage ? 0 : 1,
              }}
            >
              <img
                width={"100%"}
                style={{ objectFit: "cover" }}
                height={"677px"}
                src="/psa/psa14.png"
                alt="seguridad vial amarillo"
              />
            </FadingImage1>
            <FadingImage1
              sx={{
                position: "absolute",
                top: "1886px",
                opacity: showSecondImage ? 1 : 0,
                width: "100%",
              }}
            >
              <img
                style={{ objectFit: "cover" }}
                width={"100%"}
                height={"677px"}
                src="/psa/psa15.png"
                alt="seguridad vial celeste"
              />
            </FadingImage1>
          </Box>
        </Box>

       

        <Box height="482px">
          <FadingImage2
            sx={{
              opacity: showSecondImage ? 0 : 1,
              top: "2560px",
              left: 0,
              right: 0,
            }}
          >
            <img
              width={"100%"}
              style={{ objectFit: "cover" }}
              height={"192px"}
              src="/psa/psa16.png"
              alt="imagenes de fondo, autos"
            />
          </FadingImage2>
          <FadingImage2
            sx={{
              opacity: showSecondImage ? 1 : 0,
              top: "2560px",
              left: 0,
              right: 0,
            }}
          >
            <img
              width={"100%"}
              style={{ objectFit: "cover" }}
              height={"192px"}
              src="/psa/psa17.png"
              alt="imagenes de fondo, autos"
            />
          </FadingImage2>
        </Box>

        

        <Box  sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }} position={"absolute"} width={"80%"}  top={"2788px"}>
          <img width={"100%"} src="/psa/psa19.png" alt="" />
        </Box>
      </Hidden>
    </>
  );
};

export default PSA;
