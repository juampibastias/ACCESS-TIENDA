import { useState } from 'react';
import artefactos from '../public/uploaded_servicios/servicios.json';

function Search() {
  const [resultados, setResultados] = useState(null);

  function buscarArtefacto(e) {
    if (e) {
      e.preventDefault();
      const numero = e.target.numero.value;
      const artefacto = artefactos.find(a => a.numero == numero);
      setResultados(artefacto);
    }
  }

  return (
    <div>
      <h1 style={{marginTop: '50px', textAlign: "center"}}>Consulta sobre Servicio Técnico</h1>
      <form method='post' action='#' onSubmit={buscarArtefacto} style={{textAlign: 'center', marginTop: '50px', display: "inline-block", justifyContent: "center"}}>
        <label>
          Ingrese su codigo: 
          <input type="number" id="numero" style={{marginLeft: '10px', WebkitAppearance: 'none'}}/>
        </label>
        <button type="submit" className='btn btn-info' style={{ marginLeft: "5px", background: "#534080", borderColor: "#534080"}} >Buscar</button>
      </form>
      {resultados && (
        <div>
          <h2 style={{textAlign: 'center', marginTop: '50px'}}>Resultados de la búsqueda</h2>
          <ul>
            <li style={{textAlign: 'center', listStyle: 'none', fontSize: "20px"}}>
              Codigo ingresado: {resultados.numero}
            </li>
            <li style={{textAlign: 'center', listStyle: 'none', color: "#534080", fontSize: "25px", fontWeight: "bold"}}>
              {resultados.reparado ? 'Reparación finalizada!' : 'Reparación en proceso'}
            </li>
            {resultados.costoReparacion && (
              <li style={{textAlign: 'center', listStyle: 'none', fontSize: "20px"}}>
                Costo de reparación: ${resultados.costoReparacion}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;



