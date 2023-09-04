// const ItemDetails = () => {
//     return ( 
//         <section>
//             <h1>ItemDetails</h1>
//         </section>
//      );
// }

import { useParams } from "react-router-dom";
import products from "./DemoCartMenuData";
import { useContext } from "react";
import CartContext from "./Context";
import "../Styles/ItemDetailsStyles.css"
import Footer from "./Footer";

const ItemDetails = () => {
    const {cartItems}= useContext(CartContext)
    const {addToCart}= useContext(CartContext)
    const {errorMessage}= useContext(CartContext)
    const { productId } = useParams(); // Get the productId from the URL parameter

    const singleProduct = products.find(item => item.id === parseInt(productId));

    if (!singleProduct) {
        return <div>Product not found</div>;
    }

    return (
        <div >
            <div className="item-details-grid-con">
            <div className="item-details-img-con">
            <img src={singleProduct.img} alt={singleProduct.name} />

            </div>
            <div className="item-details-con">
            <h2>{singleProduct.name}</h2>
            <p>💲{singleProduct.price}</p>
            <p className="item-descripttion">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel provident adipisci a, sequi minima possimus perspiciatis expedita? Optio porro impedit quisquam officiis ab. Porro, repellat cum quae tempora aliquid fuga voluptate nihil dicta magnam ratione atque quo unde hic eveniet inventore facilis dolorum iusto perferendis officia voluptatum odio. Vitae, ipsam!</p>
            <div className="item-details-btn-con">
                <p>{errorMessage}</p>
            <button onClick={()=> addToCart(singleProduct)}>
            { cartItems.find((tem)=> tem.id===singleProduct.id)?"Item is in cart":"Add to cart"}</button>
            </div>
            </div>
            </div>
            
            <Footer/>

        </div>
    );
};
 
export default ItemDetails;