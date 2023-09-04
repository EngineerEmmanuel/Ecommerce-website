import { useContext, useEffect, useState } from "react";
import CartContext from "./Context";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import americanExpressImg from "../Components/Images/american-express.png";
import visaCardImg from "../Components/Images/visa.png";
import cardImg from "../Components/Images/card.png";


import "../Styles/CheckoutStyles.css"
import Footer from "./Footer";

const CheckOut = () => {
    const {cartItems} = useContext(CartContext);
    const {removeItem} = useContext(CartContext);
    const {updateQuantity} = useContext(CartContext);

    const [isCartEmpty, setIsCartEmpty] = useState(true);
    const [crushMessage1, setCrushMessage1] = useState(" ")

    const changeText = ()=>{
        if(cartItems.length > 0){
            setIsCartEmpty(false)
        }
    }
    useEffect(()=>{
        changeText()
    }, [cartItems])
    const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

    const paymentBtn=()=>{
        if(cartItems.length>0){
            setCrushMessage1("Do you want to dash me money 😂😍!")
            setTimeout(()=>{
                setCrushMessage1(" ")
            }, 3000)
        }else{
            setCrushMessage1("Go and add items to the cart joor 🤷‍♂️!")
            setTimeout(()=>{
                setCrushMessage1(" ")
            }, 3000)
        }
    }
    return ( 
        <section className="check-section">

            <div className="check-section-grid">

            
           
            <div className="checkout-item-gen-con">
            <h3>{isCartEmpty?"Your cart is Empty": `You have ${cartItems.length} item(s) in the cart`}</h3>

            {
                cartItems.map((item)=>{
                    return(
                        <div className="checkout-item-con">
                            <div className="checkout-img-con">
                            <img src={item.img} alt="" />
                            </div>
                        
                        <div className="checkout-product-details">
                        <p>💲{item.price}</p>
                        <p>{item.name}</p>
                        <div className="star-con">
                        <StarBorderIcon className="rating"/> <StarBorderIcon className="rating"/><StarBorderIcon className="rating"/><StarBorderIcon className="rating"/>

                        </div>
                        <button onClick={()=> removeItem(item.id)}>Remove</button>
                        </div>
                        <div className="add-reduce-con">
                        <button onClick={() => updateQuantity(item, +1 )}>+</button>
                                <p>{item.amount}</p>
                                <button onClick={() => updateQuantity(item, -1)}>-</button>

                        </div>
        
                    </div>
                    )
                   
                })
            }
            <p>Total price: 💲 {totalAmount}</p>
            </div>

            <div className="payment-con">
                {cartItems.length> 0 && <h3>Nice! you made the right choice, go ahead and pay😊.</h3>}
                <div className="cards-con">
                <img src={cardImg} alt="" />
                <img src={visaCardImg} alt="" />
                <img src={americanExpressImg} alt="" />
                
                </div>
                <form action="" className="payment-section-form">
                    <input type="text" placeholder="Name" id="" />
                    <input type="email" placeholder="Email" id="" />
                </form>

                <div className="selection-con">
                <select name="" id="">
                    <option value=" " >Month</option>
                    <option value="Today">August</option>
                </select>

                <select name="" id="">
                    <option value=" " >Year</option>
                    <option value="Today">2023</option>
                </select>
                </div>
                <div className="pay-now-con">
                <p>You will pay: 💲{totalAmount}</p>
                <p>{crushMessage1}</p>
                <button onClick={paymentBtn}>Pay Now</button>
                </div>
                
            </div>
            </div>
           <Footer/>
        </section>
     );
}
 
export default CheckOut;