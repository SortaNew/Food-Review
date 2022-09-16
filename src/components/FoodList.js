import Food from './Food'
import Row from 'react-bootstrap/Row';

function FoodList({foodList}){
    // console.log(foodList)
    const foods = foodList.map(food => {
        return <Food key={food.id} food={food}/>
    })
    
    return (
        <Row>
            {foods}
        </Row>
    )
}

export default FoodList