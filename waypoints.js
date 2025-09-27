const waypoints = [
	{
		name: "La Gloriosa",
		x: 8,
		z: -278,
		type: "interes"
	},
	{
		name: "Puente Cocapol de la Enemistad",
		x: 98,
		z: 11,
		type: "puente"
	},
	{
		name: "Puente San Jairo Concha",
		x: 8,
		z: -118,
		type: "puente"
	},
	{
		name: "Torre Pija",
		x: -412,
		z: -262,
		type: "edificio"
	},
	{
		name: "Void Tower",
		x: -25,
		z: -514,
		type: "edificio"
	},
	{
		name: "Burj Khalifa",
		x: 247,
		z: -407,
		type: "edificio"
	},
	{
		name: "Evolution Tower",
		x: 178,
		z: -448,
		type: "edificio"
	},
	{
		name: "Ueno Judío Bank",
		x: 77,
		z: -389,
		type: "banco"
	},
	{
		name: "Estadio Bancopol Mcal. Alfonso",
		x: -264,
		z: -41,
		type: "estadio"
	},
	{
		name: "Stanislav Arena",
		x: 554,
		z: -376,
		type: "estadio"
	},
	{
		name: "Estadio SC Motín",
		x: 135,
		z: 320,
		type: "estadio"
	},
	{
		name: "Plaza Memorial Mariano",
		x: 248,
		z: 38,
		type: "parque"
	},
	{
		name: "La Palangana Sur",
		x: -213,
		z: -254,
		type: "estadio"
	},
	{
		name: "Estadio Atlético Tuerca",
		x: -127,
		z: -474,
		type: "estadio"
	},
	{
		name: "Municipalidad de Klingokistán",
		x: -87,
		z: -418,
		type: "gobierno"
	},
	{
		name: "Central Nuclear Cocacinia",
		x: 167,
		z: 140,
		type: "nuclear"
	},
	{
		name: "World Trade Center",
		x: -150,
		z: -35,
		type: "edificio"
	},
	{
		name: "Zoológico de Silipol",
		x: -298,
		z: 148,
		type: "zoo"
	},
	{
		name: "Bancopol S. A.",
		x: -297,
		z: 30,
		type: "banco"
	},
	{
		name: "Grupiwood Studios",
		x: -229,
		z: 45,
		type: "edificio"
	},
	{
		name: "IKEA Silipol",
		x: -92,
		z: -23,
		type: "mercado"
	},
	{
		name: "Grupinho Ristorante 1",
		x: -98,
		z: 34,
		type: "restaurante"
	},
	{
		name: "Grupinho Ristorante 2",
		x: -426,
		z: 41,
		type: "restaurante"
	},
	{
		name: "Don Eladio (Mcal. Alfonso)",
		x: -25,
		z: 53,
		type: "super"
	},
	{
		name: "Hospital del Defenestrado",
		x: -218,
		z: 105,
		type: "hospital"
	},
	{
		name: "Embajada Alemana",
		x: -18,
		z: -4,
		type: "embajada"
	},
	{
		name: "Museo Le Quésalois",
		x: -161,
		z: 46,
		type: "museo"
	},
	{
		name: "Municipalidad de Silipol",
		x: -387,
		z: 64,
		type: "gobierno"
	},
	{
		name: "Embajada de Niktemburgo (Silipol)",
		x: -352,
		z: 61,
		type: "embajada"
	},
	{
		name: "Embajada de Russkovia (Silipol)",
		x: -365,
		z: 114,
		type: "embajada"
	},
	{
		name: "Embajada de Silipol (Cocacinia)",
		x: 263,
		z: -84,
		type: "embajada"
	},
	{
		name: "Embajada de Silipol (Niktemburgo)",
		x: -303,
		z: -487,
		type: "embajada"
	},
	{
		name: "Embajada de Silipol (Klingokistán)",
		x: -28,
		z: -397,
		type: "embajada"
	},
	{
		name: "Embajada de Silipol (Russkovia)",
		x: 142,
		z: -526,
		type: "embajada"
	},
	{
		name: "Russkovia Plaza Hotel",
		x: 91,
		z: -526,
		type: "hotel"
	},
	{
		name: "Hotel Shipiton",
		x: 454,
		z: -181,
		type: "hotel"
	},
	{
		name: "Embajada de Russkovia (Cocacinia)",
		x: 326,
		z: 112,
		type: "embajada"
	},
	{
		name: "Aeropuerto Internacional de Grupinho City",
		x: -109,
		z: 306,
		type: "aeropuerto"
	},
	{
		name: "Restaurante Peruano-Nazi",
		x: -31,
		z: -359,
		type: "restaurante"
	},
	{
		name: "Mercado 13",
		x: 30,
		z: -298,
		type: "mercado"
	},
	{
		name: "McDonald's (Central)",
		x: 71,
		z: -298,
		type: "burger"
	},
	{
		name: "Casa Grupal",
		x: 64,
		z: -252,
		type: "casa"
	},
	{
		name: "La Taberna de los Tíos",
		x: -43,
		z: -290,
		type: "bar"
	},
	{
		name: "Ayuntamiento de Grupinho City",
		x: 51,
		z: -331,
		type: "gobierno"
	},
	{
		name: "Estadio CF Bella Vista",
		x: 59,
		z: -206,
		type: "estadio"
	},
	{
		name: "Adidas Russkovia",
		x: 166,
		z: -216,
		type: "edificio"
	},
	{
		name: "Federación Grupinhoense de Fútbol",
		x: 115,
		z: -421,
		type: "edificio"
	},
	{
		name: "Kamchatka Corporation",
		x: 200,
		z: -526,
		type: "edificio"
	},
	{
		name: "Estación de Metro (Cocacinia)",
		x: 248,
		z: -10,
		type: "metro"
	},
	{
		name: "Estación de Metro (Silipol)",
		x: -344,
		z: 40,
		type: "metro"
	},
	{
		name: "Estación de Metro (Central)",
		x: -60,
		z: -288,
		type: "metro"
	},
	{
		name: "Estación de Metro (Niktemburgo)",
		x: -303,
		z: -505,
		type: "metro"
	},
	{
		name: "Estación de Metro (Klingokistán)",
		x: -13,
		z: -400,
		type: "metro"
	},
	{
		name: "Estación de Metro (Russkovia)",
		x: 245,
		z: -290,
		type: "metro"
	},
	{
		name: "The Grupinho Times",
		x: 30,
		z: -252,
		type: "edificio"
	},
	{
		name: "Embajada de Paraguay",
		x: -10,
		z: -286,
		type: "embajada"
	},
	{
		name: "Torre de Vigilancia ASF",
		x: -58,
		z: -252,
		type: "edificio"
	},
	{
		name: "Zona de Pruebas (Niktemburgo)",
		x: -540,
		z: -736,
		type: "militar"
	},
	{
		name: "Comisaría Central",
		x: -22,
		z: -252,
		type: "policia"
	},
	{
		name: "Coliseo",
		x: 33,
		z: -218,
		type: "arena"
	},
	{
		name: "Parque Central de Bomberos",
		x: -7,
		z: -315,
		type: "bomberos"
	},
	{
		name: "Escuela",
		x: -43,
		z: -316,
		type: "escuela"
	},
	{
		name: "Tambo (Niktemburgo)",
		x: -303,
		z: -443,
		type: "super"
	},
	{
		name: "Biblioteca de Niktemburgo",
		x: -303,
		z: -461,
		type: "biblioteca"
	},
	{
		name: "Bancos Figueroa",
		x: -303,
		z: -396,
		type: "banco"
	},
	{
		name: "Cementerio",
		x: -120,
		z: -607,
		type: "cementerio"
	},
	{
		name: "Motel Haku Takuchilo",
		x: -78,
		z: -603,
		type: "motel"
	},
	{
		name: "Embajada Peruana",
		x: -64,
		z: -603,
		type: "embajada"
	},
	{
		name: "Base Militar General Enemergido",
		x: -44,
		z: -559,
		type: "militar"
	},
	{
		name: "Central de Radiodifusoras de Klingokistán",
		x: -76,
		z: -559,
		type: "radio"
	},
	{
		name: "Hospital-Zapatería",
		x: -64,
		z: -510,
		type: "hospital"
	},
	{
		name: "Ministerio de Defensa Nuclear",
		x: 263,
		z: -526,
		type: "gobierno"
	},
	{
		name: "Tu Financiera",
		x: -126,
		z: -569,
		type: "banco"
	},
	{
		name: "Grupinho Buró de Investigaciones",
		x: -436,
		z: -92,
		type: "gobierno"
	},
	{
		name: "Plaza Federal",
		x: -433,
		z: -139,
		type: "plaza"
	},
	{
		name: "Embajada de Klingokistán (Silipol)",
		x: -148,
		z: -6,
		type: "embajada"
	},
	{
		name: "Parque Distrital San Miguel",
		x: -162,
		z: 113,
		type: "parque"
	},
	{
		name: "Mall Derrumbe Inminente ▼",
		x: -249,
		z: -498,
		type: "shopping"
	},
	{
		name: "Embajada de Chile",
		x: -129,
		z: -257,
		type: "embajada"
	},
	{
		name: "El Ecumephario",
		x: -142,
		z: -286,
		type: "hospital"
	},
	{
		name: "Universidad de Silipol",
		x: -400,
		z: 180,
		type: "universidad"
	},
	{
		name: "Embajada Argentina",
		x: 150,
		z: -108,
		type: "embajada"
	},
	{
		name: "Plaza La Baraja",
		x: -219,
		z: -677,
		type: "poblado"
	},
	{
		name: "Kalahari",
		x: -31,
		z: -734,
		type: "poblado"
	},
	{
		name: "Embajada de Bolivia",
		x: -170,
		z: -243,
		type: "embajada"
	},
	{
		name: "Hotel Menonita",
		x: -181,
		z: -37,
		type: "hotel"
	},
	{
		name: "Yerba Mate Jaguarembo",
		x: -110,
		z: 114,
		type: "edificio"
	},
	{
		name: "Restaurante Polaco",
		x: -81,
		z: 131,
		type: "restaurante"
	},
	{
		name: "Motel Geschlechtsverkehr",
		x: -81,
		z: 100,
		type: "motel"
	},
	{
		name: "Iglesia Vaginordista",
		x: -24,
		z: -198,
		type: "iglesia"
	},
	{
		name: "Hotel La Mitocondria",
		x: -69,
		z: -140,
		type: "hotel"
	},
	{
		name: "KlingoVisión",
		x: 0,
		z: -569,
		type: "radio"
	},
	{
		name: "Biblioteca El Jasy Jateré",
		x: -84,
		z: -395,
		type: "biblioteca"
	},
	{
		name: "Carnicería El Pibe Feliz",
		x: -52,
		z: -421,
		type: "mercado"
	},
	{
		name: "Iglesia de los Últimos Finales de la Humanidad Condenada",
		x: -101,
		z: -482,
		type: "iglesia"
	},
	{
		name: "Toyotoshi",
		x: -19,
		z: -466,
		type: "autos"
	},
	{
		name: "Plaza Miguel Hurtado",
		x: -36,
		z: -599,
		type: "plaza"
	},
	{
		name: "Corporación SiliTech",
		x: -9,
		z: -31,
		type: "edificio"
	},
	{
		name: "Cervecería Don Bosco",
		x: -134,
		z: -536,
		type: "bar"
	},
	{
		name: "Plaza de Ejecuciones",
		x: -72,
		z: -398,
		type: "plaza"
	},
	{
		name: "Oficina de Correos",
		x: -381,
		z: -75,
		type: "correo"
	},
	{
		name: "Escuela Mártires de Tuerkovich",
		x: -35,
		z: -755,
		type: "escuela"
	},
	{
		name: "Cancha Atlético 30 de Febrero",
		x: -16,
		z: -703,
		type: "estadio"
	},
	{
		name: "Skyline Nik-Kli",
		x: -113,
		z: -403,
		type: "default"
	},
	{
		name: "Cancha UENO (Niktemburgo)",
		x: -237,
		z: -388,
		type: "estadio"
	},
	{
		name: "Ministerio del Interior, Exterior y Tribus ▼",
		x: -276,
		z: -413,
		type: "gobierno"
	},
	{
		name: "Embajada de Rusia",
		x: 365,
		z: -345,
		type: "embajada"
	},
	{
		name: "Mall Kururú de Nieve",
		x: -16,
		z: -666,
		type: "shopping"
	},
	{
		name: "Hotel Terraria",
		x: -73,
		z: -532,
		type: "hotel"
	},
	{
		name: "Carita Sonriente",
		x: -12,
		z: -435,
		type: "interes"
	},
	{
		name: "Boliche El Papu Sonriente",
		x: -365,
		z: -104,
		type: "bar"
	},
	{
		name: "UENO Amogus Complex",
		x: -365,
		z: -21,
		type: "edificio"
	},
	{
		name: "Mercedes-Benz",
		x: -350,
		z: -87,
		type: "autos"
	},
	{
		name: "Pico ???",
		x: -171,
		z: -543,
		type: "naturaleza"
	},
	{
		name: "Lux Tower",
		x: -381,
		z: -106,
		type: "edificio"
	},
	{
		name: "Ministerio de Hacienda",
		x: -446,
		z: -13,
		type: "gobierno"
	},
	{
		name: "Rotonda Balística",
		x: -468,
		z: 10,
		type: "interes"
	},
	{
		name: "Puerto de Grupinho City",
		x: -534,
		z: -135,
		type: "puerto"
	},
	{
		name: "Playa Piedras del Riñón",
		x: 30,
		z: -171,
		type: "playa"
	},
	{
		name: "Hipódromo Regiano",
		x: -543,
		z: -56,
		type: "hipodromo"
	}
];