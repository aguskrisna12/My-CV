import img from '../Images/Profile5.jpg';
import { Link } from 'react-router-dom';

function Buttons () {
  return (
    <div className='row'>
    <Link className='col-12 col-md-4 d-flex justify-content-center' to="/resume"><span className="circle first"><span className="fw-bold">Resume</span></span></Link>
    <Link className='col-12 col-md-4 d-flex justify-content-center' to="/project"><span className="circle second"><span className="fw-bold">Project</span></span></Link>
    <Link className='col-12 col-md-4 d-flex justify-content-center' to="/contact"><span className="circle third"><span className="fw-bold">Contact</span></span></Link>
  </div>
  )
}

function Home () {
    return (
    <div className="marginTop">
      <div class="row mx-0 d-flex w-100 p-relative justify-content-center">    
        
        <div class="div1 col-12 col-md-6 col-lg-5 col-xl-6 d-flex justify-content-end align-items-end">
          <img className="profile mt-xl-0 mt-lg-5" src={img} alt=""/>
        </div>

        <div className="div2 col-12 col-md-6 col-xl-6 col-lg-7 px-5">
          <div className="hello">Hello</div>
          <h3>A Bit About Me</h3>
          <p>I'am currently in progress developing myself to learn about frontend and web programming. I'am interested in meeting new people and learning new things to improve my skill and knowledge.</p>
          
          <div className="d-none d-lg-block" >
            <Buttons />
          </div>

        </div>
        
        <div className="d-lg-none" >
            <Buttons />
        </div>

      </div>        
    </div>
    );
}

export default Home;