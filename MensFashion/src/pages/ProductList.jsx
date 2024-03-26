import React from 'react';
import Product from './product';
import '../styles/ProductList.css';
import image1 from "../assets/productimages/one.jpg"
import image2 from "../assets/productimages/two.jpg"


const ProductList = () => {
  // Sample product data
  const products = [
    { 
      id: 1, 
      name: 'Product 1', 
      price: 50, 
      discount: 10, 
      image: image1, 
      
    },
    { 
      id: 2, 
      name: 'Product 2', 
      price: 70, 
      discount: 15, 
      image: image2, 
      
    },
    { 
      id: 4, 
      name: 'Product 2', 
      price: 70, 
      discount: 15, 
      image: image2, 
      
    },
    { 
      id: 5, 
      name: 'Product 2', 
      price: 70, 
      discount: 15, 
      image: image2, 
      
    },
    { 
      id: 6, 
      name: 'Product 2', 
      price: 70, 
      discount: 15, 
      image: image2, 
      
    },
    { 
      id: 7, 
      name: 'Product 2', 
      price: 70, 
      discount: 15, 
      image: image2, 
      
    },
    { 
      id: 8, 
      name: 'Product 2', 
      price: 70, 
      discount: 15, 
      image: image2, 
      
    },
    { 
      id: 9, 
      name: 'Product 2', 
      price: 70, 
      discount: 15, 
      image: image2, 
      
    },
    { 
      id: 10, 
      name: 'Product 2', 
      price: 70, 
      discount: 15, 
      image: image2, 
      
    },
    { 
      id: 11, 
      name: 'Product 2', 
      price: 70, 
      discount: 15, 
      image: image2, 
      
    },
    { 
      id: 12, 
      name: 'Product 2', 
      price: 70, 
      discount: 15, 
      image: image2, 
      
    },
    { 
      id: 13, 
      name: 'Product 2', 
      price: 70, 
      discount: 15, 
      image: image2, 
      
    },
    { 
      id: 14, 
      name: 'Product 2', 
      price: 70, 
      discount: 15, 
      image: image2, 
      
    },
    { 
      id: 15, 
      name: 'Product 2', 
      price: 70, 
      discount: 15, 
      image: image2, 
      
    },
    // Add more products as needed
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          discount={product.discount}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
