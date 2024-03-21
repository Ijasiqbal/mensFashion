import Navbar from "../components/Navbar";
import styles from "../styles/wishlist.module.css";

export default function Wishlist() {
  return (
    <div>
      <Navbar />
      <section className={styles.wishlist}>
        <h1>hello</h1>
        <div className={styles.box}></div>
        
      </section>
    </div>
  );
}
