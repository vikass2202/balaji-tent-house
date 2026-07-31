import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import "./Homepage.scss";
import { Box, Button, Rating, Stack } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import CountUp from "react-countup";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FloatingContact from "../../Component/FloatingContact/FloatingContact";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Homepage() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const bannerImage = [
    {
      bannerImageUrl: "/images/banner/1.jpg",
      heading: "BalaJi Tent House",
      subheading: "Your Dream Wedding Starts Here",
      desc: "From venues to décor, we bring your fairy tale to life.",
    },
    {
      bannerImageUrl: "/images/banner/2.jpg",
      heading: "BalaJi Tent House",
      subheading: "Discover Stunning Wedding Venues",
      desc: "Luxurious, romantic, and perfectly tailored for your big day.",
    },
    {
      bannerImageUrl: "/images/banner/3.jpg",
      heading: "BalaJi Tent House",
      subheading: "Create Unforgettable Memories",
      desc: "Capturing every smile, every sparkle, every magical moment.",
    },
  ];
  const header_responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 901 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 463, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const counterBox = [
    { counter: "15", counterBox_desc: "Happy Customers", suffix: "K+" },
    {
      counter: "100",
      counterBox_desc: "Dream Weddings Delivered",
      suffix: "%",
    },
    { counter: "9", counterBox_desc: "Years of Crafting Dreams", suffix: "+" },
    { counter: "1000", counterBox_desc: "Dream Decor Ideas", suffix: "+" },
  ];

  // TEMPORARY placeholder photos (free-to-use Pexels stock, license-safe) —
  // replace each src with your own event photos whenever you have them ready.
  // Local path convention to switch to later: /images/gallery/<category>/<n>.jpg
  const workPreview = [
    {
      img: "https://images.pexels.com/photos/33417236/pexels-photo-33417236.jpeg?auto=compress&cs=tinysrgb&w=1200",
      label: "Wedding",
      large: true,
    },
    {
      img: "https://images.pexels.com/photos/31032216/pexels-photo-31032216.jpeg?auto=compress&cs=tinysrgb&w=800",
      label: "Mehndi",
    },
    {
      img: "https://images.pexels.com/photos/30505255/pexels-photo-30505255.jpeg?auto=compress&cs=tinysrgb&w=800",
      label: "Lighting",
    },
    {
      img: "https://images.pexels.com/photos/7548036/pexels-photo-7548036.jpeg?auto=compress&cs=tinysrgb&w=800",
      label: "Birthday",
    },
    {
      img: "https://images.pexels.com/photos/34079355/pexels-photo-34079355.jpeg?auto=compress&cs=tinysrgb&w=800",
      label: "Mandap",
    },
  ];

  const client_feedback = [
    {
      clientImg: "/images/testimonial/1.webp",
      clientName: "Vikas Saini",
      clientDesc:
        "Balaji Tent House made our wedding truly magical. The decoration was elegant and beyond what we imagined. Every guest was amazed by the setup. Thank you for turning our dream wedding into reality!",
      clientRating: 5,
    },
    {
      clientImg: "/images/testimonial/2.webp",
      clientName: "Mayank Saini",
      clientDesc:
        "Balaji Tent House handled everything perfectly – from seating arrangements to stunning lighting and decorations. Their team was incredibly professional, creative, and attentive to every detail.",
      clientRating: 4,
    },
    {
      clientImg: "/images/testimonial/3.webp",
      clientName: "Vijay Rathore",
      clientDesc:
        "They decorated my daughter's birthday beautifully! The theme balloons, lights, and arrangements made the party unforgettable.",
      clientRating: 5,
    },
    {
      clientImg: "/images/testimonial/1.webp",
      clientName: "Manish Bansal",
      clientDesc:
        "Our Haldi and Mehndi celebrations at BalaJi Tent House were brought to life with vibrant colors, exquisite floral decor, and delicious catering. Every guest couldn't stop admiring the setup.",
      clientRating: 4.5,
    },
    {
      clientImg: "/images/testimonial/2.webp",
      clientName: "Vivek",
      clientDesc:
        "Our anniversary celebration was beyond expectations. The team at Balaji Tent House managed everything beautifully, making the day special for all our guests.",
      clientRating: 5,
    },
    {
      clientImg: "/images/testimonial/3.webp",
      clientName: "Abhishek",
      clientDesc:
        "Our anniversary celebration was beyond expectations. The team at Balaji Tent House managed everything beautifully, making the day special for all our guests.",
      clientRating: 5,
    },
  ];

  const feedbackResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: { breakpoint: { max: 991, min: 768 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 767, min: 340 }, items: 1, slideToSlide: 1 },
  };

  return (
    <>
      <Navbar />
      <Box className="homepage_wrapper">
        <Box className="main_banner">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={header_responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            customTransition="transform 800ms ease-in-out"
          >
            {bannerImage.map((data, index) => (
              <Box key={index} sx={{ position: "relative", width: "100%" }}>
                <img
                  className="d-block w-100"
                  src={data.bannerImageUrl}
                  alt={`Slide ${index + 1}`}
                  style={{ height: "89vh", objectFit: "cover", width: "100%" }}
                />
                <Box className="banner_overlay" />
                <Box className="banner_content">
                  <span className="eyebrow">
                    Event Management &amp; Tent House
                  </span>
                  <h3>{data.heading}</h3>
                  <h5>{data.subheading}</h5>
                  <p>{data.desc}</p>
                  <Button
                    className="cta_button"
                    component={RouterLink}
                    to="/contact"
                  >
                    Contact Us
                  </Button>
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>

        {/* about us content */}
        <Box className="about_content">
          <Box className="row">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h5>Who We Are</h5>
                <h6>Creating Unforgettable Events with Balaji Tent House!</h6>
                <p>
                  At Balaji Tent House, we turn ordinary venues into magical
                  celebrations. With 9+ years of experience, vibrant decor, and
                  unmatched service, we've been crafting dream weddings for
                  countless happy couples.
                  <RouterLink to="/about" className="read-more">
                    Read More...
                  </RouterLink>
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Counter section starts here */}
        <Box className="counter_section">
          <Box className="row">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} sx={{ alignSelf: "center" }}>
                <h6>Making Every Celebration Count</h6>
                <ul>
                  {counterBox.map((data, index) => (
                    <li key={index}>
                      <div className="counterdiv">
                        <h3>
                          <CountUp
                            end={Number(data.counter)}
                            duration={5}
                            suffix={data.suffix}
                          />
                        </h3>
                        <p>{data.counterBox_desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Grid>
              <Grid item xs={12} sm={6}>
                <img
                  src="https://images.pexels.com/photos/1042152/pexels-photo-1042152.jpeg"
                  alt="Wedding decor setup by BalaJi Tent House"
                  className="img-fluid"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Our Work — gallery preview (temporary Pexels placeholder photos) */}
        <Box className="work_section">
          <Box className="row">
            <Box className="work_intro">
              <span className="eyebrow">Our Work</span>
              <h2>A Glimpse Into Our Celebrations</h2>
              <p>
                From intimate Mehndi setups to grand wedding stages — here's a
                peek at what we've created.
              </p>
            </Box>

            <Box className="work_grid">
              {workPreview.map((item, index) => (
                <Box
                  className={`work_tile ${item.large ? "tile_large" : ""}`}
                  key={index}
                  onClick={() => setLightboxImg(item.img)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setLightboxImg(item.img);
                  }}
                >
                  <img
                    src={item.img}
                    alt={`${item.label} setup by BalaJi Tent House`}
                    loading="lazy"
                  />
                  <span className="tile_label">{item.label}</span>
                </Box>
              ))}
            </Box>

            <Box className="work_cta">
              <Button
                className="outline_button"
                component={RouterLink}
                to="/gallery"
              >
                View Full Gallery
              </Button>
            </Box>
          </Box>
        </Box>

        {/* testimonial section starts here */}
        <Box className="testimonial_section">
          <Box className="row">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <h5>What Client Says About Us !</h5>
              </Grid>
              <Box className="feedback_box">
                <Carousel
                  swipeable={true}
                  draggable={true}
                  showDots={true}
                  responsive={feedbackResponsive}
                  infinite={true}
                  autoPlay={true}
                  removeArrowOnDeviceType={["tablet", "mobile"]}
                  autoPlaySpeed={3000}
                  arrows={false}
                  customTransition={"transform 800ms ease-in-out"}
                >
                  {client_feedback.map((data, index) => (
                    <Box className="testimonial_box" key={index}>
                      <img src={data.clientImg} alt={data.clientName} />
                      <h6>{data.clientName}</h6>
                      <p>{data.clientDesc}</p>
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={data.clientRating}
                          precision={0.5}
                          readOnly
                        />
                      </Stack>
                    </Box>
                  ))}
                </Carousel>
              </Box>
            </Grid>
          </Box>
        </Box>

        {/* Visit Us — compact map + address (full map lives on the Contact page) */}
        <Box className="visit_section">
          <Box className="row">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={5}>
                <span className="eyebrow">Visit Us</span>
                <h2>Come Say Hi</h2>
                <p>Dharmawala, Dehradun, Uttarakhand</p>
                <Button
                  className="outline_button"
                  href="https://www.google.com/maps/dir/?api=1&destination=Dharmawala,+Dehradun,+Uttarakhand"
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<LocationOnIcon />}
                >
                  Get Directions
                </Button>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box className="visit_map">
                  <iframe
                   title="BalaJi Tent House Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d469.00329746504895!2d77.72198983603325!3d30.41844434432944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f254ba9b0c9fb%3A0x70ae75352748cc86!2sBalaji%20Tent%20house%20%26%20caterers!5e0!3m2!1sen!2sin!4v1785079659464!5m2!1sen!2sin"
                     width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* final CTA strip before footer */}
        <Box className="cta_strip">
          <Box className="row">
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} sm={8}>
                <h4>Planning an event? Let's make it unforgettable.</h4>
                <p>Book a free consultation with our decor team today.</p>
              </Grid>
              <Grid item xs={12} sm={4} className="cta_strip_action">
                <Button
                  className="cta_button"
                  component={RouterLink}
                  to="/contact"
                >
                  Get a Free Quote
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
      <FloatingContact />

      {/* Lightbox — click any "Our Work" photo to zoom, click backdrop or ✕ to close */}
      {lightboxImg && (
        <Box className="lightbox_overlay" onClick={() => setLightboxImg(null)}>
          <button
            className="lightbox_close"
            onClick={() => setLightboxImg(null)}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
          <img
            src={lightboxImg}
            alt="Zoomed event decor by BalaJi Tent House"
            onClick={(e) => e.stopPropagation()}
          />
        </Box>
      )}
    </>
  );
}

export default Homepage;
