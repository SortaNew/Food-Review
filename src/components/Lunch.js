import Food from './Food'
import Row from 'react-bootstrap/Row';

function Lunch({foodList}){
    // console.log(foodList)
    const foods = foodList.filter(food => {
        return food.category.toLowerCase() === "lunch"        
        })
    const lunch = foods.map(food =>{
        return <Food key={food.id} food={food}/>
    })
    
    return (
        <Row>
            {lunch}
        </Row>
    )
}

export default Lunch