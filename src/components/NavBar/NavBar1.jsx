import { Box, Typography, styled } from "@mui/material";

const floatAnimationX = `
  @keyframes floatAnimationX {
    0% { transform: translateX(0) rotate(0deg); }
    25% { transform: translateX(-5px) rotate(0.5deg); }
    50% { transform: translateX(0) rotate(-0.5deg); }
    75% { transform: translateX(5px) rotate(0.25deg); }
    100% { transform: translateX(0) rotate(0deg); }
  }
`;

const FloatingImageX = styled("img")`
  ${floatAnimationX}
  animation: floatAnimationX 4s ease-in-out infinite;
`;

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
`;

const floatAnimation1 = `
  @keyframes floatAnimation1 {
    0% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-3px) rotate(0.6deg); }
    35% { transform: translateY(-6px) rotate(0.8deg); }
    50% { transform: translateY(0) rotate(-0.4deg); }
    60% { transform: translateY(1px) rotate(-0.1deg); }
    75% { transform: translateY(3px) rotate(0.27deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }
`;
const FloatingImage1 = styled("img")`
  ${floatAnimation1}
  animation: floatAnimation1 8s ease-in-out infinite;
`;

const NavBar1 = () => {
  return (
    <>
      <Box
        position={"absolute"}
        top={30}
        width={"100%"}
        height={"60px"}
        m={"auto"}
        overflow={"hidden"}
        bgcolor={"transarent"}
      >
       {/*   <Box >
       <img width={"100%"}src="/navBar/navBar.png" alt="" />
       </Box>  */}

        <Box
          bgcolor={"transparent"}
          display={"flex"}
          position={"absolute"}
          sx={{ top: "5%" }}
          width={"100%"}
          m={"auto"}
          height={"120px"} // Altura mayor para las esferas
          overflow={"hidden"} // Corta las esferas que se salen del Navbar
        >
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/home38.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/home40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"60px"}
            height={"60px"} // Tamaño más grande
            src="/home/home40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/home41.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-42.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"80px"}
            height={"80px"} // Tamaño más grande
            src="/home/home36.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"60px"}
            height={"60px"} // Tamaño más grande
            src="/home/home37.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"200px"}
            height={"200px"} // Tamaño más grande
            src="/home/home44.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"70px"}
            height={"70px"} // Tamaño más grande
            src="/home/home43.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"40px"}
            height={"40px"}
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"120px"}
            height={"120px"}
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/fondos-36.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-38.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-36.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"70px"}
            height={"70px"} // Tamaño más grande
            src="/home/fondos-37.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"40px"}
            height={"40px"}
            src="/home/fondos-37.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-42.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"120px"}
            height={"120px"} // Tamaño más grande
            src="/home/fondos-38.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-39.png"
            alt="drayTek"
          />{" "}
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"130px"}
            height={"130px"} // Tamaño más grande
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"50px"}
            height={"50px"} // Tamaño más grande
            src="/home/fondos-41.png"
            alt="drayTek"
          />
          {/* Agrega más esferas según lo necesites */}
        </Box>

        <Box
          bgcolor={"transparent"}
          display={"flex"}
          position={"absolute"}
          sx={{ top: "5%", left: "0%", zIndex: 0 }}
          width={"100%"}
          m={"auto"}
          height={"120px"} // Altura mayor para las esferas
          overflow={"hidden"} // Corta las esferas que se salen del Navbar
        >
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/home38.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/home41.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"60px"}
            height={"60px"} // Tamaño más grande
            src="/home/home36.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-41.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/home41.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-38.png"
            alt="drayTek"
          />
          <FloatingImage1
          
            width={"80px"}
            height={"80px"} // Tamaño más grande
            src="/home/home36.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"100px"}
            height={"100px"} // Tamaño más grande
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"50px"}
            height={"50px"} // Tamaño más grande
            src="/home/fondos-41.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-36.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"60px"}
            height={"60px"} // Tamaño más grande
            src="/home/home38.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-41.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"60px"}
            height={"60px"} // Tamaño más grande
            src="/home/home37.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"200px"}
            height={"200px"} // Tamaño más grande
            src="/home/home44.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"70px"}
            height={"70px"} // Tamaño más grande
            src="/home/home43.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/fondos-36.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"70px"}
            height={"70px"} // Tamaño más grande
            src="/home/fondos-37.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"120px"}
            height={"120px"} // Tamaño más grande
            src="/home/fondos-38.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"100px"}
            height={"100px"} // Tamaño más grande
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"50px"}
            height={"50px"} // Tamaño más grande
            src="/home/fondos-41.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/home38.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/home40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"60px"}
            height={"60px"} // Tamaño más grande
            src="/home/home40.png"
            alt="drayTek"
          />

          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/home41.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-42.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"80px"}
            height={"80px"} // Tamaño más grande
            src="/home/home36.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"60px"}
            height={"60px"} // Tamaño más grande
            src="/home/home37.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"200px"}
            height={"200px"} // Tamaño más grande
            src="/home/home44.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"70px"}
            height={"70px"} // Tamaño más grande
            src="/home/home43.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/fondos-36.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"70px"}
            height={"70px"} // Tamaño más grande
            src="/home/fondos-37.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"120px"}
            height={"120px"} // Tamaño más grande
            src="/home/fondos-38.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"100px"}
            height={"100px"} // Tamaño más grande
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"50px"}
            height={"50px"} // Tamaño más grande
            src="/home/fondos-41.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/home38.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"140px"}
            height={"140px"}
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"60px"}
            height={"60px"} // Tamaño más grande
            src="/home/home40.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"80px"}
            height={"80px"} // Tamaño más grande
            src="/home/home38.png"
            alt="drayTek"
          />

          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/home41.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"140px"}
            height={"140px"}
            src="/home/fondos-42.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"80px"}
            height={"80px"} // Tamaño más grande
            src="/home/home36.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"100px"}
            height={"100px"} // Tamaño más grande
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"50px"}
            height={"50px"} // Tamaño más grande
            src="/home/fondos-41.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"60px"}
            height={"60px"} // Tamaño más grande
            src="/home/home37.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"100px"}
            height={"100px"} // Tamaño más grande
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"50px"}
            height={"50px"} // Tamaño más grande
            src="/home/fondos-41.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"200px"}
            height={"200px"} // Tamaño más grande
            src="/home/home44.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"70px"}
            height={"70px"} // Tamaño más grande
            src="/home/home43.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"20px"}
            height={"20px"} // Tamaño más grande
            src="/home/fondos-36.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"70px"}
            height={"70px"} // Tamaño más grande
            src="/home/fondos-37.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"120px"}
            height={"120px"} // Tamaño más grande
            src="/home/fondos-38.png"
            alt="drayTek"
          />
          <FloatingImage
            width={"160px"}
            height={"160px"} // Tamaño más grande
            src="/home/fondos-39.png"
            alt="drayTek"
          />
          <FloatingImage1
            width={"100px"}
            height={"100px"} // Tamaño más grande
            src="/home/fondos-40.png"
            alt="drayTek"
          />
          <FloatingImageX
            width={"50px"}
            height={"50px"} // Tamaño más grande
            src="/home/fondos-41.png"
            alt="drayTek"
          />

          {/* Agrega más esferas según lo necesites */}
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
      </Box>
    </>
  );
};

export default NavBar1;
