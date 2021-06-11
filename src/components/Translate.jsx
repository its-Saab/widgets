//npm packages
import { useState } from "react";
import Convert from "./Convert";
//project files
import DropDown from "./DropDown";

const options = [
	{ label: "Afrikaans", value: "af" },
	{ label: "Arabic", value: "ar" },
	{ label: "Hindi", value: "hi" },
	{ label: "English", value: "en" },
	{ label: "Swedish", value: "sv" },
	{ label: "Spanish", value: "es" },
];

const Translate = () => {
	const [selectedLanguage, setSelectedLanguage] = useState(options[1]);
	const [text, setText] = useState("");
	return (
		<div>
			<div className="ui form">
				<div className="field">
					<input
						type="text"
						value={text}
						onChange={({ target: { value } }) => setText(value)}
						placeholder="Enter your text"
					/>
				</div>
			</div>
			<DropDown
				selected={selectedLanguage}
				options={options}
				onSelectedChange={(language) => setSelectedLanguage(language)}
				label="Select A Language"
			/>
      <hr />
      <h3>Output:</h3>
			<Convert language={selectedLanguage} text={text} />
		</div>
	);
};

export default Translate;
