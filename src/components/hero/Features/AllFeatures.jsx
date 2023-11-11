import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBolt,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import Feature from "./Feature";
import { Container, Divider, Stack, useMediaQuery } from "@mui/material";

const features = [
  {
    icon: <ElectricBolt />,
    title: "Fast Delivery",
    subTitle: "Starts from 35 L.E",
  },
  {
    icon: <WorkspacePremiumOutlined />,
    title: "Money Guarantee",
    subTitle: "7 Days Back",
  },
  {
    icon: <AccessAlarmOutlined />,
    title: "14 Days",
    subTitle: "For Free Return",
  },
  {
    icon: <CreditScoreOutlined />,
    title: "Payment",
    subTitle: "Secure System",
  },
];
export const AllFeatures = () => {
  return (
    <Container sx={{py:2}}>
      <Stack
        divider={useMediaQuery('(min-width:600px)')? <Divider orientation="vertical" flexItem />: null}
        direction={"row"}
        alignItems={"center"}
        flexWrap={"wrap"}
      >
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            subTitle={feature.subTitle}
          />
        ))}
      </Stack>
    </Container>
  );
};
