import Head from "next/head";
import { useState } from "react";
import { getData } from "../../utils/fetchData";

const DetailNovedades = (props) => {
  const [novedades] = useState(props.novedad)
  return (
    <div className="row detail_novedades">
      <Head>
        <title>Detalle Novedades</title>
      </Head>
      <div className="col-md-6">
        <img src={novedades.images[0].url} alt={novedades.images[0].url} className="d-block img-thumbnail rounded mt-4 w-100"
        style={{height: '600px'}}/>

        <div className="row mx-0">
        <h1>{novedades.name}</h1>
        </div>
        <div className="row mx-0">
        {novedades.detail}
        </div>
      </div>
      <div className="col-md-6"></div>

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
