import React from "react";
import "./about.css"

function About() {

return(
<div>
   <section className="flex-shrink-0">
     <div className="jumbotron header" alt="San Francisco skyline">
     <h1 className="display-1">Making a Mark!</h1>
     <h5 className="subhead">Leaving a lasting impression.</h5>
     <br></br>
     <p className="subhead">Want to see what I can do?</p>
           <p className="lead">
          <a className="btn btn-info btn-lg" href="/portfolio" role="button">Show Me</a>
          </p>
     </div>
   </section>    
  <section className="container paragraph p-3">
    <h1 className="display-4 text-center pb-1">"A breath of fresh air!"</h1>
    <p className="lead content"> Mark Lloyd is a full stack web developer based in Houston TX. Mark began his career in web
      development in 2020 and acheived a full stack web development certification from the University of Texas at
      Austin.
      Prior to web development Mark received an MBA from California State University, Long Beach. Over the last decade
      Mark worked in talent development field, most recently as the Senior Talent and Training specialist for the
      largest global ATM owner operator.
      Mark is currently open to freelance projects or start-up opportunities. </p>
      <br></br>
    {/* <p className="lead content">Personally, enjoys developing fun and useful web-based applications and spendning time with his wife
      and children.</p> */}
  </section>
</div>
)
}

export default About;