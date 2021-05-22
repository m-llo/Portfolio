import React from "react";
import "./sticky-footer-navbar.css";
import projects from "../projects.json";
import ProjectCard from "../ProjectCard/ProjectCard";
function Portfolio() {
  
    return (
        <div>
            <section className="py-5 text-center container" id="folio">
                <div className="row py-lg-5">
                    <div className="col-md-12">
                        <h1 className="fw-light">Connecting Vision and Reality</h1>
                        <h5 className="lead text subhead">“Learn something new. Try something different. Convince yourself that you have no limits” – Brian Tracy</h5>
                    </div>
                </div>
            </section>
            <section className="album py-5 bg-light">
                <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {projects.map(project => <ProjectCard data={project} />)}
                </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio;