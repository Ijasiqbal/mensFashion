import Navbar from "../components/Navbar";
import banner from "../assets/img/banner.jpg";
import styles from "../styles/Home.module.css";
import ProductCard from "../components/ProductCard";
import product from '../assets/img/product.png'
import product1 from '../assets/img/product1.png'
import product2 from '../assets/img/product2.png'
import category1 from '../assets/img/category3.png'
import category2 from '../assets/img/category2.png'
import category3 from '../assets/img/category1.png'
import category4 from '../assets/img/category4.png'

export default function home() {
  return (
    <div >
        <Navbar/>
        <div className={styles.base}>
            <div className={styles.imgContainer}>
                <h1>Shop Men's fashion</h1>
                <h5>"Elevate your style game. Shop the latest trends in men's fashion online now!"</h5>
                <div className={styles.shopNowBtn}>Shop Now</div>
    
                <img src={banner} alt="banner" />
            </div>
            <div className={styles.line}></div>
            <div className={styles.categorySection}>
                <h2>Shop by category</h2>
                <div className={styles.categoryList}>
                    <div className={styles.category}>
                        <img src={category1} alt="Tshirt" />
                        <div className={styles.TextStrip}>Tshirt</div>
                    </div>
                    <div className={styles.category}>
                        <img src={category2} alt="Sweatshirt" />
                        <div className={styles.TextStrip}>Sweatshirt</div>
                    </div>
                    <div className={styles.category}>
                        <img src={category3} alt="Hoodie" />
                        <div className={styles.TextStrip}>Hoodie</div>
                    </div>
                    <div className={styles.category}>
                        <img className={styles.height4} src={category4} alt="Trackpants" />
                        <div className={styles.TextStrip}>Trackpants</div>
                    </div>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.Trends}>
                <h2>Shop the latest trends</h2>
                <div className={styles.productsList}>
                    <ProductCard
                    productName="100% linen overshirt with pockets"
                    productPrice="Rs. 6790.00"
                    productImg={product}
                    />
                    <ProductCard
                    productName="Cotton jogger-style trousers"
                    productPrice="Rs. 3,690.00"
                    productImg={product1}
                    />
                    <ProductCard
                    productName="100% cotton relaxed-fit t-shirt"
                    productPrice="Rs. 2,490.00"
                    productImg={product2}
                    />
                </div>
                


            </div>

            <div className={styles.line}></div>
            <div className={styles.Trends}>
                <h2>Fresh Arrivals</h2>
                <p className={styles.para}>Elevate your look with our Fresh Arrivals! Explore the newest additions to our collection, handpicked to
keep you on-trend and fashion-forward with every click.</p>
                <div className={styles.productsList}>
                    <ProductCard
                    productName="100% linen overshirt with pockets"
                    productPrice="Rs. 6790.00"
                    productImg={product}
                    />
                    <ProductCard
                    productName="Cotton jogger-style trousers"
                    productPrice="Rs. 3,690.00"
                    productImg={product1}
                    />
                    <ProductCard
                    productName="100% cotton relaxed-fit t-shirt"
                    productPrice="Rs. 2,490.00"
                    productImg={product2}
                    />
                </div>

                <div className={styles.parentLoadMore}>
                    <div className={styles.loadMore}>Load more</div>
                </div>

                <div className={`${styles.line} ${styles.margin1}`}></div>
                <div className={styles.featureBanner}>
                    <div className={styles.box1}>
                        <h3>High Quality</h3>
                        <p>crafted from top materials</p>
                    </div>
                    
                    <div className={styles.box1}>
                        <h3>Free Shipping</h3>
                        <p>On order above Rs. 2000</p>
                    </div>
                    <div className={styles.box1}>
                        <h3>24 / 7 Support</h3>
                        <p>Dedicated support</p>
                    </div>
                </div>
                <div className={`${styles.line} ${styles.margin1}`}></div>

                
                


            </div>

        </div>
        
    </div>
  )
}
