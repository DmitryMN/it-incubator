import React, { useState, ChangeEvent } from "react";

 
export const ControlUncontrolCheckBox = () => {
    const [parentValue, setParenValue] = useState<boolean>(true);

    const onChackedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParenValue(e.currentTarget.checked);
    }

    return(
        <div>
            <h5>CheckBox</h5>
            <span>{parentValue ? "on" : "off"}</span>
            <input type="checkbox" onChange={onChackedHandler} checked={parentValue}/>
        </div>
    );
}


export const ControlledSelected = () => {
    const [parentValue, setParenValue] = useState<string>('1');

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParenValue(e.currentTarget.value);
    }

    return(
        <select value={parentValue} onChange={onChange}>
            <option value="1">none</option>
            <option value="2">Moscow</option>
            <option value="3">New York</option>
            <option value="4">VanCouver</option>
        </select>
    );
}