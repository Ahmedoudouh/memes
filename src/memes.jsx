import React from "react";
import data from "./data.js";
export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  const [memetext, setMemetext] = React.useState({});
  function getMemeImage() {
    const memesArray = data.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }
  function handleChange(event) {
    if (event.target.name === "TopText") {
      setMemetext((prevMeme) => ({
        ...prevMeme,
        TopText: event.target.value
      }));
    }
    if (event.target.name === "BottomText") {
      setMemetext((prevMeme) => ({
        ...prevMeme,
        BottomText: event.target.value
      }));
    }
  }

  return (
    <main className="padding">
      <div className="form">
        <div className="input">
          <input
            onChange={handleChange}
            name="TopText"
            type="text"
            placeholder="Top text"
            className="form--input"
          />
          <input
            onChange={handleChange}
            name="BottomText"
            type="text"
            placeholder="Bottom text"
            className="form--input"
          />
        </div>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
        <div className="img">
          <img src={memeImage} className="meme-image" />
          <h2 className="meme-text top">{memetext.TopText}</h2>
          <h2 className="meme-text bottom">{memetext.BottomText}</h2>
        </div>
      </div>
    </main>
  );
}
