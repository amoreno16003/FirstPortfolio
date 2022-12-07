import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import JustDoIt from '../pictures/JustDoIt.png'
import SurviveTheHorde from '../pictures/SurviveTheHorde.png'

const Projects = () => {
  return (
    <div>
        <Card className="text-center">
      {/* <Card.Header>Project 1</Card.Header> */}
      <Card.Body>
        <Card.Title>Survive the Horde</Card.Title>
        <Card.Text>
        Click start on the starting page to begin. 
        The goal of this game is to be quick and elimante the incoming wave of zombies by using your ('UpArrow', 'DownArrow', 'LeftArrow', and 'RightArrow') to shoot at the enemies. 
        You must kill the entire wave of zombies before they kill you. Depending on your performance, you will either be met with a win-screen or a loss-screen.
        </Card.Text>
        <h2>Github Link:</h2>
        <Button variant="primary" href='https://github.com/amoreno16003/last-man-standing'>Documentation</Button>
        <h2>Deployment Link:</h2>
        <Button variant="primary" href='https://amoreno16003.github.io/last-man-standing/'>Explore Project</Button>
      </Card.Body>
      <Figure>
      <Figure.Image
        width={800}
        height={500}
        alt="171x180"
        src={SurviveTheHorde}
      />
    </Figure>
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
    <Card className="text-center">
      {/* <Card.Header>Project 1</Card.Header> */}
      <Card.Body>
        <Card.Title>Just Do It</Card.Title>
        <Card.Text>
        Just Do It is a Node App that uses two APIs; one is a exercise API used to find 1300 different exercises and the other is a recipe API that has thousands of recipes and their individual information. 
        User's can search different exercises/recipes and save them to their profile for future use. 
        Users may also remove certain exercises/recipes depending on their needs and they can view each of their saved exercises/recipes individually through this application.
        </Card.Text>
        <h2>Github Link:</h2>
        <Button variant="primary" href='https://github.com/amoreno16003/just-do-it'>Documentation</Button>
        <h2>Deployment Link:</h2>
        <Button variant="primary" href='https://just-lift-it.herokuapp.com/'>Explore Project</Button>
      </Card.Body>
      <Figure>
      <Figure.Image
        width={800}
        height={500}
        alt="171x180"
        src={JustDoIt}
      />
    </Figure>
      {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
    </div>
  )
}

export default Projects