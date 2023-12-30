import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { css } from "@emotion/css";
import "./sass/app.scss";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

const color = "white";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        className={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
    </ThemeProvider>
  );
}

export default App;
