import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Raiting/Raiting";
import OnOff from './components/onOff/OnOff';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import UnReiting from './components/Raiting/UnRaiting';
import Select from './components/Select/Select';
import {Example1} from "./components/ReactMemo/ReactMemo";
import {Example2} from "./components/ReactMemo/UseMemo";
import {UseUseCallBack} from "./components/ReactMemo/UseUseCallBack";
import LessonUseEffect from './components/UseEffect/LessonUseEffect';
import Clock from './components/Clock/Clock';

export type UserType = {
    name: string
    value: number
}


export type FruitsType = {
    id: string
    title: string
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

    const fruits: Array<FruitsType> = [
        {id: "1", title: "Apple"},
        {id: "2", title: "Peach"},
        {id: "3", title: "Melon"},
        {id: "4", title: "lemon"}
    ];

    const [value, setValue] = useState<string>(fruits[0].title);

    const callBackAccordion = (name: string) => {
        alert(`hello my friend - ${name}`);
    }

    const callBackSetValue = (id: string) => {
        let findItemFruit =  fruits.find((fruit) => fruit.id === id);
        if (findItemFruit) {
            setValue(findItemFruit.title);
        }
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
            <Select fruits={fruits} value={value} callBackSetValue={callBackSetValue}/>
            <Example1 />
            <Example2 />
            <UseUseCallBack />
            <LessonUseEffect />
            <Clock />
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
