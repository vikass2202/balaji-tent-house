import { Box } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import "./About.scss";
import FloatingContact from "../../Component/FloatingContact/FloatingContact";
import PageBanner from "../Pagebanner/PageBanner";


const team = [
  {
    team_name: "Padam Saini",
    designation: "Founder & CEO",
    team_img: "/images/team/1.webp",
  },
  {
    team_name: "Anand Saini",
    designation: "Co-Founder & Operations Director",
    team_img: "/images/team/2.webp",
  },
  {
    team_name: "Vijay Rathour",
    designation: "Sound & Entertainment Manager",
    team_img: "/images/team/3.webp",
  },
  {
    team_name: "Sawan Kashyap",
    designation: "Lighting & Visual Effects Specialist",
    team_img: "/images/team/1.webp",
  },
  {
    team_name: "Rijwan",
    designation: "Event Setup Supervisor",
    team_img: "/images/team/1.webp",
  },
  {
    team_name: "Tajammul",
    designation: "Senior Decoration Specialist",
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

function About() {
  return (
    <>
      <Navbar />
      <PageBanner title="About Us" breadcrumb="About Us" />

     <Box className="about_page">
  <Grid container spacing={5} className="row" alignItems="center">
    <Grid item xs={12} md={5}>
      <div className="about_image">
        <img
          src="https://images.pexels.com/photos/1114425/pexels-photo-1114425.jpeg"
          alt="Balaji Tent House"
          className="img-fluid"
        />

        <div className="experience_box">
          <h3>9+</h3>
          <span>Years of Experience</span>
        </div>
      </div>
    </Grid>

    <Grid item xs={12} md={7}>
      <span className="eyebrow">Our Story</span>

      <h2>Creating Unforgettable Celebrations Since 2016</h2>

      <p>
        At <strong>Balaji Tent House</strong>, we believe every celebration
        deserves to be extraordinary. What started as a small family business
        has grown into one of the trusted names in wedding planning, tent
        house services, and event decoration.
      </p>

      <p>
        Over the last <strong>9+ years</strong>, we have successfully organized
        weddings, engagements, birthday parties, anniversaries, corporate
        events, Haldi ceremonies, Mehndi functions, receptions, and many other
        memorable celebrations. Every event is carefully designed according to
        our client's vision, budget, and expectations.
      </p>

      <p>
        From elegant stage decoration and luxury mandaps to premium lighting,
        sound systems, seating arrangements, floral décor, and complete event
        management, our experienced team ensures that every detail is executed
        flawlessly.
      </p>

      <div className="mission_box">
        <h5>Our Mission</h5>

        <p>
          To create memorable celebrations through innovative designs,
          high-quality services, and exceptional customer satisfaction while
          making every event stress-free for our clients.
        </p>
      </div>

      <div className="mission_box">
        <h5>Our Vision</h5>

        <p>
          To become the most trusted event management and tent house company,
          recognized for creativity, professionalism, quality, and excellence
          in every celebration.
        </p>
      </div>

      <div className="highlight_box">

        <h5>Why Choose Balaji Tent House?</h5>

        <ul className="highlight_list">
          <li>9+ Years of Professional Experience</li>
          <li>Complete Wedding & Event Management</li>
          <li>Premium Stage & Mandap Decoration</li>
          <li>Professional Lighting & Sound Setup</li>
          <li>Affordable & Transparent Pricing</li>
          <li>Experienced & Dedicated Team</li>
          <li>Customized Decoration Themes</li>
          <li>100% Customer Satisfaction</li>
        </ul>

      </div>

    </Grid>
  </Grid>
</Box>

   {/* Our Team Section */}
      <Box className="team_section">
        <Grid container spacing={3} className="row" display="flex" justifyContent="center">
          <Grid item xs={12}>
            <span className="eyebrow">The People Behind The Magic</span>
            <h2>Meet Our Team</h2>
            <p>
              Our dedicated professionals work together to transform your
              special moments into unforgettable memories. From planning and
              decoration to lighting, sound, and hospitality, every member of
              our team is committed to delivering excellence.
            </p>
          </Grid>
            {team.map((data, index) => (
             <Grid item xs={12} sm={6} md={3} key={index}>
                <Box className="team_card">
                  <img src={data.team_img} alt={data.team_name} />
                  <h6>{data.team_name}</h6>
                  <p>{data.designation}</p>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>

      <Footer />
      <FloatingContact />
    </>
  );
}

export default About;
