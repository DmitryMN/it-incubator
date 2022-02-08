import React, {useEffect, useState} from "react";
import "./analogClock.css";

const AnalogClock = () => {

    useEffect(() => {
        const id = setInterval(handleDate, 1000);
        return () => {
            clearInterval(id);
        }
    }, []);

    const getDigit = (num: number) => {
        return num < 10 ? '0' + num : num;
    }

    const [seconds, setSeconds] = useState<number>(1);
    const [minutes, setMinutes] = useState<number>(1);
    const [hours, setHours] = useState<number>(1);


    const secondsStyle = {
        transform: `rotate(${seconds * 6}deg)`
    };
      const minutesStyle = {
        transform: `rotate(${minutes * 6}deg)`
    };
      const hoursStyle = {
        transform: `rotate(${hours * 30}deg)`
    };

    const handleDate = () => {
        const date = new Date();
        setHours(date.getHours());
        setMinutes(date.getMinutes());
        setSeconds(date.getSeconds());
      }

    return(
        <div className={"clock"}>
        <h3>Clock</h3>
        <div className={"analog-clock"} >
          <div className={"dial seconds"} style={secondsStyle}/>
          <div className={"dial minutes"} style={minutesStyle}/>
          <div className={"dial hours"} style={hoursStyle}/>
        </div>
        <div className={"digital-clock"}>
            {getDigit(hours)}:{getDigit(minutes)}:{getDigit(seconds)}
        </div>
      </div>
    );
}

export default AnalogClock;