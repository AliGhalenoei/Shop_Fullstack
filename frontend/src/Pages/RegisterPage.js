import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'



function RegisterPage() {

    const [phone, setPhone] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [created, setCreated] = useState(false)

    const auth = useSelector(state => state.auth)

    useEffect(() => {

    }, [])

    const submitForm = (e) => {
        e.preventDefault()

        fetch('http://127.0.0.1:8000/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'phone': phone,
                'username': username,
                'password': password,
                'password2': password2,
            })
        }).then((res) => console.log(res))

        setCreated(true)
    }

    return (
        <>
            {!auth.is_login ? (
                <>
                    {created && <Navigate to='login'/>}
                    <div className='container w-50 mt-3 p-3 shadow-lg ' style={{ height: '400px' }}>
                        <div className='row'>
                            <div className='align-items-center justify-content-center align-items-center'>
                                <form className='form' onSubmit={submitForm} method='post'>
                                    <input className='form-control' placeholder='Enter Phone' type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    <input className='form-control mt-2' placeholder='Enter Username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                                    <input className='form-control mt-2' placeholder='Enter Username' type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <input className='form-control mt-2' placeholder='Enter Username' type='text' value={password2} onChange={(e) => setPassword2(e.target.value)} />
                                    <button className='btn btn-primary w-100 mt-2' type='submit'>Sing up</button>
                                </form><br />
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <Navigate to='/' />
            )}
        </>
    )
}

export default RegisterPage