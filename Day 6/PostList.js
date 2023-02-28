import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Posts'
import Button from './components/Button';
import Pagination from './Pagination';

const PostList = () => {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalItemperPage, setTotalItemperPage] = useState(15);
    const [pageNumberLimit,  setPageNumberLimit] = useState(5);
    const [maxPageNumberLimit,  setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit,  setMinPageNumberLimit] = useState(1);
    
   
    


    const url = "https://jsonplaceholder.typicode.com/posts";
    //?_limit=10

    const getPost = async () => {
        const getPostSet = await axios.get(url);

        setPosts(getPostSet.data);
    }

    const indexofLastPage = currentPage * totalItemperPage;
    const indexofFirstPage = indexofLastPage - totalItemperPage;
    const currentPosts = posts.slice(indexofFirstPage, indexofLastPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        getPost();
    }, []);

    const handleNextButton = () => {
        setCurrentPage(currentPage + 1);
 
        if(currentPage + 1 > maxPageNumberLimit){
         setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
         setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }
 
    const handlePrevButton = () => {
     setCurrentPage(currentPage - 1);
 
     if((currentPage - 1) % pageNumberLimit == 0){
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
     }
 }

    if(!posts){
       return <h1>Loading...</h1>
    }

   
    return (
        <div className="">


            <h1>Posts</h1>
            <div>
                {currentPosts.map((post) => (
                    <Post key = {post.id
                    }  {...post}  userId={post.userId}/>
                ))}
                
            </div>
            <Pagination totalItemperPage = {totalItemperPage} totalItems = {posts.length} 
            paginate = {paginate} currentPage = {currentPage} onNextClick = {handleNextButton} onPrevClick = {handlePrevButton} 
            minPageNumberLimit={minPageNumberLimit} maxPageNumberLimit = {maxPageNumberLimit}/>
        </div>
    );
}


export default PostList