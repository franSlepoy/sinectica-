import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Mouse2 from "./Mouse2";
import Example from "./Example";
import MouseParticleTrail1 from "./MouseParticleTrail1";
import MouseParticleTrail2 from "./MouseParticleTrail2";


const Home = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <Box sx={{ position: "absolute",
          zIndex: 10,
          top: "90%",
          left: "90%",
          transform: "translateX(-50%)",}}>
        <Typography
          onClick={toggleLanguage}
          sx={{
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
            fontFamily: "acumin-pro",
            fontSize: "25px",
          }}
        >
          {i18n.language === "en" ? "ESP" : "ENG"}
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          zIndex: 10,
          top: "20px",
          left: "10%",
          transform: "translateX(-50%)",
        }}
      >
        <Typography sx={{ fontFamily: "acumin-pro", fontSize: "35px" }}>
         Sinéctica
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
         {t("homeProyectos")}
        </Typography>
      </Box>
      <Box
        position={"absolute"}
        sx={{
          top: "90%",
       
          left: "13.5%",
          transform: "translateX(-50%)",
        }}
      >
        <Typography sx={{ fontFamily: "acumin-pro", fontSize: "25px" }}>
         sinéctica@gmail.com
        </Typography>
      </Box>
      <Box
        position={"absolute"}
        sx={{ top: "40%", left: "50.2%", transform: "translateX(-50%)" }}
      >
        <Typography
          sx={{
            fontSize: "60px",
            fontFamily: "acumin-pro",
            color: "white",
            fontWeight: "bold",
          }}
          variant="h3"
        >
          {t("homeTituloBlanco")}
        </Typography>
      </Box>
      <Mouse2/>
    {/*   <Mouse2 /> */}
    </>
  );
};

export default Home;
