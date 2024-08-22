import { Box, Typography } from "@mui/material";

import MouseParticleTrail1 from "./MouseParticleTrail1";
import { Link } from "react-router-dom";
import Example from "./Example";
import Mouse2 from "./Mouse2";

const Home = () => {
  return (
    <>
      <Box
        position={"absolute"}
        sx={{
          zIndex: 10,
          top: "20px",
          left: "11%",
          transform: "translateX(-50%)",
        }}
      >
        <Typography sx={{ fontFamily: "acumin-pro", fontSize: "35px" }}>
          Synesthesia
        </Typography>
      </Box>
      <Box
        position={"absolute"}
        sx={{ top: "20px", left: "90%", transform: "translateX(-50%)" }}
      >
        <Typography
          component={Link}
          to={"/proyectos"}
          sx={{ fontFamily: "acumin-pro", fontSize: "35px", color: "black" }}
        >
          Proyectos
        </Typography>
      </Box>
      <Box
        position={"absolute"}
        sx={{
          top: "90%",
          left: "4%",
        }}
      >
        <Typography sx={{ fontFamily: "acumin-pro", fontSize: "25px" }}>
          synesthesia@gmail.com
        </Typography>
      </Box>
      <Box
        position={"absolute"}
        sx={{ top: "40%", left: "50.2%", transform: "translateX(-50%)" }}
      >
        <Typography
          sx={{ fontSize: "80px", fontFamily: "acumin-pro",  }}
          variant="h3"
        >
          Diseño con codigo
        </Typography>
        <Typography
          sx={{
            zIndez: 10,
            fontSize: "80px",
            fontFamily: "acumin-pro",
            color: "white",
          }}
          variant="h3"
        >
          Sinestesia
        </Typography>
      </Box>
      {/*    <Example/> */}
      <Mouse2 />
      {/*  <MouseParticleTrail1 /> */}
    </>
  );
};

export default Home;
