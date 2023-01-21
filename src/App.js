// import { useState } from "react";
import Card from "./Cards";
import Userdata from "./Userdata"
import './app.css'
import Header from "./Header";
import Hero from "./Hero";

function App() {
  return (

    <div className="appj">
      
      <Header/>
      <Hero/>
      <ol className="app">
     {
       Userdata.map(item => 
       <Card name={item.name}
          id={item.id}
           population={item.population}
            region={item.region}
            capital={item.capital}
            img={item.img}/>
       )
     }
    </ol>
    </div>       
          )
}

export default App;
