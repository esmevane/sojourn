import React from 'react'
import { Link } from 'react-router'

const Menu = () => (
  <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/demo'>Demo</Link></li>
    <li><Link to='/styleguide'>Styleguide</Link></li>
  </ul>
)

export default Menu
