import { useState } from "react";
import "../Styles/HeroStyles.css"

const Hero = () => {
    // const images = [" https://media.istockphoto.com/id/1437845093/photo/young-hot-man-wearing-a-black-oversize-shirt-and-pink-pants-going-down-the-stairs.jpg?s=612x612&w=0&k=20&c=V9MKK7g8NtvIdVFHEidPJ2pJSa5rZ4bj94a_E-FLYp4=", "https://media.istockphoto.com/id/1440026025/photo/closeup-of-a-males-hand-putting-on-his-classic-watch-before-the-wedding-ceremony-begins.jpg?s=612x612&w=0&k=20&c=ZPWSQlAGh7yGs6uUK-08RSD8riccXVhG1wGIcBQRVeU= ", "https://media.istockphoto.com/id/1082392404/photo/fitness.jpg?s=612x612&w=0&k=20&c=kOnCuPA5akjEKCZWzFUYYI1a4cPhPYuTUCk2KHWCiMw="];
    // const whichImage = images[2];
    // // const [heroStyle, setHeroStyle]= useState({
    // //     color:"red",
    // //     background:   `url(${whichImage})`,
    // //     backgroundSize:"cover",
    // //     backgroundPosition:"contain",
    // //     backgroundRepeat:"no-repeat",
    // // })

    
    return ( 
        <section className="hero-section">
            <div className="hero-bg-con"  >
                <div className="hero-text-con">
                <h1>Discover Your Perfect Style <br/>Shop Our Exquisite Collection!</h1>
                <div className="hero-btn-con">
                    <button>SHOP NOW</button>
                </div>
                </div>
                
            </div>
        </section>
     );
}
 
export default Hero;