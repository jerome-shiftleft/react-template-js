import { NavLink } from "react-router-dom";
import Stack from '@mui/material/Stack';

function Header() {
  return (
    <>
      <header>
        <nav id="main-nav">
          <Stack className="nav-links" direction="row" spacing={3}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>            
          </Stack>
        </nav>
      </header>
    </>
  );
}

export default Header;