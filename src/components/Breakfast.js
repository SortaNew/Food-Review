import Food from './Food'
import Row from 'react-bootstrap/Row';

function Breakfast({foodList}){
    // console.log(foodList)
    const foods = foodList.filter(food => {
        return food.category.toLowerCase() === "breakfast"        
        })
    const breakfast = foods.map(food =>{
        return <Food key={food.id} food={food}/>
    })
    
    return (
        <Row>
            {breakfast}
        </Row>
    )
}

export default Breakfast;