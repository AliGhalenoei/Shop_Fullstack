import React, { useEffect, useState } from 'react';

import Navbar from '../Components/Navbar';

function ContactPage() {

    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('Support')
    const [message, setMessage] = useState('')
    const [send , setSend] = useState(false)

    useEffect(() => {

    },[])

    const submitForm = (e) => {
        e.preventDefault()

        fetch('http://127.0.0.1:8000/api/contact/',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                'email':email,
                'phone':phone,
                'subject':subject,
                'message':message
            })
        }).then((res) => console.log(res))

        setEmail('')
        setPhone('')
        setSubject('')
        setMessage('')
        setSend(true)

        setTimeout(() => {
            setSend(false)
        },3000)
    }

    return (
        <>  
            <br/>
            <Navbar />
            {send && 
                <div className='container'>
                    <div className='alert alert-success text-center w-100'>
                    Your request has been successfully sent
                    </div>
                 </div>
            }
            <div className="container p-2">
                <form className="form" onSubmit={submitForm} method='post'>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="09xxxxxxxxx" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>

                    <select className="form-select" aria-label="Default select example" onChange={(e) => setSubject(e.target.value)}>
                        <option value="Support">Support</option>
                        <option value="Payment">Payment</option>
                        <option value="Offers">Offers</option>
                        <option value="Question">Question</option>
                    </select>

                    <br/>

                        <div className="mb-3">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message..." value={message} onChange={(e) =>setMessage(e.target.value)}></textarea>
                        </div>

                        <button className="btn btn-primary w-100" type="submit">Send</button>
                </form>
            </div>
        </>
    )
}

export default ContactPage