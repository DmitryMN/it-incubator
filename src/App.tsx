import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Raiting/Raiting";

function App() {
  return (
      <div>
          <PageTitle title={"This is App component"}/>
          <PageTitle title={"My friends"}/>
          Article 1
          <Rating value={2}/>
          <Accordion title={"Menu"}/>
          Article 2
          <Rating value={4}/>
      </div>
  );
}

type PageTitleProps = {
    title: string
}

function PageTitle(props: PageTitleProps) {
    return <h1>{props.title}</h1>
}

export default App;
