import React, { useState, ChangeEvent } from "react";

export const ControllInput = () => {
    const [value, setValue] = useState<string>('');

    const callBack = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }
    return (
        <div>
            <h4>Controlled Input</h4>
            <input onChange={callBack} value={value}></input>
        </div>
    );
}