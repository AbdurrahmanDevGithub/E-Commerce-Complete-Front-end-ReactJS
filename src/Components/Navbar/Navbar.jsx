import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assests/dropdown_icon.png'

const Navbar = () => {
  const [menu, setManu] = useState("shop")
  const {getTotalCartItems}=useContext(ShopContext)
  const menuRef=useRef();

  const dropdown_toggle=(e)=>{
    menuRef.currentclassList.toggle('nav-menu-visible');
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>Shopper</p>
      </div>
      <img onClick={dropdown_toggle} src={nav_dropdown} alt='' />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => { setManu("shop") }}> <Link style={{ textDecoration: "none" }} to="/"> Shop </Link>  {menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setManu("mens") }}> <Link style={{ textDecoration: "none" }} to='/mens'> Men </Link>  {menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setManu("womens") }}> <Link style={{ textDecoration: "none" }} to='/women'> Women </Link> {menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setManu("kids") }}> <Link style={{ textDecoration: "none" }} to='/kids'> Kids </Link> {menu === "kids" ? <hr /> : <></>}</li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar