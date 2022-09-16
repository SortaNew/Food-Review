import Food from './Food'
import Row from 'react-bootstrap/Row';

function Dinner({foodList}){
    // console.log(foodList)
    const foods = foodList.filter(food => {
        return food.category.toLowerCase() === "dinner"        
        })
    const dinner = foods.map(food =>{
        return <Food key={food.id} food={food}/>
    })
    
    return (
        <Row>
            {dinner}
        </Row>
    )
}

export default Dinner;