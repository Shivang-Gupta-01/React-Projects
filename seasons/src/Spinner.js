import React from 'react';

const Spinner = (props) => {
	return (
		<div className="ui active dimmer">
			<div className="ui big text loader">{props.message}</div>
			{/* <div className="ui big text loader">{props.message || "Loading..."}</div>  // Another way to make a default prop buts its not elegeant as using component.deafultProps*/}
		</div>
	);
};
Spinner.defaultProps = {
	message: 'Loading'
};
export default Spinner;
