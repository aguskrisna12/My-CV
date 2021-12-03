import img from '../Images/Calling2.jpeg'


function Contact () {
    return (
        <div className="container">
            <div className="d-flex w-100 p-relative justify-content-center">
                <div class="div1 w-25 justify-content-center mt-2">
                    <h3>Contact</h3>
                    <div className="ms-5 mt-5">
                        <div className="d-flex"> 
                                <i className="bi bi-telephone pe-3" style={{fontSize:"2rem"}}/>
                            <div>
                                <h5 className="mb-0">Phone</h5>
                                <p>089-563-089-0096</p>
                            </div>
                        </div>
                        <div className="d-flex"> 
                                <i className="bi bi-envelope pe-3" style={{fontSize:"2rem"}}/>
                            <div>
                                <h5 className="mb-0">Email</h5>
                                <p>aguskrisnau317@gmail.com</p>
                            </div>
                        </div>
                        <div className="d-flex"> 
                                <i className="bi bi-linkedin pe-3" style={{fontSize:"2rem"}}/>
                            <div>
                                <h5 className="mb-0">LinkedIn</h5>
                                <a href="https://www.linkedin.com/in/agus-krisna-udayana-754874185/" target="_blank">Agus Krisna</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div2 d-flex justify-content-center w-75">
                        <img src={img} alt="photos" />
                </div>
            </div>
        </div>
    )
}

export default Contact;