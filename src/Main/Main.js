//import React from 'react'
import Counter from "./Counter";
import react from './img/nissan.png';


function Main() {
  return (
    <>
        <Counter datos={['Itan Gael Cordova Quiroz', '20978', '5°A']} />
        <img src={react} alt="logo" />
    </>
  );
}

export default Main;