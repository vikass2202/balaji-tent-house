import { Box } from '@mui/material'
import Grid from '@mui/material/GridLegacy';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./Footer.scss";

function Footer() {
  return (
    <Box className="site_footer">
      <Grid container spacing={4} className="row">
        <Grid xs={12} sm={6} md={3}>
          <img src="/images/logo.jpeg" alt="BalaJi Tent House logo" className="footer_logo" />
          <p>Turning ordinary venues into magical celebrations for over 9 years.</p>
          <ul className="social_links">
            <li><a href="#" aria-label="Facebook"><FacebookIcon /></a></li>
            <li><a href="#" aria-label="Instagram"><InstagramIcon /></a></li>
            <li><a href="https://wa.me/91XXXXXXXXXX" aria-label="WhatsApp"><WhatsAppIcon /></a></li>
          </ul>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <h6>Quick Links</h6>
          <ul className="footer_links">
            <li><RouterLink to="/about">About Us</RouterLink></li>
            <li><RouterLink to="/services">Services</RouterLink></li>
            <li><RouterLink to="/wedding-planner">Wedding Planner</RouterLink></li>
            <li><RouterLink to="/gallery">Gallery</RouterLink></li>
            <li><RouterLink to="/contact">Contact Us</RouterLink></li>
          </ul>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <h6>Our Services</h6>
          <ul className="footer_links">
            <li>Wedding Decor</li>
            <li>Tent &amp; Mandap Setup</li>
            <li>Lighting &amp; Sound</li>
            <li>Catering</li>
            <li>Birthday &amp; Anniversary Events</li>
          </ul>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <h6>Get In Touch</h6>
          <ul className="footer_contact">
            <li><LocationOnIcon fontSize="small" /> Dharmawala, Dehradun, U.K.</li>
            <li><CallIcon fontSize="small" /> <a href="tel:+91XXXXXXXXXX">+91 9927511503</a></li>
            <li><EmailIcon fontSize="small" /> <a href="mailto:info@balajitenthouse.com">info@balajitenthouse.com</a></li>
          </ul>
        </Grid>
      </Grid>

      <Box className="footer_bottom">
        <p>© {new Date().getFullYear()} BalaJi Tent House. All rights reserved.</p>
      </Box>
    </Box>
  )
}

export default Footer
