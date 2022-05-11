import { getData } from "../utils/fetchData";
import { useState } from "react";
import NovedadesItem from "../components/Novedad/NovedadesItem"

const Novedades = (props) => {
  const [novedades, setNovedades] = useState(props.novedades)
    
  return (
    <div>
       {
      novedades.length === 0
      ? <h2>Sin novedades</h2>
      : novedades.map(novedad => (
        <NovedadesItem key={novedad._id} novedad={novedad} />
      ))
    }
    </div>
   
  )
}
export async function getServerSideProps() {
  const res = await getData('novedad');

  return {
    props: {
      novedades: res.novedades,
      result: res.result
    }, 
  };
}
export default Novedades