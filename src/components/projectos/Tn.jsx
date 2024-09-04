import { Box, Hidden, Typography } from "@mui/material";
import NavBar1 from "../NavBar/NavBar1";

const Tn = () => {
  return (
    <>
      <Hidden lgDown>

        <NavBar1/>
        <Box>
          <img
            style={{ objectFit: "cover" }}
            height={"700px"}
            width={"100%"}
            src="/tn/tn.png"
            alt=""
          />
        </Box>

        <Box
          pt={5}
          mt={-1}
          sx={{
            backgroundColor: "#062257",
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
              Cliente: <strong>TN Platex</strong>
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
              Proyecto: <strong>App de gestión documental</strong>
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
              Año: <strong>2023</strong>
            </Typography>
          </Box>
        </Box>

        <Box mt={0}>
          <img
            style={{ backgroundColor: "#062257", objectFit: "cover" }}
           
            height={"1692px"}
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
