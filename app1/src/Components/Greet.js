import React from 'react'

const Greet = () => <h1>Hello Shivang </h1>

export default Greet


// the default tag allows us to import the greett component as any name in app.js
// we cana lso use name export by changing our expression as export const Greet = () =>......
// and importing Greet in app.js as import {Greet} from './components/Greet'



// this is  a functional/dumb/presentational component
// they are simple functions. dont use this keyword, and are mainly responsible for UI.