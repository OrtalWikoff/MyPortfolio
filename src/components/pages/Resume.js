import React from 'react';
import Footer from '../footer';


function Resume() {
  return(
  <section class="mb-5">
      <h1 className="resume">My Resume</h1>
          <hr></hr>
          <div class="row justify-content-center" id="resume">
              <div class="mt-5 pl-5 pr-5">
                <div class="myExperience"><h3>
                ✔ Educational Technology Specialist and Full Stack Developer with experience in MERN.<br></br>
                ✔ Experienced in commercial website and software development.<br></br>
                ✔ Experienced leader with significant professional experience in education.<br></br></h3>
              </div>
                  
              </div>
          </div>
  
          <div class="justify-content-center mt-5">
              <div class= "myExperience" >
                  <h3 style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>Front end experience:</h3> <h3> HTML, CSS, Bootstrap, JavaScript, jQuery, React.js, IndexedDB</h3>
              </div>
      
              <div class="myExperience">
              <h3 style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>Back end experience:</h3><h3>Node.js, Express.js, SQL, Sequelize, NoSQL (MongoDB, Mongoose), API's (third-party, RESTful, server-side), Templating (Handlebars)</h3>
    
              </div>
              <p id = "link"> Download my full <a href="#" class="link">resume</a>
                  <br></br>
                  </p>
          </div>
          <Footer/>
  </section>
  );
  }
  
  export default Resume;