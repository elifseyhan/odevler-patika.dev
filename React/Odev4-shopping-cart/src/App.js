//import React, { Component } from "react";
//Hook kullanımı için useState import edildi.
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { products } from "./constants";
import ProductsGrid from "./components/ProductsGrid";

/*class App extends Component {
  state = {
    cart: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
    itemCount: 0,
  };*/

  //Yukarıdaki class component hook ile yeniden oluşturuldu.
  function App(){
    const [cart, setCart] = useState([
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ]);
  

  const [itemCount, setItemCount] = useState(0);

  const handleIncrement = (product) => {
    // cart array'inin kopyasını oluştur
    //const cart = [...this.state.cart];
    const cartCopy = [...cart];
    // parametre olarak gelen product'ın cart array'i içerisindeki index'ini bul
    const index = cartCopy.indexOf(product);
    // kopyalanan cart array'ine bu ürünü ekle ve value property'sini 1 artır
    cartCopy[index] = { ...cartCopy[index] };
    cartCopy[index].value++;
    // getItemCount fonksiyonunu kullanarak sepetteki ürün sayısını bul
    const copyItemCount = getItemCount(cartCopy);
    // state'i güncelle
    //this.setState({ cart, itemCount });
    setCart(cartCopy);
    setItemCount(copyItemCount);
  };

  const handleDecrement = (product) => {
    const cartCopy = [...cart];
    const index = cartCopy.indexOf(product);
    cartCopy[index] = { ...cartCopy[index] };
    cartCopy[index].value--;
    const copyItemCount = getItemCount(cart);
    //this.setState({ cart, itemCount });
    setCart(cartCopy);
    setItemCount(copyItemCount);
  };

  const getItemCount = (cart) => {
    // Sepetteki toplam ürün sayısını bul
    let itemCount = cart.reduce((total, product) => total + product.value, 0);

    return itemCount;
  };

  
    return (
      <div className="App">
        <Navbar totalItems={itemCount} />
        <ProductsGrid
          products={products}
          cart={cart}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    );
}

export default App;
