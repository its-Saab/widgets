//npm packages
import { useState } from "react";
//project files

const DropDown = ({ selected, options, onSelectedChange }) => {
	const [openMenu, setOpenMenu] = useState(false);

	const renderedOptions = options.map((option, index) => {
		if (option.value === selected.value) {
			return null;
		}
		return (
			<div
				onClick={() => onSelectedChange(option)}
				key={index}
				className="item"
			>
				{option.label}
			</div>
		);
	});
	return (
		<div className="ui form">
			<div className="field">
				<label className="label">Select a color</label>
				<div
					onClick={() => setOpenMenu(!openMenu)}
					className={`ui selection dropdown ${
						openMenu ? "visible active" : ""
					}`}
				>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${openMenu ? "visible transition" : ""}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DropDown;
