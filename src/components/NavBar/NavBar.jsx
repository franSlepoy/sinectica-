import { Box, Typography, styled } from "@mui/material";
const floatAnimation = `
  @keyframes floatAnimation {
    0% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-5px) rotate(0.5deg); }
    50% { transform: translateY(0) rotate(-0.5deg); }
    75% { transform: translateY(5px) rotate(0.25deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }
`;

const FloatingImage = styled("img")`
  ${floatAnimation}
  animation: floatAnimation 4s ease-in-out infinite;
  object-fit: cover;
  `;

const floatAnimation1 = `
  @keyframes floatAnimation {
    0% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-3px) rotate(0.6deg); }
    35% { transform: translateY(-6px) rotate(0.8deg); }
    50% { transform: translateY(0) rotate(-0.4deg); }
    60% { transform: translateY(1) rotate(-0.10deg); }
    75% { transform: translateY(3px) rotate(0.27deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }
`;
const FloatingImage1 = styled("img")`
  ${floatAnimation1}

  animation: floatAnimation 8s ease-in-out infinite;
  object-fit: cover;
  `;

const NavBar = () => {
  return (
    <>
     
     <Box position={"absolute"} top={30}  width={"100%"} height={"60px"}  m={"auto"}>
      <img width={"100%"}  src="/navBar/navBar.png"/> 
     
  {/*     
     <Box
          bgcolor={"transparent"}
          width={"80%"} m={"auto"}
          height={"100px"}
          display={"flex"}
           mt={"2%"}
          
        >
          <FloatingImage width={"100px"} src="/home/home36.png" alt="drayTek" />
          <FloatingImage1
            width={"50px"} height={"55px"}
            src="/home/home38.png"
            alt="drayTek"
          />
          <FloatingImage width={"100px"} src="/home/home39.png" alt="drayTek" />
          <FloatingImage1
            width={"80px"}height={"80px"}
            src="/home/home40.png"
            alt="drayTek"
          />
          <FloatingImage width={"100px"} src="/home/home41.png" alt="drayTek" />
          <FloatingImage1
            width={"40px"}height={"60px"}
            src="/home/home42.png"
            alt="drayTek"
          />
          <FloatingImage width={"100px"} src="/home/home36.png" alt="drayTek" />
          <FloatingImage1
          width={"50px"} height={"55px"}
        
            src="/home/home38.png"
            alt="drayTek"
          />
          <FloatingImage width={"100px"} src="/home/home39.png" alt="drayTek" />
          <FloatingImage1
            width={"120px"}
            src="/home/home40.png"
            alt="drayTek"
          />
          <FloatingImage width={"100px"} src="/home/home41.png" alt="drayTek" />
          <FloatingImage1
            width={"10px"}height={"10px"}
            src="/home/home42.png"
            alt="drayTek"
          />
          <FloatingImage width={"100px"} src="/home/home41.png" alt="drayTek" />
          <FloatingImage1
          width={"50px"} height={"55px"}
            src="/home/home42.png"
            alt="drayTek"
          />
          <FloatingImage width={"100px"} src="/home/home41.png" alt="drayTek" />
          <FloatingImage1
          width={"50px"} height={"55px"}
            src="/home/home42.png"
            alt="drayTek"
          />
          <FloatingImage width={"100px"} src="/home/home41.png" alt="drayTek" />
          <FloatingImage1
          width={"100px"} height={"65px"}
            src="/home/home37.png"
            alt="drayTek"
          />
        </Box> */}
        

        <Box
          bgcolor={"transparent"}
          display={"flex"}
          position={"absolute"}
          sx={{ top: "5%", left: "2%" }}
          width={"80%"} m={"auto"}
          height={"70px"}
        >
          <FloatingImage1 width={"90px"} src="/home/home38.png" alt="drayTek" />
          <FloatingImage
            width={"55px"}
            src="/home/fondos-38.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"100px"}
            src="/home/home40.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"100px"}
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage width={"50px"} src="/home/home41.png" alt="drayTek" />
          <FloatingImage1
            width={"10px"}
            src="/home/fondos-36.png"
            alt="drayTek"
          />
          <FloatingImage width={"100px"} src="/home/home40.png" alt="drayTek" />
          <FloatingImage1 width={"79px"} src="/home/home42.png" alt="drayTek" />
          <FloatingImage width={"100px"} src="/home/home39.png" alt="drayTek" />
          <FloatingImage1
            width={"800px"}
            src="/home/home40.png"
            alt="drayTek"
          />
          <FloatingImage width={"100px"} src="/home/home36.png" alt="drayTek" />
          <FloatingImage1
            width={"100px"}
            src="/home/home42.png"
            alt="drayTek"
          />
          <FloatingImage width={"100px"} src="/home/home41.png" alt="drayTek" />
          <FloatingImage1
            width={"100px"}
            src="/home/home42.png"
            alt="drayTek"
          />
          <FloatingImage1 width={"90px"} src="/home/home38.png" alt="drayTek" />
          <FloatingImage width={"55px"} src="/home/home39.png" alt="drayTek" />
          <FloatingImage1
            width={"100px"}
            src="/home/home40.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"100px"}
            src="/home/fondos-43.png"
            alt="drayTek"
          />
          <FloatingImage width={"55px"} src="/home/home39.png" alt="drayTek" />
          <FloatingImage1
            width={"100px"}
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"100px"}
            src="/home/fondos-41.png"
            alt="drayTek"
          />

          <FloatingImage1
            width={"100px"}
            src="/home/fondos-36.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"100px"}
            src="/home/fondos-37.png"
            alt="drayTek"
          />
        </Box> 
        <Box
          position={"absolute"}
          top={"-5px"}
          left={"37%"}
          width={"20%"}
          m={"auto"}
          display={"flex"}
          justifyContent={"space-around"}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "acumin-pro",
                fontSize: "45px",
                color: "white",
              }}
            >
              Somos
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                ml: 4,
                fontFamily: "acumin-pro",
                fontSize: "45px",
                color: "white",
              }}
            >
              S
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                ml: 4,
                fontFamily: "acumin-pro",
                fontSize: "45px",
                color: "white",
              }}
            >
              Hacemos
            </Typography>
          </Box>
        </Box>

        <Box />
      </Box>
    </>
  );
};

export default NavBar;
