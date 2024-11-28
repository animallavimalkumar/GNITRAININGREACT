import { useState } from "react";

function Test4(){
    let [counter, setCounter]=useState(0)
    return(
        <div>
            <h2>Counter value is: {counter}</h2>
<button onClick={()=>setCounter(++counter)}>Incrementer</button>
<button onClick={()=>setCounter(--counter)}>Decrementer</button>
        </div>
    )
}
export default Test4;