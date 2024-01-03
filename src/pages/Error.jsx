import { useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/system/Box";
import Header from "../layout/sections/Header";
import { Helmet } from "react-helmet";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function ErrorPage() {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const toggleTheme = () => {
    console.log("toggling theme");
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => {
    return currentTheme === "light" ? lightTheme : darkTheme;
  }, [currentTheme]);

  return (
    <>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box id="page-wrap" className={`theme-${currentTheme}`}>
          <Header toggleTheme={toggleTheme} />
          <main>
            <h1>Something went wrong.</h1>
          </main>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default ErrorPage;
