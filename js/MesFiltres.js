angular.module("MesFiltres", [])
.filter("surbrillanceRecherche", function() {
	return function(input, recherche) {
		if (recherche) {
			return input.replace(new RegExp("(" + recherche + ")", "gi"), "<span class='surbrillanceRecherche'>$1</span>");
		}
		return input;
	}
});