import React from 'react'

export const Novedades = () => {
  return (
    <div className='contenedor-novedades'>
      
    {/* <!-- NAV DE NOVEDADES Y PAGINACION --> */}

{/* <nav style={{[--bs-breadcrumb-divider]: "'>>'"}} aria-label="breadcrumb"> */}
  <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="index.html">Inicio</a></li>
    <li className="breadcrumb-item active" aria-current="page">Novedades</li>
  </ol>
</nav>

  {/* <!-- CONTENEDORES DE NOVEDADES --> */}

  <div className="">
    <div className=" lista-novedades">
      <div className="novedad  bg-danger">
        <img
          className="novedad-imagen"
          src="images/Auricular-jbl.png"
          alt=""
        />
      </div>
      <div className="novedad  bg-dark">
        <img
          className="novedad-imagen"
          src="images/IMPRESORA-HP.png"
          alt=""
        />
      </div>
      <div className="novedad  bg-warning">
        <img
          className="novedad-imagen"
          src="images/parlante-jbl1.png"
          alt=""
        />
      </div>
      <div className="novedad  bg-success">
        <img
          className="novedad-imagen"
          src="images/pibe-de-fondo.png"
          alt=""
        />
      </div>
    </div>
  </div>
{/* 
  <!-- NOVEDADES POR DENTRO --> */}
{/* 
  <!-- NAV DE NOVEDADES Y PAGINACION --> */}

  <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">INICIO / NOVEDADES ORDENAR POR: PRECIOS {'>>'} 1 2 3</a
      >
    </div>
  </nav>

  {/* <!-- NOVEDADES DESARROLLO DE INFO --> */}
  <div className="container-fluid pt-2">
    <div className="card container-fluid" style={{width:90+"%"}}>
      <img
        src="images/pibe-de-fondo.png"
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

  {/* <!-- NOVEDADES DE NUEVOS PRODUCTOS CON LINK A LA TIENDA --> */}
  <div className="slider">
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="card" style={{width:18+"rem"}}>
            <img src="images/Auricular-jbl.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card" style={{width:18+"rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card" style={{width:18+"rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Novedades