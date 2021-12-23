import React, {useState, ChangeEvent, useMemo} from "react";

export const Example2 = () => {
    const [a, setA] = useState(3);
    const [b, setB] = useState(3);

    const onchangeAHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setA(+e.currentTarget.value)
    }
    const onchangeBHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setB(+e.currentTarget.value)
    }

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let resultTempA = 1;
        for(let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000) {
                fake++
            }
            resultTempA *= i;
        }
        return resultTempA
    }, [a]);

    for(let i = 1; i <= b; i++) {
        resultB *= i;
    }

    return(
        <div>
            <input onChange={onchangeAHandler} value={a}/>
            <input onChange={onchangeBHandler} value={b}/>
            <div>Result for a: {resultA}</div>
            <div>Result for b: {resultB}</div>
        </div>
    );
}