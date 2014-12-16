var TaxesFr = [
	// "sal": {
	// 	"name": "Salaire imposable"
	// },
	{
		"_id": "salbrut",
		"name": "Salaire brut"
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
		"name": "Accident du travail"
	},
	{
		"_id": "famille",
		"name": "Famille"
	},
	{
		"_id": "maladie_employeur",
		"name": "Maladie"
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
		"name": "FNAL"
	},
	{
		"_id": "fnal_tranche_a_plus_20",
		"name": "FNAL +20"
	},
	// "participation_effort_construction": {
	// 	"name": "Participation à l'effort de construction"
	// },
	// "taxe_apprentissage": {
	// 	"name": "Taxe d'apprentisssage"
	// },
	{
		"_id": "versement_transport",
		"name": "Versement transport"
	},
	{
		"_id": "allegement_fillon",
		"name": "Allègement sur les bas salaires (Fillon)",
		facets: {
			swagger: {
				resourceDeclaration: '/swagger-paie.json',
				operationId: "calculateFillon"
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
		"name": "Vieillesse plafonnée (employé)"
	},
	{
		"_id": "vieillesse_deplafonnee_employe",
		"name": "Vieillesse déplafonnée (employé)"
	},
	// "cotisations_salariales_non_contributives": {
	// 	"name": "Cotisations sociales salariales non contributives"
	// },
	{
		"_id": "maladie_employe",
		"name": "Maladie (employé)"
	},
	{
		"_id": "csgsald",
		"name": "CSG déductible (salaires)"
	},
	{
		"_id": "mhsup",
		"name": "Heures supplémentaires éxonérées"
	},
	{
		"_id": "csgsali",
		"name": "CSG non déductible (salaires)"
	},
	{
		"_id": "crdssal",
		"name": "CRDS (salaires)"
	},
	// "hsup": {
	// 	"name": "Heures supplémentaires"
	// },
	{
		"_id": "salnet",
		"name": "Salaire net",
		facets: {
			swagger: {
				resourceDeclaration: '/swagger-paie.json',
				operationId: "calculateNet"
			}
		}
	}
];


if (! Taxes.find().count()) {
	TaxesFr.forEach(function(tax) {
		Taxes.insert(tax);
	});
}
