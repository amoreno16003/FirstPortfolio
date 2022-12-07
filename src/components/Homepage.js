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
          src="https://static.timesofisrael.com/www/uploads/2020/12/iStock-1090872318.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Carousel.Caption className='CarouselCaptionClass'>
          <h3>About Page</h3>
          <p>About me and my Life.</p>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/anonymous-hacker-with-laptop-in-front-of-binary-code-cyber-security-picture-id962366210?b=1&k=20&m=962366210&s=170667a&w=0&h=DMo_N3cInUGALDSTZ6vhLmKWfDtSUGstb7-dQC-oVcg="
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <Carousel.Caption className='CarouselCaptionClass'>
          <h3>Projects</h3>
          <p>
            My projects and details about each one.
          </p>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/hacker-silhouette-dark-green-binary-background-hacker-silhouette-binary-codes-toned-picture-silhouette-hacker-hoodie-hacking-malware-concept_256259-2363.jpg?w=2000"
          alt="Third slid"
          
        />
        
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Homepage

