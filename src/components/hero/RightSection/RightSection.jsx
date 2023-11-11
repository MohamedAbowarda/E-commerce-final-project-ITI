import { ArrowForward } from "@mui/icons-material";
import { Box, Stack, Typography,Link } from "@mui/material";


const RightSection = () => {
  return (
    <Box sx={{width:"48%", display:{xs:"none" , md:"flex"}, flexDirection:"column", gap:2}} >
        <Box sx={{position:"relative"}}>
          <img src="src\assets\images\shoes-img.jpg" alt="" style={{width: "100%", display:"block"}} />
          <Stack sx={{position:"absolute", top:10 , left:10}}>
            <Typography
              variant="caption"
              sx={{
                color:"#2B3445",
                fontSize:"18px",
                textTransform:"uppercase"
              }}
            >
              New Arrivals
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color:"#2B3445",
                lineHeight:"16px",
                nt:1,
                textTransform:"uppercase"
              }}
            >
              Summer
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color:"#2B3445",
                textTransform:"uppercase"
              }}
            >
              Sale 20% off
            </Typography>
            <Link
            sx={{
              color:"#2B3445",
              display:"flex",
              alignItems:"center",
              gap:"5px",
              transition:"0.4s",
              textTransform:"uppercase",
              "&:hover":{
                color:"#D23F57",
              }
            }}
            href = "#"
            underline="none"
          >
            shop now
            <ArrowForward sx={{fontSize:"13px"}}/>

            </Link>
          </Stack>
        </Box>
        <Box sx={{position:"relative"}}>
          <img src="src\assets\images\desktops.jpg" alt="" style={{width: "100%", display:"block"}} />
          <Stack sx={{position:"absolute", top:15 , left:10}}>
            <Typography
              variant="caption"
              sx={{
                color:"#2B3445",
                fontSize:"18px",
                textTransform:"uppercase",
                fontWeight:300
              }}
            >
              Gaming 4k
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color:"#2B3445",
                lineHeight:"16px",
                nt:1,
                textTransform:"uppercase"
              }}
            >
              Desktops &
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color:"#2B3445",
                textTransform:"uppercase"
              }}
            >
              Laptops
            </Typography>
            <Link
            sx={{
              color:"#2B3445",
              display:"flex",
              alignItems:"center",
              gap:"5px",
              transition:"0.4s",
              textTransform:"uppercase",
              "&:hover":{
                color:"#D23F57",
              }
            }}
            href = "#"
            underline="none"
          >
            shop now
            <ArrowForward sx={{fontSize:"13px"}}/>
            </Link>
          </Stack>
        </Box>
      </Box>
  )
}

export default RightSection;
