import { useState } from 'react' ;


function Meme({ memes }) {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/3si4.jpg'
    });

    function handleChange(event) {
        const { name, type, value, checked } = event.target;

        setMeme( prevMeme => {
            return {
                ...prevMeme,
                [name]: type === 'checkbox' ? checked : value
            }
        });
    }

    const handleGetImageClick = () => {
        const randomNumber = Math.floor(Math.random() * memes.length);
        const { url } = memes[randomNumber];

        setMeme( prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        });
    }


    return (
        <main>
            <div className='form'>
                <input 
                    type="text" 
                    placeholder='Top text'
                    className='form--input'
                    name='topText'
                    value={ meme.topText }
                    onChange={ handleChange }
                />
                <input 
                    type="text" 
                    placeholder='Bottom text'
                    className='form--input'
                    name='bottomText'
                    value={ meme.bottomText }
                    onChange={ handleChange }
                />

                <button
                    className='form--button'
                    onClick={ handleGetImageClick }
                >
                    Get a new meme image 🖼
                </button>
            </div>

            <div className="meme">
                <img src={ meme.randomImage } alt='meme' className="meme--image" />
                <h2 className="meme--text top">{ meme.topText }</h2>
                <h2 className="meme--text bottom">{ meme.bottomText }</h2>
            </div>
        </main>
    );
}


export default Meme ;
