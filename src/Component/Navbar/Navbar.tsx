import { useState } from 'react';
import { Box } from '@mui/material'
import Grid from '@mui/material/GridLegacy';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./Navbar.scss";

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Wedding Planner', path: '/wedding-planner' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
];


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
   <Box className="navbar row">
      <Grid container spacing={3} className="row" alignItems="center">
        <Grid xs={6} sm={3}>
          <NavLink to="/" className="logo_link" onClick={() => setMenuOpen(false)}>
            <img src="/images/logo.jpeg" alt="BalaJi Tent House logo" className="logo_img" />
          </NavLink>
        </Grid>
        <Grid xs={6} sm={9}>
          <button
            type="button"
            className={`menu_toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <ul className={`linklist ${menuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Navbar