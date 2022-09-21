import React from 'react';
import myImage from '/Users/ortalwikoff/BootCamp/OrtalHomework/MyPortfolio/src/assets/Images/IMG_6636.png'
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
      <p>
        <br></br>
        <br></br>
      My name is Ortal Wikoff.<br></br>
      I am a creative and hard working web developer based in Atlanta, Georgia.<br></br>
      I have extensive leadership and educational experience.</p>
    </div> 
<Footer/>
  </div>
  </section>
  );
}


