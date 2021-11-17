import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Raiting/Raiting";
import OnOff from './components/onOff/OnOff';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import UnReiting from './components/Raiting/UnRaiting';
import { UncontrolInput, UncontrolInputRef } from './components/ControlAndUncontrolInput/UncontrolInput';
import {ControllInput} from './components/ControlAndUncontrolInput/ControllInput';

const App = () => {
  return (
      <div>
          <PageTitle title={"This is App component"}/>
          <PageTitle title={"My friends"}/>
          Article 1
          <Rating value={2}/>
          <Accordion title={"Menu"} collapsed={true}/>
          <Accordion title={"Users"} collapsed={false}/>
          Article 2
          <Rating value={4}/>
          <OnOff onOff={true}/>
          <OnOff onOff={false}/>
          <UncontrolledAccordion title={"Menu"}/>
          <UnReiting />
          <ControllInput/>
          <UncontrolInput/>
          <UncontrolInputRef/>
      </div>
  );
}

type PageTitleProps = {
    title: string
}

const PageTitle = (props: PageTitleProps) => {
    return <h1>{props.title}</h1>
}

export default App;
