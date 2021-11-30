import { type } from "os";
import React from "react";
import {UserType} from "../../App";

type AccordionProps = {
    title: string
    collapsed: boolean
    users: Array<UserType>
    callBackAccordion: (name: string) => void
}

const Accordion = ({title, collapsed, users, callBackAccordion}: AccordionProps) => {
    return (
        <div>
            <AccordionTitle title={title}/>
            { !collapsed && <AccordionBody users={users} callBackAccordion={callBackAccordion}/> }
        </div>
    );
}

type AccordionTitleProps = {
    title: string
}

const AccordionTitle = (props: AccordionTitleProps ) => {
    return <h3>{props.title}</h3>
}

type AccordionBodyPropsType = {
    users: Array<UserType>
    callBackAccordion: (name: string) => void
}

const AccordionBody = (props: AccordionBodyPropsType) => {

    return (
        <ul>
            {props.users.map(user => {
                return <li key={user.value} onClick={() => { props.callBackAccordion(user.name) }}>{user.name}</li>
            })}
        </ul>
    );
}

export default Accordion;