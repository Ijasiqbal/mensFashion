import styles from '../styles/ProductCard.module.css'
import product from '../assets/img/product.png'

export default function ProductCard({ productName, productPrice,productImg }) {
  return (
    <div className={styles.base}>
        <img src={productImg} alt="product" />
        <div className={styles.cardContent}>
            <h3 className={styles.productName}>{productName}</h3>
            <h3 className={styles.productPrice}>{productPrice}</h3>
        </div>
      
    </div>
  )
}
