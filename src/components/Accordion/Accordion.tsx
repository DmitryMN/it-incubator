import React from "react";

type AccordionProps = {
    title: string,
    collapsed: boolean
}

function Accordion(props: AccordionProps) {
    if(props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.title}/>
            </div>
        );
    }
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    );
}

type AccordionTitleProps = {
    title: string
}

function AccordionTitle(props: AccordionTitleProps ) {
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;