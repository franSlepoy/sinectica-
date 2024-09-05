import { Box, Hidden, Typography } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import { useTranslation } from "react-i18next";

const Tn = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Hidden lgDown>
        <NavBar />
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"782px"}
            width={"100%"}
            src="/tn/tn.png"
            alt=""
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
              {t("clienteProyectos")}: <strong>TN Platex</strong>
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
              {t("proyecto")}: <strong>App de gestión documental</strong>
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
              {t("fecha")}: <strong>2023</strong>
            </Typography>
          </Box>
        </Box>

        <Box mt={0}>
          <img
            style={{ backgroundColor: "#062257", objectFit: "cover" }}
            width={"100%"}
            height={"1894px"}
            src="/tn/tn3.png"
            alt=""
          />
        </Box>
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"701px"}
            width={"100%"}
            src="/tn/tn4.png"
            alt=""
          />
        </Box>
        <Box>
          <Box>
            <img
              style={{ objectFit: "cover" }}
              height={"734px"}
              width={"100%"}
              src="/tn/tn5.png"
              alt=""
            />
          </Box>
          <Box
            position={"absolute"}
            top={"3217px"}
            sx={{ left: "80%", transform: "translateX(-50%)" }}
          >
            <img src="/tn/tn6.png" alt="" />
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Tn;
