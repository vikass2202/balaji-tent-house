
import Navbar from '../../Component/Navbar/Navbar'
import './Homepage.scss' 
import { Box, Button, Rating, Stack } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import CountUp from 'react-countup';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Homepage() {

  const bannerImage = [
    {
      bannerImageUrl: "images/banner/1.jpg",
      heading: "BalaJi Tent House",
      subheading: "Your Dream Wedding Starts Here",
      desc: "From venues to décor, we bring your fairy tale to life.",
    },
    {
      bannerImageUrl: "images/banner/2.jpg",
      heading: "BalaJi Tent House",
      subheading: "Discover Stunning Wedding Venues",
      desc: "Luxurious, romantic, and perfectly tailored for your big day.",
    },
    {
      bannerImageUrl: "images/banner/3.jpg",
      heading: "BalaJi Tent House",
      subheading: "Create Unforgettable Memories",
      desc: "Capturing every smile, every sparkle, every magical moment.",
    },
  ]
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
    {
        counter: "15",
        counterBox_desc: "Happy Customers",
        suffix: "K+",
    },
    {
        counter: "100",
        counterBox_desc: "Dream Weddings Delivered",
        suffix: "%",
    },
    {
        counter: "9",
        counterBox_desc: "Years of Crafting Dreams",
        suffix: "+",
    },
    {
        counter: "1000",
        counterBox_desc: "Dream Decor Ideas",
        suffix: "+",
    },
  ]

  const client_feedback = [
    {
        clientImg: "images/tetsimonial image/1.webp",
        clientName: "Vikas Saini",
        clientDesc: "Balaji Tent House made our wedding truly magical. The decoration was elegant and beyond what we imagined. Every guest was amazed by the setup. Thank you for turning our dream wedding into reality!",
        clientRating: 5,
    },
    {
        clientImg: "images/tetsimonial image/2.webp",
        clientName: "Mayank Saini",
        clientDesc: "Balaji Tent House handled everything perfectly – from seating arrangements to stunning lighting and decorations. Their team was incredibly professional, creative, and attentive to every detail.",
        clientRating: 4,
    },
    {
        clientImg: "images/tetsimonial image/3.webp",
        clientName: "Vijay Rathore",
        clientDesc: "They decorated my daughter’s birthday beautifully! The theme balloons, lights, and arrangements made the party unforgettable.",
        clientRating: 5,
    },
    {
        clientImg: "images/tetsimonial image/1.webp",
        clientName: "Manish Bansal",
        clientDesc: "Our Haldi and Mehndi celebrations at BalaJi Tent House were brought to life with vibrant colors, exquisite floral decor, and delicious catering. Every guest couldn’t stop admiring the setup.",
        clientRating: 4.5,
    },
    {
        clientImg: "images/tetsimonial image/1.webp",
        clientName: "Vivek",
        clientDesc: "Our anniversary celebration was beyond expectations. The team at Balaji Tent House managed everything beautifully, making the day special for all our guests.",
        clientRating: 5,
    },
    {
        clientImg: "images/tetsimonial image/1.webp",
        clientName: "Abhishek",
        clientDesc: "Our anniversary celebration was beyond expectations. The team at Balaji Tent House managed everything beautifully, making the day special for all our guests.",
        clientRating: 5,
    },
  ]

   const feedbackResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
        breakpoint: {max:767, min: 340},
        items: 1,
        slideToSlide: 1,
    }
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
                                style={{ height: '89vh', objectFit: 'cover', width: '100%' }}
                            />
                            <Box className="banner_content">
                                <h3>{data.heading}</h3>
                                <h5>{data.subheading}</h5>
                                <p>{data.desc}</p>
                                <Button className='cta_button'>
                                    Contact Us
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </Carousel>
            </Box>

            {/* about us content */}

            <Box className="about_content">
                <Grid container spacing={3} className="row">
                    <Grid xs={12}>
                        <h5>Who We Are</h5>
                        <h6>Creating Unforgettable Events with Balaji Tent House!</h6>
                        <p>At Balaji Tent House, we turn ordinary venues into magical celebrations. With 9+ years of experience, vibrant decor, and unmatched service, we’ve been crafting dream weddings for countless happy couples. 
                             <span className="read-more">Read More...</span>
                        </p>
                    </Grid>
                </Grid>
            </Box>

            {/*Counter section starts here  */}
            <Box className="counter_section">
                <Grid container spacing={3} className="row">
                    <Grid xs={6} sx={{alignSelf:"center"}}>
                        <h6>Making Every Celebration Count</h6>
                        <ul>
                            {counterBox.map((data,index)=>(
                                <li key={index}>
                                    <div className="counterdiv">
                                        <h3>
                                           <CountUp end={Number(data.counter)} duration={5} suffix={data.suffix}/>
                                        </h3>
                                        <p>{data.counterBox_desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul> 
                    </Grid>
                    <Grid xs={6}>
                        <img src="https://images.pexels.com/photos/1042152/pexels-photo-1042152.jpeg" alt="" className='img-fluid'/>                           
                    </Grid>
                </Grid>
            </Box>

            {/* testimonial section starts here */}
            <Box className="testimonial_section">
                <Grid container spacing={3} className="row">
                    <Grid xs={12}>
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
                                <Box className="testimonial_box">
                                    <img src={data.clientImg} alt="homepage banner"/>
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
    </>
  )
}

export default Homepage
