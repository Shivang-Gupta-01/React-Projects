import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
	state = {
		images: []
	};
	// Communicating from child to parent
	onSearchSubmit = async (term) => {
		//console.log(term);
		const response = await unsplash.get('/search/photos', {
			params: {
				query: term
			}
		});
		//console.log(response.data.results);
		//console.log(this);
		this.setState({ images: response.data.results });
	};
	render() {
		return (
			<div className="ui container" style={{ marginTop: 10 }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				{/* Found:{this.state.images.length} images */}
				<ImageList images={this.state.images} />
			</div>
		);
	}
}
export default App;
