import React from "react";
import { Link } from "react-router-dom";
import "./sticky-footer-navbar.css"

function Footer() {

return(
   
    <div className="footer mt-auto pl-3 py-3 bg-dark">
        <div className="row">
        <div className="col-md-6">
          <span className="text-light">Created by <Link to="/about" class="text-light">Mark Lloyd</Link></span>
        </div>
      </div>
    </div>

  
)
}

export default Footer;