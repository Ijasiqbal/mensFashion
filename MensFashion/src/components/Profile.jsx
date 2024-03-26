import React from 'react'
import styles from './style/Profile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

export default function Profile({setSelectedOption}) {
    
  return (
    <div className={styles.base}>
        <h2>Profile Details</h2> 
        <div className={styles.line}></div> 
        <div className={styles.row1}>
            <div>Full Name</div>
            <div>Nirmala Srinivas</div>
        </div>
        <div className={styles.row2}>
            <div>Mobile Number</div>
            <div>949494949494</div>
        </div>
        <div className={styles.row1}>
            <div>Email ID</div>
            <div>name@example.com</div>
        </div>
        <div className={styles.row2}>
            <div>Gender</div>
            <div>Male</div>
        </div>
        <div className={styles.row1}>
            <div>Mobile Number</div>
            <div>10/03/1993</div>
        </div>
        <div className={styles.row2}>
            <div>Location</div>
            <div>India</div>
        </div>

        <div className={styles.line}></div> 

        <div className={styles.editBtn} onClick={()=>{setSelectedOption('Edit Profile')}}><FontAwesomeIcon icon={faPen} className={styles.icon} />   Edit</div>   
    </div>
  )
}
