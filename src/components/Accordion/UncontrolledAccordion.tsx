import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string
}

type AccordionTitleProps = {
    title: string
}

const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(true);
    const onChangeCollapsed = () => {
        setCollapsed(!collapsed);
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
    return <h3>Uncontrolled</h3>
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