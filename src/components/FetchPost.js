import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { loadPostStart } from './actions/actions';  
import './FetchPost.css';


const FetchPost = () => {
    const dispatch = useDispatch();
    const fetchPost = () => {
        dispatch(loadPostStart())
    } 
    const state = useSelector((state) => ({...state.app}));
    return (
        <>
        <h2>JSON Placeholder</h2>
        <button onClick={fetchPost} className="button"> GET POSTS</button>
        {state.posts.map((post) => (
            <li key={post.id} >{post.title}</li>
        ))}
        
        </>
    )
} 
export default FetchPost;