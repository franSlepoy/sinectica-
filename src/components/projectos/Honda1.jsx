import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from "react";

const ScrollableImageContainer = styled(Box)`
  position: absolute;
  /* top: 1106px;
  left: 18%; */
  /* width: 65%;
  height: 580px; */ // Adjust height as needed
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  // Custom scrollbar styles
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

const AdditionalImagesContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  background-image: url("/honda1/honda1-19.png");
  background-size: cover;
  background-position: center;
  padding: 20px;
`;

const AnimatedImage = styled("img")`
  opacity: 0;
  transform: translateX(100%);
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }

  &.hidden {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

const honda1 = () => {
  const [showAdditionalImages, setShowAdditionalImages] = useState(false);
  const [showFinalImages, setShowFinalImages] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFinalImages((prev) => !prev);
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box>
        <img
          style={{ objectFit: "cover" }}
          height={"696px"}
          width={"100%"}
          src="/honda1/honda1-1.png"
          alt="taller de Honda"
        />
      </Box>

      <Box
        id="seccionDestino"
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
            Cliente: <strong>Honda Argentina</strong>
          </Typography>
        </Box>
        <Box width={"420px"}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "21.78px",
              color: "#FFFFFF",
            }}
          >
            Proyecto: <strong>Programa de comunicación interna</strong>
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
            Año: <strong>2017 - 2020</strong>
          </Typography>
        </Box>
      </Box>
      <Box width={"100%"} bgcolor={"white"}>
        <Box width="80%" m={"auto"}>
          {" "}
          <img width={"100%"} src="/honda1/honda1-2.png" alt="" />{" "}
        </Box>
      </Box>
      <ScrollableImageContainer
        sx={{
          position: "absolute",
          left: "50%",
          top: "890px",
          transform: "translateX(-50%)",
          width: "832px",
          height: "512px",
        }}
      >
        <img
          width={"828px"}
          style={{ objectFit: "cover" }}
          src="/honda1/honda1-3.png"
          alt=""
        />
      </ScrollableImageContainer>

      <Box mt={-1} display={"flex"} bgcolor={"#F0F0F0"}>
        <Box mt={10} ml={10}>
          <img src="/honda1/honda1-4.png" alt="honda" />
        </Box>
        <Box mt={2} ml={8}>
          <img src="/honda1/honda1-5.png" alt="honda" />
        </Box>
        <Box mt={10} ml={8}>
          <img src="/honda1/honda1-6.png" alt="honda" />
        </Box>
      </Box>
      <Box display={"flex"} bgcolor={"#F0F0F0"}>
        <Box mt={18} ml={20}>
          <img src="/honda1/honda1-7.png" alt="honda" />
        </Box>
        <Box mt={10} ml={20}>
          <img src="/honda1/honda1-8.png" alt="honda" />
        </Box>
      </Box>
      <Box mt={-12}>
        <img
          width={"100%"}
          height={"936px"}
          src="/honda1/honda1-9.png"
          alt="taller de honda"
        />
      </Box>

      <Box
        onMouseEnter={() => setShowAdditionalImages(true)}
        onMouseLeave={() => setShowAdditionalImages(false)}
        position={"absolute"}
        top={"2980px"} // Ajusta la posición según sea necesario
        left={"76%"} // Ajusta la posición según sea necesario
        sx={{ cursor: "pointer" }}
      >
        <img src="/honda1/honda1-10.png" alt="honda" />
      </Box>

      {showAdditionalImages && (
        <>
          <Box position={"absolute"} top={"3000px"} left={"6%"}>
            <img width={"80%"} src="/honda1/honda1-11.png" alt="honda" />
          </Box>
          <Box position={"absolute"} top={"3150px"} left={"40%"}>
            <img width={"80%"} src="/honda1/honda1-12.png" alt="honda" />
          </Box>
          <Box position={"absolute"} top={"3200px"} left={"74%"}>
            <img src="/honda1/honda1-13.png" alt="honda" />
          </Box>
          <Box position={"absolute"} top={"3280px"} left={"20%"}>
            <img width={"80%"} src="/honda1/honda1-14.png" alt="honda" />
          </Box>
          <Box position={"absolute"} top={"3000px"} left={"54%"}>
            <img width={"80%"} src="/honda1/honda1-15.png" alt="honda" />
          </Box>
        </>
      )}

      <AdditionalImagesContainer m={5}>
        <Box>
          <AnimatedImage
            src="/honda1/honda1-16.png"
            alt="propaganda de honda"
            className={showFinalImages ? "visible" : "hidden"}
          />
        </Box>
        <Box>
          <AnimatedImage
            src="/honda1/honda1-17.png"
            alt="propaganda de honda"
            className={showFinalImages ? "visible" : "hidden"}
          />
        </Box>
        <Box>
          <AnimatedImage
            src="/honda1/honda1-18.png"
            alt="propaganda de honda"
            className={showFinalImages ? "visible" : "hidden"}
          />
        </Box>
      </AdditionalImagesContainer>
    </>
  );
};

export default honda1;
