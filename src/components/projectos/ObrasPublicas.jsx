import { Box, Hidden, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../NavBar/NavBar";
import NavBar1 from "../NavBar/NavBar1";
import NavMobile from "../NavBar/NavMobile";

const FadingImage = styled(Box)`
  position: absolute;

  /* left: 47%; */
`;

const ObrasPublicas = () => {
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
      <Hidden smDown>
        <NavBar1 />
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"782px"}
            width={"100%"}
            src="/obrasPublicas/obras1.png"
            alt="imágen autopistas"
          />
        </Box>
        <Box
          sx={{ cursor: "pointer" }}
          position={"absolute"}
          top={"280px"}
          left={"35%"}
        ></Box>

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
              <strong>Ministerio de Obras Públicas</strong>
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
              {t("proyecto")}:{" "}
              <strong>
                Plan de Obras públicas para el Desarrollo de la Nación
              </strong>
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
              {t("fecha")}: <strong>2010 - 2020</strong>
            </Typography>
          </Box>
        </Box>
        <Box mt={"-4px"}>
          <img
            width={"100%"}
            style={{ objectFit: "cover" }}
            height={"782px"}
            src="/obrasPublicas/obras2.png"
            alt=""
          />
        </Box>

        <Box mt={"-4px"}>
          <img
            width={"100%"}
            style={{ objectFit: "cover" }}
            height={"1390px"}
            src="/obrasPublicas/obras14.png"
            alt=""
          />
        </Box>

        <Box>
          <Box
            position={"absolute"}
            sx={{ top: "1600px", left: "26.5%", transform: "translateX(-29%)" }}
          >
            <img height={"632px"} src="/obrasPublicas/obras7.png" alt="libro" />
          </Box>
          <Box
            position={"absolute"}
            sx={{ top: "1600px", left: "64%", transform: "translateX(-29%)" }}
          >
            <img
              height={"282px"}
              src="/obrasPublicas/obras10.png"
              alt="libro"
            />
          </Box>
          <Box
            position={"absolute"}
            sx={{ top: "1900px", left: "64%", transform: "translateX(-29%)" }}
          >
            <img
              height={"282px"}
              src="/obrasPublicas/obras11.png"
              alt="libro"
            />
          </Box>
          <Box
            position={"absolute"}
            sx={{ top: "2250px", left: "50%", transform: "translateX(-50%)" }}
          >
            <img width={"1000px"} src="/obrasPublicas/obras8.png" alt="libro" />
          </Box>
        </Box>

        <Box mt={"-4px"} width={"100%"} display={"flex"}>
          <Box width={"30%"}>
            <img
              style={{ objectFit: "cover" }}
              width={"100%"}
              height={"369px"}
              src="/obrasPublicas/obras3.png"
              alt=""
            />
          </Box>
          <Box width={"40%"}>
            <img
              style={{ objectFit: "cover" }}
              width={"100%"}
              height={"369px"}
              src="/obrasPublicas/obras4.png"
              alt=""
            />
          </Box>

          <Box width={"30%"}>
            <img
              style={{ objectFit: "cover" }}
              width={"100%"}
              height={"369px"}
              src="/obrasPublicas/obras5.png"
              alt=""
            />
          </Box>
        </Box>

        <Box mt={"-4px"}>
          <img
            style={{ objectFit: "cover" }}
            width={"100%"}
            src="/obrasPublicas/obras12.png"
            alt=""
          />
        </Box>
        <Box mt={"-4px"}>
          <img
            style={{ objectFit: "cover", height: "800px" }}
            width={"100%"}
            src="/obrasPublicas/obras13.png"
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
            src="/obrasPublicas/obras1.png"
            alt="imágen autopistas"
          />
        </Box>
        <Box
          sx={{ cursor: "pointer" }}
          position={"absolute"}
          top={"280px"}
          left={"35%"}
        ></Box>

        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.16)",
            position: "absolute",
            top: "320px",
            width: "80%",
            left: "10%",
            height: "168px",
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
              <strong>Ministerio de Obras Públicas</strong>
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
              {t("proyecto")}:{" "}
              <strong>
                Plan de Obras públicas para el Desarrollo de la Nación
              </strong>
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
              {t("fecha")}: <strong>2010 - 2020</strong>
            </Typography>
          </Box>
        </Box>
        <Box mt={"-4px"}>
          <img
            width={"100%"}
            style={{ objectFit: "cover" }}
            height={"353px"}
            src="/obrasPublicas/obras2.png"
            alt=""
          />
        </Box>

        <Box mt={"-4px"}>
          <img
            width={"100%"}
            style={{ objectFit: "cover" }}
            height={"415px"}
            src="/obrasPublicas/obras14.png"
            alt=""
          />
        </Box>
        
        <Box width={"80%"}>
          <FadingImage
            sx={{
              top: "898px",
              
              left: "50%",
              transform: "translateX(-50%)",
              opacity: showSecondImage ? 0 : 1,
            }}
          >
            <img
              width={"280px"}
              height={"325px"}
              src="/obrasPublicas/obras11.png"
              alt="PSA revista"
            />
          </FadingImage>
          <FadingImage
            sx={{
              top: "898px",
           
              left: "50%",
              transform: "translateX(-50%)",
              opacity: showSecondImage ? 1 : 0,
            }}
          >
            <img
              width={"280px"}
              height={"325px"}
              src="/obrasPublicas/obras10.png"
              alt="PSA revista"
            />
          </FadingImage>
        </Box>

        <Box>
          <FadingImage
            sx={{
              top: "1244px",
              width: "100%",
              left: "50.5%",
              transform: "translateX(-50%)",
              opacity: showSecondImage ? 0 : 1,
            }}
          >
            <img
              width={"100%"}
              height={"325px"}
              src="/obrasPublicas/obras16.png"
              alt="PSA revista"
            />
          </FadingImage>
          <FadingImage
            sx={{
              top: "1244px",
              width: "100%",
              left: "50.5%",
              transform: "translateX(-50%)",
              opacity: showSecondImage ? 1 : 0,
            }}
          >
            <img
              width={"100%"}
              height={"325px"}
              src="/obrasPublicas/obras15.png"
              alt="PSA revista"
            />
          </FadingImage>
        </Box>

        <Box position={"absolute"} top={"1562px"}>
          <img
            height={"287px"}
            width={"100%"}
            src="/obrasPublicas/obras4.png"
            alt=""
          />
        </Box>
        <Box
          position={"absolute"}
          top={"1882px"}
          sx={{ pb: 4, left: "50.5%", transform: "translateX(-50%)" }}
        >
          <img
            height={"262px"}
            width={"100%"}
            src="/obrasPublicas/obras7.png"
            alt=""
          />
        </Box>
      </Hidden>
    </>
  );
};

export default ObrasPublicas;
