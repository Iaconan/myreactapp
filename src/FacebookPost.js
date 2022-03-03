import React from 'react';
import './App.css';


function Post(props) {
    console.log(props)
    return(
        <div className='Post'>
            <h1>{props.author}</h1>
            <h4>{props.description}</h4>
            <button>Submit</button>
        </div>
    )
}

export default Post;