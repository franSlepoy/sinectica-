import { Box, Hidden, Typography } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import { useTranslation } from "react-i18next";
import NavBar1 from "../NavBar/NavBar1";
import NavMobile from "../NavBar/NavMobile";
import NavMobileAzul from "../NavBar/NavMobileAzul";

const Tn = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Hidden smDown>
        <NavBar1 />
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
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "#202B61",
                ml: 2,
                mt: 2,
              }}
            >
              {t("clienteProyectos")}: TN Platex
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: "acumin-pro",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "#202B61",
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
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "#202B61",
                ml: 2,
                mt: 1,
              }}
            >
              {t("fecha")}: 2023
            </Typography>
          </Box>
        </Box>

        <Box mt={-1}>
          <img
            style={{ backgroundColor: "#062257", objectFit: "cover" }}
            width={"100%"}
            src="/tn/tn3.png"
            alt=""
          />
        </Box>
        <Box>
          <img
            style={{ objectFit: "cover" }}
            width={"100%"}
            src="/tn/tn4.png"
            alt=""
          />
        </Box>
        <Box>
          <Box>
            <img
              style={{ objectFit: "cover" }}
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

      <Hidden smUp>
        <NavMobileAzul />
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"497px"}
            width={"100%"}
            src="/tn/tn.png"
            alt=""
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
                color: "#202B61",
                ml: 2,
                mt: 2,
              }}
            >
              {t("clienteProyectos")}:TN Platex
            </Typography>
          </Box>

          <Box>
            <Typography
               sx={{
                fontFamily: "acumin-pro",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "#202B61",
                ml: 2,
                mt: 1,
              }}
            >
              {t("proyecto")}: App de gestión documental
            </Typography>
          </Box>
          <Box>
            <Typography
               sx={{
                fontFamily: "acumin-pro",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21.78px",
                color: "#202B61",
                ml: 2,
                mt: 1,
              }}
            >
              {t("fecha")}: 2023
            </Typography>
          </Box>
        </Box>

        <Box mt={-1} bgcolor={"#062257"}>
          <img width={"100%"} src="/tn/tnMobile1.png" alt="" />
        </Box>
        <Box>
          <img width={"100%"} src="/tn/tnMobile2.png" alt="" />
        </Box>
        <Box>
          <Box>
            <img width={"100%"} src="/tn/tnMobile3.png" alt="" />
          </Box>
        </Box>
      </Hidden>
    </>
  );
};

export default Tn;
