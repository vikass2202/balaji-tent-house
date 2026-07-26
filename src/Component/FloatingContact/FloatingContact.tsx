import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./FloatingContact.scss";

function FloatingContact() {

  const phone = "919927511503";
  const message = "Hi, I'm interested in booking an event.";

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
        href={`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`}
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
