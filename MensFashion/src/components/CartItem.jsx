import React from 'react'
import styles from './style/CartItem.module.css'
import image from '../assets/img/product2.png'
import { AiOutlineClockCircle, AiOutlineDelete } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';


export default function CartItem({ image, name, qty, size, price, mrp , discount , onRemove}) {
  return (
    <div className={styles.card}>
        <div className={styles.lhs}>
            <img src={image} alt="product image" />
        </div>
        <div className={styles.rhs}>
            <div className={styles.productName}>{name}</div>
            <div className={styles.productQty}>Qty: {qty}</div>
            <div className={styles.productSize}>Size: {size}</div>
            <div className={styles.productPrice}>Rs.{price} <strike>Rs {mrp}</strike><span>({discount})</span></div>
            <div className={styles.deliveryBy}><i><AiOutlineClockCircle /></i> Delivery by 25 March 2024</div>
            <div className={styles.removeBtn} onClick={()=>{onRemove()}}>Remove <i><BiTrash /></i></div>
        </div>
      
    </div>
  )
}
