import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Convert = ({ language, text }) => {

	const [transalated, setTranslated] = useState('');
	const [debouncedText, setDebouncedText] = useState();

	useEffect(() => {

		const timerId = setTimeout(() => {
			setDebouncedText(text);
		}, 1000);

		return () => {
			clearTimeout(timerId);
		};

	}, [text]);

	useEffect(() => {
		//console.log('New language or text');

		const doTranslation = async () => {

			const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
				params: {
					q: text,
					target: language.value,
					key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
				}
			});
			setTranslated(data.data.translations[0].translatedText);
		};
		doTranslation();

	}, [language, debouncedText]);


	return (
		<div>
			<h1 className="ui header">
				{transalated}
			</h1>
		</div>
	);
}
export default Convert;
