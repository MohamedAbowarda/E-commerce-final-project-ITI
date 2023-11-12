import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "./LinkRouter.css";
function LinksRouter() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 4,
      }}
    >
      <Typography
        sx={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-between",
          a: { color: theme.palette.text.secondary },
        }}
      >
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/"}>Details</Link>
        </li>
        <li>
          <Link to={"/"}>pricing</Link>
        </li>
        <li>
          <Link to={"/"}>pages</Link>
        </li>
        <li>
          <Link to={"/"}>Login</Link>
        </li>
        <li>
          <Link to={"/"}>signup</Link>
        </li>
      </Typography>
    </Box>
  );
}

export default LinksRouter;
