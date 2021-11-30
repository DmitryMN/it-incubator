import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Raiting/Raiting";
import OnOff from './components/onOff/OnOff';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import UnReiting from './components/Raiting/UnRaiting';


export type UserType = {
    name: string
    value: number
}


const App = () => {

    const users: Array<UserType> = [
        {name: "Alex", value: 1},
        {name: "Bob", value: 2},
        {name: "Tommy", value: 3},
        {name: "Kevin", value: 4}
    ];

    const users2: Array<UserType> = [
        {name: "Milk", value: 1},
        {name: "Meat", value: 2},
        {name: "Bread", value: 3},
        {name: "Water", value: 4}
    ];

    const callBackAccordion = (name: string) => {
        alert(`hello my friend - ${name}`);
    }

    return (
        <div>
            <PageTitle title={"This is App component"} />
            <PageTitle title={"My friends"} />
            Article 1
            <Rating value={2} />
            <Accordion title={"Menu"} collapsed={true} users={users2} callBackAccordion={callBackAccordion}/>
            <Accordion title={"Users"} collapsed={false} users={users} callBackAccordion={callBackAccordion}/>
            Article 2
            <Rating value={4} />
            <OnOff onOff={true} />
            <OnOff onOff={false} />
            <UncontrolledAccordion title={"Menu"} />
            <UnReiting />
        </div>
    );
}

type PageTitleProps = {
    title: string
}

const PageTitle = (props: PageTitleProps) => {
    return <h3>{props.title}</h3>
}

export default App;
