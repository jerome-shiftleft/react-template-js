import { useState, useMemo } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./sections/Header";

// const theme = createTheme({
//   palette: {
//     mode: "light",
//   },
// });

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

function MasterLayout() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    console.log("toggling theme");
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => {
    return currentTheme === "light" ? lightTheme : darkTheme;
  }, [currentTheme]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div id="page-wrap" className={`theme-${currentTheme}`}>
          <Header toggleTheme={toggleTheme} />
          <Outlet />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MasterLayout;
