import React, { useState } from 'react';

const Accordion = ({ items }) => {
	//Initialise state using Hooks
	const [activeIndex, setActiveIndex] = useState(null);

	// Helper function
	const onTitleClick = (index) => {
		//console.log('Item-Clicked', index);
		setActiveIndex(index);
	};

	const renderItems = items.map((item, index) => {
		// check the active index
		const active = index === activeIndex ? 'active' : '';

		return (
			<React.Fragment key={item.title}>
				<div className={`title ${active}`} onClick={() => onTitleClick(index)}>
					<i className="dropdown icon"></i>
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});
	return (
		<div className="ui styled accordion">
			{renderItems}
			{/* <h1>{activeIndex}</h1> */}
		</div>
	);
};
export default Accordion;
