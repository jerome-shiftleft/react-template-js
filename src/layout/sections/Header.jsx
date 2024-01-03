import { NavLink } from "react-router-dom";
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";

function Header({toggleTheme}) {
  return (
    <>
      <header id="header">
        <nav id="main-nav">
          <Stack className="nav-links" direction="row" spacing={3} alignItems="center">
            <span></span>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <Button className="toggle-theme-btn" variant="contained" onClick={toggleTheme}>Toggle Theme</Button>
          </Stack>
        </nav>
      </header>
    </>
  );
}

export default Header;