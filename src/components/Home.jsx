import { Box, Hidden, Typography } from "@mui/material";
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
      <Hidden smDown>
        <Box
          sx={{
            position: "absolute",
            bgcolor: "#0068FF",
            borderRadius: "100%",
            width: "42px",
            height: "42px",
            zIndex: 10,
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Typography
            onClick={toggleLanguage}
            sx={{
              cursor: "pointer",
              "&:hover": {
                textDecoration: "none",
              },
              fontFamily: "acumin-pro",
              fontSize: "18px",
              color: "white",
              textAlign: "center",
              mt: "5px",
            }}
          >
            {i18n.language === "en" ? "ES" : "EN"}
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            zIndex: 10,
            top: "100px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "acumin-pro",
              fontSize: "44px",
              fontWeight: "100",
              lineHeight: "120%",
              letterSpacing: "5%",
              color: "#0068FF",
            }}
          >
            {t("homeTitulo1")}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "acumin-pro",
              fontSize: "44px",
              fontWeight: "700",
              lineHeight: "120%",
              letterSpacing: "5%",
              color: "#0068FF",
            }}
          >
            Sinestesia
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "acumin-pro",
              fontSize: "44px",
              fontWeight: "100",
              lineHeight: "120%",
              letterSpacing: "5%",
              color: "#0068FF",
            }}
          >
            {t("homeTitulo3")}
          </Typography>
        </Box>

        <Box
          component={Link}
          to={"/proyectos"}
          position={"absolute"}
          sx={{
            top: "90%",
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: "#0068FF",
            width: "42px",
            height: "42px",
            borderRadius: "100%",
            textAlign: "center",
            pt: 1.3,
          }}
        >
          <img width={"20px"} src="/flechaHome.png" alt="flecha" />
        </Box>

        <Box
          position={"absolute"}
          sx={{ top: "40%", left: "50.2%", transform: "translateX(-50%)" }}
        >
          <Typography
            sx={{
              width: "758px",
              fontSize: "80px",
              fontFamily: "acumin-pro",
              color: "white",
              fontWeight: "800",

              lineHeight: "120%",
              letterSpacing: "5%",
            }}
          >
            {t("homeTituloBlanco")}
          </Typography>
        </Box>
        <Mouse2 />
      </Hidden>

      <Hidden smUp>
        <Box>
          <img width={"100%"} src="/home/homeMobile.png" alt="" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bgcolor: "#0068FF",
            borderRadius: "100%",
            width: "36px",
            height: "36px",
            zIndex: 10,
            top: "30px",
            left: "20%",
            transform: "translateX(-50%)",
          }}
        >
          <Typography
            onClick={toggleLanguage}
            sx={{
              cursor: "pointer",
              "&:hover": {
                textDecoration: "none",
              },
              fontFamily: "acumin-pro",
              fontSize: "18px",
              color: "white",
              textAlign: "center",
              mt: "5px",
            }}
          >
            {i18n.language === "en" ? "ES" : "EN"}
          </Typography>
        </Box>

        <Box
          sx={{
            position: "absolute",
            zIndex: 10,
            top: "72px",
            left: "15%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "acumin-pro",
              fontSize: "44px",
              fontWeight: "100",
              lineHeight: "120%",
              letterSpacing: "5%",
              color: "#0068FF",
            }}
          >
            {t("homeTitulo1")}
          </Typography>
          <Typography
            sx={{
              fontFamily: "acumin-pro",
              fontSize: "44px",
              fontWeight: "700",
              lineHeight: "120%",
              letterSpacing: "5%",
              color: "#0068FF",
            }}
          >
            Sinestesia
          </Typography>
          <Typography
            sx={{
              fontFamily: "acumin-pro",
              fontSize: "44px",
              fontWeight: "100",
              lineHeight: "120%",
              letterSpacing: "5%",
              color: "#0068FF",
            }}
          >
            {t("homeTitulo3")}
          </Typography>
        </Box>

        <Box
          component={Link}
          to={"/proyectos"}
          position={"absolute"}
          sx={{
            top: "90%",
            left: "20%",
            transform: "translateX(-50%)",
            bgcolor: "#0068FF",
            width: "42px",
            height: "42px",
            borderRadius: "100%",
            textAlign: "center",
            pt: 1.3,
          }}
        >
          <img width={"20px"} src="/flechaHome.png" alt="flecha" />
        </Box>

        <Box position={"absolute"} sx={{ top: "238px", left: "15%" }}>
          <Typography
            sx={{
              fontFamily: "acumin-pro",
              fontSize: "44px",
              fontWeight: "700",
              lineHeight: "120%",
              letterSpacing: "5%",
              color: "#0068FF",
              width: "120px",
            }}
          >
            {t("homeTituloBlanco")}
          </Typography>
        </Box>
      </Hidden>
    </>
  );
};

export default Home;
