import React,{useState} from "react";
import FruitContext from "./FruitContext";

const FruitProvider = (props) =>{
    const [name,setname] = useState("Apple");
    return(
        <div>
         <FruitContext.Provider value = {{
            name:name,
            setname:setname
         } }>
          {props.children}
         </FruitContext.Provider>
        </div>
    )
}

export default FruitProvider;