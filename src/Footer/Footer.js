import "../Styles/Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <p>© 2024 SmartPhone. Tous droits réservés.</p>
          <ul className="footer-links">
            <li>
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon icon={faFacebook} />

              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <FontAwesomeIcon icon={faInstagram} />

              </a>
            </li>


          </ul>
        </div>
      </footer>
    </>
  )
}