//npm packages
import { useState, useEffect } from "react";
import axios from "axios";
//project files

const Convert = ({ language, text }) => {
	const [translatedText, setTranslatedText] = useState("");
	const [debouncedText, setDebouncedText] = useState(text);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (text) {
				setDebouncedText(text);
			}
		}, 1000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [text]);

	useEffect(() => {
		getTranslatedText(debouncedText);
	}, [language, debouncedText]);

	const getTranslatedText = async (toTranslateText) => {
		const {
			data: {
				data: { translations },
			},
		} = await axios.post(
			"https://translation.googleapis.com/language/translate/v2",
			{},
			{
				params: {
					q: toTranslateText,
					target: language.value,
					key: process.env.REACT_APP_GOOGLE_API_KEY,
				},
			}
		);
		setTranslatedText(translations[0].translatedText);
	};

	return (
		<div>
			<h1 className="ui header">{translatedText}</h1>
		</div>
	);
};

export default Convert;
