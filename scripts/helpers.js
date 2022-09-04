const handleSearchByDesc = (e) => {
	if (e.keyCode == "13") {
		if (e.target.value) {
			appState.articles = newsArticles;
			appState.search = e.target.value;
			const articles = searchByDesc(appState.articles, e.target.value);
			appState.articles = articles;
		} else {
			appState.search = "all";
		}
		main();
	}
}




const searchByDesc = (dataSource, item) => {
	let result = dataSource.filter((data) => {
		return data.description.indexOf(item) != -1
	});
	return result;
}