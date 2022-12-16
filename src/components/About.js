import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const About = () => {
  return (
    <Accordion defaultActiveKey="0">
    <Accordion.Item eventKey="0">
      <Accordion.Header>About Me</Accordion.Header>
      <Accordion.Body>
      <h1>About</h1>
      <h4>I am a Full-Stack Developer with proficient skills in JavaScript. I add value to teams I work with through my varied skillset including careful time-management, strong work-ethic, ability to work under pressure while prioritizing communication to amplify team chemistry and subsequently increasing efficiency as a team. My goal as a developer is to do work that I will be proud of while simultaneously increasing my understanding and knowledge of software engineering. </h4>
      <h4>I have experience working with: JavaScript, Node.js, Express, React.js, MongoDB, Django, PostgreSQL, HTML, CSS, C++, Python, RESTful routing and APIs, Heroku Deployment, </h4>
      <h2>My previous experience in IT has given me the opportunity to learn skills that will help in the future:</h2>
      <div>
        <ul>
          <li>Experience in working with a team both remotely and in-office</li>
          <li>Ability to improve time-management and meet deadlines </li>
          <li>Communication with both my team and clients that I interacted with daily</li>
        </ul>
      </div>

      </Accordion.Body>
    </Accordion.Item>
  </Accordion>

  )
}

export default About