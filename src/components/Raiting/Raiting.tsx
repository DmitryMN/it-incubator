import React from "react";

type RatingProps = {
    value: number
}

function Rating(props: RatingProps) {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    );
}

type StarProps = {
    selected: boolean
}

function Star(props: StarProps) {
    if (props.selected) {
        return <span><b>star </b></span>
    }
    return <span>star </span>
}

export default Rating;