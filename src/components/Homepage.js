import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../css/Homepage.css'

const Homepage = () => {
  return (
    <div>
        <Carousel>
      <Carousel.Item interval={1000}>
      <Carousel.Caption className='CarouselCaptionClass'>
          <h3>Personal Website</h3>
          <p>Enjoy!</p>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/HY5XRPw/headshot.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      
      
    </Carousel>
    </div>
  )
}

export default Homepage

