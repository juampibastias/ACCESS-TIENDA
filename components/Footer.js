import React from "react";

const Footer = () => {
    return(
        <footer className="footer">
        <div>
          <img className="logo-blanco" src="images/logoblanco.png" alt="access" />
        </div>
  
        <ul >
          <li>
            <h5>Mapa del Sitio</h5>
  
            <ul>
              <li>NOSOTROS</li>
              <li>SUCURSALES</li>
              <li>SERVICIOS</li>
              <li>NOVEDADES</li>
              <li>TIENDA VIRTUAL</li>
            </ul>
          </li>
  
          <li>
            <h5>Dirección</h5>
            <p>Rivadavia, W.Nuñez 597, Tel: (0263) 4445900 - 4445901</p>
            <p>Junin, Av. Mitre 8, Tel: (0263) 4498375</p>
            <p>San Martin, 25 de Mayo 252, Tel: (0263) 4428808 - 4420051</p>
          </li>
        </ul>
  
        <p>Copyright © All Rights Reserved</p>
      </footer>
    )
}
export default Footer;