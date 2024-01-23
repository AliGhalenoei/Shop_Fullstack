import React from 'react';


function Footer() {
    return (
        <>
            <div className="my-5 w-100">

                <footer className="bg-dark text-center text-lg-start text-white">

                    <div className="container p-4">

                        <div className="row my-4" style={{alignItems:'center'}}>

                            <ul className="nav justify-content-center">
                                <li className="nav-item">
                                    <a className="nav-link active" href="pcs/">Pcs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="laptops/">Laptop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="mobails/">Mobail</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="consoles/">Console</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="cameras/">Cameras</a>
                                </li>
                            </ul> <br /><br /><br /><br />
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

                                <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                                    style={{width:150 , height:150}}>
                                    <img src="https://s3.ir-thr-at1.arvanstorage.ir/shop-fullstack/footer/IMG_20240115_150612_527.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=47456b6b-46f1-4e29-a1d9-43238c6823f4%2F20240121%2Fir-thr-at1%2Fs3%2Faws4_request&X-Amz-Date=20240121T112948Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&versionId=&X-Amz-Signature=4ec7dbfd552bbf3dcf07c62ce6bc649e006205a79c0db8ed1c9e8edd4a7c6401"
                                        height="70" alt="" loading="lazy"
                                        style={{width:200 , height:160 , borderRadius:'50%'}} />
                                </div>

                                <p className="text-center">Hi, I am Ali Ghalehnoei, and this website is an example of my work that I have created.
                                </p>

                                <ul className="list-unstyled d-flex flex-row justify-content-center">
                                    <li>
                                        <a className="text-white px-2" href="https://t.me/AliGhalenoeii">
                                        <i class="fa-brands fa-telegram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white px-2" href="https://instagram.com/_alighalenoei/">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white ps-2" href="https://github.com/AliGhalenoei">
                                        <i class="fa-brands fa-github"></i>
                                        </a>
                                    </li>
                                </ul>

                            </div>


                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 " style={{marginTop:40}}>
                                <h5 className="text-uppercase mb-4">Team</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <p><i className="fa-solid fa-people-group"></i> Backend Development : AliGhalenoei</p>
                                    </li>
                                    <li>
                                        <p><i className="fa-solid fa-people-group"></i> Frontend Development : AliGhalenoei</p>
                                    </li>

                                </ul>
                            </div>



                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 "
                                style={{position:'relative' , top:-22}}>
                                <h5 className="text-uppercase mb-4">Support site</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="contact" className="nav-link mb-3"><i className="fa-solid fa-headset"></i> Support</a>
                                    </li>

                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 " style={{marginTop:40}}>
                                <h5 className="text-uppercase mb-4">Contact Us</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <p><i className="fas fa-map-marker-alt pe-2"></i>IR,  Tehran, Afsariye</p>
                                    </li>
                                    <li>
                                        <p><i className="fas fa-phone pe-2"></i>+98 09335764355</p>
                                    </li>
                                    <li>
                                        <p><i className="fas fa-envelope pe-2 mb-0"></i>alighalenoei8383@gmail.com</p>
                                    </li>
                                </ul>
                            </div>

                        </div>



                    </div>



                    <div className="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
                        Backend Website : <small className="text-success">Django</small> Frontend Website : <small className="text-info">React</small>

                    </div>

                </footer>
                

            </div>
        </>
    )
}

export default Footer