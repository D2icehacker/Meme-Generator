import React from "react"
import memesData from "../memesData.js"


export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }
    

    return (
        <main>
            <div className="form">
                <div>
                    <label className="form--label">Top text</label>
                    <input
                        type="text"
                        placeholder="Shut up"
                        className="form--input"
                    />
                </div>
                <div>
                    <label className="form--label">Bottom text</label>
                    <input
                        type="text"
                        placeholder="and take my money"
                        className="form--input"
                    />
                </div>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <br></br>
            <img src={memeImage} className="meme--image"/>
        </main>
    )
}