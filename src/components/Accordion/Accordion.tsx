import React from "react";

type AccordionProps = {
    title: string,
    collapsed: boolean
}
const Accordion = (props: AccordionProps) => {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            { !props.collapsed && <AccordionBody/> }
        </div>
    );
}

type AccordionTitleProps = {
    title: string
}

const AccordionTitle = (props: AccordionTitleProps ) => {
    return <h3>{props.title}</h3>
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

export default Accordion;