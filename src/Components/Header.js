import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav className="nav">
       <div className="nav-logo">
        <h2>Chef Book</h2>
        </div>
        <div className="nav-list">
         <ul>
            <li><Link to='/' >Home</Link>  </li>
            <li><Link to='/checkout'>Checkout</Link></li>
            <li><Link to='/login'>Login</Link></li>
         </ul>
         </div>
      </nav>
    </div>
  )
}

export default Header
