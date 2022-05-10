import React from 'react'
import Image from 'next/image'
import banner from '../public/images/banner.png'
import banner1 from '../public/images/banner1.png'
import banner2 from '../public/images/banner2.png'
import { Carousel } from 'react-bootstrap'


const Home = () => {
  return (
    <div className='contenedor-home'>
      <Carousel>
        <Carousel.Item>
          <Image className="d-block w-100" src={banner1} alt="First slide" />
          
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={banner2} alt="Second slide" />

          
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={banner} alt="Third slide" />

          
        </Carousel.Item>
      </Carousel>
      {/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src={banner} className="d-block w-100" alt="banner" />
    </div>
    <div className="carousel-item">
      <Image src={banner1} className="d-block w-100" alt="baner1" />
    </div>
    <div className="carousel-item">
      <Image src={banner2} className="d-block w-100" alt="banner2" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}

    </div>
  )
}

export default Home