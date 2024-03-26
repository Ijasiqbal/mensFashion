// Product.js

import React from 'react';
import { Icon } from '@iconify/react';
import heartIcon from '@iconify-icons/bx/bx-heart'; // Import the bx-heart icon from Boxicons
import styles from '../styles/product.module.css'; // Import the CSS module

const Product = ({ name, price, discount, image }) => {
  const discountedPrice = price * (1 - discount / 100);
  const discountPercentage = discount + '%';

  return (
    <div className={styles.product}>
      <div className={styles['product-image']}>
        <img src={image} alt={name} />
        <span className={styles['add-to-wishlist']}>
          <Icon icon={heartIcon} /> {/* Use the Boxicons heart icon */}
        </span>
      </div>
      <div className={styles['product-details']}>
        <div className={styles['product-name']}>{name}</div>
        <div className={styles['price-container']}>
          <div className={styles['price-details']}>
            <div className={styles['original-price']}>Rs. {price}</div>
            <div className={styles['discounted-price']}><s>Rs. {discountedPrice.toFixed(2)}</s></div>
          </div>
          <div className={styles['discount-percentage']}>({discountPercentage})</div>
        </div>
        <p className={styles['add-to-bag']}>Add to Bag</p>
      </div>
    </div>
  );
};

export default Product;
