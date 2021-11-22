import img from '../Images/Profile.jpg';

function Home () {
    return (
    <div>
       <h2>My Portos</h2>
      <div class="d-flex w-100 p-relative justify-content-center">    
        <div class="div1 w-50 d-flex justify-content-end">
          <img className="profile" src={img} alt=""/>
        </div>
        <div className="div2 w-50 px-5">
          <div className="hello">Hello</div>
          <h3>A Bit About Me</h3>
          <p>I'am currently in progress developing myself to learn about frontend and web programming. I'am interested in meeting new people and learning new things to improve my skill and knowledge.</p>
          <span className="circle first"><span className="fw-bold">Resume</span></span>
          <span className="circle second mx-3"><span className="fw-bold">Project</span></span>
          <span className="circle third"><span className="fw-bold">Contact</span></span>
        </div>
      </div>        
    </div>
    );
}

export default Home;