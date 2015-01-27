var TaxesFr = [
	// "sal": {
	// 	"name": "Salaire imposable"
	// },
	{
		"_id": "salbrut",
		"name": "Salaire brut",
		facets: {
			swagger: {
				resourceDeclarationUrl: 'http://api-test.openfisca.fr/api/1/swagger',
				method: "get",
				path: "/salbrut"
			}
		}
	},
	// "salsuperbrut": {
	// 	"name": "Salaire super brut"
	// },
	// "ags": {
	// 	"name": "AGS"
	// },
	// "agff_tranche_a_employeur": {
	// 	"name": "AGFF (employeur)"
	// },
	// "apec_employeur": {
	// 	"name": "APEC (employeur)"
	// },
	// "arrco_tranche_a_employeur": {
	// 	"name": "ARRCO (employeur)"
	// },
	// "assedic_employeur": {
	// 	"name": "ASSEDIC (employeur)"
	// },
	// "cotisation_exceptionnelle_temporaire_employeur": {
	// 	"name": "CET (employeur)"
	// },
	// "vieillesse_deplafonnee_employeur": {
	// 	"name": "Vieillesse déplafonnée (employeur)"
	// },
	// "vieillesse_plafonnee_employeur": {
	// 	"name": "Vieillesse plafonnée (employeur)"
	// },
	// "allocations_temporaires_invalidite": {
	// 	"name": "Invalidité"
	// },
	{
		"_id": "accident_du_travail",
		"name": "Accident du travail",
		facets: {
			swagger: {
				resourceDeclarationUrl: 'http://api-test.openfisca.fr/api/1/swagger',
				method: "get",
				path: "/accident_du_travail"
			}
		}
	},
	{
		"_id": "famille",
		"name": "Famille"
	},
	{
		"_id": "maladie_employeur",
		"name": "Maladie",
		facets: {
			swagger: {
				resourceDeclarationUrl: 'http://api-test.openfisca.fr/api/1/swagger',
				method: "get",
				path: "/maladie_employeur"
			}
		}
	},
	// "cotisations_patronales_main_d_oeuvre": {
	// 	"name": "Cotisations sociales patronales main d'œuvre"
	// },
	// "contribution_developpement_apprentissage": {
	// 	"name": "Contribution au développement de l'apprentissage"
	// },
	// "contribution_solidarite_autonomie": {
	// 	"name": "Contribution solidarite autonomie"
	// },
	// "contribution_supplementaire_apprentissage": {
	// 	"name": "Contribution supplémentaire à l'apprentissage"
	// },
	// "formation_professionnelle": {
	// 	"name": "Formation professionnelle"
	// },
	{
		"_id": "fnal_tranche_a",
		"name": "FNAL",
		facets: {
			swagger: {
				resourceDeclarationUrl: 'http://api-test.openfisca.fr/api/1/swagger',
				method: "get",
				path: "/fnal_tranche_a"
			}
		}
	},
	{
		"_id": "fnal_tranche_a_plus_20",
		"name": "FNAL +20",
		facets: {
			swagger: {
				resourceDeclarationUrl: 'http://api-test.openfisca.fr/api/1/swagger',
				method: "get",
				path: "/fnal_tranche_a_plus_20"
			}
		}
	},
	// "participation_effort_construction": {
	// 	"name": "Participation à l'effort de construction"
	// },
	// "taxe_apprentissage": {
	// 	"name": "Taxe d'apprentisssage"
	// },
	{
		"_id": "versement_transport",
		"name": "Versement transport",
		facets: {
			swagger: {
				resourceDeclarationUrl: 'http://api-test.openfisca.fr/api/1/swagger',
				method: "get",
				path: "/versement_transport"
			}
		}
	},
	{
		"_id": "allegement_fillon",
		"name": "Allègement sur les bas salaires (Fillon)",
		facets: {
			swagger: {
				resourceDeclarationUrl: 'http://api-test.openfisca.fr/api/1/swagger',
				method: "get",
				path: "/allegement_fillon"
			}
		}
	},
	// "alleg_cice": {
	// 	"name": "Crédit d'impôt compétitivité-emploi"
	// },
	// "taxes_sal": {
	// 	"name": "Taxe sur les salaires"
	// },
	// "cotisations_salariales": {
	// 	"name": "Cotisations sociales salariées"
	// },
	// "cotisations_salariales_contributives": {
	// 	"name": "Cotisations sociales salariales contributives"
	// },
	// "agff_tranche_a_employe": {
	// 	"name": "AGFF (employé)"
	// },
	// "agirc_tranche_b_employe": {
	// 	"name": "AGIRC (employé)"
	// },
	// "apec_employe": {
	// 	"name": "APEC (employé)"
	// },
	// "arrco_tranche_a_employe": {
	// 	"name": "ARRCO (employé)"
	// },
	// "assedic_employe": {
	// 	"name": "ASSEDIC (employé)"
	// },
	// "cotisation_exceptionnelle_temporaire_employe": {
	// 	"name": "CET (employé)"
	// },
	{
		"_id": "vieillesse_plafonnee_employe",
		"name": "Vieillesse plafonnée (employé)",
		facets: {
			swagger: {
				resourceDeclarationUrl: 'http://api-test.openfisca.fr/api/1/swagger',
				method: "get",
				path: "/vieillesse_plafonnee_employe"
			}
		}
	},
	{
		"_id": "vieillesse_deplafonnee_employe",
		"name": "Vieillesse déplafonnée (employé)",
		facets: {
			swagger: {
				resourceDeclarationUrl: 'http://api-test.openfisca.fr/api/1/swagger',
				method: "get",
				path: "/vieillesse_deplafonnee_employe"
			}
		}
	},
	// "cotisations_salariales_non_contributives": {
	// 	"name": "Cotisations sociales salariales non contributives"
	// },
	{
		"_id": "maladie_employe",
		"name": "Maladie (employé)",
		facets: {
			swagger: {
				resourceDeclarationUrl: 'http://api-test.openfisca.fr/api/1/swagger',
				method: "get",
				path: "/maladie_employe"
			}
		}
	},
	{
		"_id": "csgsald",
		"name": "CSG déductible (salaires)",
		facets: {
			swagger: {
				resourceDeclarationUrl: 'http://api-test.openfisca.fr/api/1/swagger',
				method: "get",
				path: "/csgsald"
			}
		}
	},
	{
		"_id": "mhsup",
		"name": "Heures supplémentaires éxonérées",
		facets: {
			swagger: {
				resourceDeclarationUrl: 'http://api-test.openfisca.fr/api/1/swagger',
				method: "get",
				path: "/mhsup"
			}
		}
	},
	{
		"_id": "csgsali",
		"name": "CSG non déductible (salaires)",
		facets: {
			swagger: {
				resourceDeclarationUrl: 'http://api-test.openfisca.fr/api/1/swagger',
				method: "get",
				path: "/csgsali"
			}
		}
	},
	{
		"_id": "crdssal",
		"name": "CRDS (salaires)",
		facets: {
			swagger: {
				resourceDeclarationUrl: 'http://api-test.openfisca.fr/api/1/swagger',
				method: "get",
				path: "/crdssal"
			}
		}
	},
	// "hsup": {
	// 	"name": "Heures supplémentaires"
	// },
	{
		"_id": "salnet",
		"name": "Salaire net",
		facets: {
			swagger: {
				resourceDeclarationUrl: 'http://api-test.openfisca.fr/api/1/swagger',
				method: "get",
				path: "/salnet"
			}
		}
	}
];


if (! Taxes.find().count()) {
	TaxesFr.forEach(function(tax) {
		Taxes.insert(tax);
	});
}
