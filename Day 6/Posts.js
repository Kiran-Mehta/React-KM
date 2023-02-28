import { useState, useEffect } from "react";
import axios from 'axios';
import Button from './components/Button';
import Comments from "./components/Comments";


export default function Posts({ body, id, title, userId }) {

    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalComments, setTotalComments]= useState([]);

   
    const getTotalComments = async () => {
        const getComments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

        setTotalComments(getComments.data);
    } 

    useEffect(() => {

      getTotalComments();

    }, []);

    console.log(totalComments, "comments are here");



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

    

    return (
        <div>
            <div>
                <p>
                    <strong>Title:</strong> {title}
                </p>
                <p>
                    <strong ></strong> {body}
                </p>
                <Button onClick={handleClick} label={"Comments"} length={totalComments.length}/>
                {loading && <h1> Post and Comments are Loading...</h1>}
                {showComments && <Comments showComments={showComments} comments={comments} />}
                <hr />
            </div>

        </div>

    );
}


