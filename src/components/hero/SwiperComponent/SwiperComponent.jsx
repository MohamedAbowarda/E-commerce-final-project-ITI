// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
// import required modules
import { Pagination } from "swiper/modules";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const mainSlider = [
    {text: "Women", src:"src/assets/images/model2.jpg"},
    {text: "Men", src:"src/assets/images/model1.jpg"}
]
export default function App() {
    const theme = useTheme();
  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {mainSlider.map((item, index) => (    
        <SwiperSlide key={index} className="parent-slider">
          <img src={item.src} alt="model" />
          <Box sx={{ 
            [theme.breakpoints.up("sm")]:{
            position: "absolute", left: "10%", textAlign:"left"
          },
            [theme.breakpoints.down("sm")]:{
                py:3
            }
          }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#222",
                textTransform: "uppercase",
              }}
            >
              LifeStyle Collection
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#222",
                fontWeight: 400,
                textTransform: "uppercase",
                my: 1,
              }}
            >
              {item.text}
            </Typography>
            <Stack
              sx={{
                justifyContent:{xs: "center" , sm:"left"},
              }}
              direction={"row"}
              alignItems={"center"}
            >
              <Typography
                color={"#333"}
                mr={1}
                variant="h5"
                textTransform={"uppercase"}
              >
                Sale Up To
              </Typography>
              <Typography
                color={"#D23F57"}
                variant="h5"
                textTransform={"uppercase"}
              >
                30% off
              </Typography>
            </Stack>
              <Typography
                color={"#000"}
                my={1}
                fontWeight={300}
                variant="body1"
                textTransform={"capitalize"}
              >
                Get free shipping on orders over 999.00 L.E
              </Typography>
              <Button
              sx={{
                px:5,
                py:1,
                mt:2,
                backgroundColor:"#393737",
                boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
                color:"#fff",
                "&:hover":{
                    bgcolor:"#151515"
                }
              }}
              variant="contained"
              >
                shop now
              </Button>
          </Box>
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
