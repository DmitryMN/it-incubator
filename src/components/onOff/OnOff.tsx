import React, {useState} from "react";

type OnOffPropsType = {
    onOff: boolean
}

const OnOff = (props: OnOffPropsType) => {

    const [on_off, setOnOf] = useState(false);

    const changeHandler = (value: boolean) => {
        setOnOf(value);
    }

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        backgroundColor: on_off ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        backgroundColor: on_off ? "white" : "red"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        backgroundColor: on_off ? "green" : "red",
        marginTop: "5px"
    };

    return(
        <div>
            <div onClick={() => {changeHandler(true)}} style={onStyle}>on</div>
            <div onClick={() => {changeHandler(false)}} style={offStyle}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

export default OnOff; 