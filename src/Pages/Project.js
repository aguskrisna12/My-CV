import img1 from '../Images/project1.jpg'
import img2 from '../Images/project2.jpg'
import img3 from '../Images/project3.jpg'

function Project () {
    return (
        <div>
            <h3>Project</h3>
            <div class="d-flex w-100 p-relative justify-content-center">
                <div class="div1 w-50 d-flex justify-content-center mt-2">
                    <h3>Projects</h3>
                </div>
                <div className="div2 w-50 px-5 mt-5">
                    <img className="project mt-5" src={img2} alt="broken photo"/>
                    <img className="project mt-5" src={img1} alt="broken photo"/>
                    <img className="project mt-5 mb-5" src={img3} alt="broken photo"/>
                </div>
            </div>
        </div>
    )
}

export default Project;