import { Box, Hidden, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../NavBar/NavBar";
import NavBar1 from "../NavBar/NavBar1";
import NavMobile from "../NavBar/NavMobile";
import NavMobileAzul from "../NavBar/NavMobileAzul";

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

const ScrollableImageContainer1 = styled(Box)`
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

const Franca = () => {
  const { t, i18n } = useTranslation();
  const [imageIndices, setImageIndices] = useState([0, 0, 0]);

  const imageSets = [
    [
      { src: "franca/franca11.png" },
      { src: "franca/franca12.png" },
      { src: "franca/franca13.png" },
    ],
    [
      { src: "franca/franca14.png" },
      { src: "franca/franca15.png" },
      { src: "franca/franca16.png" },
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
      <Hidden mdDown>
        <NavBar1 />
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"782px"}
            width={"100%"}
            src="franca/franca.png"
            alt="Sillón Franca"
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
              {t("clienteProyectos")}: Franca
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
              {t("proyecto")}: Diseño y programación e-commerce
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
              {t("fecha")}: 2024
            </Typography>
          </Box>
        </Box>

        <Box mt={"-4px"}>
          <img
            style={{ objectFit: "cover" }}
            height={"1680px"}
            width={"100%"}
            src="franca/franca1.png"
            alt="fondo de con imágen de sillon"
          />
        </Box>

        <Box
          position={"absolute"}
          top={"942px"}
          sx={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <img src="franca/franca2.png" alt="computadora" />
        </Box>

        <ScrollableImageContainer
          style={{
            top: "1062px",
            left: "50.1%",
            transform: "translateX(-50%)",

            width: "684px",
            height: "418px",
          }}
        >
          <img
            width={"677px"}
            style={{ objectFit: "cover" }}
            src="franca/franca9.png"
            alt="imagen de home de pagina"
          />
        </ScrollableImageContainer>

        <Box
          position={"absolute"}
          top={"1772px"}
          sx={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <img
            height={"616px"}
            style={{ objectFit: "cover" }}
            src="franca/franca3.png"
            alt="celulares con imágeneás de la web mobile"
          />
        </Box>
        <Box
          position={"absolute"}
          top={"1722px"}
          sx={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <img
            width={"100%"}
            height={"726px"}
            style={{ objectFit: "cover" }}
            src="franca/franca10.png"
            alt="celular del medio"
          />
        </Box>

        <ScrollableImageContainer1
          style={{
            top: "1930px",

            left: "50.1%",
            transform: "translateX(-50%)",
            width: "288px",
            height: "366px",
          }}
        >
          <img
            width={"280px"}
            style={{ objectFit: "cover" }}
            src="/franca/franca8.png"
            alt="web mobile"
          />
        </ScrollableImageContainer1>

        <Box
          mt={-1}
          width={"100%"}
          height={"752px"}
          sx={{
            background: "linear-gradient(225deg, #528E87 0%, #172826 100%)",
          }}
        >
          <Box
            m={"auto"}
            width={"100%"}
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
          >
            {[0, 1, 2].map((index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  pt: 14,

                  bgcolor: imageSets[imageIndices[index]][index].bgColor,
                }}
              >
                <img
                  width={"400px"}
                  height={"521px"}
                  src={imageSets[imageIndices[index]][index].src}
                  alt=""
                />
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"844px"}
            width={"100%"}
            src="/franca/franca6.png"
            alt=""
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "3380px",
            transform: "translateX(-50%)",
          }}
        >
          <img
            width={"960px"}
            height={"646px"}
            style={{ objectFit: "cover" }}
            src="/franca/franca7.png"
            alt=""
          />
        </Box>
      </Hidden>

      <Hidden mdUp>
        <NavMobile />
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"497px"}
            width={"100%"}
            src="franca/francaMobile1.png"
            alt="Sillón Franca"
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
              {t("clienteProyectos")}: <strong>Franca</strong>
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
              {t("proyecto")}: <strong>Programa de comunicación interna</strong>
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
              {t("fecha")}: <strong>E-Commerce</strong>
            </Typography>
          </Box>
        </Box>

        <Box mt={"-6px"}>
          <img
            style={{ objectFit: "cover" }}
            height={"718px"}
            width={"100%"}
            src="franca/franca1.png"
            alt="fondo de con imágen de sillon"
          />
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
            src="franca/franca9.png"
            alt="imagen de home de pagina"
          />
        </ScrollableImageContainer>

        {/* <Box
          position={"absolute"}
          top={"1792px"}
          sx={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <img
            height={"616px"}
            style={{ objectFit: "cover" }}
            src="franca/franca3.png"
            alt="celulares con imágeneás de la web mobile"
          />
        </Box> */}
        <Box
          position={"absolute"}
          top={"782px"}
          sx={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <img
            width={"200px"}
            height={"418px"}
            style={{ objectFit: "cover" }}
            src="franca/franca10.png"
            alt="celular del medio"
          />
        </Box>

        <ScrollableImageContainer1
          style={{
            top: "910px",

            left: "50.1%",
            transform: "translateX(-50%)",
            width: "166px",
            height: "202px",
          }}
        >
          <img
            width={"159px"}
            style={{ objectFit: "cover" }}
            src="/franca/franca8.png"
            alt="web mobile"
          />
        </ScrollableImageContainer1>

        <Box
          mt={-1}
          width={"100%"}
          height={"380px"}
          sx={{
            background: "linear-gradient(225deg, #528E87 0%, #172826 100%)",
          }}
        >
          <Box
            m={"auto"}
            width={"100%"}
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
          >
            {[0].map((index) => (
              <Box
                key={index}
                sx={{
                  textAlign: "center",
                  mt: 2.5,
                  bgcolor: imageSets[imageIndices[index]][index].bgColor,
                }}
              >
                <img
                  width={"70%"}
                  src={imageSets[imageIndices[index]][index].src}
                  alt=""
                />
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"270px"}
            width={"100%"}
            src="/franca/franca6.png"
            alt=""
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "1612px",
            transform: "translateX(-50%)",
          }}
        >
          <img
            width={"320px"}
            style={{ objectFit: "cover" }}
            src="/franca/franca7.png"
            alt=""
          />
        </Box>
      </Hidden>
    </>
  );
};

export default Franca;
