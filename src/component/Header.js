import React from "react"
import Images from "../images/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img src={Images} className="header--image" />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}