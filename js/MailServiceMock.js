angular.module("MailServiceMock", [])
.factory("mailService", function() {
	
	var dossiers = [
		{ value: "RECEPTION", label: 'Boite de réception', emails: [
			{ id: 1, from: "Albator", to: "Rudy", subject: "Je reviens", date: new Date(2014, 2, 20, 15, 30), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
			{ id: 2, from: "Capitaine Flam", to: "Rudy", subject: "Bisous de l'espace", date: new Date(2014, 3, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." },
			{ id: 3, from: "Pikachu", to: "Rudy", subject: "Pika pika !", date: new Date(2014, 2, 15, 16, 12), content: "Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Pika pika ? Piiiiika Chuuuuuu. Pika pika ! Pikachu. Pika pika pika." },
			{ id: 4, from: "Barbapapa", to: "Rudy", subject: "Hulahup Barbatruc", date: new Date(2014, 2, 15, 14, 15), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
		]  }, 
		{ value: "ARCHIVES", label: "Archives", emails: [
			{ id: 5, from: "Candy", to: "Rudy", subject: "Bon anniversaire", date: new Date(2014, 2, 15, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
			{ id: 6, from: "Hiro Nakamura", to: "Rudy", subject: "Konichiwa", date: new Date(2014, 2, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." },
			{ id: 7, from: "Asuka Langley Soryu", to: "Rudy", subject: "Ca va chier", date: new Date(2014, 2, 15, 17, 50), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." }
		]  },
		{ value: "ENVOYES", label: "Envoyés", emails: [
			{ id: 8, from: "Rudy", to: "Albator", subject: "Bien la famille ?", date: new Date(2014, 2, 15, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
			{ id: 9, from: "Rudy", to: "Capitaine Flam", subject: "Gloubiboulga Night", date: new Date(2014, 2, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
		] },
		{ value: "SPAM", label: "Courrier indésirable", emails: [
			{ id: 10, from: "Rue du discount", to: "Rudy", subject: "Envie d'un nouveau frigo ?", date: new Date(2014, 2, 15, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
			{ id: 11, from: "Sofinnoga", to: "Rudy", subject: "Besoin d'argent ?", date: new Date(2014, 2, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
		] }
	];

	return {
		getDossiers: function() {
			return dossiers;
		},
		getDossier: function(valDossier) {
			for (var i = 0; i < dossiers.length; i++) {
				var dossier = dossiers[i];
				if (dossier.value == valDossier) {
					return dossier;
				}
			}
			return null;
		},
		getMail: function(valDossier, idMail) {
			var dossier = this.getDossier(valDossier);
			if (dossier) {
				for (var i = 0; i < dossier.emails.length; i++) {
					var email = dossier.emails[i];
					if (email.id == idMail) {
						return email;
					}
				}
			}
			return null;
		},
		envoiMail: function(mail) {
			var eltsEnvoyes = this.getDossier("ENVOYES");
			var idDernierMail = 0;
			eltsEnvoyes.emails.forEach(function(email) {
				if (email.id > idDernierMail) {
					idDernierMail = email.id;
				}
			});
			mail.id = idDernierMail + 1;
			eltsEnvoyes.emails.push(mail);
		}
	}
})