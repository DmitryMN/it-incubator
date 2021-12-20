import React, {useState, useReducer} from "react";

type UncontrolledAccordionPropsType = {
    title: string
}

type AccordionTitleProps = {
    title: string
}

type ActionType = {
    type: string
}

const collapseAC: ActionType = {type: "ACTIVE_UNACTIVE"}

const reducer = (state: boolean, action: ActionType) => {
    switch(action.type) {
        case "ACTIVE_UNACTIVE":
            return !state;
        default:
            return state;
    }
}

const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
    // const [collapsed, setCollapsed] = useState(true);
    const [collapsed, dispatch] = useReducer(reducer, true);

    const onChangeCollapsed = () => {
        // setCollapsed(!collapsed);
        dispatch(collapseAC);
    }

    return(
        <div>
            <AccordionTitle title={props.title}/>
            <button onClick={onChangeCollapsed}>Toggle</button>
            { !collapsed && <AccordionBody/> }
        </div>
    );
}

const AccordionTitle = (props: any ) => {
    return <h3>Uncontrolled accordion</h3>
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;