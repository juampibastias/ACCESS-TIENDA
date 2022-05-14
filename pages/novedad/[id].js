import Head from "next/head";
import { useState } from "react";
import { getData } from "../../utils/fetchData";

const DetailNovedades = (props) => {
  const [novedades] = useState(props.novedad)
  
  return (
    <div className="contenedor-detallesnovedades">
       <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="home">Inicio</a></li>
    <li className="breadcrumb-item " aria-current="page">Novedades</li>
    <li className="breadcrumb-item active" aria-current="page">{novedades.name}</li>
  </ol>
</nav>
      <Head>
        <title>Detalle Novedades</title>
      </Head>
      <div className="">
        <img src={novedades.images[0].url} alt={novedades.images[0].url} className=""
        />

        <div className=" ">
        <h2>{novedades.name}</h2>
        </div>
        <div className="">
        {novedades.descrip}
        </div>
        <div hidden className="row mx-0">
        {novedades.category}
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`novedad/${id}`);

  return {
    props: { novedad: res.novedad},
  };
}

export default DetailNovedades;
