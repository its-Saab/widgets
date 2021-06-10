//npm packages
import { useEffect, useState } from "react";
import axios from "axios";
import { ItemCard } from "./ItemCard";
//project files

const Search = () => {
	const [term, setTerm] = useState("programming");
	const [debouncedTerm, setDebouncedTerm] = useState(term);
	const [result, setResult] = useState([]);

	const handleTermChange = ({ target: { value } }) => {
		setTerm(value);
	};

	const fetchSearchResults = async (query) => {
		const {
			data: {
				query: { search },
			},
		} = await axios.get("https://en.wikipedia.org/w/api.php", {
			params: {
				action: "query",
				list: "search",
				origin: "*",
				format: "json",
				srsearch: query,
			},
		});
		setResult(search);
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (term) {
				setDebouncedTerm(term);
			} else {
				setResult([]);
			}
		}, 1000);

		return () => clearTimeout(timeoutId);
	}, [term]);

	useEffect(() => {
		fetchSearchResults(debouncedTerm);
	}, [debouncedTerm]);

	const renderedResults = result.map((item, index) => {
		return <ItemCard key={index} item={item} />;
	});
	return (
		<div>
			<div className="ui form">
				<div className="field">
					<input
						value={term}
						onChange={handleTermChange}
						type="text"
						className="input"
						placeholder="Enter Search Term"
					/>
				</div>
			</div>
			<div className="ui celled list">{renderedResults}</div>
		</div>
	);
};

export default Search;
