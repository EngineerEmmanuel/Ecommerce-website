
import { Link} from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



import { useContext } from "react";
import CartContext from "./Context";


const Navigation = () => {
    const {cartItems} = useContext(CartContext);
   
    return ( 
        <nav>
            <div className="nav-con">
                <div className="logo-con"  >
                    <Link to="/">
                    <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" class="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" class="ccustom" fill="#312ECB"></path> </svg>

                    </Link>
                </div>
                <ul>
                <li><Link to="/">Products</Link></li>
                
                </ul>
                <ul>
                    <li><PersonIcon className="cart-icon"/></li>
                    <li ><Link to="/checkout">{cartItems.length}<ShoppingCartIcon className="cart-icon"/></Link></li>
                </ul>

        

            </div>
        </nav>
     );
}
 
export default Navigation;