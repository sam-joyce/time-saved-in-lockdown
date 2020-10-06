import React from 'react';
import Slider from "./components/Slider";
import Header from './components/Header/Header';

import questions from "./data/data";

export const App = () => {
  return (
    <>
      <Header />
      {questions.map((question, index) => {
        return <Slider question={question} key={index} />
      })}
    </>
  )
}

export default App;