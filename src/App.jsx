//npm packages
import { useState } from "react";
//project files
import Accordion from "./components/Accordion";
import DropDown from "./components/DropDown";
import Search from "./components/Search";

const items = [
	{
		title: "What is React?",
		content: "React is a front end javascript framework ",
	},
	{
		title: "Why use React?",
		content: "React is a favourite JS library among engineers",
	},
	{
		title: "How do you use React?",
		content: "You use React by creating components",
	},
];

const options = [
	{ label: "The Color Red", value: "red" },
	{ label: "The Color Green", value: "green" },
	{ label: "A Shade of Blue", value: "blue" },
];
export default () => {
	const [selectedColor, setSelectedColor] = useState(options[0]);
	return (
		<div>
			{/* <Accordion items={items} /> */}
			{/* <Search /> */}
			<DropDown
				selected={selectedColor}
				options={options}
				onSelectedChange={(color) => setSelectedColor(color)}
			/>
		</div>
	);
};
