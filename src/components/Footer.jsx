import "../assets/styles/footer.css";
import logoFacebook from "../assets/img/facebook.png"
import logoGorjeo from "../assets/img/gorjeo.png"
import logoInstagram from "../assets/img/instagram.png"
import logoWhatsapp from "../assets/img/whatsapp.png"

function Footer() {
  return (
    <footer>
      <p>Derechos Reservados</p>
      <br />
      <div className="divPadre">
      <div className="logoFacebook"><img src={logoFacebook} alt="" /></div>
      <div className="logoGorjeo"><img src={logoGorjeo} alt="" /></div>
      <div className="logoInstagram"><img src={logoInstagram} alt="" /></div>
      <div className="logoWhatsapp"><img src={logoWhatsapp} alt="" /></div>
      </div>
    </footer>
  );
}

export default Footer;
