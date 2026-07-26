import { useEffect } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import FloatingContact from "../../Component/FloatingContact/FloatingContact";
import "./About.scss";

import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CelebrationIcon from "@mui/icons-material/Celebration";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import GroupsIcon from "@mui/icons-material/Groups";
import PaletteIcon from "@mui/icons-material/Palette";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const team = [
  {
    team_name: "Padam Saini",
    designation: "Founder & Chairman",
    para: "Established Balaji Tent House & Caterers with a vision to provide quality event management, tent, catering, and decoration services.",
    team_img: "/images/team/1.webp",
  },
  {
    team_name: "Anand Saini",
    designation: "Managing Director",
    para: "Oversees overall business operations, finance, inventory management, client coordination, and business growth.",
    team_img: "/images/team/2.webp",
  },
  {
    team_name: "Vishu Saini",
    designation: "Operation Director",
    para: "Manages the complete field team, supervises event execution, and ensures smooth coordination between departments.",
    team_img: "/images/team/1.webp",
  },
  {
    team_name: "Vijay Rathour",
    designation: "DJ Department Head",
    para: "Responsible for DJ setup, sound systems, and entertainment operations.",
    team_img: "/images/team/3.webp",
  },
  {
    team_name: "Sawan",
    designation: "Lighting Department Head",
    para: "Handles lighting setup, decoration lighting, and technical arrangements.",
    team_img: "/images/team/1.webp",
  },
  {
    team_name: "Rijwan",
    designation: "Event Setup Specialist",
    para: "Leads the Event installation team and manages all Event-related operations.",
    team_img: "/images/team/1.webp",
  },
  {
    team_name: "Tajammul",
    designation: "Event Team Supervisor",
    para: "Assists the Event Department Head in on-site execution and team coordination.",
    team_img: "/images/team/1.webp",
  },
  {
    team_name: "Aadab",
    designation: "Tent & Truss Installation Expert",
    team_img: "/images/team/1.webp",
  },
  {
    team_name: "Sabil",
    designation: "Tent & Truss Installation Expert",
    team_img: "/images/team/1.webp",
  },
  {
    team_name: "Shaan",
    designation: "Hospitality & Catering Coordinator",
    team_img: "/images/team/1.webp",
  },
];

const whyChooseUs = [
  { icon: <WorkspacePremiumIcon />, title: "9+ Years of Experience" },
  { icon: <EventAvailableIcon />, title: "Complete Event Management" },
  { icon: <CelebrationIcon />, title: "Premium Stage & Mandap Decor" },
  { icon: <VolumeUpIcon />, title: "Professional Lighting & Sound" },
  { icon: <PriceCheckIcon />, title: "Affordable & Transparent Pricing" },
  { icon: <GroupsIcon />, title: "Experienced & Dedicated Team" },
  { icon: <PaletteIcon />, title: "Customized Decoration Themes" },
  { icon: <SentimentSatisfiedAltIcon />, title: "100% Customer Satisfaction" },
];

function About() {
  // Lightweight scroll-reveal — no extra library needed.
  // Any element with className "reveal" fades/slides up the first time it enters the viewport.
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* ================= HERO — full width image, dark overlay, centered copy ================= */}
      <Box className="about_hero">
        <Box className="about_hero_overlay" />
        <Box className="about_hero_content reveal">
          <span className="eyebrow">About Us</span>
          <h1>Crafting Dream Celebrations Since 2016</h1>
          <p>
            We turn your special moments into unforgettable memories with creativity, passion
            and perfection.
          </p>
          <a href="#our-story" className="hero_cta">Know More</a>
        </Box>
      </Box>

      {/* ================= OUR STORY — centered, no side image ================= */}
      <Box className="story_section" id="our-story">
        <Box className="story_inner reveal">
          <span className="eyebrow">Our Story</span>
          <h2>9+ Years of Crafting Dream Celebrations</h2>
          <p>
            At <strong>Balaji Tent House</strong>, we believe every celebration deserves to be
            extraordinary. What started as a small family business has grown into one of the
            trusted names in wedding planning, tent house services, and event decoration.
          </p>
          <p>
            Over the last <strong>9+ years</strong>, we have successfully organized weddings,
            engagements, birthday parties, anniversaries, corporate events, Haldi ceremonies,
            Mehndi functions, receptions, and many other memorable celebrations. Every event is
            carefully designed according to our client's vision, budget, and expectations.
          </p>
          <p>
            From elegant stage decoration and luxury mandaps to premium lighting, sound systems,
            seating arrangements, floral décor, and complete event management, our experienced
            team ensures that every detail is executed flawlessly.
          </p>
        </Box>
      </Box>

      {/* ================= MISSION & VISION — 2 cards side by side ================= */}
      <Box className="mv_section">
        <Box className="row">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box className="mv_card reveal">
                <span className="mv_icon"><EmojiObjectsIcon /></span>
                <h5>Our Mission</h5>
                <p>
                  To create memorable celebrations through innovative designs, high-quality
                  services, and exceptional customer satisfaction while making every event
                  stress-free for our clients.
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="mv_card reveal" style={{ transitionDelay: "0.12s" }}>
                <span className="mv_icon"><VisibilityIcon /></span>
                <h5>Our Vision</h5>
                <p>
                  To become the most trusted event management and tent house company, recognized
                  for creativity, professionalism, quality, and excellence in every celebration.
                </p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* ================= WHY CHOOSE US — icon grid ================= */}
      <Box className="why_section">
        <Box className="row">
          <Grid container spacing={3}>
            <Grid item xs={12} className="why_intro reveal">
              <span className="eyebrow">Why Choose Us</span>
              <h2>Why Choose Balaji Tent House?</h2>
            </Grid>
            {whyChooseUs.map((item, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box className="why_card reveal" style={{ transitionDelay: `${index * 0.05}s` }}>
                  <span className="why_icon">{item.icon}</span>
                  <p>{item.title}</p>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* ================= OUR TEAM — unchanged ================= */}
      <Box className="team_section">
        <Box className="row">
          <Grid container spacing={3} display="flex" justifyContent="center">
            <Grid item xs={12}>
              <span className="eyebrow">The People Behind The Magic</span>
              <h2>Meet Our Team</h2>
              <p>
                Our dedicated professionals work together to transform your special moments into
                unforgettable memories. From planning and decoration to lighting, sound, and
                hospitality, every member of our team is committed to delivering excellence.
              </p>
            </Grid>
            {team.map((data, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box className="team_card reveal" style={{ transitionDelay: `${(index % 4) * 0.08}s` }}>
                  <img src={data.team_img} alt={data.team_name} />
                  <h5>{data.team_name}</h5>
                  <h6>{data.designation}</h6>
                  <p>{data.para}</p>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Footer />
      <FloatingContact />
    </>
  );
}

export default About;