import { Box, Typography } from '@mui/material'


const Loader = () => {
  return (
    <Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          {/* Aquí puedes poner una animación o imagen mientras cargas */}
          <Typography fontFamily="acumin-pro" fontSize="44px" color="white">
            Cargando...
          </Typography>
        </Box>
        <Box width={"100%"} position={"absolute"} sx={{top:"45%", left:"40%"}}>
            <img width={"50%"} src="/loader/loader.png" alt="" />
        </Box>
    </Box>
  )
}

export default Loader

