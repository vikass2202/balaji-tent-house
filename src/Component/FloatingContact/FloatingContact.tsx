import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./FloatingContact.scss";

function FloatingContact() {
  return (
    <div className="floating_contact">
      <a
        href="tel:+919927511503"
        className="floating_btn call_btn"
        aria-label="Call us"
      >
        <CallIcon />
      </a>
      <a
        href="https://web.whatsapp.com/send?phone=919927511503&text=Hi%2C%20I'm%20interested%20in%20booking%20an%20event"
        target="_blank"
        className="floating_btn whatsapp_btn"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
      </a>
    </div>
  )
}

export default FloatingContact
