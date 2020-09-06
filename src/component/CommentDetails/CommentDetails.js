import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CommentDetails = () => {
    const {commentId} = useParams();
    const [comment, setComment] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments/${commentId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data));
    },[])

    return (
        <div>
            <p>This is Post Details Component: {commentId}</p>
            <h3>Title: {comment.name}</h3>
            <p>Email: {comment.email}</p>
            <p>Description: {comment.body}</p>
        </div>
    );
};

export default CommentDetails;