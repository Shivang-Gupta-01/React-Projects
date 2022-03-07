import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.imageRef = React.createRef();

		this.state = {
			spans: 0
		};
	}
	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans);
		//console.log(this.imageRef);
		//console.log(this.imageRef.current);
		//console.log(this.imageRef.current.clientHeight); // This gives 0, because as soon as the compponent is rendered and the componentDidMount() function runs, the image comminng from the API has not got the time to downlaod itself.Therfore even before its loaded the value is being called and therefore is 0.
	}
	setSpans = () => {
		//console.log(this.imageRef.current.clientHeight);
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10);
		this.setState({ spans });
	};

	render(props) {
		const { description, urls } = this.props.image;
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}
export default ImageCard;
