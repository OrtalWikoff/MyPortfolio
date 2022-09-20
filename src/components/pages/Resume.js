import React from 'react';
import Footer from '../footer';


function Resume() {
  return(
  <section class="mb-5">
      <h1 className="resume">My Resume</h1>
          <hr></hr>
          <div class="row justify-content-center" id="resume">
              <div class="mt-5 pl-5 pr-5">
                <div id="myExperience">
              I am an Educational Technology Specialist and full stack developer with experience with MERN. 
              Ortal is Experienced in commercial website and software development. Ortal is an experienced leader with a demonstrated history of working in education.
              </div>
                  <p>
                  Download my full <a href="#" class="link">resume</a>
                  <br></br>
                  </p>
              </div>
          </div>
  
          <div class="justify-content-center mt-5">
              <div id="front-back">
                  <h2>front end experience:</h2>
                  <p>HTML, CSS, Bootstrap, JavaScript, jQuery, React.js, IndexedDB</p>
              </div>
      
              <div id="front-back" class="mt-5">
                  <h2>back end experience:</h2>
                  <p>
                  Node.js, Express.js, SQL, Sequelize, NoSQL (MongoDB, Mongoose), API's (third-party, RESTful, server-side), Templating (Handlebars)
                  </p>
              </div>
          </div>
          <Footer/>
  </section>
  );
  }
  
  export default Resume;