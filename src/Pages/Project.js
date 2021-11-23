import img1 from '../Images/project1.jpg'
import img2 from '../Images/project2.jpg'
import img3 from '../Images/project3.jpg'

function Project () {
    let projects = [
        { 
            title: 'Poject 1',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            imgUrl: img1
        },
        { 
            title: 'Poject 2',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            imgUrl: img2
        },
        { 
            title: 'Poject 3',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            imgUrl: img3
        },
        { 
            title: 'Poject 4',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
            imgUrl: img1
        }
    ];

    return (
        <div className="d-flex justify-content-center">
            <table className="w-50">
                <tbody>
                    {projects.map( project => {
                        return (
                            <tr>
                                <td>
                                    <h2>{project.title}</h2>
                                    <p>{project.description}</p>
                                </td>
                                <td>
                                    <img className="project mt-5" src={project.imgUrl} alt="broken photo"/>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Project;