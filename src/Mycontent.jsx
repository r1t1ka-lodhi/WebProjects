import React,{useState, useEffect, useRef} from "react";
function MyContent(){

    let [count,setCount]=useState(0);

function handleClick(){
    
}

    return(
        <button onClick={handleClick}>
            Click me!
        </button>
    )
}
export default MyContent;