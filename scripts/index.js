const ArticleFooter = (views, comments) => {
	return (`
		<footer class='card-action'>
			<button class='btn btn-primary'><i class="bi bi-eye"></i> ${views}</button>
			<button class='btn btn-primary'><i class="bi bi-chat-left-dots"></i> ${comments}</button>
		</footer>
	`
	);
}


const ArticlesWrapper = (children) => {
	return `
		<div class='container'>
			<div class='row'>
				${children}
			</div>
		</div>
	`;
}


const Articles = (articles) => {
	let array = articles.map((article) => {return Article(article)});
	let wrapper = ArticlesWrapper(array.join(""));
	return wrapper;
}

const Header = (title) => {
	return `
		<header id='header'>
			${NavBar()}
			<div class='heading'>
				<h1>ZipSports</h1>
				<p>Bringing football closer to you</p>
				<h3 class='page-title'>${title}</h3>
			</div>
		</header>
	`;
}

const Article = (article) => {
	return `
		<article class="col s12 m6 l4 xl3">
			<div class='card'>
				<div class='cover card-image waves-effect waves-block waves-light'>
					<img class='activator lozad' data-src=${article.coverUrl} width='100%' alt='' loading='lazy'/>
				</div>
				<div class='card-content'>
					<span class="card-title activator grey-text text-darken-4">${article.title.slice(0, 40) + '...'}<i class="material-icons right">more_vert</i></span>
				</div>
				<div class="card-action article-footer">
					<a href="#"><i class="material-icons">favorite</i> <span class='icon-text'>${article.views}</span></a>
					<a href="#"><i class="material-icons">message</i> <span class='icon-text'>${article.comments}</span></a>
				</div>
				<div class="card-reveal">
					<span class="card-title grey-text text-darken-4">${article.title}<i class="material-icons right">close</i></span>
					<p>${article.description}</p>
				</div>
			</div>
		</article>
	`;
}





const TabBar = (path) => {
	return `
		<nav class='tab-bar white hide-on-med-and-up'>
			<button onclick='routes.setPath("/")' class=${path === '/' ? 'active': ''}><i class="material-icons">home</i><span>Home</span></button>
			<button onclick='routes.setPath("/fixtures")' class=${path === '/fixtures' ? 'active': ''}><i class="material-icons">timeline</i><span>Fixures</span></button>
			<button onclick="routes.setPath('/results')"class=${path === '/results' ? 'active': ''}><i class="material-icons">widgets</i><span>Results</span></button>
			<button onclick='routes.setPath("/table")' class=${path === '/table' ? 'active': ''}><i class="material-icons">import_export</i><span>Table</span></button>
		</nav>
	`;
}


const RightBar = (path) => {
return `
	<nav class='right-bar hide-on-small-and-down'>
		<button onclick='routes.setPath("/")' class=${path === '/' ? 'active': ''}><i class="material-icons">home</i><span>Home</span></button>
		<button onclick='routes.setPath("/fixtures")' class=${path === '/fixtures' ? 'active': ''}><i class="material-icons">timeline</i><span>Fixures</span></button>
		<button onclick="routes.setPath('/results')"class=${path === '/results' ? 'active': ''}><i class="material-icons">widgets</i><span>Results</span></button>
		<button onclick='routes.setPath("/table")' class=${path === '/table' ? 'active': ''}><i class="material-icons">import_export</i><span>Table</span></button>
	</nav>
`;
}

const LeagueResults = (dataSource, league) => {
	let result = dataSource.filter((data) => {
		return data.league === league;
	}).map((data) => {
		return `<div class='section'>
					<div class='row' style='margin-bottom: 0'>
						<p class='col s11'>${data.homeTeam}</p>
						<p class='col s1'>${data.score.home}</p>
					</div>
					<div class='row'>
						<p class='col s11'>${data.awayTeam}</p>
						<p class='col s1'>${data.score.away}</p>
					</div>
				</div>
				<div class='divider'></div>
		`
	}).join("");
	return `
		<div class='container' style='margin-bottom: 80px'>
			<h4 class='league-title'>${league}</h4>
			${result}
		</div>
	`;		
}

const LeagueFixtures = (dataSource, league) => {
	let result = dataSource.filter((data) => {
		return data.league === league;
	}).map((data) => {
		return `<div class='section'>
					<div class='row' style='margin: 0'>
						<div class='col s9'>
							<p>${data.homeTeam}</p>
							<p>${data.awayTeam}</p>
						</div>
						<div class='col s3'>
							<p>${data.time} WAT</p>
						</div>
					</div>
				</div>
				<div class='divider'></div>
		`
	}).join("");
	return `
		<div class='container' style='margin-bottom: 80px'>
			<h4 class='league-title'>${league}</h4>
			${result}
		</div>
	`;		
}


const LeagueTable = (dataSource) => {
	if (dataSource) {
		let tableHead = `
			<thead>
				<tr>
					<th>Pos</th>
					<th>Team</th>
					<th>PLD</th>
					<th>GD</th>
					<th>PTS</th>
				</tr>
			</thead>
		`;
		let tableBody = `
			<tbody>
				${dataSource.map((data, index) => {
				return '<tr><td>' + (index + 1) + '</td><td>' + data.team + '</td><td>' + data.played + '</td><td>' + data.gd + '</td><td>' + data.points + '</td></tr>'
				}).join("")}
			</tbody>
		`;
		return `
			<div class='container'>
				<h4 class='league-title'>${routes.params.activeLeague}</h4>
				<table style='margin-bottom: 100px'>
					${tableHead}
					${tableBody}
				</table>
			</div>
		`
	} else {
		return `
			<div class='container'>
				<p style='text-align: center'>This table is not available for now, but will be in the future.</p>
			</div>
		`
	}

}


const NavBar = () => {
	return `
		<nav class='transparent'>
			<div class='nav-wrapper'>
				<a class='brand-logo'></a>
				<a href="#" data-target="mobile-demo" class="sidenav-trigger show-on-medium-and-up"><i class="material-icons white-text">menu</i></a>
				${RightBar(routes.path)}
			</div>
		</nav>
		<ul class="sidenav" id="mobile-demo">
			<li style='text-align: center; margin-top: 4rem'><img src='images/logo.png' alt='logo' width='40%' loading='lazy'/></li>
			<li><a onclick='routes.setActiveLeague("Premier League")' class=${routes.params.activeLeague === "Premier League" ? 'nav-active': ''}>Premier League</a></li>
			<li><a onclick='routes.setActiveLeague("La Liga")' class=${routes.params.activeLeague === "La Liga" ? 'nav-active': ''}>La Liga</a></li>
			<li><a onclick='routes.setActiveLeague("Bundesliga")' class=${routes.params.activeLeague === "Bundesliga" ? 'nav-active': ''}>Bundesliga</a></li>
			<li><a onclick='routes.setActiveLeague("Serea A")' class=${routes.params.activeLeague === "Serea A" ? 'nav-active': ''}>Serea A</a></li>
			<li><a onclick='routes.setActiveLeague("Ligue 1")' class=${routes.params.activeLeague === "Ligue 1" ? 'nav-active': ''}>Ligue 1</a></li>
		</ul>
	`;
}

const SearchArticles = () => {
	return `
		<div class='container'>
			<div class="input-field">
          		<i class="material-icons prefix">search</i>
          		<input id="search" type="text" value="${appState.search == 'all' ? '' : appState.search}" class="validate">
          		<label for="search">Search...</label>
        	</div>
		</div>
	`;
}


const Table = () => {
	let tableToRender = null;
	if (routes.params.activeLeague === "Premier League") {
		tableToRender = premierLeagueTable;
	} else if (routes.params.activeLeague === "La Liga") {
		tableToRender = laligaTable;
	} else if (routes.params.activeLeague === "Bundesliga") {
		tableToRender = bundesligaTable;
	} else {
		tableToRender = null;
	}
	return `
		${Header('Table')}
		${LeagueTable(tableToRender)}
		${TabBar(routes.path)}

	`;
}

const Results = (dataSource) => {
	return `
		${Header('Result')}
		${LeagueResults(PreviousResults, routes.params.activeLeague)}
		${TabBar(routes.path)}

	`;
}

const Fixtures = (dataSource, league) => {
	return `
		${Header('Fixtures')}
		${LeagueFixtures(dataSource, routes.params.activeLeague)}
		${TabBar(routes.path)}

	`;
}


const Home = () => {
	return `
		${TabBar(routes.path)}
		${Header('News')}
		${SearchArticles()}
		${appState.search === "all" ? Articles(newsArticles) : Articles(appState.articles)}
		<div style='margin-bottom: 80px'></div>
	`;
}




const App = () => {
	return `
		${Route("/", Home())}
		${Route("/table", Table())}
		${Route('/fixtures', Fixtures(fixures, 'Premier League'))}
		${Route('/results', Results(PreviousResults))}
	`;
}


const main = () => {
	document.getElementById("root").innerHTML = App();
	effects();
}


const effects = () => {
	var elems = document.querySelectorAll('.sidenav');
	var instances = M.Sidenav.init(elems);	
	events();
}


const events = () => {
	document.getElementById("search").addEventListener("keydown", handleSearchByDesc);
}


main();