import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
	Summer: {
		text: 'Lets Hits the Sun',
		iconName: 'sun'
	},
	Winter: {
		text: 'Burr, Its Chilly',
		iconName: 'tree'
	}
};
const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'Summer' : 'Winter';
	} else {
		return lat > 0 ? 'Winter' : 'Summer';
	}
};

const SeasonDisplay = (props) => {
	//console.log(props.lat);
	const season = getSeason(props.lat, new Date().getMonth());
	const { text, iconName } = seasonConfig[season];
	//console.log(season);

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left ${iconName} icon massive`} />
			<h1>{text}</h1>
			<i className={`icon-right ${iconName} icon massive`} />
		</div>
	);
};
export default SeasonDisplay;
