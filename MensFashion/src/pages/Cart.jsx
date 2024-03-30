import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/Cart.module.css'
import CartItem from '../components/CartItem'
import image from '../assets/img/product2.png'

export default function Cart() {
    const data = {
        name : "Nirmala Srinivas",
        address : "#653/77, 6th B Cross, Maheshwari Nagar, T Dasarahalli, Bengaluru-560057",
    }

    const [cartItems, setCartItems] = useState([
        {
            image: image,
            name: "100% linen overshirt with pockets",
            qty: "1",
            size: "M",
            price: "6000.00",
            mrp: "10000",
            discount: "45"
        },
        {
            image: image,
            name: "Cotton jogger-style trousers",
            qty: "1",
            size: "M",
            price: "4000.00",
            mrp: "5000",
            discount: "38"
        }
        // Add more items as needed
    ])

    const removeItem = (index) => {
        const newCartItems = [...cartItems]
        newCartItems.splice(index, 1)
        setCartItems(newCartItems)
    }

    let totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0)
    let totalMrp = cartItems.reduce((total, item) => total + parseFloat(item.mrp),0)
    let totalDiscount = totalMrp - totalPrice

    let grandTotal = totalPrice 

    return (
        <div>
            <Navbar/>
            <div className={styles.base}>
                <h2>Shopping bag</h2>
                <div className={styles.layout}>
                    <div className={styles.lhs}>
                        <div className={styles.address}>
                            <div>
                                <div className={styles.name}>Deliver to: <strong>{data.name}</strong></div>
                                <div className={styles.addrs}>{data.address}</div>
                            </div>
                            <button className={styles.addrsBtn}>Change address</button>
                        </div>
                        {cartItems.map((item, index) => (
                            <CartItem 
                                key={index}
                                image={item.image}
                                name={item.name}
                                qty={item.qty}
                                size={item.size}
                                price={item.price}
                                mrp={item.mrp}
                                discount={item.discount}
                                onRemove={() => removeItem(index)}
                            />
                        ))}
                    </div>
                    <div className={styles.rhs}>
                        <div className={styles.checkout}>
                            <h3 className={styles.orderSummary}>Order Summary</h3>
                            <div className={styles.row}>
                                <div>Total:</div> 
                                <span>Rs. {totalMrp.toFixed(2)}</span>
                            </div>
                            <div className={styles.row}>
                                <div>Discount:</div> 
                                <span>Rs. {totalDiscount.toFixed(2)}</span>
                            </div>
                            <div className={styles.row}>
                                <div>Delivery charges:</div> 
                                <span>Free</span>
                            </div>
                            <div className={styles.row}>
                                <div>coupon</div> 
                                <span><input type="text" placeholder='Apply' /></span>
                            </div>
                            <hr />
                            <div className={`${styles.row} ${styles.grandtotal}`}>
                                <div>Grand Total:</div> 
                                <span>Rs. {grandTotal.toFixed(2)}</span>
                            </div>
                            <button className={styles.checkoutBtn}>Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}