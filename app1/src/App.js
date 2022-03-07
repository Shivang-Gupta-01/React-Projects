import React,{ Component } from 'react';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
class App extends Component {

  name = 'Shivang'
  render  (){
    //name = 'Aparna'  // declaring name in the render method will give us an error. To include it we must declare name as const and remove the this pointer
    const name = 'Reeva'
    // this.name returns the name inside the class App and name returns the name inside the render function
    return(
    <div className="App">
    
    {name}     
    {this.name}
    {console.log(this)}

    <Greet/>
    <Welcome/>
   
    </div>

  );
    }
}
const Appinstance = new App()
console.log(Appinstance);

export default App