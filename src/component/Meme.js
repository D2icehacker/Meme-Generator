import React from "react"
import memesData from "../memesData.js"


export default function Meme() {
   
   
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }
    return (
        <main>
            <div className="form">
                <div>
                   <input
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                    />
                </div>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <br></br>
            <img src={meme.randomImage} className="meme--image" />
        </main>
    )
}