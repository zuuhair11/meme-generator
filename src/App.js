import { useState, useEffect } from 'react' ;
import Header from './components/Header' ;
import Meme from './components/Meme' ;


function App() {
    const [memes, setMemes] = useState([]);
    
    useEffect( () => {
        // fetch('https://api.imgflip.com/get_memes')
        //     .then( response => response.json() )
        //     .then( data => setMemes(data.data.memes) )


        // Using async
        // useEffect takes a function as its parameter. If that function
        // returns something, it needs to be a cleanup function. Otherwise,
        // it should return nothing. If we make it an async function, it
        // automatically retuns a promise instead of a function or nothing.
        // Therefore, if you want to use async operations inside of useEffect,
        // you need to define the function separately inside of the callback
        // function, as seen below:
        async function getMemes() {
            const response = await fetch('https://api.imgflip.com/get_memes');
            const data = await response.json();
            setMemes(data.data.memes);
        }
        getMemes();


        return function() {
            // return a clean up function if you need it
            // so when the component unmount, ends, (NOT IN THE DOM)
            // the return function will execute to clean
        }
    }, []);

    return (
        <div className='container'>
            <Header />
            <Meme memes={ memes } />
        </div>
    );
}


export default App ;
