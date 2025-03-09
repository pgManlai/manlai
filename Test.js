import React, { useState } from 'react';
import ColorList from "./ColorList";
import Counter from "./Counter";
import Filter from "./Filter";
import 'antd/dist/reset.css';
import './index.css';
import { Card, Button } from 'antd';
import { CartContext } from '../Pages/CartContext';
import { useContext } from 'react';

function Mycard() {
  const [filters, setFilters] = useState({ name: "", color: "", minPrice: "", maxPrice: "" });

 

  const {  addToCart } = useContext(CartContext);
  

  const products = [
    { id: 1, name: "Product1", price: 100, colors: ["red", ], picture: "picture1.jpg" },
    { id: 2, name: "Product2", price: 200, colors: [ "blue"], picture: "picture1.jpg" },
    { id: 3, name: "Product3", price: 300, colors: ["yellow"], picture: "picture1.jpg" },
    { id: 4, name: "Product4", price: 400, colors: [ "white"], picture: "picture1.jpg" },
    { id: 5, name: "Product5", price: 500, colors: [ "purple"], picture: "picture1.jpg" },
    { id: 6, name: "Product6", price: 600, colors: ["black"], picture: "picture1.jpg" }
  ];

 

  const filteredProducts = products.filter(product => {
    return (
      (!filters.name  || product.name.toLowerCase().includes(filters.name.toLowerCase())) &&
      (!filters.color  || product.colors.includes(filters.color)) &&
      (!filters.minPrice  || product.price >= filters.minPrice) &&
      (!filters.maxPrice  || product.price <= filters.maxPrice)
    );
  });

  return (
    <div>
      <Filter filters={filters} setFilters={setFilters} />
      
      <div className="card-container">
        {filteredProducts.map((product) => (
          <Card
          style={{minHeight:"520px", minWidth:"300px"}}
            key={product.id}
            className="card"
            cover={
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img alt="example" src={product.picture} />
              </a>
            }
          >
            <h2 className="card-title">{product.name}</h2>
            <h3>Price {product.price}$</h3>
            <ColorList colors={product.colors} />
            <Counter />
            <Button className='add-to-cart-btn'onClick={() => addToCart(product)} block style={{ marginTop: "10px" }}>Add to Cart</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Mycard;
