import Link from "./Link";

export const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link className="item" href="/">
				Accordion
			</Link>
			<Link className="item" href="/search">
				Search
			</Link>
			<Link className="item" href="/dropdown">
				Dropdown
			</Link>
			<Link className="item" href="/translate">
				Translate
			</Link>
		</div>
	);
};
