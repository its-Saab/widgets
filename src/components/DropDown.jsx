//npm packages
import { useState, useEffect, useRef } from "react";
//project files

const DropDown = ({ selected, options, onSelectedChange }) => {
	const [openMenu, setOpenMenu] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)) {
				return;
			}
			setOpenMenu(false);
		};

		document.body.addEventListener("click", onBodyClick, { capture: true });

		return () => {
			document.body.removeEventListener("click", onBodyClick, {
				capture: true,
			});
		};
	}, []);

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
		<div>
			<div ref={ref} className="ui form">
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
			<p style={{ color: `${selected.value}` }}>
				{`THIS TEXT IS ${selected.value.toUpperCase()}`}{" "}
			</p>
		</div>
	);
};

export default DropDown;
