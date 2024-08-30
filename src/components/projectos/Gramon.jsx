import { Box, Hidden, Typography, styled } from "@mui/material";
import NavBar1 from "../NavBar/NavBar1";
import { useEffect, useState } from "react";

const FadingImage = styled(Box)`
  position: absolute;

  /* left: 47%; */
  transition: opacity 0.5s ease-in-out;
`;

const Gramon = () => {
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
            height={"700px"}
            width={"100%"}
            src="/gramon/gramon1.png"
            alt=""
          />
        </Box>

        <Box
          pt={5}
          mt={-1}
          sx={{
            backgroundColor: "#ABDDD5",
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
                color: "black",
              }}
            >
              Cliente: <strong> Laboratorio Gramon</strong>
            </Typography>
          </Box>
          <Box width={"420px"}>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "black",
              }}
            >
              Proyecto: <strong>Diseño de identidad Megacistin</strong>
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "black",
              }}
            >
              Año: <strong>2010</strong>
            </Typography>
          </Box>
        </Box>

        <Box>
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
