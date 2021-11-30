import React, { useState, ChangeEvent, useRef } from "react";


export const UncontrolInput = () => {
    const [value, setValue] = useState<string>('');

    const callBack = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

    return (
        <div>
            <div>
                <h4>UnControlled Input</h4>
                <input onChange={callBack}/>
                <span>{"Input text: " + value}</span>
            </div>
        </div>
    );
}

export const UncontrolInputRef = () => {
    const [value, setValue] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null)
    
    const callBack = () => {
        let el = inputRef.current as HTMLInputElement
        setValue(el.value);
    }

    return (
        <div>
            <div>
                <h4>UnControlled Ref Input</h4>
                <input ref={inputRef}/>
                <button onClick={callBack}>add</button>
                <span>{"Input text: " + value}</span>
            </div>
        </div>
    );
}