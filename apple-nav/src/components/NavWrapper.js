import React from 'react'
import Nav from './Nav';

import { FaApple, FaSistrix, FaShoppingBag } from 'react-icons/fa';

export default function NavWrapper() {
  return (
    <div className="nav-wrapper">
      <FaApple className="icon" />
      <Nav url="/mac">Mac</Nav>
      <Nav url="/ipad">iPad</Nav>
      <Nav url="/iphone">iPhone</Nav>
      <Nav url="/watch">Watch</Nav>
      <Nav url="/tv">TV</Nav>
      <Nav url="/music">Music</Nav>
      <FaSistrix className="icon-search" />
      <FaShoppingBag className="icon-search" />
    </div>
  )
}
