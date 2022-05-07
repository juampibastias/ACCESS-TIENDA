import React from 'react'

export const Sucursales = () => {
  return (
    <div className='contenedor-sucursales'>
   
      <div className="card-container">
        <div className="card " style={{width: 90+"%"}}>
          <img
            src="images/sucursal_rivadavia.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Sucursal Rivadavia</h5>
            <p className="card-text">
             <address>
               Dirección: W. Nuñez 597 <br />
               Tel:<a href='tel:+5402634445900'>(0263)4445900</a>
               
                </address>
            </p>
            <a href="#" className="btn ">Ver en mapa</a>
          </div>
        </div>
      </div>
  
   
      <div className="card-container">
        <div className="card " style={{width: 90+"%"}}>
          <img
            src="images/sucursal_junin.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Sucursal Junin</h5>
            <p className="card-text">
            <address>
               Dirección: W. Nuñez 597 <br />
               Tel:<a href='tel:+5402634445900'>(0263)4445900</a>
               
                </address>
            </p>
            <a href="#" className="btn ">Ver en mapa</a>
          </div>
        </div>
      </div>
  

      <div className="card-container">
        <div className="card " style={{width: 90+"%"}}>
          <img
            src="images/sucursal_smartin.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">SUCURSAL SAN MARTIN</h5>
            <p className="card-text">
            <address>
               Dirección: 25 de Mayo 252 <br />
               Tel:<a href='tel:+5402634428808'>(0263)4428808</a>
               
                </address>
            </p>
            <a href="#" className="btn">Ver en mapa</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sucursales