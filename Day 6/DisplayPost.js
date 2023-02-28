import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post'
import Button from './components/Button';

const DisplayPost = () => {

    const [posts, setPosts] = useState([]);

    const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";


    const getPost = async () => {
        const getPostSet = await axios.get(url);

        setPosts(getPostSet.data);
    }

    useEffect(() => {
        getPost();
    }, []);

    console.log(posts);

    if(!posts){
       return <h1>Loading...</h1>
    }
    return (
        <div className="">


            <h1>Posts</h1>
            <div>
                {posts.map((post) => (
                    <Post key = {post.id
                    }  {...post}/>
                ))}
                
            </div>
        </div>
    );
}


export default DisplayPost