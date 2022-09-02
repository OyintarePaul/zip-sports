document.addEventListener('DOMContentLoaded', function() {

    var elems = document.querySelectorAll('.sidenav');

    var instances = M.Sidenav.init(elems);

 });

const ArticleFooter = (views, comments) => {

	return (`		<footer class='card-action'>

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

const Header = () => {

	return `

		<header id='header'>

			${NavBar()}

				<div class='heading'>

					<h1>ZipSports</h1>

					<p>Bringing football closer to you</p>

				</div>

		</header>

	`;

}

const Article = (article) => {

	return `

		<article class="col s12 m6 l4 xl3">

			<div class='card'>

				<div class='cover card-image waves-effect waves-block waves-light'>

					<img class='activator' src=${article.coverUrl} width='100%' alt=''/>

				</div>

				<div class='card-content'>

					<span class="card-title activator grey-text text-darken-4">${article.title.slice(0, 50) + '...'}<i class="material-icons right">more_vert</i></span>

				</div>

				<div class="card-action">

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

const NavBar = () => {

	return `

		<nav>

			<div class='nav-wrapper white'>

				<a class='brand-logo'></a>

				<a href="#" data-target="mobile-demo" class="sidenav-trigger hide-on-med-and-up"><i class="material-icons black-text">menu</i></a>

			 	<ul style='margin-left: 25px; color: black' class="hide-on-small-only">

			 		<li class='hide-on-small-only'>ZIPSPORTS</li>

			 		<li><a href="#" style='color: black'>Premier League</a></li>

				 	<li><a href="#" style='color: black'>LaLiga</a></li>

			 		<li><a href="#" style='color: black'>Bundesliga</a></li>

				 	<li><a href="#"style='color: black'>Serea A</a></li>

				 	<li><a href="#" style='color: black' >Ligue 1</a></li>

			 	</ul>

			</div>

		</nav>

		<ul class="sidenav" id="mobile-demo">

			<li class='center-align'><img class='logo' src='images/logo.png' width='50%'/></li>

			<li><a href="#">Premier League</a></li>

			<li><a href="#">LaLiga</a></li>

			<li><a href="#">Bundesliga</a></li>

			<li><a href="#">Serea A</a></li>

			<li><a href="#">Ligue 1</a></li>

		</ul>

	`;

}

const SearchArticles = () => {

	return `

		<div class='container '>

			<div class="input-field">

          		<i class="material-icons prefix">search</i>

          		<input id="search" type="text" class="validate">

          		<label for="search">Search...</label>

        	</div>

		</div>

	`;

}

const App = () => {

	return `

		${Header()}

		${SearchArticles()}

		${Articles(newsArticles)}

	`;

}

const main = () => {

	document.getElementById("root").innerHTML = App();

}

main();
