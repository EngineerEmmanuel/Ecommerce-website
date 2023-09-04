import { useState } from "react";
import products from "./DemoCartMenuData";
import { useContext } from "react";
import { Link } from "react-router-dom";
// import CartContext from "./Context";
import  {CartContext}  from './Context';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Banner from "./Banner";
import Form from "./Form";
import Footer from "./Footer";

const DemoCartMenu = () => {
    
    const {addToCart}   = useContext(CartContext);
    const {cartItems} = useContext(CartContext);

    const {errorMessage}= useContext(CartContext);
   
    const [items, setItems]= useState(products);
    // const filterItems = (price)=>{
    //     const filtered = products.filter((itemPrice)=> itemPrice.price === price)
    //     setItems(filtered)
    // }
    const cheapItemFisrtFunction=(price)=>{
        const cheapItem15 = products.filter((itemP)=> itemP.price <= price)
        setItems(cheapItem15)
    }
    const cheapItemSecondFunction = (price)=>{
        const cheapItem20 = products.filter((itemP)=>itemP.price >= price)
        setItems(cheapItem20)
    }
    const cheapItemThirdFunction = (price)=>{
        const cheapItem30 = products.filter((itemP)=> itemP.price >= price)
        setItems(cheapItem30);
    }

    const cheapItemFourtFunction= (price)=>{
        const cheapItem40 = products.filter((itemP)=> itemP.price >= price)
        setItems(cheapItem40)
    }
    const fullProducts = (prod)=>{
        if(prod === "all"){
            setItems(products)
        }
    }

    const changeBtnBg = (e)=>{
        
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach((button) => {
        button.classList.remove("active");
    });

    e.target.classList.add("active");
    }

    return ( 
        <section className="product-section">
            <h3>Filter products by price</h3>
            <div className="filter-btn-con" onClick={changeBtnBg}>
            <button onClick={()=>cheapItemFisrtFunction(15)} className="filter-btn">💲15 below</button>
            <button onClick={()=>cheapItemSecondFunction(20)} className="filter-btn"> 💲20 and above </button>
            <button onClick={()=>cheapItemThirdFunction(30)} className="filter-btn"> 💲30 and above </button>
            <button onClick={()=>cheapItemFourtFunction(40)} className="filter-btn"> 💲40 and above </button>

            <button onClick={()=> fullProducts("all")} className="filter-btn">All</button>
            </div>
   
           
            <div className="items-grid-con">
            {
                items.map((item)=>{
                    return(
                        <div className="item-con">
                            <Link to={`/ItemDetails/${item.id}`}>
                            <div className="img-con">
                                <img src={item.img} alt={item.name} />
                            </div>
                            </Link>
                            <div className="item-details-con">
                            <div className="item-price-name-con">
                                <p>{item.name}</p>
                                <p> 💲{item.price}</p>
                            </div>
                            <div className="item-rating-con">
                            <StarBorderIcon className="rating"/> <StarBorderIcon className="rating"/><StarBorderIcon className="rating"/><StarBorderIcon className="rating"/>

                            </div>
                            
                            
                            <button onClick={()=> addToCart(item)}>
                                { cartItems.find((tem)=> tem.id===item.id)?"Item is in cart":"Add to cart"}</button>
                            </div>
                            {/* {cartItems.find((tem)=> tem.id===item.id)&&<p>{errorMessage}</p>} */}

             
                            

                        </div>
                    )
                })
            }
            </div>
            {/* <CheckOut/> */}
            <Banner/>
            <Form/>
            <Footer/>
           
        </section>
     );
}
 
export default DemoCartMenu;