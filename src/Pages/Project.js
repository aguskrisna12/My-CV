import img1 from '../Images/NewsAPI.png'
import img2 from '../Images/TodoList.png'
import img3 from '../Images/Game.png'
import img4 from '../Images/Figma-1.png'
import { Link } from 'react-router-dom';

function Project () {

    let projects = [
        {   title: "Figma", 
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        imgUrl: img4,
        link : <a className="btn btn-success" href="https://drive.google.com/file/d/1xHqPf6ccNOmpfty3L7Y5SICB_LpOcwFK/view?usp=sharing">Here</a>
        },
        {   title: "TodoList", 
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        imgUrl: img2,
        link : <Link className="btn btn-success" to="./todolist">Here</Link>
        },
        {   title: "TodoList", 
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        imgUrl: img2,
        link : <Link className="btn btn-success" to="./todolist">Here</Link>
        },
        {   title: "The Memory Game", 
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        imgUrl: img3,
        link : <Link className="btn btn-success" to="./game">Here</Link>
        },
        {   title: "News-API", 
        description: "So sorry my News-Api cant load because only using localhost",
        imgUrl: img1,
        link : <Link className="btn btn-success" to="./newsapi">Here</Link>
        }
    ];
    
    return (
        <div className="contair">
            <h3 className="ms-5 ps-3">Projects</h3>
            <div className="d-flex justify-content-center">
                <table className="w-75">
                    {projects.map((project) => {
                        return (
                            <tr>
                                <td>
                                    <h2>{project.title}</h2>
                                    <span>{project.link}</span>
                                    <p className="pe-5">{project.description}</p>
                                </td>
                                <td>
                                    <img className="project mt-5" src={project.imgUrl} alt="broken"/>
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    )
}

export default Project;