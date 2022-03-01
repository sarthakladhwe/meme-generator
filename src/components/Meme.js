import React from 'react';

function Meme() {

    const [formData, setFormData] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    })

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length );
        const url = allMemes[randomNumber].url
        setFormData(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function formSubmit(e) {
        e.preventDefault();
        getMemeImage();
    }

    return (
        <main>
            <form className="form" onSubmit={formSubmit}>
                <input type="text"
                    className="input" 
                    placeholder="Top text" 
                    name="topText"
                    onChange={handleChange} 
                    value={formData.topText}
                />
                <input type="text" 
                    className="input" 
                    placeholder="Bottom text" 
                    name="bottomText"
                    onChange={handleChange} 
                    value={formData.bottomText}
                />
                <button className="form-btn">Get a new meme image  🖼</button>
            </form>
            <div className='meme'>
                <img src={formData.randomImage} className="meme--image"/>
                <h2 className='top-text meme-text' >{formData.topText}</h2>
                <h2 className='bottom-text meme-text' >{formData.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme;