const appState = {
	search: "",
	articles: newsArticles.slice()
}




const routes = {
	path: "/",
	params: {
		activeLeague: "Premier League"
	},
	setPath: function (to) {
		this.path = to;
		main();
	},
	setActiveLeague: function (to) {
		this.params.activeLeague = to;
		main();
		
	}
}


const Route = (path, component) => {
	return routes.path === path ? component: "";
}