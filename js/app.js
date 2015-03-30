angular.module("Webmail", [ "ngSanitize", "ui.tinymce", "MailServiceMock", "MesFiltres", "MesDirectives" ])
.controller("WebmailCtrl", function($scope, $location, $filter, mailService) {
	
	
	// tri

	$scope.champTri = null;
	$scope.triDescendant = false;
	$scope.triEmails = function(champ) {
		if ($scope.champTri == champ) {
			$scope.triDescendant = !$scope.triDescendant;
		} else {
			$scope.champTri = champ;
			$scope.triDescendant = false;
		}	
	}

	$scope.cssChevronsTri = function(champ) {
		return {
			glyphicon: $scope.champTri == champ,
			'glyphicon-chevron-up' : $scope.champTri == champ && !$scope.triDescendant,
			'glyphicon-chevron-down' : $scope.champTri == champ && $scope.triDescendant 
		};
	}

	// recherche

	$scope.recherche = null;
	$scope.razRecherche = function() {
		$scope.recherche = null;
        
	}
    
    // options
    $scope.actions=[{code:"markReaded", name:"Marquer comme lu"},{code:"markNotReaded", name:"Marquer comme non lu"},{code:"archive", name:"archiver"}];
    
    $scope.updateMailState=function(){
       var code=$scope.selectedItem.code;
        var dossier=$scope.dossierCourant;
        if("markReaded"==code){
            dossier.emails.forEach(function(email) {
				if (email.checked) {
					email.readed=true;
				}
			});
        }
        if("markNotReaded"==code){
            dossier.emails.forEach(function(email) {
				if (email.checked) {
					email.readed=false;
				}
			});
        }
        if("archive"==code){
            dossier.emails.forEach(function(email) {
				if (email.checked) {
					mailService.archiveMail(dossier, email);
                    email.checked=false;
				}
			});
        }
    }

	// création d'emails

	$scope.afficherNouveauMail = false;
	

	$scope.envoiMail = function(nouveauMail) {

		mailService.envoiMail(nouveauMail);
		$location.path("/");
		
	}

	// navigation

	$scope.vueCourante = null;
	$scope.dossierCourant = null;
	$scope.emailSelectionne = null;

	$scope.versEmail = function(dossier, email) {
		$location.path("/" + dossier.value + "/" + email.id);
       $scope.markAsReaded(email);
	}

    $scope.markAsReaded = function(email){
        email.readed=true;
    }
    
    $scope.markCheckedMailsAsReaded = function(){
        email.readed=true;
    }
    
	$scope.selectionDossier = function(valDossier) {
		$scope.vueCourante = "vueDossier";
		$scope.dossierCourant = mailService.getDossier(valDossier);
	}

	$scope.selectionEmail = function(valDossier, idEmail) {
		$scope.vueCourante = "vueContenuMail";
		$scope.emailSelectionne = mailService.getMail(valDossier, idEmail);
	};


	$scope.$watch(function() {
		return $location.path();
	}, function(newPath) {
		var tabPath = newPath.split("/");
		if (tabPath.length > 1 && tabPath[1]) {
			if (tabPath[1] == "nouveauMail") {
				$scope.vueCourante = "vueNouveauMail";
				$scope.$broadcast("initFormNouveauMail");
			} else {
				var valDossier = tabPath[1];
				if (tabPath.length > 2) {
					var idMail = tabPath[2];
					$scope.selectionEmail(valDossier, idMail);
				} else {
					$scope.selectionDossier(valDossier);
				}
			}
		} else {
			$scope.vueCourante = null;
		}
	});

	$scope.dossiers = mailService.getDossiers();
	
});