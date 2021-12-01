import { type } from "os";
import React, {useState} from "react";
import { FruitsType } from "../../App";
import "./select.css";

type SelectPropsType = {
    value: string
    fruits: Array<FruitsType>
    callBackSetValue: (id: string) => void
}

const Select = ({fruits, value, callBackSetValue}: SelectPropsType) => {

    let [collapsed, setCollapsed] = useState<boolean>(false);

    const onClickHandler = () => {
        setCollapsed(!collapsed);
    }


    return(
        <div>
            <div className="select" onClick={onClickHandler}>{value}</div>
            {collapsed && <Fruit fruits={fruits} callBackSetValue={callBackSetValue} setCollapsed={setCollapsed}/>}
        </div>
    );
}

type FruitPropsType = {
    fruits: Array<FruitsType>
    callBackSetValue: (id: string) => void
    setCollapsed: (value: boolean) => void
}

export const Fruit = ({fruits, callBackSetValue, setCollapsed}: FruitPropsType) => {

    const onClickHandler = (id: string) => {
        callBackSetValue(id);
        setCollapsed(false);
    }

    return(
        <div>
            {fruits.map(fruit => {
                return <div className="red" onClick={() => onClickHandler(fruit.id)} key={fruit.id}>{fruit.title}</div>
            })}
        </div>
    );
}

export default Select;

