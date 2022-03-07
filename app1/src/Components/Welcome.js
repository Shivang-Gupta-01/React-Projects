import React, {Component} from 'react'

class Welcome extends Component{
     
    render()
    {
        return <h1>Class Component</h1>
    }
}

export default Welcome
// The render methods returns null or an HTML
// this is a statefull component/ Class component/ Smart/ COntainer components.
// they are responsible for comples UI logics, have their own private data and provide life-cycle hooks

// Both the stateful and stateless components returns a JSX. To convert any javascript into JSX emclose it in curly-paranthesis{}