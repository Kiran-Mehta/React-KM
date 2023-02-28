import { useState, useEffect } from "react";
import axios from 'axios';
import Button from './components/Button';
import Comments from "./components/Comments";


export default function User({ body, id, title, userId }) {

    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);


    const handleClick = async () => {
       
        console.log("comments are below");
        if(showComments){
            setShowComments(false);
            return;
        }

        setLoading(true);

        const postComments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        setComments(postComments.data);
        setShowComments(true);
        setLoading(false);
    }

    console.log(comments)
    return (
        <div>
            <div>
                <p>
                    <strong>Title:</strong> {title}
                </p>
                <p>
                    <strong ></strong> {body}
                </p>
                <Button onClick={handleClick} label={"Comments"} length={comments.length}/>
                {loading && <h1> Post and Comments are Loading...</h1>}
                {showComments && <Comments showComments={showComments} comments={comments}/>}
                <hr />
            </div>

        </div>

    );
}


