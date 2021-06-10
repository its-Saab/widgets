//npm packages

//project file

export const ItemCard = ({ item }) => {
	return (
		<div className="item">
			<div className="right floated content">
				<a
					href={`https://en.wikipedia.org?curid=${item.pageid}`}
					className="ui button"
				>
					Read more
				</a>
			</div>
			<div className="content">
				<div className="header">{item.title}</div>
				<span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
			</div>
		</div>
	);
};
