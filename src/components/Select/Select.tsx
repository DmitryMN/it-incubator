import { type } from "os";
import React, {useState} from "react";
import { FruitsType } from "../../App";

type SelectPropsType = {
    value: any
    onChangeSelect: (value: any) => void
    fruits: Array<FruitsType>
}

const Select = () => {
    
    let [collapsed, setCollapsed] = useState<boolean>(false);

    const onClickHandler = () => {
        setCollapsed(!collapsed);
    }

    return(
        <div>
            <div onClick={onClickHandler}>Value</div>
            {collapsed && <div>Aple</div>}
        </div>
    );
}

type FruitPropsType = {
    title: string
}

const Fruit = () => {
    return(
        <div>
            <span>title</span>
        </div>
    );
}

export default Select;

