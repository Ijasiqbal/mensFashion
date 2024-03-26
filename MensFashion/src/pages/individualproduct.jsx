import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp ,faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/individualproduct.css';
import ProductList from './ProductList';
import image1 from "../assets/productimages/one.jpg";
import image2 from "../assets/productimages/two.jpg";
import image3 from "../assets/productimages/three.jpg";


const reviews = [
  {
    id: 1,
    user: "ganapathy",
    profileImage: "https://media.licdn.com/dms/image/D5603AQExl3BI7MoFgA/profile-displayphoto-shrink_800_800/0/1706242678372?e=1717027200&v=beta&t=iZcNBNTXsjzCKjvexPt96RbplOZ7_NCJNJ4fJxp40rk",
    timestamp: "June 25, 2023",
    rating: 4,
    reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    user: "ganapathy",
    profileImage: "https://media.licdn.com/dms/image/D5603AQExl3BI7MoFgA/profile-displayphoto-shrink_800_800/0/1706242678372?e=1717027200&v=beta&t=iZcNBNTXsjzCKjvexPt96RbplOZ7_NCJNJ4fJxp40rk",
    timestamp: "July 10, 2023",
    rating: 5,
    reviewText: "Sed et efficitur odio, ac dictum elit."
  },
  {
    id: 3,
    user: "ganapathy",
    profileImage: "https://media.licdn.com/dms/image/D5603AQExl3BI7MoFgA/profile-displayphoto-shrink_800_800/0/1706242678372?e=1717027200&v=beta&t=iZcNBNTXsjzCKjvexPt96RbplOZ7_NCJNJ4fJxp40rk",
    timestamp: "June 25, 2023",
    rating: 4,
    reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 4,
    user: "ganapathy",
    profileImage: "https://media.licdn.com/dms/image/D5603AQExl3BI7MoFgA/profile-displayphoto-shrink_800_800/0/1706242678372?e=1717027200&v=beta&t=iZcNBNTXsjzCKjvexPt96RbplOZ7_NCJNJ4fJxp40rk",
    timestamp: "July 10, 2023",
    rating: 5,
    reviewText: "Sed et efficitur odio, ac dictum elit."
  },
  {
    id: 5,
    user: "ganapathy",
    profileImage: "https://media.licdn.com/dms/image/D5603AQExl3BI7MoFgA/profile-displayphoto-shrink_800_800/0/1706242678372?e=1717027200&v=beta&t=iZcNBNTXsjzCKjvexPt96RbplOZ7_NCJNJ4fJxp40rk",
    timestamp: "June 25, 2023",
    rating: 4,
    reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 6,
    user: "ganapathy",
    profileImage: "https://media.licdn.com/dms/image/D5603AQExl3BI7MoFgA/profile-displayphoto-shrink_800_800/0/1706242678372?e=1717027200&v=beta&t=iZcNBNTXsjzCKjvexPt96RbplOZ7_NCJNJ4fJxp40rk",
    timestamp: "July 10, 2023",
    rating: 5,
    reviewText: "Sed et efficitur odio, ac dictum elit."
  }
];

export default function IndividualProduct() {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3]; // Array of all product images

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  // State for selected color, size, and quantity
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const [pincode, setPincode] = useState(''); // State for pincode input
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [showSpecifications, setShowSpecifications] = useState(false);

  // Function to handle color selection
  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  // Function to handle size selection
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  // Function to handle quantity change
  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value)); // Convert input value to integer
  };

  const handleCheckDelivery = () => {
    // Implement delivery check functionality here
    console.log("Checking delivery for pincode:", pincode);
  };

  const toggleProductDetails = () => {
    setShowProductDetails(!showProductDetails);
  };

  const toggleSpecifications = () => {
    setShowSpecifications(!showSpecifications);
  };

  return (

   <div>
    <div className="product-page">
      <div className="product-image-container">
      <div className='image-container'>
        <img src={images[currentImageIndex]} alt="Product" className="product-image" />
        <div className="navigation-buttons">
          <button onClick={prevImage}><FontAwesomeIcon icon={faChevronLeft} /></button>
          <button onClick={nextImage}><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
        <div>
          <h2>DESCRIPTION</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
          </p>
          <hr />
          <div className="specification-toggle" onClick={toggleProductDetails}>
            <h2>Product Details</h2>
            <FontAwesomeIcon icon={showProductDetails ? faChevronUp : faChevronDown} />
          </div>
          {showProductDetails && (
            <ul className="product-specifications">
              <li>Material: Cotton</li>
              <li>Fit: Regular</li>
              <li>Style: Hooded Sweatshirt</li>
              <li>Pattern: Solid</li>
              <li>Wash Care: Machine Wash</li>
            </ul>
          )}
        </div>
        <hr />
        <div className="specification-toggle" onClick={toggleSpecifications}>
          <h2>Specifications</h2>
          <FontAwesomeIcon icon={showSpecifications ? faChevronUp : faChevronDown} />
        </div>
        {showSpecifications && (
          <ul className="product-specifications">
            <li>Material: Cotton</li>
            <li>Fit: Regular</li>
            <li>Style: Hooded Sweatshirt</li>
            <li>Pattern: Solid</li>
            <li>Wash Care: Machine Wash</li>
          </ul>
        )}
        <hr />
      </div>
      <div className="product-details">
        <h1>Lightweight Cotton Hooded Sweatshirt</h1>
        <p className="product-description">
          Stay comfortable and stylish with our lightweight cotton hooded sweatshirt. Made from high-quality materials, this sweatshirt is perfect for everyday wear or casual outings.
        </p>
        <div className="price-container">
          <div className="original-price">Rs. 3,990.00</div>
          <div className="discounted-price"><s>Rs. 5,990.00</s></div>
          <div className="discount-percentage">(60% off)</div>
        </div>
        <div className='rating-box'>
          <div className="rating-container">
            <span className="star">&#9733;</span> {/* Unicode star character */}
            <span className="value">{4.6}</span>
          </div>
        </div>
        <hr />
        <div className="color-selector">
          Color: <span>{selectedColor}</span> {/* Display selected color name */}
          <div className="color-options">
            <div className={`color-option ${selectedColor === 'Black' ? 'selected' : ''}`} style={{ backgroundColor: 'black' }} onClick={() => handleColorChange('Black')}></div>
            <div className={`color-option ${selectedColor === 'Red' ? 'selected' : ''}`} style={{ backgroundColor: 'red' }} onClick={() => handleColorChange('Red')}></div>
            <div className={`color-option ${selectedColor === 'Gray' ? 'selected' : ''}`} style={{ backgroundColor: 'gray' }} onClick={() => handleColorChange('Gray')}></div>
          </div>
        </div>
        <div className="size-selector">
          Size: <span>{selectedSize}</span> {/* Display selected size */}
          <div className="size-options">
            <div className={`size-option ${selectedSize === 'XS' ? 'selected' : ''}`} onClick={() => handleSizeChange('XS')}>XS</div>
            <div className={`size-option ${selectedSize === 'S' ? 'selected' : ''}`} onClick={() => handleSizeChange('S')}>S</div>
            <div className={`size-option ${selectedSize === 'M' ? 'selected' : ''}`} onClick={() => handleSizeChange('M')}>M</div>
            <div className={`size-option ${selectedSize === 'L' ? 'selected' : ''}`} onClick={() => handleSizeChange('L')}>L</div>
            <div className={`size-option ${selectedSize === 'XL' ? 'selected' : ''}`} onClick={() => handleSizeChange('XL')}>XL</div>
            <div className={`size-option ${selectedSize === 'XXL' ? 'selected' : ''}`} onClick={() => handleSizeChange('XXL')}>XXL</div>
          </div>
        </div>
        <div className="quantity-selector">
          Quantity: 
          <div className='quantity-input'>
            <input 
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1" // Minimum quantity allowed
              max="10"
            />
          </div>
        </div>
        <div className='button-section'>
          <button className="bag-button">Add to Bag</button>
          <br />
          <button className="wishlist-button">Add to Wishlist</button>
        </div>
        <div className="delivery-options">
          Delivery Options: 
          <br />
          <div>
            <input 
              type="text" 
              placeholder="Enter pincode" 
              onChange={(e) => setPincode(e.target.value)}
            />
            <button className='check-btn' type="submit" onClick={handleCheckDelivery}>Check</button>
          </div>
          <div>
            <span className='span-text'>Please enter PIN to check delivery time & availability</span>
          </div>
        </div>
      </div>
    </div>

      <div className="review-section">
        <div className='review'>
        <h2>Review ★★★★ </h2>
        <hr></hr>
        </div>
        {reviews.map(review => (
          <div className="review" key={review.id}>
            <div className="profile">
              {/* Profile picture */}
              <img src={review.profileImage} alt="User Profile" className="profile-image" />
              {/* User information */}
              <div className="profile-info">
                <span className="user">{review.user}</span>
                <span className="timestamp">{review.timestamp}</span>
              </div>
            </div>
            {/* User rating */}
            <div className="user-rating">
              {[...Array(review.rating)].map((_, index) => (
                <span key={index} className="rating">★</span>
              ))}
            </div>
            {/* Review text */}
            <p className="review-text">{review.reviewText}</p>
            <hr></hr>
          </div>
        ))}
      </div>
      <div className='product-list-container'>
        <h2>Similar Products</h2>
        {<ProductList/>}
      </div>
      
   </div>
    


  );
}
