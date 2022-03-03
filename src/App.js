import React,{useState} from 'react';
import Post from './FacebookPost';
import './App.css';

//PROPS

function App() {

  const [posts, setPosts] = useState([
    {author: "Vincenzo", description: 'bella'},
    {author: "Vincenzo", description: 'bella'},
    {author: "Vincenzo", description: 'bella'},
  ]);

  

    return (
      <div className='Container'>
        {posts.map(post => (
          <Post author={post.author} description={post.description} />
        ))}
      </div>
  
    );
  }
  

export default App;