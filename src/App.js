import React, {useState,useEffect} from "react";
import Products from "./Components/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import { commerce } from "./API/ecommerce";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})
  const fetehProducts = async ()=> {
    const {data} = await commerce.products.list();
    setProducts(data);
  }
  const fetchCart = async ()=> {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  }
  const addToCartHandler = async (productId,quantity)=> {
    const item = await commerce.cart.add(productId,quantity)
      setCart(item.cart)
    }
    
  
  useEffect(() => {
    fetehProducts();
    fetchCart()
  }, [])

  

  
  return (
    <div>
      <Navbar totalItems={cart.total_items}/>
      <Products products={products} onAddToCart={addToCartHandler}/>
    </div>
  );
}

export default App;
