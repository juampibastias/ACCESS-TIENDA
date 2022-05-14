import Link from "next/link"

const NovedadesItem = ({novedad}) =>{

  const  novedadLink = () => {
    return(
      <>

      <Link href={`novedad/${novedad._id}`}>
      <a className="btn-custom">{">"}</a>
      </Link>

      </>
    )
  }
    
    return(
        <div className="card">
        <img className="card-img-top" src={novedad.images[0].url} alt={novedad.images[0].url} />
        <div className="card-body-custom">
          <h5 className="card-title">{novedad.name}</h5>
          <p className="card-text">{novedad.descrip}</p>
          <div className="botonera">
          {novedadLink()}
        </div>
        </div>
        
      </div>
    )
}


export default NovedadesItem


/* Los atributos que se imprimiran dentro de las cards novedades seran images, name, descrip */