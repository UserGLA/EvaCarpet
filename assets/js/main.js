// const { name } = require("browser-sync");

let cars = {
  "Acura": [
    "CL",
    "CSX",
    "EL",
    "ILX",
    "Integra",
    "Legend",
    "MDX",
    "NSX",
    "RDX",
    "RL",
    "RLX",
    "RSX",
    "SLX",
    "TL",
    "TLX",
    "TSX",
    "ZDX"
  ],
  "Audi": [
    "100",
    "200",
    "50",
    "80",
    "90",
    "920",
    "A1",
    "A2",
    "A3",
    "A4",
    "A4 allroad",
    "A5",
    "A6",
    "A6 allroad",
    "A7",
    "A8",
    "Cabriolet",
    "Coupe",
    "e-tron",
    "e-tron GT",
    "e-tron S",
    "e-tron S Sportback",
    "e-tron Sportback",
    "NSU RO 80",
    "Q2",
    "Q3",
    "Q3 Sportback",
    "Q4 e-tron",
    "Q4 Sportback e-tron",
    "Q5",
    "Q5 Sportback",
    "Q7",
    "Q8",
    "Quattro",
    "R8",
    "R8 LMP",
    "RS 2",
    "RS 3",
    "RS 4",
    "RS 5",
    "RS 6",
    "RS 7",
    "RS e-tron GT",
    "RS Q3",
    "RS Q3 Sportback",
    "RS Q8",
    "S1",
    "S2",
    "S3",
    "S4",
    "S5",
    "S6",
    "S7",
    "S8",
    "SQ2",
    "SQ5",
    "SQ5 Sportback",
    "SQ7",
    "SQ8",
    "TT",
    "TT RS",
    "TTS",
    "Typ R",
    "V8"
  ],
  // "Bentley": [
  //   "Arnage",
  //   "Azure",
  //   "Bentayga",
  //   "Brooklands",
  //   "Continental",
  //   "Continental Flying Spur",
  //   "Continental GT",
  //   "Eight",
  //   "Flying Spur",
  //   "Mark VI",
  //   "Mulsanne",
  //   "R Type",
  //   "S",
  //   "T-Series",
  //   "Turbo R"
  // ],
  "BMW": [
    "02 (E10)",
    "1 серии",
    "1M",
    "2 серии",
    "2 серии Active Tourer",
    "2 серии Gran Tourer",
    "2000 C/CS",
    "3 серии",
    "3/15",
    "315",
    "3200",
    "321",
    "326",
    "327",
    "340",
    "4 серии",
    "5 серии",
    "501",
    "502",
    "503",
    "507",
    "6 серии",
    "600",
    "7 серии",
    "700",
    "8 серии",
    "E3",
    "E9",
    "i3",
    "i4",
    "i8",
    "iX",
    "iX3",
    "M2",
    "M3",
    "M4",
    "M5",
    "M6",
    "M8",
    "New Class",
    "X1",
    "X2",
    "X3",
    "X3 M",
    "X4",
    "X4 M",
    "X5",
    "X5 M",
    "X6",
    "X6 M",
    "X7",
    "Z1",
    "Z3",
    "Z3 M",
    "Z4",
    "Z4 M",
    "Z8"
  ],
  // "Cadillac": [
  //   "Allante",
  //   "ATS",
  //   "ATS-V",
  //   "BLS",
  //   "Brougham",
  //   "Catera",
  //   "CT4",
  //   "CT4-V",
  //   "CT5",
  //   "CT5-V",
  //   "CT6",
  //   "CTS",
  //   "CTS-V",
  //   "DeVille",
  //   "DTS",
  //   "Eldorado",
  //   "ELR",
  //   "Escalade",
  //   "Fleetwood",
  //   "LSE",
  //   "Series 62",
  //   "Seville",
  //   "Sixty Special",
  //   "SRX",
  //   "STS",
  //   "XLR",
  //   "XT4",
  //   "XT5",
  //   "XT6",
  //   "XTS"
  // ],
  "Chery": [
    "Amulet (A15)",
    "Arrizo 3",
    "Arrizo 7",
    "B13",
    "Bonus (A13)",
    "Bonus 3 (E3/A19)",
    "CrossEastar (B14)",
    "E5",
    "Fora (A21)",
    "IndiS (S18D)",
    "Karry",
    "Kimo (A1)",
    "M11 (A3)",
    "Oriental Son (B11)",
    "QQ6 (S21)",
    "QQme",
    "Sweet (QQ)",
    "Tiggo (T11)",
    "Tiggo 2",
    "Tiggo 3",
    "Tiggo 4",
    "Tiggo 5",
    "Tiggo 7",
    "Tiggo 7 Pro",
    "Tiggo 8",
    "Tiggo 8 Pro",
    "Very (A13)",
    "Windcloud (A11)"
  ],
  "Chevrolet": [
    "3000-Series",
    "Alero",
    "Apache",
    "Astra",
    "Astro",
    "Avalanche",
    "Aveo",
    "Bel Air",
    "Beretta",
    "Blazer",
    "Blazer K5",
    "Bolt",
    "C-10",
    "C/K",
    "Camaro",
    "Caprice",
    "Captiva",
    "Captiva Sport",
    "Cavalier",
    "Celebrity",
    "Celta",
    "Chevelle",
    "Chevette",
    "Citation",
    "Cobalt",
    "Colorado",
    "Corsa",
    "Corsica",
    "Corvair",
    "Corvette",
    "Cruze",
    "Cruze (HR)",
    "CSV CR8",
    "Deluxe",
    "El Camino",
    "Epica",
    "Equinox",
    "Evanda",
    "Express",
    "Fleetmaster",
    "HHR",
    "Impala",
    "Kalos",
    "Lacetti",
    "Lanos",
    "Lumina",
    "Lumina APV",
    "LUV D-MAX",
    "Malibu",
    "Master",
    "Matiz",
    "Metro",
    "Monte Carlo",
    "Monza",
    "MW",
    "Nexia",
    "Niva",
    "Nova",
    "Nubira",
    "Omega",
    "Orlando",
    "Prizm",
    "Rezzo",
    "S-10 Pickup",
    "Sail",
    "Silverado",
    "Sonic",
    "Spark",
    "Special DeLuxe",
    "Spin",
    "SS",
    "SSR",
    "Starcraft",
    "Suburban",
    "Tacuma",
    "Tahoe",
    "Tavera",
    "Tracker",
    "TrailBlazer",
    "Trans Sport",
    "Traverse",
    "Trax",
    "Uplander",
    "Van",
    "Vectra",
    "Venture",
    "Viva",
    "Volt",
    "Zafira"
  ],
  // "Chrysler": [
  //   "180",
  //   "200",
  //   "300",
  //   "300 Letter Series",
  //   "300C",
  //   "300M",
  //   "Aspen",
  //   "Cirrus",
  //   "Concorde",
  //   "Cordoba",
  //   "Crossfire",
  //   "Daytona",
  //   "Dynasty",
  //   "ES",
  //   "Fifth Avenue",
  //   "Imperial",
  //   "Imperial Crown",
  //   "Intrepid",
  //   "LeBaron",
  //   "LHS",
  //   "Nassau",
  //   "Neon",
  //   "New Yorker",
  //   "Newport",
  //   "Pacifica",
  //   "Prowler",
  //   "PT Cruiser",
  //   "Saratoga",
  //   "Sebring",
  //   "Six",
  //   "Stratus",
  //   "TC by Maserati",
  //   "Town & Country",
  //   "Viper",
  //   "Vision",
  //   "Voyager",
  //   "Windsor"
  // ],
  "Citroen": [
    "2 CV",
    "AMI",
    "AX",
    "Berlingo",
    "BX",
    "C-Crosser",
    "C-Elysee",
    "C-Quatre",
    "C-Triomphe",
    "C-ZERO",
    "C1",
    "C2",
    "C3",
    "C3 Aircross",
    "C3 Picasso",
    "C4",
    "C4 Aircross",
    "C4 Cactus",
    "C4 Picasso",
    "C4 SpaceTourer",
    "C5",
    "C5 Aircross",
    "C6",
    "C8",
    "CX",
    "DS",
    "DS3",
    "DS4",
    "DS5",
    "Dyane",
    "E-Mehari",
    "Evasion",
    "GS",
    "Jumpy",
    "LN",
    "Nemo",
    "Saxo",
    "SM",
    "SpaceTourer",
    "Traction Avant",
    "Visa",
    "Xantia",
    "XM",
    "Xsara",
    "Xsara Picasso",
    "ZX"
  ],
  "Daewoo": [
    "Alpheon",
    "Arcadia",
    "Chairman",
    "Damas",
    "Espero",
    "Evanda",
    "G2X",
    "Gentra",
    "Kalos",
    "Korando",
    "Lacetti",
    "Lacetti Premiere",
    "Lanos",
    "Leganza",
    "LeMans",
    "Magnus",
    "Matiz",
    "Matiz Creative",
    "Musso",
    "Nexia",
    "Nubira",
    "Prince",
    "Racer",
    "Rezzo",
    "Royale",
    "Sens",
    "Tacuma",
    "Tico",
    "Tosca",
    "Winstorm"
  ],
  "Daihatsu": [
    "Altis",
    "Applause",
    "Atrai",
    "Be-go",
    "Bee",
    "Boon",
    "Boon Luminas",
    "Cast",
    "Ceria",
    "Charade",
    "Charmant",
    "Coo",
    "Copen",
    "Cuore",
    "Delta Wagon",
    "Esse",
    "Extol",
    "Fellow",
    "Feroza",
    "Gran Move",
    "Hijet",
    "Hijet Caddie",
    "Leeza",
    "Materia",
    "MAX",
    "Mebius",
    "Midget",
    "Mira",
    "Mira e:S",
    "Mira Gino",
    "Move",
    "Move Canbus",
    "Move Conte",
    "Move Latte",
    "Naked",
    "Opti",
    "Pyzar",
    "Rocky",
    "Rugger",
    "Sirion",
    "Sonica",
    "Storia",
    "Taft",
    "Tanto",
    "Tanto Exe",
    "Terios",
    "Thor",
    "Trevis",
    "Wake",
    "Wildcat",
    "Xenia",
    "YRV"
  ],
  "Datsun": [
    "240Z",
    "280Z",
    "280ZX",
    "720",
    "Bluebird",
    "Cherry",
    "GO",
    "GO+",
    "Laurel",
    "mi-DO",
    "on-DO",
    "Stanza",
    "Sunny",
    "Urvan",
    "Violet"
  ],
  // "Dodge": [
  //   "600",
  //   "Aries",
  //   "Avenger",
  //   "Caliber",
  //   "Caravan",
  //   "Challenger",
  //   "Charger",
  //   "Charger Daytona",
  //   "Colt",
  //   "Custom Royal",
  //   "D/W Series",
  //   "D8",
  //   "Dakota",
  //   "Dart",
  //   "Daytona",
  //   "Diplomat",
  //   "Durango",
  //   "Dynasty",
  //   "Intrepid",
  //   "Journey",
  //   "Lancer",
  //   "Magnum",
  //   "Mayfair",
  //   "Monaco",
  //   "Neon",
  //   "Nitro",
  //   "Omni",
  //   "Polara",
  //   "Raider",
  //   "RAM",
  //   "RAM Van",
  //   "Ramcharger",
  //   "Shadow",
  //   "Spirit",
  //   "Stealth",
  //   "Stratus",
  //   "Viper",
  //   "WC series"
  // ],
  // "Ferrari": [
  //   "250 GTO",
  //   "296 GTB",
  //   "328",
  //   "348",
  //   "360",
  //   "400",
  //   "412",
  //   "456",
  //   "458",
  //   "488",
  //   "512 BB",
  //   "512 M",
  //   "512 TR",
  //   "550",
  //   "575M",
  //   "599",
  //   "612",
  //   "812",
  //   "California",
  //   "Dino 206 GT",
  //   "Dino 208/308 GT4",
  //   "Dino 246 GT",
  //   "Enzo",
  //   "F12berlinetta",
  //   "F355",
  //   "F40",
  //   "F430",
  //   "F50",
  //   "F8",
  //   "FF",
  //   "FXX K",
  //   "GTC4Lusso",
  //   "LaFerrari",
  //   "Mondial",
  //   "Monza SP",
  //   "Portofino",
  //   "Roma",
  //   "SF90 Stradale",
  //   "Testarossa"
  // ],
  // "Fiat": [
  //   "124",
  //   "124 Spider",
  //   "124 Sport Spider",
  //   "125",
  //   "126",
  //   "127",
  //   "128",
  //   "130",
  //   "131",
  //   "132",
  //   "2300",
  //   "238",
  //   "500",
  //   "500L",
  //   "500X",
  //   "508",
  //   "600",
  //   "900T",
  //   "Albea",
  //   "Argenta",
  //   "Barchetta",
  //   "Brava",
  //   "Bravo",
  //   "Cinquecento",
  //   "Coupe",
  //   "Croma",
  //   "Doblo",
  //   "Duna",
  //   "Fiorino",
  //   "Freemont",
  //   "Fullback",
  //   "Idea",
  //   "Linea",
  //   "Marea",
  //   "Multipla",
  //   "Palio",
  //   "Panda",
  //   "Punto",
  //   "Qubo",
  //   "Regata",
  //   "Ritmo",
  //   "Scudo",
  //   "Sedici",
  //   "Seicento",
  //   "Siena",
  //   "Stilo",
  //   "Strada",
  //   "Tempra",
  //   "Tipo",
  //   "Ulysse",
  //   "Uno",
  //   "X 1/9"
  // ],
  "Ford": [
    "Aerostar",
    "Aspire",
    "B-MAX",
    "Bronco",
    "Bronco Sport",
    "Bronco-II",
    "C-MAX",
    "Capri",
    "Consul",
    "Contour",
    "Cortina",
    "Cougar",
    "Country Squire",
    "Crown Victoria",
    "Custom",
    "Econoline",
    "EcoSport",
    "Edge",
    "Escape",
    "Escort",
    "Escort (North America)",
    "Everest",
    "Excursion",
    "Expedition",
    "Explorer",
    "Explorer Sport Trac",
    "F-150",
    "F-2",
    "Fairlane",
    "Fairmont",
    "Falcon",
    "Festiva",
    "Fiesta",
    "Fiesta ST",
    "Five Hundred",
    "Flex",
    "Focus",
    "Focus (North America)",
    "Focus RS",
    "Focus ST",
    "Freda",
    "Freestar",
    "Freestyle",
    "Fusion",
    "Fusion (North America)",
    "Galaxie",
    "Galaxy",
    "GPA",
    "Granada",
    "Granada (North America)",
    "GT",
    "GT40",
    "Ikon",
    "Ixion",
    "KA",
    "Kuga",
    "Laser",
    "LTD Country Squire",
    "LTD Crown Victoria",
    "M151",
    "Mainline",
    "Maverick",
    "Model A",
    "Model T",
    "Mondeo",
    "Mondeo ST",
    "Mustang",
    "Mustang Mach-E",
    "Orion",
    "Probe",
    "Puma",
    "Ranchero",
    "Ranger",
    "Ranger (North America)",
    "S-MAX",
    "Scorpio",
    "Sierra",
    "Spectron",
    "Taunus",
    "Taurus",
    "Taurus X",
    "Telstar",
    "Tempo",
    "Territory",
    "Thunderbird",
    "Torino",
    "Tourneo Connect",
    "Tourneo Courier",
    "Tourneo Custom",
    "Transit Connect",
    "V8",
    "Windstar",
    "Zephyr"
  ],
  "Geely": [
    "Atlas",
    "Atlas Pro",
    "Beauty Leopard",
    "CK (Otaka)",
    "Coolray",
    "Emgrand 7",
    "Emgrand EC7",
    "Emgrand EC8",
    "Emgrand GT",
    "Emgrand X7",
    "FC (Vision)",
    "GC6",
    "GC9",
    "GS",
    "Haoqing",
    "LC (Panda)",
    "LC (Panda) Cross",
    "MK",
    "MK Cross",
    "MR",
    "SC7",
    "Tugella",
    "TX4"
  ],
  // "GMC": [
  //   "100",
  //   "Acadia",
  //   "Canyon",
  //   "Envoy",
  //   "Jimmy",
  //   "Safari",
  //   "Savana",
  //   "Sierra",
  //   "Sonoma",
  //   "Suburban",
  //   "Syclone",
  //   "Terrain",
  //   "Typhoon",
  //   "Vandura",
  //   "Yukon"
  // ],
  "Great Wall": [
    "Coolbear",
    "Cowry (V80)",
    "Deer",
    "Florid",
    "Hover",
    "Hover H3",
    "Hover H5",
    "Hover H6",
    "Hover M1 (Peri 4x4)",
    "Hover M2",
    "Hover M4",
    "Hover Pi",
    "Pegasus",
    "Peri",
    "Poer",
    "Safe",
    "Sailor",
    "Sing RUV",
    "Socool",
    "Voleex C10 (Phenom)",
    "Voleex C30",
    "Wingle",
    "Wingle 7"
  ],
  // "Haima": [
  //   "2",
  //   "3",
  //   "7",
  //   "Family",
  //   "Family F7",
  //   "Freema",
  //   "M3",
  //   "S5"
  // ],
  "Haval": [
    "F7",
    "F7x",
    "H2",
    "H5",
    "H6",
    "H6 Coupe",
    "H8",
    "H9",
    "Jolion"
  ],
  "Honda": [
    "145",
    "Accord",
    "Acty",
    "Airwave",
    "Ascot",
    "Ascot Innova",
    "Avancier",
    "Ballade",
    "Beat",
    "Brio",
    "Capa",
    "City",
    "Civic",
    "Civic Ferio",
    "Civic Type R",
    "Clarity",
    "Concerto",
    "CR-V",
    "CR-X",
    "CR-Z",
    "Crossroad",
    "Crosstour",
    "Domani",
    "e",
    "Edix",
    "Element",
    "Elysion",
    "Fit",
    "Fit Aria",
    "Fit Shuttle",
    "FR-V",
    "Freed",
    "Grace",
    "Horizon",
    "HR-V",
    "Insight",
    "Inspire",
    "Integra",
    "Integra SJ",
    "Jade",
    "Jazz",
    "Lagreat",
    "Legend",
    "Life",
    "Logo",
    "MDX",
    "Mobilio",
    "Mobilio Spike",
    "N-BOX",
    "N-BOX Slash",
    "N-One",
    "N-WGN",
    "N360",
    "NSX",
    "Odyssey",
    "Odyssey (North America)",
    "Orthia",
    "Partner",
    "Passport",
    "Pilot",
    "Prelude",
    "Quint",
    "Rafaga",
    "Ridgeline",
    "S-MX",
    "S2000",
    "S500",
    "S600",
    "S660",
    "Saber",
    "Shuttle",
    "Stepwgn",
    "Stream",
    "Street",
    "That'S",
    "Today",
    "Torneo",
    "Vamos",
    "Vezel",
    "Vigor",
    "Z",
    "Zest"
  ],
  // "Hummer": [
  //   "H1",
  //   "H2",
  //   "H3"
  // ],
  "Hyundai": [
    "Accent",
    "Aslan",
    "Atos",
    "Avante",
    "Azera",
    "Bayon",
    "Centennial",
    "Click",
    "Coupe",
    "Creta",
    "Dynasty",
    "Elantra",
    "Entourage",
    "EON",
    "Equus",
    "Excel",
    "Galloper",
    "Genesis",
    "Genesis Coupe",
    "Getz",
    "Grace",
    "Grand Starex",
    "Grandeur",
    "H-1",
    "H200",
    "i10",
    "i20",
    "i20 N",
    "i30",
    "i30 N",
    "i40",
    "IONIQ",
    "IONIQ 5",
    "ix20",
    "ix35",
    "ix55",
    "Kona",
    "Lantra",
    "Lavita",
    "Marcia",
    "Matrix",
    "Maxcruz",
    "Palisade",
    "Pony",
    "Santa Fe",
    "Santamo",
    "Scoupe",
    "Solaris",
    "Sonata",
    "Starex",
    "Staria",
    "Stellar",
    "Terracan",
    "Tiburon",
    "Trajet",
    "Tucson",
    "Tuscani",
    "Veloster",
    "Venue",
    "Veracruz",
    "Verna",
    "XG"
  ],
  "Infiniti": [
    "EX",
    "FX",
    "G",
    "I",
    "J",
    "JX",
    "M",
    "Q",
    "Q30",
    "Q40",
    "Q50",
    "Q60",
    "Q70",
    "QX30",
    "QX4",
    "QX50",
    "QX55",
    "QX56",
    "QX60",
    "QX70",
    "QX80"
  ],
  // "Isuzu": [
  //   "117",
  //   "Amigo",
  //   "Ascender",
  //   "Aska",
  //   "Axiom",
  //   "Bellett",
  //   "Bighorn",
  //   "D-Max",
  //   "Fargo",
  //   "Fargo Filly",
  //   "Florian",
  //   "Gemini",
  //   "Hombre",
  //   "Impulse",
  //   "KB",
  //   "Midi",
  //   "MU",
  //   "MU-7",
  //   "MU-X",
  //   "Oasis",
  //   "Piazza",
  //   "Rodeo",
  //   "Stylus",
  //   "TF (Pickup)",
  //   "Trooper",
  //   "VehiCross",
  //   "Wizard"
  // ],
  // "Jaguar": [
  //   "E-Pace",
  //   "E-type",
  //   "F-Pace",
  //   "F-Type",
  //   "I-Pace",
  //   "Mark 2",
  //   "Mark IX",
  //   "S-Type",
  //   "X-Type",
  //   "XE",
  //   "XF",
  //   "XFR",
  //   "XJ",
  //   "XJ220",
  //   "XJR",
  //   "XJS",
  //   "XK",
  //   "XKR"
  // ],
  "Jeep": [
    "Cherokee",
    "CJ",
    "Commander",
    "Compass",
    "Gladiator",
    "Grand Cherokee",
    "Grand Wagoneer",
    "Liberty (North America)",
    "Liberty (Patriot)",
    "Renegade",
    "Wrangler"
  ],
  "Kia": [
    "Avella",
    "Borrego",
    "Cadenza",
    "Capital",
    "Carens",
    "Carnival",
    "Carstar",
    "Ceed",
    "Ceed GT",
    "Cerato",
    "Clarus",
    "Concord",
    "Elan",
    "Enterprise",
    "EV6",
    "Forte",
    "Joice",
    "K3",
    "K5",
    "K7",
    "K9",
    "K900",
    "Lotze",
    "Magentis",
    "Mentor",
    "Mohave",
    "Morning",
    "Niro",
    "Opirus",
    "Optima",
    "Picanto",
    "Potentia",
    "Pregio",
    "Pride",
    "Proceed",
    "Quanlima",
    "Quoris",
    "Ray",
    "Retona",
    "Rio",
    "Sedona",
    "Seltos",
    "Sephia",
    "Shuma",
    "Sorento",
    "Soul",
    "Soul EV",
    "Spectra",
    "Sportage",
    "Stinger",
    "Stonic",
    "Telluride",
    "Towner",
    "Venga",
    "Visto",
    "X-Trek",
    "XCeed"
  ],
  "LADA (ВАЗ)": [
    "1111 Ока",
    "2101",
    "2102",
    "2103",
    "2104",
    "2105",
    "2106",
    "2107",
    "2108",
    "2109",
    "21099",
    "2110",
    "2111",
    "2112",
    "2113",
    "2114",
    "2115",
    "2120 Надежда",
    "2121 (4x4)",
    "2123",
    "2129",
    "2131 (4x4)",
    "2328",
    "2329",
    "EL Lada",
    "Granta",
    "Kalina",
    "Largus",
    "Niva",
    "Niva Legend",
    "Priora",
    "Revolution",
    "Vesta",
    "XRAY"
  ],
  "Land Rover": [
    "Defender",
    "Discovery",
    "Discovery Sport",
    "Freelander",
    "Range Rover",
    "Range Rover Evoque",
    "Range Rover Sport",
    "Range Rover Velar",
    "Series I",
    "Series II",
    "Series III"
  ],
  "Lexus": [
    "CT",
    "ES",
    "GS",
    "GS F",
    "GX",
    "HS",
    "IS",
    "IS F",
    "LC",
    "LFA",
    "LM",
    "LS",
    "LX",
    "NX",
    "RC",
    "RC F",
    "RX",
    "SC",
    "UX"
  ],
  "Lifan": [
    "650 EV",
    "Breez (520)",
    "Cebrium (720)",
    "Celliya (530)",
    "Murman (820)",
    "Myway",
    "Smily",
    "Solano",
    "X50",
    "X60",
    "X70"
  ],
  // "Maserati": [
  //   "228",
  //   "3200 GT",
  //   "420",
  //   "4200 GT",
  //   "Barchetta Stradale",
  //   "Biturbo",
  //   "Bora",
  //   "Chubasco",
  //   "Ghibli",
  //   "GranTurismo",
  //   "Indy",
  //   "Karif",
  //   "Khamsin",
  //   "Kyalami",
  //   "Levante",
  //   "MC12",
  //   "MC20",
  //   "Merak",
  //   "Mexico",
  //   "Quattroporte",
  //   "Royale",
  //   "Shamal"
  // ],
  // "Maybach": [
  //   "57",
  //   "62",
  //   "Exelero"
  // ],
  "Mazda": [
    "1000",
    "121",
    "1300",
    "2",
    "3",
    "3 MPS",
    "323",
    "5",
    "6",
    "6 MPS",
    "616",
    "626",
    "818",
    "929",
    "Atenza",
    "Autozam AZ-3",
    "Axela",
    "AZ-1",
    "AZ-Offroad",
    "AZ-Wagon",
    "B-series",
    "Biante",
    "Bongo",
    "Bongo Friendee",
    "BT-50",
    "Capella",
    "Carol",
    "Chantez",
    "Cosmo",
    "Cronos",
    "CX-3",
    "CX-30",
    "CX-5",
    "CX-7",
    "CX-8",
    "CX-9",
    "Demio",
    "Efini MS-6",
    "Efini MS-8",
    "Efini MS-9",
    "Etude",
    "Eunos 100",
    "Eunos 300",
    "Eunos 500",
    "Eunos 800",
    "Eunos Cosmo",
    "Familia",
    "Flair",
    "Flair Crossover",
    "Flair Wagon",
    "Lantis",
    "Laputa",
    "Luce",
    "Millenia",
    "MPV",
    "MX-3",
    "MX-30",
    "MX-5",
    "MX-6",
    "Navajo",
    "Persona",
    "Premacy",
    "Proceed",
    "Proceed Levante",
    "Proceed Marvie",
    "Protege",
    "R360",
    "Revue",
    "Roadster",
    "RX-7",
    "RX-8",
    "Scrum",
    "Sentia",
    "Spiano",
    "Tribute",
    "Verisa",
    "Xedos 6",
    "Xedos 9"
  ],
  "Mercedes-Benz": [
    "190 (W201)",
    "190 SL",
    "220 (W187)",
    "A-Класс",
    "A-Класс AMG",
    "AMG GT",
    "B-Класс",
    "C-Класс",
    "C-Класс AMG",
    "Citan",
    "CL-Класс",
    "CL-Класс AMG",
    "CLA",
    "CLA AMG",
    "CLC-Класс",
    "CLK-Класс",
    "CLK-Класс AMG",
    "CLS",
    "CLS AMG",
    "E-Класс",
    "E-Класс AMG",
    "EQA",
    "EQC",
    "EQS",
    "EQV",
    "G-Класс",
    "G-Класс AMG",
    "G-Класс AMG 6x6",
    "GL-Класс",
    "GL-Класс AMG",
    "GLA",
    "GLA AMG",
    "GLB",
    "GLB AMG",
    "GLC",
    "GLC AMG",
    "GLC Coupe",
    "GLC Coupe AMG",
    "GLE",
    "GLE AMG",
    "GLE Coupe",
    "GLE Coupe AMG",
    "GLK-Класс",
    "GLS",
    "GLS AMG",
    "M-Класс",
    "M-Класс AMG",
    "Maybach G 650 Landaulet",
    "Maybach GLS",
    "Maybach S-Класс",
    "Metris",
    "R-Класс",
    "R-Класс AMG",
    "S-Класс",
    "S-Класс AMG",
    "Simplex",
    "SL-Класс",
    "SL-Класс AMG",
    "SLC",
    "SLC AMG",
    "SLK-Класс",
    "SLK-Класс AMG",
    "SLR McLaren",
    "SLS AMG",
    "V-Класс",
    "Vaneo",
    "Viano",
    "Vito",
    "W100",
    "W105",
    "W108",
    "W110",
    "W111",
    "W114",
    "W115",
    "W120",
    "W121",
    "W123",
    "W124",
    "W128",
    "W136",
    "W142",
    "W186",
    "W188",
    "W189",
    "W191",
    "W29",
    "X-Класс"
  ],
  // "MINI": [
  //   "Cabrio",
  //   "Clubman",
  //   "Countryman",
  //   "Coupe",
  //   "Hatch",
  //   "Paceman",
  //   "Roadster"
  // ],
  "Mitsubishi": [
    "3000 GT",
    "500",
    "Airtrek",
    "Aspire",
    "ASX",
    "Attrage",
    "Bravo",
    "Carisma",
    "Celeste",
    "Challenger",
    "Chariot",
    "Colt",
    "Cordia",
    "Debonair",
    "Delica",
    "Delica D:2",
    "Delica D:3",
    "Delica D:5",
    "Diamante",
    "Dignity",
    "Dingo",
    "Dion",
    "Eclipse",
    "Eclipse Cross",
    "eK Active",
    "eK Classic",
    "eK Custom",
    "eK Space",
    "eK Sport",
    "eK Wagon",
    "Emeraude",
    "Endeavor",
    "Eterna",
    "Freeca",
    "FTO",
    "Galant",
    "Galant Fortis",
    "Grandis",
    "GTO",
    "i",
    "i-MiEV",
    "Jeep J",
    "L200",
    "L300",
    "L400",
    "Lancer",
    "Lancer Cargo",
    "Lancer Evolution",
    "Lancer Ralliart",
    "Legnum",
    "Libero",
    "Minica",
    "Minicab",
    "Mirage",
    "Montero",
    "Montero Sport",
    "Outlander",
    "Pajero",
    "Pajero iO",
    "Pajero Junior",
    "Pajero Mini",
    "Pajero Pinin",
    "Pajero Sport",
    "Pistachio",
    "Proudia",
    "Raider",
    "RVR",
    "Sapporo",
    "Savrin",
    "Sigma",
    "Space Gear",
    "Space Runner",
    "Space Star",
    "Space Wagon",
    "Starion",
    "Strada",
    "Toppo",
    "Town Box",
    "Tredia",
    "Triton",
    "Xpander"
  ],
  "Nissan": [
    "100NX",
    "180SX",
    "200SX",
    "240SX",
    "280ZX",
    "300ZX",
    "350Z",
    "370Z",
    "AD",
    "Almera",
    "Almera Classic",
    "Almera Tino",
    "Altima",
    "Ariya",
    "Armada",
    "Auster",
    "Avenir",
    "Bassara",
    "BE-1",
    "Bluebird",
    "Bluebird Maxima",
    "Bluebird Sylphy",
    "Caravan",
    "Cedric",
    "Cefiro",
    "Cherry",
    "Cima",
    "Clipper Rio",
    "Crew",
    "Cube",
    "Datsun",
    "Dayz",
    "Dayz Roox",
    "Dualis",
    "Elgrand",
    "Exa",
    "Expert",
    "Fairlady Z",
    "Figaro",
    "Fuga",
    "Gloria",
    "GT-R",
    "Homy",
    "Hypermini",
    "Juke",
    "Juke Nismo",
    "Kicks",
    "Kix",
    "Lafesta",
    "Langley",
    "Largo",
    "Latio",
    "Laurel",
    "Leaf",
    "Leopard",
    "Liberta Villa",
    "Liberty",
    "Livina",
    "Lucino",
    "March",
    "Maxima",
    "Micra",
    "Mistral",
    "Moco",
    "Murano",
    "Navara (Frontier)",
    "Note",
    "NP300",
    "NV100 Clipper",
    "NV200",
    "NV300",
    "NV350 Caravan",
    "NX Coupe",
    "Otti",
    "Pao",
    "Pathfinder",
    "Patrol",
    "Pino",
    "Pixo",
    "Prairie",
    "Presage",
    "Presea",
    "President",
    "Primastar",
    "Primera",
    "Pulsar",
    "Qashqai",
    "Qashqai+2",
    "Quest",
    "R'nessa",
    "Rasheen",
    "Rogue",
    "Roox",
    "Safari",
    "Sentra",
    "Serena",
    "Silvia",
    "Skyline",
    "Skyline Crossover",
    "Stagea",
    "Stanza",
    "Sunny",
    "Sylphy Zero Emission",
    "Teana",
    "Terra",
    "Terrano",
    "Terrano Regulus",
    "Tiida",
    "Tino",
    "Titan",
    "Urvan",
    "Vanette",
    "Versa",
    "Wingroad",
    "X-Trail",
    "Xterra",
    "Z"
  ],
  "Opel": [
    "Adam",
    "Admiral",
    "Agila",
    "Ampera",
    "Antara",
    "Ascona",
    "Astra",
    "Astra OPC",
    "Calibra",
    "Campo",
    "Cascada",
    "Combo",
    "Commodore",
    "Corsa",
    "Corsa OPC",
    "Crossland X",
    "Diplomat",
    "Frontera",
    "Grandland X",
    "GT",
    "Insignia",
    "Insignia OPC",
    "Kadett",
    "Kapitan",
    "Karl",
    "Manta",
    "Meriva",
    "Meriva OPC",
    "Mokka",
    "Monterey",
    "Monza",
    "Olympia",
    "Omega",
    "P4",
    "Rekord",
    "Senator",
    "Signum",
    "Sintra",
    "Speedster",
    "Super Six",
    "Tigra",
    "Vectra",
    "Vectra OPC",
    "Vita",
    "Vivaro",
    "Zafira",
    "Zafira Life",
    "Zafira OPC"
  ],
  "Peugeot": [
    "1007",
    "104",
    "106",
    "107",
    "108",
    "2008",
    "201",
    "202",
    "203",
    "204",
    "205",
    "205 GTi",
    "206",
    "207",
    "208",
    "208 GTi",
    "3008",
    "301",
    "304",
    "305",
    "306",
    "307",
    "308",
    "308 GTi",
    "309",
    "4007",
    "4008",
    "402",
    "403",
    "404",
    "405",
    "406",
    "407",
    "408",
    "5008",
    "504",
    "505",
    "508",
    "604",
    "605",
    "607",
    "806",
    "807",
    "Bipper",
    "Expert",
    "iOn",
    "Partner",
    "RCZ",
    "Rifter",
    "Traveller"
  ],
  "Pontiac": [
    "6000",
    "Aztek",
    "Bonneville",
    "Catalina",
    "Fiero",
    "Firebird",
    "G4",
    "G5",
    "G6",
    "G8",
    "Grand AM",
    "Grand Prix",
    "GTO",
    "Laurentian",
    "LeMans",
    "Montana",
    "Parisienne",
    "Phoenix",
    "Solstice",
    "Sunbird",
    "Sunfire",
    "Tempest",
    "Torpedo",
    "Torrent",
    "Trans Sport",
    "Vibe",
    "Wave"
  ],
  // "Porsche": [
  //   "356",
  //   "718 Spyder",
  //   "911",
  //   "911 GT2",
  //   "911 GT3",
  //   "911 R",
  //   "912",
  //   "914",
  //   "918 Spyder",
  //   "924",
  //   "928",
  //   "944",
  //   "959",
  //   "968",
  //   "Boxster",
  //   "Carrera GT",
  //   "Cayenne",
  //   "Cayenne Coupe",
  //   "Cayman",
  //   "Cayman GT4",
  //   "Macan",
  //   "Panamera",
  //   "Taycan"
  // ],
  "Renault": [
    "10",
    "11",
    "12",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "25",
    "30",
    "4",
    "4CV",
    "5",
    "6",
    "8",
    "9",
    "Alaskan",
    "Arkana",
    "Avantime",
    "Captur",
    "Caravelle",
    "Clio",
    "Clio RS",
    "Clio V6",
    "Dauphine",
    "Dokker",
    "Duster",
    "Espace",
    "Floride",
    "Fluence",
    "Fregate",
    "Fuego",
    "Kadjar",
    "Kangoo",
    "Kaptur",
    "Koleos",
    "KWID",
    "Laguna",
    "Latitude",
    "Lodgy",
    "Logan",
    "Megane",
    "Megane RS",
    "Modus",
    "Rodeo",
    "Safrane",
    "Sandero",
    "Sandero RS",
    "Scenic",
    "Sport Spider",
    "Symbol",
    "Talisman",
    "Trafic",
    "Twingo",
    "Twizy",
    "Vel Satis",
    "Vivastella",
    "Wind",
    "ZOE"
  ],
  // "SEAT": [
  //   "133",
  //   "Alhambra",
  //   "Altea",
  //   "Arona",
  //   "Arosa",
  //   "Ateca",
  //   "Cordoba",
  //   "Exeo",
  //   "Fura",
  //   "Ibiza",
  //   "Ibiza Cupra",
  //   "Inca",
  //   "Leon",
  //   "Leon Cupra",
  //   "Malaga",
  //   "Marbella",
  //   "Mii",
  //   "Ronda",
  //   "Tarraco",
  //   "Toledo"
  // ],
  "Skoda": [
    "100 Series",
    "105, 120",
    "1200",
    "Citigo",
    "Enyaq",
    "Fabia",
    "Fabia RS",
    "Favorit",
    "Felicia",
    "Forman",
    "Kamiq",
    "Karoq",
    "Kodiaq",
    "Kodiaq RS",
    "Octavia",
    "Octavia RS",
    "Popular",
    "Rapid",
    "Roomster",
    "Scala",
    "Superb",
    "Yeti"
  ],
  "SsangYong": [
    "Actyon",
    "Actyon Sports",
    "Chairman",
    "Istana",
    "Kallista",
    "Korando",
    "Korando Family",
    "Korando Sports",
    "Korando Turismo",
    "Kyron",
    "Musso",
    "Nomad",
    "Rexton",
    "Rodius",
    "Stavic",
    "Tivoli",
    "XLV"
  ],
  "Subaru": [
    "1000",
    "360",
    "Alcyone",
    "Ascent",
    "Baja",
    "Bighorn",
    "Bistro",
    "Brat",
    "BRZ",
    "Dex",
    "Dias Wagon",
    "Domingo",
    "Exiga",
    "Forester",
    "Impreza",
    "Impreza WRX",
    "Impreza WRX STi",
    "Justy",
    "Legacy",
    "Legacy Lancaster",
    "Leone",
    "Levorg",
    "Libero",
    "Lucra",
    "Outback",
    "Pleo",
    "Pleo Plus",
    "R1",
    "R2",
    "Rex",
    "Sambar",
    "Stella",
    "SVX",
    "Traviq",
    "Trezia",
    "Tribeca",
    "Vivio",
    "WRX",
    "WRX STi",
    "XT",
    "XV"
  ],
  "Suzuki": [
    "Across",
    "Aerio",
    "Alto",
    "Alto Lapin",
    "APV",
    "Baleno",
    "Cappuccino",
    "Cara",
    "Carry",
    "Celerio",
    "Cervo",
    "Cultus",
    "Equator",
    "Ertiga",
    "Escudo",
    "Esteem",
    "Every",
    "Forenza",
    "Fronte",
    "Grand Vitara",
    "Hustler",
    "Ignis",
    "Jimny",
    "Kei",
    "Kizashi",
    "Landy",
    "Liana",
    "MR Wagon",
    "Palette",
    "Reno",
    "Samurai",
    "Sidekick",
    "Solio",
    "Spacia",
    "Splash",
    "Swace",
    "Swift",
    "SX4",
    "Twin",
    "Verona",
    "Vitara",
    "Wagon R",
    "Wagon R+",
    "X-90",
    "Xbee",
    "XL7"
  ],
  // "Tesla": [
  //   "Cybertruck",
  //   "Model 3",
  //   "Model S",
  //   "Model X",
  //   "Model Y",
  //   "Roadster"
  // ],
  "Toyota": [
    "2000GT",
    "4Runner",
    "Allex",
    "Allion",
    "Alphard",
    "Altezza",
    "Aqua",
    "Aristo",
    "Aurion",
    "Auris",
    "Avalon",
    "Avanza",
    "Avensis",
    "Avensis Verso",
    "Aygo",
    "bB",
    "Belta",
    "Blade",
    "Blizzard",
    "Brevis",
    "C-HR",
    "Caldina",
    "Cami",
    "Camry",
    "Camry Solara",
    "Carina",
    "Carina E",
    "Carina ED",
    "Cavalier",
    "Celica",
    "Celsior",
    "Century",
    "Chaser",
    "Classic",
    "Comfort",
    "COMS",
    "Corolla",
    "Corolla Cross",
    "Corolla II",
    "Corolla Levin",
    "Corolla Rumion",
    "Corolla Spacio",
    "Corolla Verso",
    "Corona",
    "Corona EXiV",
    "Corsa",
    "Cressida",
    "Cresta",
    "Crown",
    "Crown Majesta",
    "Curren",
    "Cynos",
    "Duet",
    "Echo",
    "Esquire",
    "Estima",
    "Etios",
    "FJ Cruiser",
    "Fortuner",
    "FunCargo",
    "Gaia",
    "Grand HiAce",
    "Granvia",
    "GT86",
    "Harrier",
    "HiAce",
    "Highlander",
    "Hilux",
    "Hilux Surf",
    "Innova",
    "Ipsum",
    "iQ",
    "ISis",
    "Ist",
    "Kluger",
    "Land Cruiser",
    "Land Cruiser Prado",
    "Lite Ace",
    "Mark II",
    "Mark X",
    "Mark X ZiO",
    "MasterAce Surf",
    "Matrix",
    "Mega Cruiser",
    "Mirai",
    "Model F",
    "MR-S",
    "MR2",
    "Nadia",
    "Noah",
    "Opa",
    "Origin",
    "Paseo",
    "Passo",
    "Passo Sette",
    "Picnic",
    "Pixis Epoch",
    "Pixis Joy",
    "Pixis Mega",
    "Pixis Space",
    "Pixis Van",
    "Platz",
    "Porte",
    "Premio",
    "Previa",
    "Prius",
    "Prius Alpha",
    "Prius c",
    "Prius v (+)",
    "ProAce",
    "ProAce City",
    "Probox",
    "Progres",
    "Pronard",
    "Publica",
    "Ractis",
    "Raize",
    "Raum",
    "RAV4",
    "Regius",
    "RegiusAce",
    "Roomy",
    "Rush",
    "Sai",
    "Scepter",
    "Sequoia",
    "Sera",
    "Sienna",
    "Sienta",
    "Soarer",
    "Soluna",
    "Spade",
    "Sparky",
    "Sports 800",
    "Sprinter",
    "Sprinter Carib",
    "Sprinter Marino",
    "Sprinter Trueno",
    "Starlet",
    "Succeed",
    "Supra",
    "Tacoma",
    "Tank",
    "Tercel",
    "Touring HiAce",
    "Town Ace",
    "Tundra",
    "Urban Cruiser",
    "Vanguard",
    "Vellfire",
    "Venza",
    "Verossa",
    "Verso",
    "Verso-S",
    "Vios",
    "Vista",
    "Vitz",
    "Voltz",
    "Voxy",
    "WiLL",
    "WiLL Cypha",
    "Windom",
    "Wish",
    "Yaris",
    "Yaris Verso"
  ],
  "Volkswagen": [
    "181",
    "Amarok",
    "Arteon",
    "Arteon R",
    "Atlas",
    "Atlas Cross Sport",
    "Beetle",
    "Bora",
    "Caddy",
    "California",
    "Caravelle",
    "Corrado",
    "Derby",
    "Eos",
    "EuroVan",
    "Fox",
    "Gol",
    "Golf",
    "Golf Country",
    "Golf GTI",
    "Golf Plus",
    "Golf R",
    "Golf R32",
    "Golf Sportsvan",
    "ID.3",
    "ID.4",
    "Iltis",
    "Jetta",
    "K70",
    "Karmann-Ghia",
    "Lavida",
    "Lupo",
    "Lupo GTI",
    "Multivan",
    "Parati",
    "Passat",
    "Passat (North America)",
    "Passat CC",
    "Phaeton",
    "Pointer",
    "Polo",
    "Polo GTI",
    "Polo R WRC",
    "Quantum",
    "Routan",
    "Santana",
    "Scirocco",
    "Scirocco R",
    "Sharan",
    "SpaceFox",
    "T-Cross",
    "T-Roc",
    "T-Roc R",
    "Taos",
    "Taro",
    "Teramont",
    "Tiguan",
    "Tiguan R",
    "Touareg",
    "Touran",
    "Transporter",
    "Type 1",
    "Type 166",
    "Type 2",
    "Type 3",
    "Type 4",
    "Type 82",
    "up!",
    "Vento",
    "XL1"
  ],
  "Volvo": [
    "120 Series",
    "140 Series",
    "164",
    "240 Series",
    "260 Series",
    "300 Series",
    "440",
    "460",
    "480",
    "66",
    "740",
    "760",
    "780",
    "850",
    "940",
    "960",
    "C30",
    "C40",
    "C70",
    "Laplander",
    "P1800",
    "P1900",
    "S40",
    "S60",
    "S60 Cross Country",
    "S70",
    "S80",
    "S90",
    "V40",
    "V40 Cross Country",
    "V50",
    "V60",
    "V60 Cross Country",
    "V70",
    "V90",
    "V90 Cross Country",
    "XC40",
    "XC60",
    "XC70",
    "XC90"
  ],
  // "Vortex": [
  //   "Corda",
  //   "Estina",
  //   "Tingo"
  // ],
  "ГАЗ": [
    "12 ЗИМ",
    "13 «Чайка»",
    "14 «Чайка»",
    "18",
    "21 «Волга»",
    "22 «Волга»",
    "2308 «Атаман»",
    "2330 «Тигр»",
    "24 «Волга»",
    "3102 «Волга»",
    "31022 «Волга»",
    "310221 «Волга»",
    "31029 «Волга»",
    "3103 «Волга»",
    "3105 «Волга»",
    "3110 «Волга»",
    "31105 «Волга»",
    "3111 «Волга»",
    "46",
    "61",
    "64",
    "69",
    "Volga Siber",
    "А",
    "ГАЗ 67",
    "М-20 «Победа»",
    "М-72",
    "М1"
  ],
  "УАЗ": [
    "3151",
    "3153",
    "3159",
    "3160",
    "3162 Simbir",
    "469",
    "Hunter",
    "Patriot",
    "Pickup",
    "Астеро"
  ]
}

//----------------- МЕНЮ БУРГЕР--------------------//
const menu = document.getElementById('menu');

menu.addEventListener('click', function(evt) {
    evt.stopPropagation();
    const navigation = document.getElementById('navigation');
    navigation.classList.toggle('active'); 
    
    // Анимация кнопки бургер
    const lines = this.getElementsByClassName('line');
    lines[0].classList.toggle('line1'); 
    lines[1].classList.toggle('line2'); 
    lines[2].classList.toggle('line3'); 
    lines[3].classList.toggle('line4'); 
});

//----------------------------------------------------------------
// --------------------ФУНКЦИЯ СЛАЙДЕРА галерея--------------------------------
// -----------------------------------------------------------------//

const imagesGallery = document.querySelectorAll('.item-gallery');
const btnGallery = document.querySelectorAll('.btn-control--gallery ');

let galleryCount = 0;

function updateGallery() {
  imagesGallery.forEach((img, index) => {
      img.classList.toggle('disabled', index !== galleryCount);
  });
}

// Инициализация галереи
updateGallery();

btnGallery.forEach((el) => {
  el.addEventListener('click', (evt) => {
      if (evt.target.id === 'gallery-back') {
          galleryCount--;
          if (galleryCount < 0) {
              galleryCount = imagesGallery.length - 1; // Переключаемся на последнее изображение
          }
      } else if (evt.target.id === 'gallery-forward') {
          galleryCount++;
          if (galleryCount >= imagesGallery.length) {
              galleryCount = 0; // Переключаемся на первое изображение
          }
      }
      updateGallery(); // Обновляем отображение изображений
  });
});


//----------------------------------------------------------------
// --------------------ФУНКЦИЯ СЛАЙДЕРА отзывы--------------------------------
// -----------------------------------------------------------------//

const imagesFeedback = document.querySelectorAll('.feedback-item');
const btnFeedback = document.querySelectorAll('.btn-control--feedback ');

let feedbackCount = 0;

function updateFeedback() {
  imagesFeedback.forEach((img, index) => {
      img.classList.toggle('disabled', index !== feedbackCount);
  });
}

// Инициализация галереи
updateFeedback();

btnFeedback.forEach((el) => {
  el.addEventListener('click', (evt) => {
      if (evt.target.id === 'feedback-back') {
          feedbackCount--;
          if (feedbackCount < 0) {
              feedbackCount = imagesFeedback.length - 1; // Переключаемся на последнее изображение
          }
      } else if (evt.target.id === 'feedback-forward') {
          feedbackCount++;
          if (feedbackCount >= imagesFeedback.length) {
              feedbackCount = 0; // Переключаемся на первое изображение
          }
      }
      updateFeedback(); // Обновляем отображение изображений
  });
});


//----------------------------------------------------------------
// --------------------ФУНКЦИЯ СЛАЙДЕРА также орг---------------------
// -----------------------------------------------------------------//

const imagesOtherBag = document.querySelectorAll('.other-item--bag');
const btnOtherBag = document.querySelectorAll('.btn-control--other--bag ');

let otherBagCount = 0;

function updateOtherBag() {
  imagesOtherBag.forEach((img, index) => {
      img.classList.toggle('disabled', index !== otherBagCount);
  });
}

// Инициализация галереи
updateOtherBag();

btnOtherBag.forEach((el) => {
  el.addEventListener('click', (evt) => {
      if (evt.target.id === 'other-bag--back') {
          otherBagCount--;
          if (otherBagCount < 0) {
              otherBagCount = imagesOtherBag.length - 1; // Переключаемся на последнее изображение
          }
      } else if (evt.target.id === 'other-bag--forward') {
          otherBagCount++;
          if (otherBagCount >= imagesOtherBag.length) {
              otherBagCount = 0; // Переключаемся на первое изображение
          }
      }
      updateOtherBag(); // Обновляем отображение изображений
  });
});

//----------------------------------------------------------------
// --------------------ФУНКЦИЯ СЛАЙДЕРА также решетки---------------------
// -----------------------------------------------------------------//

const imagesOtherArmor = document.querySelectorAll('.other-item--armor');
const btnOtherArmor = document.querySelectorAll('.btn-control--other--armor ');

let otherArmorCount = 0;

function updateOtherArmor() {
  imagesOtherArmor.forEach((img, index) => {
      img.classList.toggle('disabled', index !== otherArmorCount);
  });
}

// Инициализация галереи
updateOtherArmor();

btnOtherArmor.forEach((el) => {
  el.addEventListener('click', (evt) => {
      if (evt.target.id === 'other-armor--back') {
        otherArmorCount--;
          if (otherArmorCount < 0) {
            otherArmorCount = imagesOtherArmor.length - 1; // Переключаемся на последнее изображение
          }
      } else if (evt.target.id === 'other-armor--forward') {
        otherArmorCount++;
          if (otherArmorCount >= imagesOtherArmor.length) {
            otherArmorCount = 0; // Переключаемся на первое изображение
          }
      }
      updateOtherArmor(); // Обновляем отображение изображений
  });
});

//-----------------------------------------------//
// --------------ОТКРЫТИЕ ИЗОБРАЖЕНИЯ-----------------//
// -----------------------------------------------///
const images = document.querySelectorAll('.gallery-img');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');

  images.forEach(image => {
    image.addEventListener('click', () => {
      const fullSizeSrc = image.getAttribute('data-fullsize');
      modalImg.src = fullSizeSrc;
      modal.style.display = 'flex';
    });
  });

  modal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

//-----------------------------------------------------------------
//------------УДАЛЕНИЯ КЛАССА DISABLED ДЛЯ МОНИТОРОВ GALLERY---------
//--------------------------------------------------------------------

function toggleDisabledClass() {

  imagesGallery.forEach((item, index) => {
      // Пропускаем первый элемент (index 0)
      if (index === 0) return;

      if (window.innerWidth > 719.5) {
          item.classList.remove('disabled');
      } else {
          item.classList.add('disabled');
      }
  });
}

// Проверяем ширину окна при загрузке страницы
toggleDisabledClass();

// Добавляем обработчик события на изменение размера окна
window.addEventListener('resize', toggleDisabledClass);

//-----------------------------------------------------------------
//---------УДАЛЕНИЯ КЛАССА DISABLED ДЛЯ МОНИТОРОВ OTHERBAG---------
//--------------------------------------------------------------------

function toggleDisabledClassBag() {

  imagesOtherBag.forEach((item, index) => {
      // Пропускаем первый элемент (index 0)
      if (index === 0) return;

      if (window.innerWidth > 719.5) {
          item.classList.remove('disabled');
      } else {
          item.classList.add('disabled');
      }
  });
}

// Проверяем ширину окна при загрузке страницы
toggleDisabledClassBag();

// Добавляем обработчик события на изменение размера окна
window.addEventListener('resize', toggleDisabledClassBag);

//-----------------------------------------------------------------
//--------УДАЛЕНИЯ КЛАССА DISABLED ДЛЯ МОНИТОРОВ- OTHER-ARMOR--------
//--------------------------------------------------------------------

function toggleDisabledClassArmor() {

  imagesOtherArmor.forEach((item, index) => {
      // Пропускаем первый элемент (index 0)
      if (index === 0) return;

      if (window.innerWidth > 719.5) {
          item.classList.remove('disabled');
      } else {
          item.classList.add('disabled');
      }
  });
}

// Проверяем ширину окна при загрузке страницы
toggleDisabledClassArmor();

// Добавляем обработчик события на изменение размера окна
window.addEventListener('resize', toggleDisabledClassArmor);





//-----------СТАДИИ ОФОРМЛЕНИЯ ЗАЯВКИ------------------//
const btnStages = document.getElementById('btnStages');
const stages = document.getElementById('stages');

btnStages.addEventListener('click', (evt) => {
  evt.stopPropagation();
  stages.classList.toggle('stages-active')
});

document.addEventListener('click', () => {
  // Удаляем класс, если он есть
  if (stages.classList.contains('stages-active')) {
    stages.classList.remove('stages-active');
  }
});

//------------ ФОРМА КОНФИГУРАТОР -------------------//

const form = document.getElementById('form');
const controlFormBack = document.getElementById('controlFormBack');
const formControls = form.querySelectorAll('.btn');
const sendForm = document.getElementById('send');
const fieldsetArr = form.querySelectorAll('.options');

const brandSelect = document.getElementById('brand-select');
const modelSelect = document.getElementById('model-select');

//Смена окон
let countForm = 0;
let step = 1;


// Заполнение списка брендов 
for (const brand in cars) {
  const option = document.createElement('option');
  option.value = brand;
  option.textContent = brand;
  brandSelect.appendChild(option);
}
// Обработчик изменения выбора бренда
brandSelect.addEventListener('change', function () {
  const selectedBrand = this.value;
  const models = cars[selectedBrand];
  // Очистка списка моделей
  modelSelect.innerHTML = '<option class="option" disabled selected></option>';
  modelSelect.disabled = false;
  // Заполнение списка моделей
  models.forEach(model => {
    const option = document.createElement('option');
    option.value = model;
    option.textContent = model;
    modelSelect.appendChild(option);
  });
});


//----------------ЗАПОЛНЕНИИЕ ЗАКАЗА--------------//
const generation = document.getElementById('generation');
const wheel = document.getElementById('wheel');
const privod = document.getElementById('privod');
const colorKover = document.getElementsByName('color-cover');
const colorKant = document.getElementsByName('color-kant');
const product = document.getElementsByName('product');
const bort = document.getElementsByName('bort');
const foot = document.getElementsByName('foot');
const shield = document.getElementsByName('shield');
const checkCount = document.querySelectorAll('.checkCount');
const name = document.getElementById('name');
const tel = document.getElementById('tel');
const comment = document.getElementById('comment');
const cost = document.querySelector('.cost');

//функция получения цвета с radio-box
const getInput = (arr) => {
  for (const input of arr ) {
    if (input.checked) {
      return input.value
    }
  }
}

//функция получения того что делаем
const getProduct = (arr) => {
  let newArr = []
  arr.forEach((el) => {
    if (el.checked) {
      newArr.push(el.value)
    }
  })
  return newArr
}

//функция получения стоимости
// Определяем стоимость для каждого элемента
const prices = {
  driver: 1100,   // стоимость для водительского
  pass: 1100,      // стоимость для пассажирского
  'two-row': 1000, // стоимость для второго ряда
  'three-row': 1500, // стоимость для третьего ряда
  bag: 2500,       // стоимость для багажника
  back: 1800,      // стоимость для спинок
  'bort-ДА': 800, // стоимость для "ДА" по борту
  'bort-НЕТ': 0,   // стоимость для "НЕТ" по борту
  'foot-ДА': 500, // стоимость для "ДА" по подпятнику
  'foot-НЕТ': 0,   // стоимость для "НЕТ" по подпятнику
  shield0: 0,     // стоимость для 0 шильдов
  shield1: 200,   // стоимость для 1 шильда
  shield2: 400,   // стоимость для 2 шильдов
  shield3: 600,   // стоимость для 3 шильдов
  shield4: 800    // стоимость для 4 шильдов
};

function calculateCost() {
  let totalCost = 0;

  // Считаем стоимость по чекбоксам
  document.querySelectorAll('.bort-input[type="checkbox"]:checked').forEach((checkbox) => {
      totalCost += prices[checkbox.value] || 0;
  });

  // Считаем стоимость по радиокнопкам "Борты"
  const bortValue = document.querySelector('input[name="bort"]:checked');
  if (bortValue) {
      totalCost += prices[`bort-${bortValue.value}`];
  }

  // Считаем стоимость по радиокнопкам "Подпятник"
  const footValue = document.querySelector('input[name="foot"]:checked');
  if (footValue) {
      totalCost += prices[`foot-${footValue.value}`];
  }

  // Считаем стоимость по радиокнопкам "Шильды"
  const shieldValue = document.querySelector('input[name="shield"]:checked');
  if (shieldValue) {
      totalCost += prices[`shield${shieldValue.value}`];
  }

  // Обновляем стоимость на странице
  cost.textContent = `${totalCost} руб.`;
}

// Добавляем обработчики событий на все чекбоксы и радиокнопки
document.querySelectorAll('.bort-input').forEach((input) => {
  input.addEventListener('change', calculateCost);
});

// Вызываем функцию для первоначального расчета стоимости
calculateCost();

let order = {
  brand: '',
  model: '',
  generation: '',
  wheel: '',
  privod: '',
  colorKover: '',
  colorKant: '',
  product: [],
  bort: '',
  foot: '',
  shield: '',
  count: '',
  name: '',
  tel: '',
  comment: ''
};

//------------ОТПРАВКА В ТЕДЛЕГРАММ----------------------------//
const TG_BOT_TOKEN = '7892155528:AAESDWLd53OkVnNQISa4-jzGkanVZGYoIDo';
const TG_CHAT_ID = '@EvaCarpetApp';
const API = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`

//----------- Добавляем обработчик для кнопки отправки формы---------//

async function sendFormTelegramm(event) {
  event.preventDefault();

  if (tel.value === '') {
        alert('Введите телефон')
      }
      order = {
        brand: brandSelect.value,
        model: modelSelect.value,
        generation: generation.value,
        wheel: wheel.value,
        privod: privod.value,
        colorKover: getInput(colorKover),
        colorKant: getInput(colorKant),
        product: getProduct(product),
        bort: getInput(bort),
        foot: getInput(foot),
        shield: getInput(shield),
        count: cost.textContent,
        name: name.value,
        tel: tel.value,
        comment: comment.value
      };
      console.log(order);

      const text = `
      ОСТАВИЛИ ЗАКАЗ
      заявка от : ${order.name} телефон-${order.tel}
      Машина:
      Марка: ${order.brand}
      Модель-${order.model} 
      поколение-${order.generation} 
      руль-${order.wheel} привод-${order.privod}
      Что делаем: ${order.product}
      Цвет: 
      Ковер-${order.colorKover} 
      Кант-${order.colorKant}
      Дополнительно:
      Подпятник-${order.foot} Шильды-${order.shield}
      Комментарий:${order.comment}
      `
      console.log(text)

      try {
        sendForm.textContent = 'LOADING...'
        const response = await fetch(API, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id:TG_CHAT_ID,
            text,
          })
        });

        if (response.ok) {
          alert('Ваша заявка отправлена, мы свяжемся с вами в ближайшее время');
          form.reset()
        } else {
          throw new Error(response.statusText)
        }
      } catch (error) {
        console.error(error);
        alert('Заявка не отправлена, попробуйте позже')
      } finally {
        sendForm.textContent = 'Заказать'
      }
}

//------------ОТПРАВКА В ТЕДЛЕГРАММ прочее---------------------------//
async function sendMessageOther(event) {
  event.preventDefault();

  const formOther = event.target;
  const btnOther = document.getElementById('btn-order');

  const {name, tel, coment } = Object.fromEntries(new FormData (formOther).entries())
  


      const text = `
      ОСТАВИЛИ ЗАЯВКУ
      заявка от : ${name} 
      телефон-${tel}
      Комментарий:${coment}
      `

      try {
        btnOther.textContent = 'LOADING...'
        const response = await fetch(API, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id:TG_CHAT_ID,
            text,
          })
        });

        if (response.ok) {
          alert('Ваша заявка отправлена, мы свяжемся с вами в ближайшее время');
          formOther.reset()
        } else {
          throw new Error(response.statusText)
        }
      } catch (error) {
        console.error(error);
        alert('Заявка не отправлена, попробуйте позже')
      } finally {
        btnOther.textContent = 'Оставить заявку'
      }
}

// -------------ОТОБРАЖЕНИЕ FIELDSET---------------//

document.addEventListener("DOMContentLoaded", function() {
  const fieldsets = document.querySelectorAll('.options');
  const nextBtn = document.getElementById('controlFormForward');
  const prevBtn = document.getElementById('controlFormBack');
  const orderBtn = document.getElementById('send');
  let currentFieldsetIndex = 0;

  function updateButtons() {
      prevBtn.classList.toggle('disable', currentFieldsetIndex === 0);
      orderBtn.classList.toggle('disable', currentFieldsetIndex !== fieldsets.length - 1);
      nextBtn.classList.toggle('disable', currentFieldsetIndex === fieldsets.length - 1);
  }

  function showFieldset(index) { 
      fieldsets.forEach((fieldset, i) => {
          fieldset.classList.toggle('disable', i !== index);
      });
      updateButtons();
      document.querySelector('.step').textContent = index + 1; // Обновляем номер шага
  }

  nextBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
      if (currentFieldsetIndex < fieldsets.length - 1) {
          currentFieldsetIndex++;
          showFieldset(currentFieldsetIndex);
      }
  });

  prevBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
      if (currentFieldsetIndex > 0) {
          currentFieldsetIndex--;
          showFieldset(currentFieldsetIndex);
      }
  });

  // Инициализация
  showFieldset(currentFieldsetIndex);
});

//-------------ОТРИСОВКА КОВРОВ---------------//
const pictures = document.querySelectorAll('.picture');
const picDriver = document.getElementById('pic-driver');
const picPass = document.getElementById('pic-pass');
const picTwoRow = document.getElementById('pic-two-row');
const picThreeRow = document.getElementById('pic-three-row');
const picFoot = document.getElementById('pic-foot');


product.forEach(el => {
  el.addEventListener('change', function() {
      // Получаем значение выбранного checkbox
      const value = this.value;

      // Находим соответствующий элемент picture
      const pictureElement =  document.querySelector(`.picture.${value}`);

      if (pictureElement) {
          // Если checkbox выбран, удаляем класс disable, иначе добавляем
          if (this.checked) {
              pictureElement.classList.remove('disable');
          } else {
              pictureElement.classList.add('disable');
          }
      }
  });
});

bort.forEach((checkBox) => {
  checkBox.addEventListener('change', function() {
    if (this.checked) {
      switch(this.value) {
        case 'ДА':{
          picDriver.classList.add('driver-bort');
          picPass.classList.add('pass-bort');
          picTwoRow.classList.add('two-row-bort');
          picThreeRow.classList.add('three-row-bort') ;         
          break
        }
        case 'НЕТ': {
          picDriver.classList.remove('driver-bort');
          picPass.classList.remove('pass-bort');
          picTwoRow.classList.remove('two-row-bort');
          picThreeRow.classList.remove('three-row-bort') ;         
          break
        }
      }
    }
  })
})

foot.forEach((el) => {
  el.addEventListener('change', function () {
    if (this.checked) {
      switch(this.value) {
        case 'ДА': picFoot.classList.remove('disable')
        break
        case 'НЕТ': picFoot.classList.add('disable')
        break
      }
    }
  })
})