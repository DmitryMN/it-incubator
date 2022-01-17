import React, {useEffect, useState} from "react";

const SetIntervalExample = () => {
    const [count, setCount] = useState<number>(1);

    useEffect(() => {
        setInterval(() => {
            setCount(state => state + 1);
        }, 1000);
    }, []);

    return(
        <div>Count:{count}</div>
    );
}

export default SetIntervalExample;