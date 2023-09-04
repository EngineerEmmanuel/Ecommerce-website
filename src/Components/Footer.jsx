import { Link } from "react-router-dom";
import "../Styles/FooterStyles.css"
const Footer = () => {
    return ( 
        <footer>
            <div className="footer-con">
                <div className="footer-logo-con">
                <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" class="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" class="ccustom" fill="#312ECB"></path> </svg>
                    <p>Entize</p>
                </div>
                <ul>
                    <li> <Link to="/">Products</Link></li>
                    <li> <Link to="/checkout">Cart</Link></li>
                    <li></li>
                </ul>
                <ul>
                    <li>LinkedIn</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </footer>
     );
}
 
export default Footer;