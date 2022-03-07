// imoprt the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
 
/*function getButtonText(){
  
    return 'Click on Me !';
} ----> can be used in the {} to reference a JS varibale
*/
// const React = require('react') ----> using commonJs module system
// Create a React Component

const App = () => {
   const buttonText = 'Click Me!';
    //const buttonText = 1234;
   // const buttonText = ['Hello','There'];
   // const buttonText = [10,20];
    //const buttonText = {text:'Click Me!'}; // cannot use js objects as refernce in {} , but can refer to their property, as buttontext.text
    //const style = {backgroundColor:'black', color:'white'}; ---> can be used in place of style in the button, i.e. a js object can be refernces as long as it not being made to display text etc.
    // Earlier it was for but it is not accepted by React, but it doesnt give an error but a warning.Check console and do the changes. For is also not supported to avoid collision
    const labelText = 'Enter Name: ';
    return (
    <div>
    <label className="label" htmlFor="name">{labelText}</label>    
    <input id="name" type="text"/>
    <button style = { {backgroundColor:'black', color:'white'}}>{buttonText}</button>
    </div>)
    };
// Take the react component and show it on the screen

ReactDOM.render(<App/>,document.getElementById('root'));