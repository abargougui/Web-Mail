angular.module("MesDirectives", [])
.directive("contenuMail", function() {
	return {
		restrict: "E",
		template: '<div class="spacer"> \
                <div class="well"> \
                    <h1>{{email.subject}}</h1> \
                    <p><label>De :</label> <span>{{email.from}}</span></p> \
                    <p><label>&Agrave; :</label> <span>{{email.to}}</span></p> \
                    <p><label>Date :</label> <span>{{email.date | date:\'dd/MM/yyyy HH:mm\'}}</span></p> \
                </div> \
                <p ng-bind-html="email.content"></p> \
            </div>',
        scope: {
        	email: "="
        }
	}
})
.directive("nouveauMail", function() {
	return {
		restrict: "E",
		template: '<div class="spacer">\
                <form id="formNouveauMail" name="formNouveauMail">\
                    <div class="input-group">\
                        <span class="input-group-addon labelChampNouveauMail">&Agrave;</span>\
                        <input type="text" class="form-control" ng-model="nouveauMail.to" />\
                    </div>\
                    <div class="input-group">\
                        <span class="input-group-addon labelChampNouveauMail">Objet</span>\
                        <input type="text" class="form-control" ng-model="nouveauMail.subject" />\
                    </div>\
                    <div class="spacer">\
                        <textarea ui-tinymce="optionsTinyMce" class="contenuNouveauMail" rows="10" ng-model="nouveauMail.content"></textarea>\
                    </div>  \
                    <div class="spacer text-center">\
                        <button ng-click="clicEnvoiMail()" class="btn btn-success">Envoyer l\'E-mail</button>\
                        <span class="hSpacer"></span>\
                        <button ng-click="razMail()" ng-disabled="formNouveauMail.$pristine" class="btn btn-warning">Effacer la saisie</button>\
                    </div>\
                </form>\
            </div>',
        scope: {
        	envoiMail: "&"
        },
        controller: function($scope) {

        	$scope.optionsTinyMce = {
				language: "fr_FR",
				statusbar: false,
				menubar: false
			};

        	$scope.razMail = function() {
        		$scope.nouveauMail = {
					from: "Rudy",
					date: new Date()
				};
				if (tinyMCE.activeEditor) {
					tinyMCE.activeEditor.setContent("");
				}
				$scope.formNouveauMail.$setPristine();
        	}

        	$scope.clicEnvoiMail = function() {
        		var regExpValidEmail = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$", "gi");

				if (!$scope.nouveauMail.to || !$scope.nouveauMail.to.match(regExpValidEmail)) {
					window.alert("Erreur\n\nMerci de vérifier l'adresse e-mail saisie.");
					return;
				}

				if (!$scope.nouveauMail.subject) {
					if (!window.confirm("Confirmation\n\nÊtes-vous certain de vouloir envoyer un mail sans objet ?")) {
						return;
					}
				}

				$scope.envoiMail({ nouveauMail: $scope.nouveauMail });
        	}

            $scope.$on("initFormNouveauMail", function() {
                $scope.razMail();
            })
        }
	};
})