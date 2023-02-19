import React, {useState} from "react"
import "./Meme.css"
import memesData from "../data/memesData"

const Meme = () => {
    const [meme, setMeme] = useState({
        topText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg",
        bottomText:""
    });

    // const [allMemeImages, setAllMemeImages] = useState(memesData)

    const getMemeImage = () => {
        const memesArray = memesData.data.memes;
        const randomIndex = Math.floor(Math.random()*memesArray.length);
        const url = memesArray[randomIndex].url;
        setMeme(prevMeme => {
            return {...prevMeme, randomImage:url}
        });
    }

    return(
        <main className="content--wrapper">
            <div className="meme--form">
                <input className="meme--input" type="text" placeholder="Top text"/>
                <input className="meme--input" type="text" placeholder="Bottom text"/>
                <br />
                <button className="meme--button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <img src={meme.randomImage} alt="meme" className="meme--image"/>
        </main>
    )
}

export default Meme