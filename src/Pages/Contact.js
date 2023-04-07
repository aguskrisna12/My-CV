function Contact() {
  return (
    <div className="container">
      <div className="back">
        <a className="btn btn-primary" href="/home">
          <i className="bi bi-backspace-fill"></i> Back
        </a>
      </div>
      <div className="d-flex justify-content-evenly align-items-center vw contact">
        <div className="d-flex">
          <i className="bi bi-telephone me-3 tele" style={{ fontSize: "2rem" }} />
          <div>
            <h5 className="mb-0">Phone</h5>
            <a href="https://api.whatsapp.com/send?phone=62895630890096">
              089-563-089-0096
            </a>
          </div>
        </div>
        <div className="d-flex email">
          <i className="bi bi-envelope me-3" style={{ fontSize: "2rem" }} />
          <div>
            <h5 className="mb-0">Email</h5>
            <a href="mailto: aguskrisnau317@gmail.com">
              aguskrisnau317@gmail.com
            </a>
          </div>
        </div>
        <div className="d-flex linked">
          <i className="bi bi-linkedin me-3" style={{ fontSize: "2rem" }} />
          <div>
            <h5 className="mb-0">LinkedIn</h5>
            <a
              href="https://www.linkedin.com/in/agus-krisna-udayana-754874185/"
              target="_blank"
              rel="noreferrer"
            >
              Agus Krisna
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
