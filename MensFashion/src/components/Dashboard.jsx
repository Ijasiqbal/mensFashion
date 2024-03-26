import React from 'react'
import styles from '../components/style/Dashboard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faHeart, faUndo, faAddressCard, faTicketAlt, faUser, faPen } from '@fortawesome/free-solid-svg-icons'

export default function Dashboard({setSelectedOption}) {
  return (
    <div className={styles.base}>
        <div className={styles.dashBanner}>
            <div className={styles.email}>micheal@example.com</div>
            <div className={styles.editBtn} onClick={()=>{setSelectedOption("Edit Profile")}}><FontAwesomeIcon icon={faPen} className={styles.penIcon} />Edit profile</div>
        </div>
        <div className={styles.boxCollection}>
            <div className={styles.box}><FontAwesomeIcon icon={faShoppingBag} className={styles.icons} /><br /> Orders</div>
            <div className={styles.box}><FontAwesomeIcon icon={faHeart} className={styles.icons} /> <br />Wishlist</div>
            <div className={styles.box}><FontAwesomeIcon icon={faUndo} className={styles.icons} /> <br />Returns</div>
            <div className={styles.box}><FontAwesomeIcon icon={faAddressCard} className={styles.icons} /> <br />Saved Address</div>  
            <div className={styles.box}><FontAwesomeIcon icon={faTicketAlt} className={styles.icons} /><br /> Coupons</div>  
            <div className={styles.box}><FontAwesomeIcon icon={faUser} className={styles.icons} /> <br />Profile Details</div>  
        </div>
    </div>
  )
}