var vDataCharaktere =
[
	{
		name: "",
		vorname: "Apfel",
		kurzbeschreibung: "Der Apfel kann sehr gut Rollen. Außerdem hat er viel Vitamin C.",
		bild: "apfel.jpg",
		dokument: [
			{docid: "https://docs.google.com/document/d/e/2PACX-1vQdzt7W13VUwv2SPCTfBUf6xnlvA_IIDOC9SWvwJn1ZQIXenW34EH4HGpaKHWh5KjNZaP9gf5wKJndv/pub", height: 600},
			{html: 'test.html'}
		],
		timing: [
			{ start: 4, end: 40 },
			{ start: 43, end: 109 }
		],
		visible: false
	},
	{
		name: "",
		vorname: "Birne",
		kurzbeschreibung: "Die Birne ist sehr groß. Außerdem ist sie total süß.",
		bild: "birne.jpg",
		dokument: [{docid: "https://docs.google.com/document/d/e/2PACX-1vSnnfFbv8ZVqMWuSa74MFl1qNnAND0syu5I4U_B2yweuUTbV2ZnWYpPZ5YwQc52JOm75H66iRyPzO7t/pub", height: 600}],
		timing: [
			{ start: 4, end: 109 }
		],
		visible: false
	}
];

var vDataZusatzinfos =
[
	{
		name: "Die Aussagen stimmen",
		kurzbeschreibung: "Birnen sind süßer als Äpfel, dafür haben Äpfel mehr Vitamin C.",
		dokument: undefined, // Beispiel ohne Dokument
		bild: "aussagen-stimmen.jpg",
		timing: [
			{ start: 73, end: 80 }
		],
		visible: false
	},
	{
		name: "Das wars",
		kurzbeschreibung: "Wie schnell doch die Zeit vergeht.",
		dokument: undefined, // Beispiel ohne Dokument
		bild: "ende.jpg",
		timing: [
			{ start: 109, end: 150 }
		],
		visible: false
	}
];

var vDataProjektbeschreibung = 
[{docid: "https://docs.google.com/document/d/e/2PACX-1vREnt1FQo9Vtu7ZiPH3G05mb4zUSaq9_Bx4oyy-oS0XL_6zNLBoi_xM476i_YWoOS2CVLrGpPz9FFf4/pub", height: 200}]