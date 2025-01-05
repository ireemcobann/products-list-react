import { useState } from 'react';
import './App.css';

function App() {
  return <Productlist />;
}

export default App;

function Productlist() {
  const [cartItems, setCartItems] = useState([]); 

  const products = [
    {
      name: 'Waffle with Berries',
      category: 'Waffle',
      price: 6.5,
      image: '/images/waffle.svg',
    },
    {
      name: 'Vanilla Bean Crème Brûlée',
      category: 'Crème Brûlée',
      price: 7.0,
      image: '/images/cremeburulee.svg',
    },
    {
      name: 'Macaron Mix of Five',
      category: 'Macaron',
      price: 8.0,
      image: '/images/macaron.svg',
    },
    {
      name: 'Classic Tiramisu',
      category: 'Tiramisu',
      price: 5.5,
      image: '/images/tiramisu.svg',
    },
    {
      name: 'Pistachio Baklava',
      category: 'Baklava',
      price: 4.0,
      image: '/images/baklava.svg',
    },
    {
      name: 'Lemon Meringue Pie',
      category: 'Pie',
      price: 5.0,
      image: '/images/pie.svg',
    },
    {
      name: 'Red Velvet Cake',
      category: 'Cake',
      price: 4.5,
      image: '/images/cake.svg',
    },
    {
      name: 'Salted Caramel Brownie',
      category: 'Brownie',
      price: 4.5,
      image: '/images/brownie.svg',
    },
    {
      name: 'Vanilla Panna Cotta',
      category: 'Panna Cotta',
      price: 6.5,
      image: '/images/pannacotta.svg',
    },
  ];

  function handleAddToCart(product) {
    setCartItems([...cartItems, product]);
}

  return (
    <>
      <h1>Desserts</h1>
      <div className="container">
        <div className="container-grid">
          {products.map((product, index) => (
            <div key={index} className="products-content">
              <div className="products-grid-item">
                <div className="image-container">
                  <img src={product.image} alt={product.name} />
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="sepete-ekle"
                  >
                    <i className="fa-solid fa-cart-plus"></i>Add to cart
                  </button>
                </div>
                <p className="category">{product.category}</p>
                <p className="name">{product.name}</p>
                <p className="price">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="orders-container">
          <h4 className="cart-title">Your Cart({cartItems.length})</h4>
          <div className="orders-grid-item">
            {cartItems.length === 0 ? (
              <>
                <img
                  className="sepeteekle"
                  src="assets/images/sepeteekle.svg"
                  alt=""
                />
                <span>Your added items will appear here</span>
              </>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} className="cart-image" style={{width: '100px'}} />
                  <div>
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
              

                  </div>
                  
                </div>
              ))
            )}
                <button className="closeOrderBtn">Start New Order</button>

          </div>
        </div>
      </div>
    </>
  );
}
