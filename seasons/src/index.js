import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
// const App = () => {
// 	window.navigator.geolocation.getCurrentPosition(
// 		(position) => console.log(position),
// 		(err) => console.log(err)
// 	);

// 	return <div>Latitude:</div>;
// };

class App extends React.Component {
	// Invokes any time automatically as we define and declare any instance of a class
	// constructor(props) {
	// 	super(props); // calls the constructor of the React.Component Class // Super is the reference to the parent class.

	// 	// Initialise state object

	// 	// this is the only time we do direct assignement.
	// 	// the only way we can
	// 	this.state = {
	// 		lat: null,
	// 		errorMessage: ''
	// 	}; // deafults the value of latitude inside this class based componennt to null
	// }

	state = {
		lat: null,
		errorMessage: ''
	};
	componentDidMount() {
		//console.log('My component was rendered on the screem');
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				// we called setState to change the state
				this.setState({ lat: position.coords.latitude });
				//console.log(position)
			},
			(err) => {
				this.setState({ errorMessage: err.message });
				//console.log(err)
			}
		);
	}
	// componentDidUpdate() {
	// 	console.log('My component was just updated- it re-rendered');
	// }

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error:{this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}
		return <Spinner message="Please Accpet Loation Request" />;
	}

	// React says we have to define render!!
	render() {
		return <div className="border red">{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
