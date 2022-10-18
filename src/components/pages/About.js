import React from 'react';
import myImage from '../../assets/Images/Ortal.png'
import '../styles/index.css';
import Footer from '../footer';
 

export default function About() {
  return (
    <section className="title">
    <h1 class="name">About Me</h1>
    <hr></hr>
    
    <div className="row justify-content-center">
      <div className="col-10" id="about-section">
          <img class="img img-fluid" src ={myImage} alt="Ortal Wikoff"/>
        <br></br>
        <p>
      My name is Ortal Wikoff.<br></br>
      I’m a Front-end web developer with a Master’s degree in Instructional Technology. I utilize my education and experience to build intuitive-user-interactions on the web. I recently earned a certificate in full stack development from Georgia Tech that I leverage with newly developed skills in JavaScript, CSS, React.js and responsive web design. I’m an innovative problem-solver and I am passionate about developing applications with a focus on mobile-first design. With each project, my aim is to most effectively engage my audience for an impactful user-experience. I have teamwork experience developing a single-page MERN application that helps local business owners track their sales, inventory and attendance at specialty events. I’m excited to leverage my skills as part of a fast-paced and quality-driven team focused on building better web-based interactions.


      </p>
    </div> 
<Footer/>
  </div>
  </section>
  );
}


