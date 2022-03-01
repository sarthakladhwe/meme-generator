import React from 'react';

function Meme() {

    const [formData, setFormData] = React.useState({
        topText: '',
        bottomText: ''
    })

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    console.log(formData);

    function formSubmit(e) {
        e.preventDefault();
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
        </main>
    )
}

export default Meme;