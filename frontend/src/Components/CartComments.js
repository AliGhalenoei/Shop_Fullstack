import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { allComments } from '../Redux/Slices/CommentSlice';


function CartComments({ commentID }) {

    const comments = useSelector(state => state.comments.comments)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/comments/${commentID}/`).then((res) => res.json()).then((data) => dispatch(allComments(data)))
    }, [])

    return (
        <>
            {comments && (
                <>
                    {comments.map((comment) => (
                        <>
                            <div className="card">
                                <div className="card-header">
                                    {comment.user}
                                </div>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p>{comment.message}</p>
                                        <footer className="blockquote-footer">{comment.updated}<cite title="Source Title">Source Title</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </>
                    ))}
                </>
            )}
        </>
    )
}

export default CartComments