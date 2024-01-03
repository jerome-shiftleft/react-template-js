import { NavLink } from "react-router-dom";
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";

function Header() {
  return (
    <>
      <header id="header">
        <nav id="main-nav">
          <Stack className="nav-links" direction="row" spacing={3} alignItems="center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <Button className="toggle-theme-btn" variant="contained">Toggle Theme</Button>
          </Stack>
        </nav>
      </header>
    </>
  );
}

export default Header;