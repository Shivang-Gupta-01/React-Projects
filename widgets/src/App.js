import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
const items = [
	{
		title: 'What is React?',
		content: 'React is front-end Javascript Framework'
	},

	{
		title: 'Why use React?',
		content: 'React is favourite front-end Javascript Framework for developers'
	},

	{
		title: 'How do you use React?',
		content: 'We use react by creating components'
	}
];

const options = [

	{
		label: 'The Color Red',
		value: 'red'
	},
	{
		label: 'The Color Green',
		value: 'green'
	},
	{
		label: 'The shade of Blue',
		value: 'blue'
	}


];

/*---------Naive custom router 1------------*/
// const showAccordian = () => {
// 	if (window.location.pathname === '/')
// 		return <Accordion items={items} />;
// };
// const showList = () => {
// 	if (window.location.pathname === '/list')
// 		return <Search />;
// }
// const showDropdown = () => {
// 	if (window.location.pathname === '/dropdown')
// 		return (<Dropdown
// 			label="Select a Color"
// 			//selected={selected}
// 			options={options}
// 		//onSelectedChange={setSelected}
// 		/>)
// }
// const showTranslate = () => {
// 	if (window.location.pathname === '/translate')
// 		return <Translate />;
// }

/*---------Condensed custom router 1------------*/
// const showComponent = (route, component) => {
// 	return window.location.pathname === route ? component : null;
// };

const App = () => {

	const [selected, setSelected] = useState(options[0]);
	//const [showDropdown, setShowDropdown] = useState(true);

	return (
		<div>
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/dropdown">
				<Dropdown
					label="Select a Color"
					selected={selected}
					options={options}
					onSelectedChange={setSelected}
				/>
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
			{/* {showAccordian()}
			{showList()}
			{showDropdown()}
			{showTranslate()} */}
			{/* <Accordion items={items} /> */}

			{/* <Search /> */}

			{/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>

			{showDropdown ? <Dropdown
				label = "Select a Color"
				selected={selected}
				options={options}
				onSelectedChange={setSelected}
			/> :
				null} */}

			{/* {<Translate />} */}
		</div>
	);
};

export default App;
