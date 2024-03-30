import React from 'react';
import '../styles/Navbar.css';
import { BiMenu, BiChevronDown, BiSearch, BiHeart, BiShoppingBag } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import clsx from 'clsx';

export default function Navbar() {
  
  const [search, setSearch] = useState(true);

  return (
    <nav>
      <div className="menu">
        <label htmlFor="chk1">
          <i><BiMenu /></i>
        </label>
      </div>
      <div className={clsx('searchInput ',{'none': search})}>
        <input 
        type="text"
        placeholder='Search'
        />
      </div>
      <input type="checkbox" id="chk1" />
      <div className="nav-left">
        <ul className="list">
          <li className='responsiveNone'>
            <a href="#" className="item ">
              My Account
            </a>
          </li>
          <li>
            <a href="/" className="item">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="item">
              About
            </a>
          </li>
          <li>
            <a href="#" className="item">
              Contact us
            </a>
          </li>
          <li className='responsiveNone'>
            <a href="#" className="item ">
              Track Orders
            </a>
          </li>
          <li className='responsiveNone'>
            <a href="#" className="item ">
              Return / Exchange
            </a>
          </li>
          <li className='responsiveNone'>
            <a href="#" className="item ">
              FAQ's
            </a>
          </li>
          <li>
            <a href="#" className="item">
              Categories
              <i><BiChevronDown /></i>
            </a>
            <ul className="group">
              <li>
                <a href="#" className="drop-down">
                  Hoodies
                </a>
              </li>
              <br />
              <li>
                <a href="#" className="drop-down">
                  Sweat-shirts
                </a>
              </li>
              <br />
              <li>
                <a href="#" className="drop-down">
                  Sweat-pants
                </a>
              </li>
              <br />
              <li>
                <a href="#" className="drop-down">
                  T-Shirts
                </a>
              </li>
              <br />
            </ul>
          </li>
        </ul>
      </div>
      <div className="men-fasion">
        <h2>Men's Fasion</h2>
      </div>
      <div className="nav-right">
        <div className="flex">
          <div className="link searchbar" id="searchbar" onClick={()=>{setSearch(!search)}}>
            <a href="#" id="searchIcon" >
              <i><BiSearch /></i>
              <br />
              Search
            </a>
            
          </div>
          <div className="link wishlist">
            <a href="#">
              <i><BiHeart /></i>
              <br />
              Wishlist
            </a>
          </div>
          <div className="link shoppingbag">
            <a href="/cart">
              <i><BiShoppingBag /></i>
              <br />
              Shopping Bag
            </a>
            
          </div>
          <div className="link signin">
            <a href="/Account">
              <i><FaUserCircle /></i>
              <br />
              My Account
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}