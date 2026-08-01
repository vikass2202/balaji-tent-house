import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, TextField, MenuItem, Alert } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Navbar from '../../Component/Navbar/Navbar';
import Footer from '../../Component/Footer/Footer';
import "./Contact.scss";
import PageBanner from '../../Pages/Pagebanner/PageBanner';
import FloatingContact from '../FloatingContact/FloatingContact';

const eventTypes = ["Wedding", "Mehndi / Sangeet", "Birthday Party", "Anniversary", "Corporate Event", "Other"];

const phone = "919927511503";

// ============================================
// EmailJS setup — TWO templates needed (both free, same 200/month quota):
//
// npm install @emailjs/browser
// Sign up at https://www.emailjs.com/, connect your Gmail as an "Email Service".
//
// TEMPLATE 1 — the enquiry, sent to YOU (business owner). In this template's
// "Settings" tab, set "To Email" to your own fixed email address.
//   Body:
//     New Event Enquiry
//     Name: {{name}}
//     Phone: {{phone}}
//     Email: {{email}}
//     Event Type: {{eventType}}
//     Event Date: {{date}}
//     Venue: {{venue}}
//     Message: {{message}}
//
// TEMPLATE 2 — the "Thank you" auto-reply, sent to the CUSTOMER (only fires
// if they filled the optional Email field). In this template's "Settings"
// tab, set "To Email" to the dynamic variable {{to_email}} — this is what
// makes it go to whichever email the customer typed, not a fixed address.
//   Body (example):
//     Hi {{name}},
//     Thank you for reaching out to BalaJi Tent House! We've received your
//     enquiry for {{eventType}} on {{date}} and our team will contact you
//     shortly.
//
// Copy the Service ID (same for both templates), each Template ID, and your
// Public Key from the EmailJS dashboard (Account > General) into the
// constants below.
// ============================================
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_ENQUIRY_TEMPLATE_ID = "YOUR_ENQUIRY_TEMPLATE_ID";
const EMAILJS_AUTOREPLY_TEMPLATE_ID = "YOUR_AUTOREPLY_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    date: "",
    venue: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  // Thank-you message auto-hides after 5 seconds, bringing the empty form back
  // so the visitor can send another enquiry if they need to.
  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => setSubmitted(false), 5000);
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      // 1) The enquiry itself — this one MUST succeed, it's the whole point of the form.
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_ENQUIRY_TEMPLATE_ID, {
        name: form.name,
        phone: form.phone,
        email: form.email || "Not provided",
        eventType: form.eventType,
        date: form.date || "Not specified",
        venue: form.venue || "Not specified",
        message: form.message || "-",
      });

      // 2) Customer "thank you" auto-reply — only attempted if they gave an email,
      // and its failure should NOT block the success screen, since the business
      // already received the enquiry either way.
      if (form.email) {
        try {
          await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_AUTOREPLY_TEMPLATE_ID, {
            to_email: form.email,
            name: form.name,
            eventType: form.eventType,
            date: form.date || "your event",
          });
        } catch (autoReplyErr) {
          console.error("Auto-reply email error (enquiry still went through):", autoReplyErr);
        }
      }

      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", eventType: "", date: "", venue: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong sending your enquiry. Please call or WhatsApp us directly instead.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Navbar />
      <PageBanner title="Contact Us" breadcrumb="Contact Us" />

      <Box className="contact_page">
        <Box className="row">
          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
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

            <Grid item xs={12} md={7}>
              <Box className="contact_form_wrap">
                {submitted ? (
                  <div className="form_success fade_in_out">
                    <CheckCircleIcon className="success_icon" />
                    <h6>Thank you!</h6>
                    <p>Your enquiry has been sent to our team. We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <>
                    <div className="form_heading">
                      <h4>Send Us a Message</h4>
                      <p>Fill in your event details and we'll get back to you shortly.</p>
                    </div>

                    {error && (
                      <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError("")}>
                        {error}
                      </Alert>
                    )}

                    <form onSubmit={handleSubmit} className="enquiry_form">
                      <div className="form_row">
                        <TextField label="Your Name" fullWidth required value={form.name} onChange={handleChange('name')} disabled={sending} />
                        <TextField label="Phone Number" fullWidth required value={form.phone} onChange={handleChange('phone')} disabled={sending} />
                      </div>
                      <div className="form_row">
                        <TextField
                          label="Email Address (optional)"
                          type="email"
                          fullWidth
                          value={form.email}
                          onChange={handleChange('email')}
                          disabled={sending}
                          // helperText="Add this if you'd like a confirmation email"
                        />
                        <TextField select label="Event Type" fullWidth required value={form.eventType} onChange={handleChange('eventType')} disabled={sending}>
                          {eventTypes.map((type) => (
                            <MenuItem key={type} value={type}>{type}</MenuItem>
                          ))}
                        </TextField>
                      </div>
                      <div className="form_row">
                        <TextField
                          label="Event Date"
                          type="date"
                          fullWidth
                          InputLabelProps={{ shrink: true }}
                          value={form.date}
                          onChange={handleChange('date')}
                          disabled={sending}
                        />
                        <TextField label="Venue / City" fullWidth value={form.venue} onChange={handleChange('venue')} disabled={sending} />
                      </div>
                      <div className="form_row">
                        <TextField label="Tell us about your event" fullWidth multiline rows={4} value={form.message} onChange={handleChange('message')} disabled={sending} />
                      </div>
                      <div className="form_row">
                        <Button type="submit" className="submit_btn" endIcon={<SendIcon />} disabled={sending}>
                          {sending ? "Sending..." : "Send Enquiry"}
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

      {/* Find Us — embedded map + directions */}
      <Box className="location_section">
        <Box className="row">
          <Box className="location_intro">
            <span className="eyebrow">Find Us</span>
            <h2>Visit Our Office</h2>
            <p>Dharmawala, Dehradun, Uttarakhand — drop by or get directions below.</p>
          </Box>

          <Box className="map_wrap">
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

          <Box className="location_cta">
            <Button
              className="outline_button"
              href="https://www.google.com/maps/dir/?api=1&destination=Dharmawala,+Dehradun,+Uttarakhand"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<LocationOnIcon />}
            >
              Get Directions
            </Button>
          </Box>
        </Box>
      </Box>

      <Footer />
      <FloatingContact />
    </>
  )
}

export default Contact