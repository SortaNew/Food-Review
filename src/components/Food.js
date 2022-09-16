import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react'
import {BsHeart, BsHeartFill} from "react-icons/bs"

function Food({food}){
    const [hearts, setHearts] = useState(0)

    return (
        <Card bg="dark" className="cardPad" style={{color:"white", width: '18rem' }}>
          <Card.Img style={{height: 150}} variant="top" src={food.image} />
          <Card.Body>
            <Card.Title className='text-center'>{food.name}</Card.Title>
            <Card.Text className='text-center'>{food.restaurant}</Card.Text>
            <button style={{ position: "absolute", bottom: 0, left: 10 }} variant="primary"><BsHeart/></button>
          </Card.Body>
        </Card>
      );
}

export default Food;