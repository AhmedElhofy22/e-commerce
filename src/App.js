import React, {useState,useEffect} from "react";
import Products from "./Components/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import { commerce } from "./API/ecommerce";

function App() {
  const [products, setProducts] = useState([]);
  const fetehProducts = async ()=> {
    const {data} = await commerce.products.list();
    setProducts(data);
  }
  useEffect(() => {
    fetehProducts();
  }, [])
  

  
  return (
    <div>
      <Navbar />
      <Products products={products}/>
    </div>
  );
}

export default App;
