import React, {useState} from "react";

type StarProps = {
    selected: boolean
    callBack: () => void
}

const UnReiting = () => {
    
    let [value, setValue] = useState<number>(0);


    return(
        <div>
            <div>Raiting</div>
            <Star selected={value > 0} callBack={() => {setValue(1)}}/>
            <Star selected={value > 1} callBack={() => {setValue(2)}}/>
            <Star selected={value > 2} callBack={() => {setValue(3)}}/>
            <Star selected={value > 3} callBack={() => {setValue(4)}}/>
            <Star selected={value > 4} callBack={() => {setValue(5)}}/>
        </div>
    );
}

const Star = (props: StarProps) => {

    const onCallBackHandler = () => {
        props.callBack();
    }

    return <span onClick={onCallBackHandler}>{ props.selected ? <b>star </b> : "star " }</span>
} 


export default UnReiting;  