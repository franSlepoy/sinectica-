
import { Box } from "@mui/material";

const Links = () => {
  return (
    <>
      <Box position={"absolute"} top={"10px"} right={"90px"} display={"flex"}  >
        <Box mt={"1px"}>
          <a
            href="https://wa.me/5491131992441"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width={"15.5px"} height={"15.5px"} src="/navBar/link1.png" alt="" />
          </a>
        </Box>
        <Box ml={2}>
          <a
            href="https://www.linkedin.com/in/franciscoslepoy/"
            target="_blank"
            rel="noopener noreferrer"
          >
             <img width={"15.5px"} height={"15.5px"} src="/navBar/link2.png" alt="" />
          </a>
        </Box>
        <Box ml={2} mt={"2px"}>
          <a
            href="https://www.instagram.com/agustinalerones/"
            target="_blank"
            rel="noopener noreferrer"
          >
             <img width={"15.5px"} height={"15.5px"} src="/navBar/link3.png" alt="" />
          </a>
        </Box>
        <Box ml={2} mt={"3px"}>
          <a
            href="mailto:slepoyfrancisco@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width={"16px"} height={"13px"} src="/navBar/link4.png" alt="" />
          </a>
        </Box>
      </Box>
    </>
  );
};

export default Links;
