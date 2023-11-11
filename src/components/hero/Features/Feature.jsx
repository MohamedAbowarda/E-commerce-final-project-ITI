import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";

const Feature = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        
        width:200,
        display: "flex",
        flexGrow: 1,
        gap: 3,
        justifyContent: useMediaQuery('(min-width:600px)')? "center" : "left",
        py: 2,
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
          variant="body1"
        >
          {subTitle}
      </Typography>
      </Box>
    </Box>
  );
};
Feature.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};
export default Feature;
