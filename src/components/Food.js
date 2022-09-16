import Card from 'react-bootstrap/Card';
import Rating from './Star'

function Food({food}){
    
    return (
        <Card bg="dark" className="cardPad" style={{color:"white", width: '18rem' }}>
          <Card.Img style={{height: 150}} variant="top" src={food.image} />
          <Card.Body>
            <Card.Title className='text-center'>{food.name}</Card.Title>
            <Card.Text className='text-center'>{food.restaurant}</Card.Text>            
            <Rating key={food.id} foodRating={food.rating}/>
          </Card.Body>
        </Card>
      );
}

export default Food;