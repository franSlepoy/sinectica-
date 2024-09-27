import { Box, Hidden, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../NavBar/NavBar";
import NavBar1 from "../NavBar/NavBar1";
import NavMobile from "../NavBar/NavMobile";

const ScrollableImageContainer = styled(Box)`
  position: absolute;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #dbd9d9;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #969393;
  }
`;

const FadingImage = styled(Box)`
  position: absolute;

  /* top: 1808px;
  left: 258px; */
  transition: opacity 0.3s ease-in-out;
`;

const honda1 = () => {
  const { t, i18n } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 4); // Cambiado a 4 para cuatro imágenes
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
            src="/honda1/honda1-1.png"
            alt="taller de Honda"
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
              {t("clienteProyectos")}: Honda Argentina
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
              {t("proyecto")}: Programa de comunicación interna
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
              {t("fecha")}: <strong>2017 - 2020</strong>
            </Typography>
          </Box>
        </Box>
        {/*  <Box width={"100%"} bgcolor={"white"}>
          <Box position={"absolute"} sx={{left: "50%", transform: "translateX(-50%)"}} width="80%" m={"auto"}>
            {" "}
            <img width={"1130px"} style={{objectFit:"cover"}} src="/honda1/honda1-2.png" alt="" />{" "}
          </Box>
        </Box>
        <ScrollableImageContainer
          sx={{
            position: "absolute",
            left: "50.2%",
            top: "936px",
            transform: "translateX(-50%)",
            width: "816px",
            height: "512px",
          }}
        >
          <img
            width={"808px"}
            height={"400px"}
            style={{ objectFit: "cover" }}
            src="/honda1/honda1-3.png"
            alt=""
          />
        </ScrollableImageContainer> */}
        <Box
          position={"absolute"}
          top={"942px"}
          sx={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <img
            width={"777px"}
            style={{ objectFit: "cover" }}
            src="franca/compuMobile.png"
            alt="computadora"
          />
        </Box>

        <ScrollableImageContainer
          style={{
            top: "982px",
            left: "50.2%",
            transform: "translateX(-50%)",

            width: "598px",
            height: "382px",
          }}
        >
          <img
            width={"591px"}
            style={{ objectFit: "cover" }}
            src="honda1/honda1-3.png"
            alt="imagen de home de pagina"
          />
        </ScrollableImageContainer>

        <Box width={"100%"} bgcolor={"#F0F0F0"}>
          <Box
            position={"absolute"}
            sx={{
              top: "1500px",
              width: "100%",
            }}
            display={"flex"}
            justifyContent={"center"}
            bgcolor={"#F0F0F0"}
          >
            <Box mt={20} ml={10}>
              <img src="/honda1/honda1-4.png" alt="hondaSOy" />
            </Box>
            <Box mt={10} ml={8}>
              <img src="/honda1/honda1-5.png" alt="honda" />
            </Box>
            <Box mt={20} ml={8}>
              <img src="/honda1/honda1-6.png" alt="honda" />
            </Box>
          </Box>
        </Box>

        <Box
          position={"absolute"}
          sx={{ top: "2200px" }}
          display={"flex"}
          justifyContent={"center"}
          bgcolor={"#F0F0F0"}
          width={"100%"}
          pb={4}
        >
          <Box mt={10} ml={20}>
            <img height={"600px"} src="/honda1/honda1-7.png" alt="honda" />
          </Box>
          <Box mt={10} ml={20}>
            <img height={"569px"} src="/honda1/honda1-8.png" alt="honda" />
          </Box>
        </Box>
        <Box width={"100%"} position={"absolute"} sx={{ top: "2910px" }}>
          <img
            style={{ objectFit: "cover" }}
            width={"100%"}
            height={"1000px"}
            src="/honda1/honda1-9.png"
            alt="taller de honda"
          />
        </Box>

        <Box
          position={"absolute"}
          top={"2990px"} // Ajusta la posición según sea necesario
          left={"80%"} // Ajusta la posición según sea necesario
          sx={{ cursor: "pointer", zIndex:20 }}

        >
          <img width={"80%"} src="/honda1/honda1-10.png" alt="honda" />
        </Box>
        <>
          <Box zIndex={20} position={"absolute"} top={"3400px"} left={"20%"}>
            <img width={"80%"} src="/honda1/honda1-11.png" alt="honda" />
          </Box>
          <Box zIndex={20} position={"absolute"} top={"3550px"} left={"55%"}>
            <img width={"80%"} src="/honda1/honda1-12.png" alt="honda" />
          </Box>
          <Box zIndex={20} position={"absolute"} top={"4080px"} left={"20%"}>
            <img width={"340px"} src="/honda1/honda1-22.png" alt="honda" />
          </Box>
          <Box zIndex={20} position={"absolute"} top={"4180px"} left={"55%"}>
            <img width={"80%"} src="/honda1/honda1-14.png" alt="honda" />
          </Box>
          <Box zIndex={20} position={"absolute"} top={"4180px"} left={"70%"}>
            <img width={"80%"} src="/honda1/honda1-15.png" alt="honda" />
          </Box>
          <Box zIndex={20} position={"absolute"} top={"3880px"} left={"40%"}>
            <img width={"300px"} src="/honda1/honda1-23.png" alt="honda" />
          </Box>
        </>

        <Box bgcolor={"#F0F0F0"}  height={"730px"} width={"100%"} position={"Absolute"} top={"3910px"} zIndex={0}></Box>

        <Box
          width={"100%"}
          position={"Absolute"}
          top={"4700px"}
          display={"flex"}
          justifyContent={"space-evenly"}
        >
          <Box>
            <img
              height={"525px"}
              src="/honda1/honda1-16.png"
              alt="propaganda de honda"
            />
          </Box>
          <Box>
            <img
              height={"525px"}
              src="/honda1/honda1-17.png"
              alt="propaganda de honda"
            />
          </Box>
          <Box>
            <img
              height={"525px"}
              src="/honda1/honda1-18.png"
              alt="propaganda de honda"
            />
          </Box>
        </Box>
        <Box position={"absolute"} width={"100%"} sx={{ top: "5280px" }}>
          <img
           style={{objectFit:"cover"}}
            width={"100%"}
           height={"750px"}
            src="/honda1/honda1-19.png"
            alt=""
          />
        </Box>
      </Hidden>

      <Hidden smUp>
        <NavMobile />
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"497px"}
            width={"100%"}
            src="/honda1/honda1-1.png"
            alt="taller de Honda"
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
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "white",
                ml: 2,
                mt: 2,
              }}
            >
              {t("clienteProyectos")}: Honda Argentina
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
              {t("proyecto")}: Programa de comunicación interna
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
              {t("fecha")}: 2017 - 2020
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
            src="honda1/honda1-3.png"
            alt="imagen de home de pagina"
          />
        </ScrollableImageContainer>

        <Box position={"absolute"} top={"1168px"}>
          <img
            width={"100%"}
            height={"400px"}
            style={{ objectFit: "cover" }}
            src="/honda1/honda1-9.png"
            alt=""
          />
        </Box>
        <Box
          position={"absolute"}
          top={"1428px"}
          sx={{ left: "50.2%", transform: "translateX(-50%)" }}
        >
          <img
            width={"100%"}
            height={"90px"}
            style={{ objectFit: "cover" }}
            src="/honda1/honda1-10.png"
            alt=""
          />
        </Box>

        <Box m={"auto"} width={"80%"} height={"900px"} pb={10}>
          <FadingImage
            sx={{
              top: "1608px",
              left: "56%",
              transform: "translateX(-50%)",
              width: "80%",
              pb: 2,

              opacity: currentImage === 0 ? 1 : 0,
            }}
          >
            <img
              height={"380px"}
              width={"86%"}
              src="/honda1/honda1-11.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              top: "1608px",
              left: "56%",
              transform: "translateX(-50%)",
              width: "80%",
              opacity: currentImage === 1 ? 1 : 0,
            }}
          >
            <img
              height={"380px"}
              width={"86%"}
              src="/honda1/honda1-12.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              top: "1608px",
              left: "56%",
              transform: "translateX(-50%)",
              width: "80%",
              opacity: currentImage === 2 ? 1 : 0,
            }}
          >
            <img
              height={"380px"}
              width={"86%"}
              src="/honda1/honda1-13.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              top: "1608px",
              left: "56%",
              transform: "translateX(-50%)",
              width: "80%",

              opacity: currentImage === 3 ? 1 : 0,
            }}
          >
            <img
              width={"86%"}
              height={"380px"}
              src="/honda1/honda1-14.png"
              alt=""
            />
          </FadingImage>
        </Box>

        <Box m={"auto"} width={"80%"} height={"900px"}>
          <FadingImage
            sx={{
              top: "778px",
              left: "56%",
              transform: "translateX(-50%)",
              width: "80%",
              pb: 2,

              opacity: currentImage === 0 ? 1 : 0,
            }}
          >
            <img
              height={"340px"}
              width={"86%"}
              src="/honda1/honda1-4.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              top: "778px",
              left: "56%",
              transform: "translateX(-50%)",
              width: "80%",
              opacity: currentImage === 1 ? 1 : 0,
            }}
          >
            <img
              height={"340px"}
              width={"86%"}
              src="/honda1/honda1-5.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              top: "778px",
              left: "56%",
              transform: "translateX(-50%)",
              width: "80%",
              opacity: currentImage === 2 ? 1 : 0,
            }}
          >
            <img
              height={"340px"}
              width={"86%"}
              src="/honda1/honda1-6.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              top: "778px",
              left: "56%",
              transform: "translateX(-50%)",
              width: "80%",

              opacity: currentImage === 3 ? 1 : 0,
            }}
          >
            <img
              width={"86%"}
              height={"340px"}
              src="/honda1/honda1-8.png"
              alt=""
            />
          </FadingImage>
        </Box>

        <Box
          position={"absolute"}
          top={"1428px"}
          sx={{ left: "50.2%", transform: "translateX(-50%)" }}
        >
          <img
            width={"100%"}
            height={"90px"}
            style={{ objectFit: "cover" }}
            src="/honda1/honda1-10.png"
            alt=""
          />
        </Box>

        {/*  <Box width={"80%"} height={"900px"} pb={10}>
          <FadingImage
            sx={{
              top: "2028px",
              left: "12%",
              width: "80%",
              pb: 2,

              opacity: currentImage === 0 ? 1 : 0,
            }}
          >
            <img
              height={"400px"}
              width={"100%"}
              src="/honda1/honda1-16.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              top: "2028px",
              left: "12%",
              width: "80%",
              opacity: currentImage === 1 ? 1 : 0,
            }}
          >
            <img
              height={"400px"}
              width={"100%"}
              src="/honda1/honda1-17.png"
              alt=""
            />
          </FadingImage>
          <FadingImage
            sx={{
              top: "2028px",
              left: "12%",
              width: "80%",

              opacity: currentImage === 2 ? 1 : 0,
            }}
          >
            <img
              height={"400px"}
              width={"100%"}
              src="/honda1/honda1-18.png"
              alt=""
            />
          </FadingImage>
        </Box> */}
      </Hidden>
    </>
  );
};

export default honda1;
