import React, { useState } from "react";

function Count(){
    const[val, setVal] = useState('')
    const[count, setCount] = useState(0);

function handleSubmit(e){
    e.preventDefault();
    setVal('');
    setCount((count) => count + val.length);
}
    return (
        <div>
        <form style={{marginLeft: "10px"}}onSubmit={(e) => handleSubmit(e)}>
            <input 
            value={val}
            onChange={(e) => setVal(e.target.value)}
            type="text"></input> 
            <button type="submit">Submit</button>
        </form>
        <p style={{marginLeft: "10px"}}>{count}</p>
        </div>
    )
}

export default Count;