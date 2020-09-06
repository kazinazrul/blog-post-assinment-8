import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const PostDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    },[])
    return (
        <div>
            <p>This is Post Details Component: {postId}</p>
            <h3>Title: {post.title}</h3>
            <p>Description: {post.body}</p>
        </div>
    );
};

export default PostDetails;