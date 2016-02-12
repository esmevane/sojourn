import React from 'react'
import { Link } from 'react-router'

const Menu = () => (
  <ul className='splash-menu'>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/notepad'>Notepad Demo</Link></li>
    <li><Link to='/d3-demo'>D3 Demo</Link></li>
    <li><Link to='/styleguide'>Styleguide</Link></li>
  </ul>
)

export default Menu
