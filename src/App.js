
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './Components/Home';
import CheckOut from './Components/CheckOut';
import ItemDetails from './Components/ItemDetails';
import Confirmation from './Components/Confirmation';
import Navigation from './Components/Navigation';
import DemoCartMenu from './Components/DemoCartMenu';


import { CartProvider } from './Components/Context';

// const scrollToTop = ()=>{
//   const {pathName}= useLocation();
//   useEffect(()=>{
//     window.scrollTo(0,0);
//   }, [pathName])
//   return null
// }
function App() {
  return (
    <div className="App">
      <CartProvider>
      <scrollToTop />
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/" element={<DemoCartMenu/>}/> */}
        <Route path="/checkout" element={<CheckOut/>}/>
        {/* <Route path="item/:itemId" element={<ItemDetails/>}/> */}
        <Route path="/ItemDetails/:productId" element={<ItemDetails  />}>
                    
                </Route>
        <Route path="checkout/success" element={<Confirmation/>}/>
      </Routes>
      </CartProvider>
    </div>

  );
}

export default App;
