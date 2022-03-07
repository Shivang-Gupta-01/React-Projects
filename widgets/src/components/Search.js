import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Search = () => {
	//Using useState()
	const [term, setTerm] = useState('programming');
	const [debouncedTerm, setDebouncedTerm] = useState(term);
	const [results, setResults] = useState([]);

	//console.log(results);

	//console.log("I run with every render");
	// Using useEffect() 
	// The first function of useeffect is always a function ---> but we cannot use asyunc await
	// useEffect(() => {

	// 	// Solution 1 to handle error of not able to use async function in first function of useEffect

	// 	const search = async () => {
	// 		const { data } = await axios.get('http://en.wikipedia.org/w/api.php', {
	// 			params: {
	// 				action: 'query',
	// 				list: 'search',
	// 				origin: '*',
	// 				format: 'json',
	// 				srsearch: term,
	// 			}

	// 		});
	// 		setResults(data.query.search);
	// 	};



	// 	// if the user doesnt give any search term and also the default value of search term is empty
	// 	// const timeoutId = setTimeout(() => {

	// 	// 	if (term) {
	// 	// 		search();
	// 	// 	}
	// 	// }, 1000);
	// 	//search();

	// 	if (term && !results.length) {    // this makes sure that we are making a request the first time the component is rendered.
	// 		search();
	// 	} else {
	// 		const timeoutId = setTimeout(() => {

	// 			if (term) {
	// 				search();
	// 			}
	// 		}, 1000);
	// 		return () => {
	// 			clearTimeout(timeoutId);
	// 		}
	// 	}

	// 	/*-----------Cleanup Code---------------*/
	// 	// console.log('Inital render or term was changed');

	// 	// return () => {
	// 	// 	console.log('CLEAN-UP');
	// 	// };

	// }, [term]);

	// useEffect for the debouncedTerm 
	useEffect(() => {
		const timerId = setTimeout(() => {

			setDebouncedTerm(term);
		}, 1000);

		return () => {
			clearTimeout(timerId);
		}
	}, [term])

	//final useefftect to handle warning using the above useEffect
	useEffect(() => {

		const search = async () => {
			const { data } = await axios.get('http://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: debouncedTerm,
				}

			});
			setResults(data.query.search);
		};
		search();
	}, [debouncedTerm])


	const renderedResults = results.map((result) => {
		return (
			<div key={result.pageid} className="item">
				<div className="right floated content">
					<a className=" ui button"
						href={`https://en.wikipedia.org?curid=${result.pageid}`}
					>Go</a>

				</div>
				<div className="content">
					<div className="header">
						{result.title}
					</div>
					<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
				</div>
			</div>
		)
	})
	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input
						className="input"
						value={term}
						onChange={(e) => {
							setTerm(e.target.value);
						}}
					/>
				</div>
			</div>
			<div className="ui celled list">
				{renderedResults}
			</div>
		</div>
	);
};
export default Search;
