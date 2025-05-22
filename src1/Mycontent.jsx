import React,{useState, useEffect, useRef,} from "react";

function MyContent(){

    // let [count,setCount]=useState(0);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);
    // console.log(ref);
    

    useEffect(()=>{
        console.log("Component Rerendered");
    });

    function handleClick1(){
        // setCount(N=>N+1);
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor ="blue"
        inputRef2.current.style.backgroundColor =""
        inputRef3.current.style.backgroundColor =""
        inputRef4.current.style.backgroundColor =""
    }
    function handleClick2(){
        // setCount(N=>N+1);
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor =""
        inputRef2.current.style.backgroundColor ="blue"
        inputRef3.current.style.backgroundColor =""
        inputRef4.current.style.backgroundColor =""
    }
    function handleClick3(){
        // setCount(N=>N+1);
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor =""
        inputRef2.current.style.backgroundColor =""
        inputRef3.current.style.backgroundColor ="blue"
        inputRef4.current.style.backgroundColor =""
    }
    function handleClick4(){
        // setCount(N=>N+1);
        inputRef4.current.focus();
        inputRef1.current.style.backgroundColor =""
        inputRef2.current.style.backgroundColor =""
        inputRef3.current.style.backgroundColor =""
        inputRef4.current.style.backgroundColor ="blue"
    }

    return(
        <div>
            <button onClick={handleClick1}>
                Click me1!
            </button>
            <input  ref={inputRef1}/>

            <button onClick={handleClick2}>
                            Click me2!
                        </button>
            <input  ref={inputRef2}/>

            <button onClick={handleClick3}>
                            Click me3!
            </button>
            <input  ref={inputRef3}/>

            <button onClick={handleClick4}>
                            Click me4!
            </button>
            <input  ref={inputRef4}/>

        </div>
    )
}
export default MyContent;