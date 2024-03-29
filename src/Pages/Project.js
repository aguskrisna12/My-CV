import img from "../Images/react-app.png";
import { Link } from "react-router-dom";

function Project() {
  let projects = [
    {
      title: "News-API",
      description:
        "So sorry my News-Api cant load because only using localhost",
      imgUrl: img,
      link: (
        <Link className="btn btn-success" to="./newsapi">
          Here
        </Link>
      ),
    },
    {
      title: "TodoList",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgUrl: img,
      link: (
        <Link className="btn btn-success" to="./todolist">
          Here
        </Link>
      ),
    },
    {
      title: "The Memory Game",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgUrl: img,
      link: (
        <Link className="btn btn-success" to="./game">
          Here
        </Link>
      ),
    },
    {
      title: "Search Film",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgUrl: img,
      link: (
        <Link className="btn btn-success" to="./film">
          Here
        </Link>
      ),
    },
  ];

  return (
    <div className="container">
      <div className="back">
        <a className="btn btn-primary" href="/">
          <i className="bi bi-backspace-fill"></i> Back
        </a>
      </div>
      <div className="row">
        {projects.map((item, index) => {
          return (
            <div className="col-sm-4 d-flex justify-content-center mt-5">
              <div key={index} className="card" style={{ width: "18rem" }}>
                <img src={item.imgUrl} className="card-img-top img-thumbnail" alt="..." style={{  }} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p>{item.link}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
