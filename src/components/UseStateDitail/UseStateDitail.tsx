import React, { useState } from "react";

function generateData() {
    console.log("generateData");
    return 34444456;
}

const UseStateDitail = () => {
    console.log("UseStateDitail");
    //use function initial state 
    const [counter, setCounter] = useState(generateData);

    const onClickHandler = () => {
        setCounter(changer)
    }

    const changer = (state: number) => {
        return state + 1;
    }

    return(
        <div>
            <button onClick={onClickHandler}>+</button>
            {counter}
        </div>
    );
}