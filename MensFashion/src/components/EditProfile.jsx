import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import styles from './style/EditProfile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

export default function EditProfile() {
  const [profile, setProfile] = useState({
    fullName: 'Nirmala Srinivas',
    mobileNumber: '949494949494',
    email: 'name@example.com',
    gender: 'Male',
    dob: '10/03/1993',
    location: 'India'
  });

  const handleChange = (e) => {
    setProfile({...profile, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated profile to your server
    console.log(profile);
  }

  return (
    <div className={styles.base}>
        <h2>Edit Profile</h2> 
        <form onSubmit={handleSubmit}>
            <TextField label="Full Name" name="fullName" value={profile.fullName} onChange={handleChange} fullWidth className={styles.textField} />
            <TextField label="Mobile Number" name="mobileNumber" value={profile.mobileNumber} onChange={handleChange} fullWidth className={styles.textField} />
            <TextField label="Email ID" name="email" value={profile.email} onChange={handleChange} fullWidth className={styles.textField} />
            <TextField label="Gender" name="gender" value={profile.gender} onChange={handleChange} fullWidth className={styles.textField} />
            <TextField label="Date of Birth" name="dob" type="date" value={profile.dob} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} className={styles.textField} />
            <TextField label="Location" name="location" value={profile.location} onChange={handleChange} fullWidth className={styles.textField} />
            <button type="submit" className={styles.editBtn}>
                <FontAwesomeIcon icon={faPen} className={styles.icon}/> Save Changes
            </button>
        </form>
    </div>
  )
}