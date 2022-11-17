import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import imagenLogo from "../public/images/logoblanco.png";
import useWindowSize from "../components/getwindowSize";
import Accordion from 'react-bootstrap/Accordion';


const Footer = () => {
  const size = useWindowSize();
    return(
        <footer className="footer" style={{paddingTop: "60px"}}>
        <div className="footer-logo">
          <Image className="logo-blanco" src={imagenLogo} alt="access"/>
        </div>
  
        {size.width > 760 ? ( <ul >
          <li>
            <h5>Mapa del Sitio</h5>
  
         
            <ul>
              <li><Link href="/nosotros"><a>NOSOTROS</a></Link></li>
              <li><Link href="/sucursales"><a>SUCURSALES</a></Link></li>
              <li><Link href="/servicios"><a>SERVICIOS</a></Link></li>
              <li><Link href="/novedades"><a>NOVEDADES</a></Link></li>
              <li><Link href="/" ><a>TIENDA VIRTUAL</a></Link></li>
            </ul>
          </li>
  
          <li>
            <h5>Dirección</h5>
            <p>Rivadavia, W.Nuñez 597, <b>Tel: </b>(0263) 4445900 - 4445901</p>
            <p>Junin, Av. Mitre 8, <b> Tel:</b> (0263) 4498375</p>
            <p>San Martin, 25 de Mayo 252, <b>Tel</b> (0263) 4428808 - 4420051</p>
          </li>
        </ul>) : (

<Accordion defaultActiveKey="0">
<Accordion.Item eventKey="0">
  <Accordion.Header><h5>Mapa del Sitio</h5></Accordion.Header>
  <Accordion.Body>
  <ul>
              <li><Link href="/nosotros"><a>NOSOTROS</a></Link></li>
              <li><Link href="/sucursales"><a>SUCURSALES</a></Link></li>
              <li><Link href="/servicios"><a>SERVICIOS</a></Link></li>
              <li><Link href="/novedades"><a>NOVEDADES</a></Link></li>
              <li><Link href="/" ><a>TIENDA VIRTUAL</a></Link></li>
            </ul>
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header> <h5>Dirección</h5></Accordion.Header>
  <Accordion.Body>
  <p>Rivadavia, W.Nuñez 597, <b>Tel: </b>(0263) 4445900 - 4445901</p>
            <p>Junin, Av. Mitre 8, <b> Tel:</b> (0263) 4498375</p>
            <p>San Martin, 25 de Mayo 252, <b>Tel</b> (0263) 4428808 - 4420051</p>
  </Accordion.Body>
</Accordion.Item>
</Accordion>
        ) }
       
  
        <p className="copyright-footer">Copyright © All Rights Reserved</p>
      </footer>
    )
}
export default Footer;