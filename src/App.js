import React, { Component } from 'react';
import './App.css';
import MyProjects from './myProjects.js';
import NavBar from './navbar.js'
//nav bar from mr.danbuda https://codepen.io/danbuda/

class App extends Component{
  render(){
    return(
    <div>
    <NavBar/>
      <div id="container">
      <div id="aboutMe">
      <div className="leftSide">
          <img src="https://cdn.glitch.com/2eeb1ccf-a063-4d7a-98e6-4055c76c0d5e%2FIMG_20170929_111329%20(2).jpg?1536614533587" className="profilePic" alt="Victor Cojocaru"></img>
      </div>
      <div className="rightSide"> 
      <header><h1>Victor Cojocaru</h1></header>
      <h2>Certified Front End Developer</h2>
<h3> Be it perfecting an algorithm, writing an app from scratch or learning a whole new framework, any challenge is a professionally entertaining experience for me.
</h3>
       
</div>
        </div>
        <MyProjects/>
             <div id="certifications">
               <h1 style={{width:'100%', textAlign:'center'}}>Certifications</h1>
    <div  className="cert"><a href="https://www.freecodecamp.org/certification/meikochow/legacy-front-end" target="_blank"><img src="https://s20.postimg.cc/70qnvtilp/Legacy_Front_End_Certification.png" className='thumbNail' alt="certification"/>
Verify Certification</a>
      </div>
    <div className="cert"><a href="https://www.freecodecamp.org/certification/meikochow/responsive-web-design" target="_blank"><img src="https://s20.postimg.cc/b9vdxztkt/Responsive_Web_Design_Certification.png" className='thumbNail' alt="certification"/>
      Verify Certification</a></div>
          <div className="cert"><a href="https://www.freecodecamp.org/certification/meikochow/front-end-libraries" target="_blank"><img src="https://s20.postimg.cc/6b7vjgxhp/Front_End_Libraries_Certification.png" className='thumbNail' alt="certification"/>
      Verify Certification</a>
      </div>
         <div className="cert"><a href="https://www.freecodecamp.org/certification/meikochow/javascript-algorithms-and-data-structures" target="_blank"><img src="https://s20.postimg.cc/5b3h3kifx/Java_Script_Algorithms_and_Data_Structures_Certification_FCC_-_08.png" className='thumbNail' alt="certification"/>
      Verify Certification</a>
      </div>
               <div className="cert"><a href="https://www.freecodecamp.org/certification/meikochow/apis-and-microservices" target="_blank"><img src="https://s20.postimg.cc/v64xf10cd/Untitledjhvjhgjh.png" className='thumbNail' alt="certification"/>
      Verify Certification</a>
      </div>
  </div>      

       <div id="contactMe"> 
       <h1>Contact Me</h1> 
       <h3>Be it for my resume, about any of my projects or simply to interact.</h3> 
       <h2>You are always welcome to contact me</h2>
        <a href="https://www.freecodecamp.org/meikochow" target="_blank" class="fab fa-free-code-camp fa-4x" aria-hidden="true"></a>
        <a href="https://github.com/Meikochow" target="_blank" class="fab fa-github-square fa-4x" aria-hidden="true"></a>
        <a href="https://www.linkedin.com/in/victor-cojocaru-97015bb3/" target="_blank" class="fab fa-linkedin fa-4x" aria-hidden="true"></a>
        <a href="https://codepen.io/Meikochow/" target="_blank"class="fab fa-codepen fa-4x" aria-hidden="true"></a>
        <a href="https://plus.google.com/u/1/112340815014967339256" target="_blank"class="fab fa-google fa-4x" aria-hidden="true"></a>
       <h2>Or write me an email to Victorcojocaru93@gmail.com</h2>

        </div>
        <footer >Victor Cojocaru 2018</footer>
    </div>
        </div>
    )
  }
}
export default App;
