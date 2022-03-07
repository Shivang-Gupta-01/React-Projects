import './ImageList.css';
import ImageCard from './ImageCard';
import React from 'react';

const ImageList = (props) => {
	//console.log(props.images);

	/*---This method uses the prop image constantly in the image tage--*/
	// const images = props.images.map((image) => {
	// 	return <img key={image.id} src={image.urls.regular} alt={image.description} />;
	// });
	// return <div>{images}</div>;

	/*--We can make the app more efficient using the destructring of the image prop-*/
	// const images = props.images.map(({ id, urls, description }) => {
	// 	return <img key={id} src={urls.regular} alt={description} />;
	// });

	const images = props.images.map((image) => {
		return <ImageCard key={image.id} image={image} />;
	});
	return <div className="image-list">{images}</div>;
};
export default ImageList;
