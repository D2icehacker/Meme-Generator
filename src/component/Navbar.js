import React from "react"
import Images from './images/airbnb-logo.png';

export default function Navbar() {
    return (
        <nav>
      <img src={Images} className="nav--logo"/>
    </nav>
    )
}