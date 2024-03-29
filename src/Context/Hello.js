import React,{useState,useContext} from "react";
import FruitContext from "./FruitContext";

const Hello = () =>{
    let [Count,setCount] = useState(0)
    const {name,setname} =  useContext(FruitContext);

  function Increase(){
    setCount(Count+1)
    setname("Mango")
  }

    return(
        <div>
            <h1>{Count}</h1>
            <button  onClick={Increase}>Increase</button>
            <button  onClick={()=> setCount(Count-1)}>Decrease</button>
            <button  onClick={() => setCount(0)}>Reset</button>
            <h1>{name}</h1>
        </div>
    )

}

export default Hello;