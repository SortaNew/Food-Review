import Food from './Food'
import Row from 'react-bootstrap/Row';

function Dessert({foodList}){
    // console.log(foodList)
    const foods = foodList.filter(food => {
        return food.category.toLowerCase() === "dessert"        
        })
    const desserts = foods.map(food =>{
        return <Food key={food.id} food={food}/>
    })
    
    return (
        <Row>
            {desserts}
        </Row>
    )
}

export default Dessert