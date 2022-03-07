import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {

	const [open, setOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {

		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)) {
				return;
			}
		}

		// document.body.addEventListener('click', (event) => {
		// 	//console.log(' BODY CLICK!!!')
		// 	//console.log(event.target)
		// 	if (ref.current.contains(event.target))  // Sees if the element clicked on was inside the element refered by the ref
		// 	{
		// 		return;
		// 	}
		// 	setOpen(false);

		// }, { capture: true });

		document.body.addEventListener('click', onBodyClick, { capture: true });

		return () => {
			document.body.removeEventListener('click', onBodyClick, { capture: true });
		};
	}, []);


	const renderedoptions = options.map((option) => {

		if (option.value === selected.value) {
			return null;
		}
		return (
			<div key={option.value} className="item"
				onClick={() => {
					//console.log("Item Clicked");
					onSelectedChange(option)
				}}
			>
				{option.label}
			</div>
		);
	});
	//console.log(ref.current)
	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">{label}</label>
				<div
					onClick={() => {
						//console.log('Dropdown-Clicked')
						setOpen(!open)
					}}
					className={`ui selection dropdown ${open ? 'visible active' : ''}`}
				>
					<i className="dropdown icon"></i>
					<div className="text">
						{selected.label}
					</div>
					<div
						className=
						{` menu ${open ? 'visible transition' : ''}`}
					>
						{renderedoptions}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dropdown;