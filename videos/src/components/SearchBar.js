import React from 'react';
import 'semantic-ui-css/semantic.min.css';
class SearchBar extends React.Component {
	state = { term: '' };

	onInputChange = (e) => {
		e.preventDefault();
		this.setState({ term: e.target.value });
		//console.log(this.state.term);
	};

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.term);
	};
	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>Video Search</label>
						<input value={this.state.term} type="text" onChange={this.onInputChange} />
					</div>
				</form>
			</div>
		);
	}
}
export default SearchBar;
