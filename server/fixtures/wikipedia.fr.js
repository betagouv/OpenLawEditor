var data = [
	{
		"_id": "salbrut",
		"title": "Salaire",
		"section": 6
	},
	{
		"_id": "fnal_tranche_a",
		"title": "Fonds_national_d%27aide_au_logement"
	},
	{
		"_id": "fnal_tranche_a_plus_20",
		"title": "Fonds_national_d%27aide_au_logement"
	},
	{
		"_id": "versement_transport",
		"title": "Versement_transport"
	},
	{
		"_id": "csgsald",
		"title": "Contribution_sociale_généralisée"
	},
	{
		"_id": "mhsup",
		"title": "Heures_supplémentaires"
	},
	{
		"_id": "csgsali",
		"title": "Contribution_sociale_généralisée"
	},
	{
		"_id": "crdssal",
		"title": "Contribution_pour_le_remboursement_de_la_dette_sociale"
	},
	{
		"_id": "salnet",
		"title": "Salaire",
		"section": 5
	}
];


if (Facets && Facets.wikipedia && ! Facets.wikipedia.find().count()) {
	data.forEach(function(entry) {
		Facets.wikipedia.insert(entry);
	});
}
