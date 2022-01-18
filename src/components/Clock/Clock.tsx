import React, { useEffect, useState } from "react";


const getDigit = (num: number) => {
    return num < 10 ? '0' + num : num;
}

const Clock = () => {
    const [date, setDate] = useState(new Date());
    

    useEffect(() => {
        const id = setInterval(() => {
            console.log("tik");
            setDate(new Date());
        }, 1000);

        return () => {
            debugger;
            clearInterval(id);
        }

    }, []);

    return(
        <div>
            <span>{getDigit(date.getHours())}</span>:
            <span>{getDigit(date.getMinutes())}</span>:
            <span>{getDigit(date.getSeconds())}</span>
        </div>
    );
}

export default Clock;