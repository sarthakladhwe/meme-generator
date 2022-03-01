import React from 'react';

function Meme() {

    const [formData, setFormData] = React.useState({
        topText: '',
        bottomText: ''
    })

    function handleChange() {

    }

    function formSubmit(e) {
        e.preventDefault();
    }

    return (
        <main>
            <form className="form" onSubmit={formSubmit}>
                <input type="text" className="input" placeholder="Top text" onChange={handleChange} value={formData.topText}/>
                <input type="text" className="input" placeholder="Bottom text" onChange={handleChange} value={formData.bottomText}/>
                <button className="form-btn">Get a new meme image  🖼</button>
            </form>
        </main>
    )
}

export default Meme;