import React, {useState, useEffect} from 'react'
import {Route, Switch} from "react-router-dom";
import NavBar from './NavBar'
import FoodList from './FoodList'
import SubmitForm from './SubmitForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import Breakfast from "./Breakfast"
import Lunch from "./Lunch"
import Dinner from "./Dinner"
import Dessert from './Dessert'
import uuid from 'react-uuid';


function App() {

  const [foodList, setFoodList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/foods")
    .then(res => res.json())
    .then(foods => setFoodList(foods))
  }, [])
  

  function addFood(e){
    e.preventDefault();
    if(e.target["category"].value.toLowerCase()!=="Select a category" && (e.target["rating"].value >= 1 || e.target["rating"].value <= 5 )){
    setFoodList([...foodList, {
      id: uuid(),
      image: e.target["image"].value,
      name: e.target["name"].value,
      restaurant: e.target["restaurant"].value,
      category: e.target["category"].value,
      rating: e.target["rating"].value
    }])
    fetch("http://localhost:3000/foods",{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      id: uuid(),
      image: e.target["image"].value,
      name: e.target["name"].value,
      restaurant: e.target["restaurant"].value,
      category: e.target["category"].value,
      rating: e.target["rating"].value
    })
    })
    
    }
  };
  

  function handleSubmit(e){
    e.preventDefault();
    addFood(e);
  }

  return (
   <div className="back">
    <NavBar/>
    <br></br>
    <br></br>
    <br></br>
    <Switch>
    <Route path = "/FoodList">
      <FoodList foodList={foodList}/>
    </Route>
    <Route path = "/Breakfast">
      <Breakfast foodList={foodList}/>
    </Route>
    <Route path = "/Lunch">
      <Lunch foodList={foodList}/>
    </Route>
    <Route path = "/Dinner">
      <Dinner foodList={foodList}/>
    </Route>
    <Route path = "/Dessert">
      <Dessert foodList={foodList}/>
    </Route>
    <Route path = "/Form">
      <SubmitForm addFood={addFood} handleSubmit={handleSubmit}/>
    </Route>
    </Switch>    
   </div>
  );
}

export default App;
