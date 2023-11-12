import Header3 from "./components/header/Header3";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/hero/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/main/Main";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <BrowserRouter>
      <ColorModeContext.Provider
        // @ts-ignore
        value={colorMode}
      >
        <ThemeProvider
          // @ts-ignore
          theme={theme}
        >
          <CssBaseline />
          <Header1 />
          <Header2 />
          <Header3 />

          <Box
            bgcolor={
              // @ts-ignore
              theme.palette.myBg.main
            }
          >
            <Hero />
            <Main />
          </Box>

          <Routes>
            <Route path="/" element />
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
