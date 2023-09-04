import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {useNavigate} from "react-router-dom"

import { useSelector, useDispatch } from "react-redux";
import {
    decreaseCount,
    increaseCount,
    removeFromCart,
    setIsCartOpen
} from "../States";

const CartMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state)=> state.cart.cart);
    const setIsCartOpen = useSelector((state)=>state.cart.setIsCartOpen);
    const totalPrice = cart.reduce((total,item)=>{
        return total + item.count * item.attributes.price
    }, 0)
    
    return ( 
        <section>

        </section>
     );
}
 
export default CartMenu;