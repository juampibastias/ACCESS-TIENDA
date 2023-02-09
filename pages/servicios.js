import React from 'react'
import Head from 'next/head'
import Link from "next/link";

export const Servicios = () => {
  return (
    <div className='contenedor-servicios'>
      <Head>
        <title>ACCESS - SERVICIOS</title>
        <link rel="icon" src="../public/images/logo-favicom.png"></link>
      </Head>
       <h1>Nuestros Servicios</h1>

      <div className='servicio-items'>
        <a className='servicio-item' style={{textDecoration: "none", cursor: "pointer", display: "flex", justifyContent: "center", borderRadius: "10px"}} href="https://wa.me/5492634617852">
          <img src="icons/3709749_advice_consult_mobile_service_system_icon.svg" alt="" />
          <div className='text' style={{marginRight: '90px'}}>
            <h4>Soporte Online</h4>
            <p></p>
          </div>
        </a>
        <Link href={"/consultaServicio"}>
          <div className="servicio-item" style={{ textDecoration: "none", cursor: "pointer", display: "flex", justifyContent: "center", borderRadius: "10px" }}>
            <img
              src="icons/3709743_assistance_fix_problem_service_trouble_icon.svg"
              alt=""
            />
            <div className="text">
              <h4>Servicio Técnico</h4>
            </div>
          </div>
        </Link>
        <a className='servicio-item' style={{textDecoration: "none", cursor: "pointer", display: "flex", justifyContent: "center", borderRadius: "10px"}} href="https://wa.me/5492634617852">
          <img src="icons/desarrollo.svg" alt="" />
          <div className='text'>
            <h4>Desarrollo de Software</h4>
            <p></p>
          </div>
        </a>
        <a className='servicio-item' style={{textDecoration: "none", cursor: "pointer", display: "flex", justifyContent: "center", borderRadius: "10px"}} href="https://wa.me/5492634617852">
          <img src="icons/eye.svg" alt="" />
          <div className='text'>
            <h4>Sistema Cámaras de Seguridad</h4>
            <p></p>
          </div>
        </a>
        <a className='servicio-item' style={{textDecoration: "none", cursor: "pointer", display: "flex", justifyContent: "center", borderRadius: "10px"}} href="https://wa.me/5492634617852">
          <img src="icons/3709745_assistance_client_customer_employee_female_icon.svg" alt="" />
          <div className='text'>
            <h4>Sistema Para Negocios</h4>
            <p></p>
          </div>
        </a>
        <a className='servicio-item' style={{textDecoration: "none", cursor: "pointer", display: "flex", justifyContent: "center", borderRadius: "10px"}} href="https://wa.me/5492634617852">
          <img src="icons/venta.svg" alt="" />
          <div className='text' >
            <h4>Ventas de Equipo</h4>
            <p></p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Servicios