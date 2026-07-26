import { useState } from 'react';
import { Box, Button, TextField, MenuItem } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import "./Contact.scss";
import PageBanner from '../../Pages/Pagebanner/PageBanner';
import FloatingContact from '../FloatingContact/FloatingContact';

const eventTypes = ["Wedding", "Mehndi / Sangeet", "Birthday Party", "Anniversary", "Corporate Event", "Other"];

const phone = "919927511503";

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", eventType: "", date: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ---- OPTION 1 (active): WhatsApp auto-notify — zero setup required ----
    // Builds a pre-filled WhatsApp message from the form and opens a chat to your number.
    // The visitor just taps "Send" in WhatsApp and you get the enquiry instantly.
    const waText =
      `New Enquiry from Website\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Event Type: ${form.eventType}\n` +
      `Event Date: ${form.date || "Not specified"}\n` +
      `Message: ${form.message || "-"}`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(waText)}`,
      "_blank"
    );

    // ---- OPTION 2 (optional): also email yourself via EmailJS ----
    // 1) npm install @emailjs/browser
    // 2) Create a free account at emailjs.com, add an email service + template
    // 3) Uncomment below and fill in your own IDs (never hardcode private keys elsewhere)
    //
    // import emailjs from '@emailjs/browser';
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY');

    // TODO: if you also want a record saved somewhere (Google Sheet / database),
    // that needs a small backend endpoint — ask if you want this built.
    console.log(form);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <PageBanner title="Contact Us" breadcrumb="Contact Us" />

      <Box className="contact_page">
        <Box className="row">
          <Grid container spacing={4}>
            <Grid xs={12} md={5}>
              <span className="eyebrow">Get In Touch</span>
              <h2>Let's Plan Your Event</h2>
              <p>Call, WhatsApp, or fill the form — we usually reply within a few hours.</p>

              <ul className="contact_info">
                <li>
                  <CallIcon /> <a href="tel:+919927511503">+91 9927511503</a>
                </li>
                <li>
                  <WhatsAppIcon />{" "}
                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent("Hi, I'm interested in booking an event.")}`}
                    target="_blank"
                    aria-label="WhatsApp"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </li>
                <li>
                  <EmailIcon /> <a href="mailto:info@balajitenthouse.com">info@balajitenthouse.com</a>
                </li>
                <li>
                  <LocationOnIcon /> Dharmawala, Dehradun, U.K.
                </li>
              </ul>

              <div className="quick_actions">
                <Button className="action_btn call" href="tel:+919927511503" startIcon={<CallIcon />}>
                  Call Now
                </Button>
                <Button
                  className="action_btn whatsapp"
                  href={`https://wa.me/${phone}?text=${encodeURIComponent("Hi, I'm interested in booking an event.")}`}
                  target="_blank"
                  aria-label="WhatsApp"
                  rel="noopener noreferrer"
                  startIcon={<WhatsAppIcon />}
                >
                  WhatsApp
                </Button>
              </div>
            </Grid>

            <Grid xs={12} md={7}>
              <Box className="contact_form_wrap">
                {submitted ? (
                  <div className="form_success">
                    <h6>Thank you!</h6>
                    <p>Your enquiry has been received. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <>
                    <div className="form_heading">
                      <h4>Send Us a Message</h4>
                      <p>Fill in your event details and we'll get back to you shortly.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="enquiry_form">
                      <div className="form_row">
                        <TextField label="Your Name" fullWidth required value={form.name} onChange={handleChange('name')} />
                        <TextField label="Phone Number" fullWidth required value={form.phone} onChange={handleChange('phone')} />
                      </div>
                      <div className="form_row">
                        <TextField select label="Event Type" fullWidth required value={form.eventType} onChange={handleChange('eventType')}>
                          {eventTypes.map((type) => (
                            <MenuItem key={type} value={type}>{type}</MenuItem>
                          ))}
                        </TextField>
                        <TextField
                          label="Event Date"
                          type="date"
                          fullWidth
                          InputLabelProps={{ shrink: true }}
                          value={form.date}
                          onChange={handleChange('date')}
                        />
                      </div>
                      <div className="form_row">
                        <TextField label="Tell us about your event" fullWidth multiline rows={4} value={form.message} onChange={handleChange('message')} />
                      </div>
                      <div className="form_row">
                        <Button type="submit" className="submit_btn" endIcon={<SendIcon />}>
                          Send Enquiry
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Footer />
      <FloatingContact />
    </>
  )
}

export default Contact
