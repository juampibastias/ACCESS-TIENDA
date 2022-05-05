import React from 'react'

export const Sucursales = () => {
  return (
    <div>
   
      <div className="container-fluid pt-2">
        <div className="card container-fluid" style={{width: 90+"%"}}>
          <img
            src="images/sucursal_rivadavia.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
  
   
      <div className="container-fluid pt-2">
        <div className="card container-fluid" style={{width: 90+"%"}}>
          <img
            src="images/sucursal_junin.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
  

      <div className="container-fluid pt-2 pb-2">
        <div className="card container-fluid" style={{width: 90+"%"}}>
          <img
            src="images/sucursal_smartin.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sucursales