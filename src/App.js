// import logo from './logo.svg';
import './App.css';
import './image';
import img from './Images/Profile.jpg';


function App() {
  return (
    <div className="App">
      <div>
        <h2>My Portos</h2>
        <div className="div1">
          <img className="profile" src={img} alt=""/>
          <span className="hello">Hello</span>
          <span>A Bit About Me</span>
        </div>
        <div className="div2">
          <span className="circle1"></span>
          <span className="circle2"></span>
          <span className="circle3"></span>
        </div>
      </div>
    </div>
  );
}

export default App;
