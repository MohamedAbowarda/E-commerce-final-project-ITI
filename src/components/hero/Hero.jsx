import { Box, Container } from "@mui/material";
import RightSection from "./RightSection/RightSection";
import SwiperComponent from "./SwiperComponent/SwiperComponent";
import { AllFeatures } from "./Features/AllFeatures";
const Hero = () => {
  return (
    <Container>
      <Box sx={{ my: 2.5, display: "flex", alignItems: "center", gap :3 }}>
        <SwiperComponent />
        <RightSection />
      </Box>
      <AllFeatures/>
    </Container>
  );
};

export default Hero;
