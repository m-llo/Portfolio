import React from "react"


function projectCard ({data}) {
    return(
   
          <div key={data.id} class="col">
            <div class="card shadow-sm">
             <img src={data.image} alt={data.alt} />
               <div class="card-body">
                  <h5 class="card-text text-center">{data.name}</h5>
                  <p class="card-text">{data.description}</p>
                     <div class="d-flex justify-content-between align-items-center">
                         <div class="btn-group">
                          <a href={data.deployed} target="_blank">
                          <button type="button" class="btn btn-sm btn-outline-secondary">View App</button>
                         </a>
                      </div>
                  <a href={data.repo} target="_blank"> <small
                    class="text-muted">GitHub Repo</small></a>
                </div>
              </div>
          </div>
        </div>
    
    
    
    
    )
    
    }


    export default projectCard;