import React, { useState } from 'react';

import {useSelector} from 'react-redux'

function CommentForm({productID}) {

    const [comment , setComment] = useState('')

    const user = useSelector(state => state.auth.authToken)
    console.log('AUTH Token===>',user);

    const submitForm = (e) => {
        e.preventDefault()

        fetch(`http://127.0.0.1:8000/api/comment/${productID}/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${user}`
            },
            body:JSON.stringify({
                'message':comment
            })
        }).then((res) => console.log(res))

        setComment('')
    }

    return (
        <>
            <div className="container">
                <form action="" className="form" method='post' onSubmit={submitForm}>
                    <div className="mb-3">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                            placeholder="Comment..." style={{height:200 , maxHeight:200}} value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    </div>
                    <input type="submit" value="Send" className="btn btn-primary w-100 "/>
                </form>
            </div>
        </>
    )
}

export default CommentForm