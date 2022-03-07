import React from 'react';
import 'semantic-ui-css/semantic.min.css';

class SeachBar extends React.Component {
	state = { term: '' };

	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }
	// onInputClick() {
	// 	console.log('Input was clicked');
	// }
	onFormSubmit = (event) => {
		event.preventDefault();
		//console.log(this.state.term);
		this.props.onSubmit(this.state.term);
	};
	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input type="text" value={this.state.term} onClick={this.onInputClick} onChange={(e) => this.setState({ term: e.target.value })} />
						{/* <input type="text" onClick={this.onInputClick} onChange={this.onInputChange} />  */}
						{/*An alternate way to handle through call back function*/}
						{/* <input type="text" onClick={this.onInputClick} onChange={(e) => console.log(e.target.value)} /> */}
					</div>
				</form>
			</div>
		);
	}
}
export default SeachBar;
