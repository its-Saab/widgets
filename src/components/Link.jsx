const Link = ({ href, className, children }) => {
	const handleClick = (event) => {
		if (event.metaKey || event.ctrlKey) {
			return;
		}
		event.preventDefault();
		window.history.pushState({}, "", href);

		const navEvent = new PopStateEvent("popstate");
		window.dispatchEvent(navEvent);
	};
	return (
		<a onClick={handleClick} href={href} className={className}>
			{children}
		</a>
	);
};
export default Link;
