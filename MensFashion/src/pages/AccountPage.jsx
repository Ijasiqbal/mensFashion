import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import styles from '../styles/Account.module.css'
import Dashboard from '../components/Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBagShopping, faUser, faEdit, faLocationDot, faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Profile from '../components/Profile';
import EditProfile from '../components/EditProfile';

export default function AccountPage() {
  
  const [selectedOption, setSelectedOption] = useState('Dashboard');

  const handleClick = (option) => {
    setSelectedOption(option);
  }

  return (
    <div>
        <Navbar/>
        <div className={styles.base}>
            <div className={styles.AccBanner}>Account </div>
            <div className={styles.cols2}>
                <div className={styles.LHS}>
                    <div className={selectedOption === 'Dashboard' ? styles.selectedOption : styles.options} onClick={() => handleClick('Dashboard')}><FontAwesomeIcon icon={faHouse}  className={styles.icons}/>Dashboard</div>
                    <div className={selectedOption === 'Orders' ? styles.selectedOption : styles.options} onClick={() => handleClick('Orders')}><FontAwesomeIcon icon={faBagShopping} className={styles.icons} />Orders</div>
                    <div className={selectedOption === 'Profile' ? styles.selectedOption : styles.options} onClick={() => handleClick('Profile')}><FontAwesomeIcon icon={faUser} className={styles.icons} />Profile</div>
                    <div className={selectedOption === 'Edit Profile' ? styles.selectedOption : styles.options} onClick={() => handleClick('Edit Profile')}><FontAwesomeIcon icon={faEdit}  className={styles.icons}/>Edit Profile</div>
                    <div className={selectedOption === 'Saved Address' ? styles.selectedOption : styles.options} onClick={() => handleClick('Saved Address')}><FontAwesomeIcon icon={faLocationDot} className={styles.icons} />Saved Address</div>
                    <div className={selectedOption === 'Wishlist' ? styles.selectedOption : styles.options} onClick={() => handleClick('Wishlist')}><FontAwesomeIcon icon={faHeart} className={styles.icons} />Wishlist</div>
                    <div className={selectedOption === 'Logout' ? styles.selectedOption : styles.options} onClick={() => handleClick('Logout')}><FontAwesomeIcon icon={faSignOutAlt} className={styles.icons} />Logout</div>
                </div>
                <div className={styles.RHS}>
                {selectedOption === 'Dashboard' ? <Dashboard setSelectedOption={setSelectedOption}/> : null}
                {selectedOption === 'Profile' ? <Profile  setSelectedOption={setSelectedOption}/> : null}
                {selectedOption === 'Edit Profile' ? <EditProfile /> : null}
                </div>
            </div>

        </div>
      
    </div>
  )
}