import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { login } from '../Redux/Slices/AuthSlice';

function LoginPage() {

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()


    useEffect(() => {
        console.log('Render Login Page');
    }, [])

    const submitForm = (e) => {
        e.preventDefault()

        fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'phone': phone,
                'password': password,
            })
        }).then((res) => res.json()).then((data) => {
            dispatch(login(data))
            setPhone('')
            setPassword('')

        })
    }

    return (
        <div className='container w-50 mt-3 p-3 shadow-lg ' style={{ height: '400px' }}>
            <div className='row'>
                <div className='align-items-center justify-content-center align-items-center'>
                    <form className='form' onSubmit={submitForm} method='post'>
                        <input className='form-control' placeholder='Enter Phone' type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <input className='form-control mt-2' placeholder='Enter Password' type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className='btn btn-primary w-100 mt-2' type='submit'>Login</button>
                    </form><br />
                </div>
            </div>

            {auth.is_login && <Navigate to='/' />}
        </div>
    )
}

export default LoginPage