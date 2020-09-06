import React, { useState, useEffect } from 'react';
import Posts from '../Posts/Posts';
import Comment from '../Comment/Comment';


const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => setComments(data))
    },[])

    return (
        <div>

            {
                posts.map(post => <Posts post={post}></Posts>)
            }
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default Home;
