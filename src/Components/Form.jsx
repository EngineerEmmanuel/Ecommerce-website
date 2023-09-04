import { useState } from "react";
import "../Styles/Form.css"

const Form = () => {
    const [email, setEmail] =useState("");
    return ( 
        <section className="form-section">
            <h2>Subscribe To Our Newsletter</h2>
            <p>Do you want to get fashion updates? Don`t worry we are here for you, just subscribe</p>

            <form action="https://formspree.io/f/mwkjlbqz" method="POST">
            <input placeholder="Email" name="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            <button type="submit">Subscribe</button>
        </form>
        </section>
        
     );
}
 
export default Form;