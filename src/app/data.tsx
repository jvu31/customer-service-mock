import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react'

interface Vehicle {
    id: number;
    make: string
    model: string
    color: string
    plate: string
    image: string
    subscription: string
}

interface Purchases {
    id: number;
    type: string
    date: string
    amount: number
    card: number
    location: string
}

interface Card {
    id: number;
    name: string;
    address: string
    city: string
    state: string
    zip: number
    country: string
    card_number: number
    cvv: number
    exp_date: string
}

interface Membership {
    id: number;
    type: string
    start: string
    renew: string
}

interface Subscriptions {
    id: number;
    type: string
    vehicle_id: number
}

interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string
    membership: Membership
    status: string
    subscriptions: Subscriptions[]
    vehicles: Vehicle[]
    purchases: Purchases[]
    card: Card
}

interface UserContextType {
  user: Customer[];
  setUser: Dispatch<SetStateAction<Customer[]>>;
}



const customers: Customer[] = [
  {
    "id": 6,
    "name": "Mark Neal",
    "email": "mark.neal73@example.com",
    "phone": "+1-977-608-7246",
    "status": "active",
    "membership": {
      "id": 5006,
      "type": "Platinum",
      "start": "2025-04-25",
      "renew": "2026-04-25"
    },
    "subscriptions": [
      {
        "id": 2006,
        "type": "Monthly",
        "vehicle_id": 1006
      }
    ],
    "vehicles": [
      {
        "id": 1006,
        "make": "Ford",
        "model": "Impala",
        "color": "DimGray",
        "plate": "PLT-1006",
        "image": "https://example.com/car-1.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4006,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 22.8,
        "card": 3006,
        "location": "Valenzuelaton Car Wash"
      }
    ],
    "card": {
      "id": 3006,
      "name": "Mark Neal",
      "address": "040 Frazier Mountain Suite 288",
      "city": "Valenzuelaton",
      "state": "TX",
      "zip": 44051,
      "country": "USA",
      "card_number": 4111111111113301,
      "cvv": 264,
      "exp_date": "12/26"
    }
  },
  {
    "id": 7,
    "name": "Jessica Robinson",
    "email": "jessica.robinson62@example.com",
    "phone": "349.022.2215x30794",
    "status": "overdue",
    "membership": {
      "id": 5007,
      "type": "Basic",
      "start": "2025-05-03",
      "renew": "2026-05-03"
    },
    "subscriptions": [
      {
        "id": 2007,
        "type": "Monthly",
        "vehicle_id": 1007
      }
    ],
    "vehicles": [
      {
        "id": 1007,
        "make": "Ford",
        "model": "F-150",
        "color": "Azure",
        "plate": "PLT-1007",
        "image": "https://example.com/car-2.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4007,
        "type": "Waxing",
        "date": "2025-05-05",
        "amount": 53.1,
        "card": 3007,
        "location": "Shelbybury Car Wash"
      }
    ],
    "card": {
      "id": 3007,
      "name": "Jessica Robinson",
      "address": "563 Vanessa Brook Suite 602",
      "city": "Shelbybury",
      "state": "FL",
      "zip": 51724,
      "country": "USA",
      "card_number": 4111111111115080,
      "cvv": 256,
      "exp_date": "12/26"
    }
  },
  {
    "id": 8,
    "name": "Jose Pitts",
    "email": "jose.pitts75@example.com",
    "phone": "001-165-815-0762x7125",
    "status": "active",
    "membership": {
      "id": 5008,
      "type": "Elite",
      "start": "2024-12-10",
      "renew": "2025-12-10"
    },
    "subscriptions": [
      {
        "id": 2008,
        "type": "Monthly",
        "vehicle_id": 1008
      }
    ],
    "vehicles": [
      {
        "id": 1008,
        "make": "BMW",
        "model": "Civic",
        "color": "DeepPink",
        "plate": "PLT-1008",
        "image": "https://example.com/car-3.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4008,
        "type": "Car Wash",
        "date": "2024-12-12",
        "amount": 64.63,
        "card": 3008,
        "location": "Andersonmouth Car Wash"
      }
    ],
    "card": {
      "id": 3008,
      "name": "Jose Pitts",
      "address": "95298 Rice Flat Suite 635",
      "city": "Andersonmouth",
      "state": "ME",
      "zip": 67023,
      "country": "USA",
      "card_number": 4111111111114631,
      "cvv": 716,
      "exp_date": "12/26"
    }
  },
  {
    "id": 9,
    "name": "Mary Howell",
    "email": "mary.howell15@example.com",
    "phone": "345-124-5816x298",
    "status": "active",
    "membership": {
      "id": 5009,
      "type": "Gold",
      "start": "2025-05-05",
      "renew": "2026-05-05"
    },
    "subscriptions": [
      {
        "id": 2009,
        "type": "Monthly",
        "vehicle_id": 1009
      }
    ],
    "vehicles": [
      {
        "id": 1009,
        "make": "Chevrolet",
        "model": "X5",
        "color": "Turquoise",
        "plate": "PLT-1009",
        "image": "https://example.com/car-4.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4009,
        "type": "Detailing",
        "date": "2025-05-07",
        "amount": 44.22,
        "card": 3009,
        "location": "Barberborough Car Wash"
      }
    ],
    "card": {
      "id": 3009,
      "name": "Mary Howell",
      "address": "306 Julia Mews Suite 746",
      "city": "Barberborough",
      "state": "OR",
      "zip": 70078,
      "country": "USA",
      "card_number": 4111111111116947,
      "cvv": 554,
      "exp_date": "12/26"
    }
  },
  {
    "id": 10,
    "name": "William Young",
    "email": "william.young75@example.com",
    "phone": "001-043-256-8686x124",
    "status": "overdue",
    "membership": {
      "id": 5010,
      "type": "Basic",
      "start": "2025-05-08",
      "renew": "2026-05-08"
    },
    "subscriptions": [
      {
        "id": 2010,
        "type": "Annual",
        "vehicle_id": 1010
      }
    ],
    "vehicles": [
      {
        "id": 1010,
        "make": "Toyota",
        "model": "F-150",
        "color": "DarkViolet",
        "plate": "PLT-1010",
        "image": "https://example.com/car-0.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4010,
        "type": "Interior Cleaning",
        "date": "2025-05-10",
        "amount": 64.78,
        "card": 3010,
        "location": "Lake Michael Car Wash"
      }
    ],
    "card": {
      "id": 3010,
      "name": "William Young",
      "address": "91798 Kevin Trafficway",
      "city": "Lake Michael",
      "state": "LA",
      "zip": 10307,
      "country": "USA",
      "card_number": 4111111111113286,
      "cvv": 730,
      "exp_date": "12/26"
    }
  },
  {
    "id": 11,
    "name": "Shane Jacobs",
    "email": "shane.jacobs78@example.com",
    "phone": "(123)687-8909x604",
    "status": "overdue",
    "membership": {
      "id": 5011,
      "type": "Gold",
      "start": "2025-01-29",
      "renew": "2026-01-29"
    },
    "subscriptions": [
      {
        "id": 2011,
        "type": "Monthly",
        "vehicle_id": 1011
      }
    ],
    "vehicles": [
      {
        "id": 1011,
        "make": "Chevrolet",
        "model": "F-150",
        "color": "NavajoWhite",
        "plate": "PLT-1011",
        "image": "https://example.com/car-1.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4011,
        "type": "Detailing",
        "date": "2025-01-31",
        "amount": 48.03,
        "card": 3011,
        "location": "Theresamouth Car Wash"
      }
    ],
    "card": {
      "id": 3011,
      "name": "Shane Jacobs",
      "address": "398 Thompson Ville Apt. 829",
      "city": "Theresamouth",
      "state": "SD",
      "zip": 11373,
      "country": "USA",
      "card_number": 4111111111116136,
      "cvv": 298,
      "exp_date": "12/26"
    }
  },
  {
    "id": 12,
    "name": "Craig Burnett",
    "email": "craig.burnett24@example.com",
    "phone": "001-697-536-1362x2101",
    "status": "overdue",
    "membership": {
      "id": 5012,
      "type": "Elite",
      "start": "2025-01-17",
      "renew": "2026-01-17"
    },
    "subscriptions": [
      {
        "id": 2012,
        "type": "Monthly",
        "vehicle_id": 1012
      }
    ],
    "vehicles": [
      {
        "id": 1012,
        "make": "Chevrolet",
        "model": "Model 3",
        "color": "Black",
        "plate": "PLT-1012",
        "image": "https://example.com/car-2.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4012,
        "type": "Interior Cleaning",
        "date": "2025-01-19",
        "amount": 46.9,
        "card": 3012,
        "location": "Tammyville Car Wash"
      }
    ],
    "card": {
      "id": 3012,
      "name": "Craig Burnett",
      "address": "14735 Cheryl Fort Suite 809",
      "city": "Tammyville",
      "state": "CA",
      "zip": 80453,
      "country": "USA",
      "card_number": 4111111111117019,
      "cvv": 551,
      "exp_date": "12/26"
    }
  },
  {
    "id": 13,
    "name": "Elizabeth Robinson",
    "email": "elizabeth.robinson77@example.com",
    "phone": "785-203-4485",
    "status": "active",
    "membership": {
      "id": 5013,
      "type": "Silver",
      "start": "2025-01-03",
      "renew": "2026-01-03"
    },
    "subscriptions": [
      {
        "id": 2013,
        "type": "Monthly",
        "vehicle_id": 1013
      }
    ],
    "vehicles": [
      {
        "id": 1013,
        "make": "Ford",
        "model": "Model 3",
        "color": "FireBrick",
        "plate": "PLT-1013",
        "image": "https://example.com/car-3.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4013,
        "type": "Interior Cleaning",
        "date": "2025-01-05",
        "amount": 52.14,
        "card": 3013,
        "location": "Adamsborough Car Wash"
      }
    ],
    "card": {
      "id": 3013,
      "name": "Elizabeth Robinson",
      "address": "4780 Davis Crossroad",
      "city": "Adamsborough",
      "state": "TN",
      "zip": 68833,
      "country": "USA",
      "card_number": 4111111111117260,
      "cvv": 492,
      "exp_date": "12/26"
    }
  },
  {
    "id": 14,
    "name": "Robin Ramirez",
    "email": "robin.ramirez12@example.com",
    "phone": "935-119-7104x5068",
    "status": "overdue",
    "membership": {
      "id": 5014,
      "type": "Elite",
      "start": "2025-04-16",
      "renew": "2026-04-16"
    },
    "subscriptions": [
      {
        "id": 2014,
        "type": "Annual",
        "vehicle_id": 1014
      }
    ],
    "vehicles": [
      {
        "id": 1014,
        "make": "Honda",
        "model": "Impala",
        "color": "Gray",
        "plate": "PLT-1014",
        "image": "https://example.com/car-4.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4014,
        "type": "Car Wash",
        "date": "2025-04-18",
        "amount": 40.07,
        "card": 3014,
        "location": "Port Vanessaberg Car Wash"
      }
    ],
    "card": {
      "id": 3014,
      "name": "Robin Ramirez",
      "address": "5357 Shawn Lakes Apt. 268",
      "city": "Port Vanessaberg",
      "state": "DC",
      "zip": 32601,
      "country": "USA",
      "card_number": 4111111111115964,
      "cvv": 434,
      "exp_date": "12/26"
    }
  },
  {
    "id": 15,
    "name": "Casey Strickland",
    "email": "casey.strickland96@example.com",
    "phone": "830.718.0529",
    "status": "overdue",
    "membership": {
      "id": 5015,
      "type": "Silver",
      "start": "2025-01-27",
      "renew": "2026-01-27"
    },
    "subscriptions": [
      {
        "id": 2015,
        "type": "Monthly",
        "vehicle_id": 1015
      }
    ],
    "vehicles": [
      {
        "id": 1015,
        "make": "Tesla",
        "model": "X5",
        "color": "Coral",
        "plate": "PLT-1015",
        "image": "https://example.com/car-0.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4015,
        "type": "Waxing",
        "date": "2025-01-29",
        "amount": 42.24,
        "card": 3015,
        "location": "North Larrytown Car Wash"
      }
    ],
    "card": {
      "id": 3015,
      "name": "Casey Strickland",
      "address": "3399 Michael Forge",
      "city": "North Larrytown",
      "state": "NJ",
      "zip": 76514,
      "country": "USA",
      "card_number": 4111111111117313,
      "cvv": 324,
      "exp_date": "12/26"
    }
  },
  {
    "id": 16,
    "name": "Pamela Smith",
    "email": "pamela.smith14@example.com",
    "phone": "(736)842-7654x434",
    "status": "overdue",
    "membership": {
      "id": 5016,
      "type": "Gold",
      "start": "2025-06-01",
      "renew": "2026-06-01"
    },
    "subscriptions": [
      {
        "id": 2016,
        "type": "Monthly",
        "vehicle_id": 1016
      }
    ],
    "vehicles": [
      {
        "id": 1016,
        "make": "Toyota",
        "model": "Impala",
        "color": "FireBrick",
        "plate": "PLT-1016",
        "image": "https://example.com/car-1.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4016,
        "type": "Waxing",
        "date": "2025-06-03",
        "amount": 52.82,
        "card": 3016,
        "location": "Romeroton Car Wash"
      }
    ],
    "card": {
      "id": 3016,
      "name": "Pamela Smith",
      "address": "610 Peterson Shoals",
      "city": "Romeroton",
      "state": "MT",
      "zip": 28075,
      "country": "USA",
      "card_number": 4111111111119418,
      "cvv": 774,
      "exp_date": "12/26"
    }
  },
  {
    "id": 17,
    "name": "Heidi Villegas",
    "email": "heidi.villegas74@example.com",
    "phone": "(749)062-2235",
    "status": "active",
    "membership": {
      "id": 5017,
      "type": "Gold",
      "start": "2025-04-17",
      "renew": "2026-04-17"
    },
    "subscriptions": [
      {
        "id": 2017,
        "type": "Monthly",
        "vehicle_id": 1017
      }
    ],
    "vehicles": [
      {
        "id": 1017,
        "make": "BMW",
        "model": "Impala",
        "color": "Turquoise",
        "plate": "PLT-1017",
        "image": "https://example.com/car-2.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4017,
        "type": "Car Wash",
        "date": "2025-04-19",
        "amount": 38.42,
        "card": 3017,
        "location": "Wrightland Car Wash"
      }
    ],
    "card": {
      "id": 3017,
      "name": "Heidi Villegas",
      "address": "022 Karen Meadows Suite 255",
      "city": "Wrightland",
      "state": "NE",
      "zip": 32337,
      "country": "USA",
      "card_number": 4111111111118323,
      "cvv": 712,
      "exp_date": "12/26"
    }
  },
  {
    "id": 18,
    "name": "Monica Kelly",
    "email": "monica.kelly49@example.com",
    "phone": "000.114.8037x5387",
    "status": "active",
    "membership": {
      "id": 5018,
      "type": "Elite",
      "start": "2025-04-06",
      "renew": "2026-04-06"
    },
    "subscriptions": [
      {
        "id": 2018,
        "type": "Annual",
        "vehicle_id": 1018
      }
    ],
    "vehicles": [
      {
        "id": 1018,
        "make": "Chevrolet",
        "model": "Altima",
        "color": "DarkGray",
        "plate": "PLT-1018",
        "image": "https://example.com/car-3.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4018,
        "type": "Car Wash",
        "date": "2025-04-08",
        "amount": 19.99,
        "card": 3018,
        "location": "Lake Jeffrey Car Wash"
      }
    ],
    "card": {
      "id": 3018,
      "name": "Monica Kelly",
      "address": "173 Stephanie Knoll",
      "city": "Lake Jeffrey",
      "state": "TN",
      "zip": 88460,
      "country": "USA",
      "card_number": 4111111111112116,
      "cvv": 156,
      "exp_date": "12/26"
    }
  },
  {
    "id": 19,
    "name": "Shirley Lloyd",
    "email": "shirley.lloyd96@example.com",
    "phone": "7696282584",
    "status": "active",
    "membership": {
      "id": 5019,
      "type": "Gold",
      "start": "2025-05-09",
      "renew": "2026-05-09"
    },
    "subscriptions": [
      {
        "id": 2019,
        "type": "Monthly",
        "vehicle_id": 1019
      }
    ],
    "vehicles": [
      {
        "id": 1019,
        "make": "Toyota",
        "model": "Civic",
        "color": "DeepPink",
        "plate": "PLT-1019",
        "image": "https://example.com/car-4.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4019,
        "type": "Interior Cleaning",
        "date": "2025-05-11",
        "amount": 61.39,
        "card": 3019,
        "location": "Michaelburgh Car Wash"
      }
    ],
    "card": {
      "id": 3019,
      "name": "Shirley Lloyd",
      "address": "7574 Curry Forge Suite 106",
      "city": "Michaelburgh",
      "state": "WA",
      "zip": 45376,
      "country": "USA",
      "card_number": 4111111111118450,
      "cvv": 189,
      "exp_date": "12/26"
    }
  },
  {
    "id": 20,
    "name": "Kenneth Mullins",
    "email": "kenneth.mullins60@example.com",
    "phone": "004.409.2187",
    "status": "overdue",
    "membership": {
      "id": 5020,
      "type": "Silver",
      "start": "2025-05-04",
      "renew": "2026-05-04"
    },
    "subscriptions": [
      {
        "id": 2020,
        "type": "Annual",
        "vehicle_id": 1020
      }
    ],
    "vehicles": [
      {
        "id": 1020,
        "make": "Nissan",
        "model": "X5",
        "color": "Lavender",
        "plate": "PLT-1020",
        "image": "https://example.com/car-0.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4020,
        "type": "Waxing",
        "date": "2025-05-06",
        "amount": 49.36,
        "card": 3020,
        "location": "South Joseview Car Wash"
      }
    ],
    "card": {
      "id": 3020,
      "name": "Kenneth Mullins",
      "address": "6328 Diana Extensions",
      "city": "South Joseview",
      "state": "MS",
      "zip": 87262,
      "country": "USA",
      "card_number": 4111111111116157,
      "cvv": 911,
      "exp_date": "12/26"
    }
  },
  {
    "id": 21,
    "name": "John Simmons",
    "email": "john.simmons29@example.com",
    "phone": "317.664.6966",
    "status": "active",
    "membership": {
      "id": 5021,
      "type": "Basic",
      "start": "2025-01-01",
      "renew": "2026-01-01"
    },
    "subscriptions": [
      {
        "id": 2021,
        "type": "Annual",
        "vehicle_id": 1021
      }
    ],
    "vehicles": [
      {
        "id": 1021,
        "make": "BMW",
        "model": "X5",
        "color": "Moccasin",
        "plate": "PLT-1021",
        "image": "https://example.com/car-1.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4021,
        "type": "Interior Cleaning",
        "date": "2025-01-03",
        "amount": 23.06,
        "card": 3021,
        "location": "North John Car Wash"
      }
    ],
    "card": {
      "id": 3021,
      "name": "John Simmons",
      "address": "50630 Jose Lodge Suite 468",
      "city": "North John",
      "state": "AL",
      "zip": 11914,
      "country": "USA",
      "card_number": 4111111111113968,
      "cvv": 414,
      "exp_date": "12/26"
    }
  },
  {
    "id": 22,
    "name": "Antonio Martinez",
    "email": "antonio.martinez79@example.com",
    "phone": "001-559-707-7536x216",
    "status": "overdue",
    "membership": {
      "id": 5022,
      "type": "Basic",
      "start": "2025-04-15",
      "renew": "2026-04-15"
    },
    "subscriptions": [
      {
        "id": 2022,
        "type": "Annual",
        "vehicle_id": 1022
      }
    ],
    "vehicles": [
      {
        "id": 1022,
        "make": "Ford",
        "model": "Camry",
        "color": "ForestGreen",
        "plate": "PLT-1022",
        "image": "https://example.com/car-2.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4022,
        "type": "Waxing",
        "date": "2025-04-17",
        "amount": 23.72,
        "card": 3022,
        "location": "Sandrachester Car Wash"
      }
    ],
    "card": {
      "id": 3022,
      "name": "Antonio Martinez",
      "address": "59780 Joel Ways Suite 792",
      "city": "Sandrachester",
      "state": "NE",
      "zip": 35160,
      "country": "USA",
      "card_number": 4111111111115966,
      "cvv": 891,
      "exp_date": "12/26"
    }
  },
  {
    "id": 23,
    "name": "Shane Green",
    "email": "shane.green47@example.com",
    "phone": "+1-473-188-5576x7979",
    "status": "overdue",
    "membership": {
      "id": 5023,
      "type": "Platinum",
      "start": "2024-12-21",
      "renew": "2025-12-21"
    },
    "subscriptions": [
      {
        "id": 2023,
        "type": "Annual",
        "vehicle_id": 1023
      }
    ],
    "vehicles": [
      {
        "id": 1023,
        "make": "Honda",
        "model": "Civic",
        "color": "IndianRed",
        "plate": "PLT-1023",
        "image": "https://example.com/car-3.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4023,
        "type": "Car Wash",
        "date": "2024-12-23",
        "amount": 67.86,
        "card": 3023,
        "location": "Grayberg Car Wash"
      }
    ],
    "card": {
      "id": 3023,
      "name": "Shane Green",
      "address": "468 Faulkner Walks Apt. 464",
      "city": "Grayberg",
      "state": "NC",
      "zip": 75856,
      "country": "USA",
      "card_number": 4111111111117027,
      "cvv": 981,
      "exp_date": "12/26"
    }
  },
  {
    "id": 24,
    "name": "Joseph Schneider",
    "email": "joseph.schneider35@example.com",
    "phone": "(585)944-0829x44234",
    "status": "overdue",
    "membership": {
      "id": 5024,
      "type": "Basic",
      "start": "2025-03-04",
      "renew": "2026-03-04"
    },
    "subscriptions": [
      {
        "id": 2024,
        "type": "Annual",
        "vehicle_id": 1024
      }
    ],
    "vehicles": [
      {
        "id": 1024,
        "make": "Nissan",
        "model": "Civic",
        "color": "Sienna",
        "plate": "PLT-1024",
        "image": "https://example.com/car-4.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4024,
        "type": "Waxing",
        "date": "2025-03-06",
        "amount": 25.36,
        "card": 3024,
        "location": "Tinaton Car Wash"
      }
    ],
    "card": {
      "id": 3024,
      "name": "Joseph Schneider",
      "address": "74475 Suarez Oval",
      "city": "Tinaton",
      "state": "DE",
      "zip": 59855,
      "country": "USA",
      "card_number": 4111111111115263,
      "cvv": 983,
      "exp_date": "12/26"
    }
  },
  {
    "id": 25,
    "name": "Samuel Cook",
    "email": "samuel.cook63@example.com",
    "phone": "001-651-948-3684x79779",
    "status": "active",
    "membership": {
      "id": 5025,
      "type": "Basic",
      "start": "2025-03-25",
      "renew": "2026-03-25"
    },
    "subscriptions": [
      {
        "id": 2025,
        "type": "Annual",
        "vehicle_id": 1025
      }
    ],
    "vehicles": [
      {
        "id": 1025,
        "make": "Nissan",
        "model": "Altima",
        "color": "Teal",
        "plate": "PLT-1025",
        "image": "https://example.com/car-0.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4025,
        "type": "Car Wash",
        "date": "2025-03-27",
        "amount": 52.15,
        "card": 3025,
        "location": "North Oscar Car Wash"
      }
    ],
    "card": {
      "id": 3025,
      "name": "Samuel Cook",
      "address": "484 Schwartz Villages Apt. 720",
      "city": "North Oscar",
      "state": "WI",
      "zip": 11565,
      "country": "USA",
      "card_number": 4111111111112770,
      "cvv": 927,
      "exp_date": "12/26"
    }
  },
  {
    "id": 26,
    "name": "Danny Peterson",
    "email": "danny.peterson49@example.com",
    "phone": "(517)301-8890",
    "status": "overdue",
    "membership": {
      "id": 5026,
      "type": "Basic",
      "start": "2025-01-27",
      "renew": "2026-01-27"
    },
    "subscriptions": [
      {
        "id": 2026,
        "type": "Annual",
        "vehicle_id": 1026
      }
    ],
    "vehicles": [
      {
        "id": 1026,
        "make": "Ford",
        "model": "Impala",
        "color": "DarkSlateGray",
        "plate": "PLT-1026",
        "image": "https://example.com/car-1.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4026,
        "type": "Waxing",
        "date": "2025-01-29",
        "amount": 74.28,
        "card": 3026,
        "location": "Martinezbury Car Wash"
      }
    ],
    "card": {
      "id": 3026,
      "name": "Danny Peterson",
      "address": "79784 Booker Meadows Apt. 705",
      "city": "Martinezbury",
      "state": "KS",
      "zip": 15713,
      "country": "USA",
      "card_number": 4111111111119308,
      "cvv": 687,
      "exp_date": "12/26"
    }
  },
  {
    "id": 27,
    "name": "Kaitlyn Hall",
    "email": "kaitlyn.hall38@example.com",
    "phone": "180.944.1295",
    "status": "overdue",
    "membership": {
      "id": 5027,
      "type": "Platinum",
      "start": "2025-03-27",
      "renew": "2026-03-27"
    },
    "subscriptions": [
      {
        "id": 2027,
        "type": "Monthly",
        "vehicle_id": 1027
      }
    ],
    "vehicles": [
      {
        "id": 1027,
        "make": "Chevrolet",
        "model": "Model 3",
        "color": "Cyan",
        "plate": "PLT-1027",
        "image": "https://example.com/car-2.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4027,
        "type": "Waxing",
        "date": "2025-03-29",
        "amount": 17.98,
        "card": 3027,
        "location": "Adamside Car Wash"
      }
    ],
    "card": {
      "id": 3027,
      "name": "Kaitlyn Hall",
      "address": "51046 Kimberly Ports",
      "city": "Adamside",
      "state": "SD",
      "zip": 18992,
      "country": "USA",
      "card_number": 4111111111112056,
      "cvv": 896,
      "exp_date": "12/26"
    }
  },
  {
    "id": 28,
    "name": "Christopher King",
    "email": "christopher.king46@example.com",
    "phone": "001-726-054-2608x740",
    "status": "active",
    "membership": {
      "id": 5028,
      "type": "Silver",
      "start": "2024-12-04",
      "renew": "2025-12-04"
    },
    "subscriptions": [
      {
        "id": 2028,
        "type": "Annual",
        "vehicle_id": 1028
      }
    ],
    "vehicles": [
      {
        "id": 1028,
        "make": "Toyota",
        "model": "Impala",
        "color": "Linen",
        "plate": "PLT-1028",
        "image": "https://example.com/car-3.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4028,
        "type": "Detailing",
        "date": "2024-12-06",
        "amount": 29.57,
        "card": 3028,
        "location": "Garyfurt Car Wash"
      }
    ],
    "card": {
      "id": 3028,
      "name": "Christopher King",
      "address": "23219 Clark Prairie Suite 288",
      "city": "Garyfurt",
      "state": "LA",
      "zip": 99514,
      "country": "USA",
      "card_number": 4111111111118483,
      "cvv": 389,
      "exp_date": "12/26"
    }
  },
  {
    "id": 29,
    "name": "Vickie Rodriguez",
    "email": "vickie.rodriguez22@example.com",
    "phone": "001-129-875-0138x251",
    "status": "overdue",
    "membership": {
      "id": 5029,
      "type": "Gold",
      "start": "2025-02-12",
      "renew": "2026-02-12"
    },
    "subscriptions": [
      {
        "id": 2029,
        "type": "Annual",
        "vehicle_id": 1029
      }
    ],
    "vehicles": [
      {
        "id": 1029,
        "make": "Chevrolet",
        "model": "X5",
        "color": "DarkTurquoise",
        "plate": "PLT-1029",
        "image": "https://example.com/car-4.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4029,
        "type": "Waxing",
        "date": "2025-02-14",
        "amount": 22.57,
        "card": 3029,
        "location": "Brownfurt Car Wash"
      }
    ],
    "card": {
      "id": 3029,
      "name": "Vickie Rodriguez",
      "address": "732 Contreras Heights Apt. 833",
      "city": "Brownfurt",
      "state": "MD",
      "zip": 50501,
      "country": "USA",
      "card_number": 4111111111111674,
      "cvv": 939,
      "exp_date": "12/26"
    }
  },
  {
    "id": 30,
    "name": "Brian Hale",
    "email": "brian.hale90@example.com",
    "phone": "772-565-0077",
    "status": "overdue",
    "membership": {
      "id": 5030,
      "type": "Elite",
      "start": "2025-05-21",
      "renew": "2026-05-21"
    },
    "subscriptions": [
      {
        "id": 2030,
        "type": "Monthly",
        "vehicle_id": 1030
      }
    ],
    "vehicles": [
      {
        "id": 1030,
        "make": "Tesla",
        "model": "Camry",
        "color": "DarkMagenta",
        "plate": "PLT-1030",
        "image": "https://example.com/car-0.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4030,
        "type": "Waxing",
        "date": "2025-05-23",
        "amount": 51.23,
        "card": 3030,
        "location": "New Sarahton Car Wash"
      }
    ],
    "card": {
      "id": 3030,
      "name": "Brian Hale",
      "address": "869 Reed Street Suite 103",
      "city": "New Sarahton",
      "state": "KY",
      "zip": 57210,
      "country": "USA",
      "card_number": 4111111111119647,
      "cvv": 291,
      "exp_date": "12/26"
    }
  },
  {
    "id": 31,
    "name": "Jessica Ortega",
    "email": "jessica.ortega23@example.com",
    "phone": "283-189-1218x0751",
    "status": "overdue",
    "membership": {
      "id": 5031,
      "type": "Elite",
      "start": "2025-02-07",
      "renew": "2026-02-07"
    },
    "subscriptions": [
      {
        "id": 2031,
        "type": "Monthly",
        "vehicle_id": 1031
      }
    ],
    "vehicles": [
      {
        "id": 1031,
        "make": "BMW",
        "model": "Model 3",
        "color": "DarkRed",
        "plate": "PLT-1031",
        "image": "https://example.com/car-1.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4031,
        "type": "Waxing",
        "date": "2025-02-09",
        "amount": 78.08,
        "card": 3031,
        "location": "East Patrickchester Car Wash"
      }
    ],
    "card": {
      "id": 3031,
      "name": "Jessica Ortega",
      "address": "6348 Angela Plain Apt. 930",
      "city": "East Patrickchester",
      "state": "SC",
      "zip": 82236,
      "country": "USA",
      "card_number": 4111111111116028,
      "cvv": 162,
      "exp_date": "12/26"
    }
  },
  {
    "id": 32,
    "name": "Wendy Mcfarland",
    "email": "wendy.mcfarland56@example.com",
    "phone": "623.354.6577x400",
    "status": "active",
    "membership": {
      "id": 5032,
      "type": "Basic",
      "start": "2024-12-10",
      "renew": "2025-12-10"
    },
    "subscriptions": [
      {
        "id": 2032,
        "type": "Annual",
        "vehicle_id": 1032
      }
    ],
    "vehicles": [
      {
        "id": 1032,
        "make": "Ford",
        "model": "Altima",
        "color": "WhiteSmoke",
        "plate": "PLT-1032",
        "image": "https://example.com/car-2.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4032,
        "type": "Car Wash",
        "date": "2024-12-12",
        "amount": 72.09,
        "card": 3032,
        "location": "Stewartfurt Car Wash"
      }
    ],
    "card": {
      "id": 3032,
      "name": "Wendy Mcfarland",
      "address": "39291 Jensen Plains",
      "city": "Stewartfurt",
      "state": "ID",
      "zip": 16293,
      "country": "USA",
      "card_number": 4111111111113673,
      "cvv": 920,
      "exp_date": "12/26"
    }
  },
  {
    "id": 33,
    "name": "Daniel Klein",
    "email": "daniel.klein51@example.com",
    "phone": "252-015-6262x09150",
    "status": "active",
    "membership": {
      "id": 5033,
      "type": "Silver",
      "start": "2025-01-02",
      "renew": "2026-01-02"
    },
    "subscriptions": [
      {
        "id": 2033,
        "type": "Annual",
        "vehicle_id": 1033
      }
    ],
    "vehicles": [
      {
        "id": 1033,
        "make": "Chevrolet",
        "model": "X5",
        "color": "Teal",
        "plate": "PLT-1033",
        "image": "https://example.com/car-3.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4033,
        "type": "Detailing",
        "date": "2025-01-04",
        "amount": 52.53,
        "card": 3033,
        "location": "Harrisfort Car Wash"
      }
    ],
    "card": {
      "id": 3033,
      "name": "Daniel Klein",
      "address": "891 Brandon Passage",
      "city": "Harrisfort",
      "state": "RI",
      "zip": 48095,
      "country": "USA",
      "card_number": 4111111111111578,
      "cvv": 516,
      "exp_date": "12/26"
    }
  },
  {
    "id": 34,
    "name": "Manuel Jensen",
    "email": "manuel.jensen43@example.com",
    "phone": "144.414.2842x9590",
    "status": "overdue",
    "membership": {
      "id": 5034,
      "type": "Elite",
      "start": "2025-05-18",
      "renew": "2026-05-18"
    },
    "subscriptions": [
      {
        "id": 2034,
        "type": "Annual",
        "vehicle_id": 1034
      }
    ],
    "vehicles": [
      {
        "id": 1034,
        "make": "BMW",
        "model": "A4",
        "color": "MediumPurple",
        "plate": "PLT-1034",
        "image": "https://example.com/car-4.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4034,
        "type": "Detailing",
        "date": "2025-05-20",
        "amount": 28.87,
        "card": 3034,
        "location": "Floresfurt Car Wash"
      }
    ],
    "card": {
      "id": 3034,
      "name": "Manuel Jensen",
      "address": "2001 Julia Loop",
      "city": "Floresfurt",
      "state": "WV",
      "zip": 36397,
      "country": "USA",
      "card_number": 4111111111118159,
      "cvv": 209,
      "exp_date": "12/26"
    }
  },
  {
    "id": 35,
    "name": "Matthew Sanchez",
    "email": "matthew.sanchez59@example.com",
    "phone": "8129494850",
    "status": "overdue",
    "membership": {
      "id": 5035,
      "type": "Platinum",
      "start": "2025-01-21",
      "renew": "2026-01-21"
    },
    "subscriptions": [
      {
        "id": 2035,
        "type": "Monthly",
        "vehicle_id": 1035
      }
    ],
    "vehicles": [
      {
        "id": 1035,
        "make": "Tesla",
        "model": "Impala",
        "color": "MediumVioletRed",
        "plate": "PLT-1035",
        "image": "https://example.com/car-0.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4035,
        "type": "Waxing",
        "date": "2025-01-23",
        "amount": 43.41,
        "card": 3035,
        "location": "Gonzaleshaven Car Wash"
      }
    ],
    "card": {
      "id": 3035,
      "name": "Matthew Sanchez",
      "address": "39754 Amanda Trace Suite 603",
      "city": "Gonzaleshaven",
      "state": "WA",
      "zip": 71909,
      "country": "USA",
      "card_number": 4111111111117004,
      "cvv": 150,
      "exp_date": "12/26"
    }
  },
  {
    "id": 36,
    "name": "Lawrence Weaver",
    "email": "lawrence.weaver63@example.com",
    "phone": "873-913-6403",
    "status": "overdue",
    "membership": {
      "id": 5036,
      "type": "Basic",
      "start": "2025-04-26",
      "renew": "2026-04-26"
    },
    "subscriptions": [
      {
        "id": 2036,
        "type": "Annual",
        "vehicle_id": 1036
      }
    ],
    "vehicles": [
      {
        "id": 1036,
        "make": "Chevrolet",
        "model": "Civic",
        "color": "BlanchedAlmond",
        "plate": "PLT-1036",
        "image": "https://example.com/car-1.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4036,
        "type": "Interior Cleaning",
        "date": "2025-04-28",
        "amount": 60.21,
        "card": 3036,
        "location": "Carrollside Car Wash"
      }
    ],
    "card": {
      "id": 3036,
      "name": "Lawrence Weaver",
      "address": "526 John Expressway Suite 245",
      "city": "Carrollside",
      "state": "NV",
      "zip": 65644,
      "country": "USA",
      "card_number": 4111111111113091,
      "cvv": 797,
      "exp_date": "12/26"
    }
  },
  {
    "id": 37,
    "name": "Mercedes Bennett",
    "email": "mercedes.bennett69@example.com",
    "phone": "631.678.8414x995",
    "status": "overdue",
    "membership": {
      "id": 5037,
      "type": "Gold",
      "start": "2025-04-27",
      "renew": "2026-04-27"
    },
    "subscriptions": [
      {
        "id": 2037,
        "type": "Monthly",
        "vehicle_id": 1037
      }
    ],
    "vehicles": [
      {
        "id": 1037,
        "make": "Audi",
        "model": "Camry",
        "color": "LightGoldenRodYellow",
        "plate": "PLT-1037",
        "image": "https://example.com/car-2.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4037,
        "type": "Detailing",
        "date": "2025-04-29",
        "amount": 24.52,
        "card": 3037,
        "location": "Lake Deborahstad Car Wash"
      }
    ],
    "card": {
      "id": 3037,
      "name": "Mercedes Bennett",
      "address": "001 Tammie Locks Apt. 736",
      "city": "Lake Deborahstad",
      "state": "NE",
      "zip": 65866,
      "country": "USA",
      "card_number": 4111111111114202,
      "cvv": 884,
      "exp_date": "12/26"
    }
  },
  {
    "id": 38,
    "name": "Dr. Brandon Hancock",
    "email": "dr..hancock57@example.com",
    "phone": "(674)958-9481x126",
    "status": "overdue",
    "membership": {
      "id": 5038,
      "type": "Silver",
      "start": "2025-03-19",
      "renew": "2026-03-19"
    },
    "subscriptions": [
      {
        "id": 2038,
        "type": "Monthly",
        "vehicle_id": 1038
      }
    ],
    "vehicles": [
      {
        "id": 1038,
        "make": "Ford",
        "model": "Altima",
        "color": "MediumSeaGreen",
        "plate": "PLT-1038",
        "image": "https://example.com/car-3.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4038,
        "type": "Detailing",
        "date": "2025-03-21",
        "amount": 78.45,
        "card": 3038,
        "location": "Peterfort Car Wash"
      }
    ],
    "card": {
      "id": 3038,
      "name": "Dr. Brandon Hancock",
      "address": "6460 Carol Keys Apt. 402",
      "city": "Peterfort",
      "state": "OR",
      "zip": 48800,
      "country": "USA",
      "card_number": 4111111111116231,
      "cvv": 610,
      "exp_date": "12/26"
    }
  },
  {
    "id": 39,
    "name": "Erika Rivera",
    "email": "erika.rivera58@example.com",
    "phone": "648-020-2862x01149",
    "status": "active",
    "membership": {
      "id": 5039,
      "type": "Silver",
      "start": "2025-03-08",
      "renew": "2026-03-08"
    },
    "subscriptions": [
      {
        "id": 2039,
        "type": "Annual",
        "vehicle_id": 1039
      }
    ],
    "vehicles": [
      {
        "id": 1039,
        "make": "Audi",
        "model": "Impala",
        "color": "Cornsilk",
        "plate": "PLT-1039",
        "image": "https://example.com/car-4.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4039,
        "type": "Detailing",
        "date": "2025-03-10",
        "amount": 47.12,
        "card": 3039,
        "location": "Port Tom Car Wash"
      }
    ],
    "card": {
      "id": 3039,
      "name": "Erika Rivera",
      "address": "693 Michael Roads",
      "city": "Port Tom",
      "state": "VA",
      "zip": 48301,
      "country": "USA",
      "card_number": 4111111111115954,
      "cvv": 529,
      "exp_date": "12/26"
    }
  },
  {
    "id": 40,
    "name": "Michael Williams",
    "email": "michael.williams27@example.com",
    "phone": "+1-088-180-4134x068",
    "status": "overdue",
    "membership": {
      "id": 5040,
      "type": "Platinum",
      "start": "2025-04-03",
      "renew": "2026-04-03"
    },
    "subscriptions": [
      {
        "id": 2040,
        "type": "Monthly",
        "vehicle_id": 1040
      }
    ],
    "vehicles": [
      {
        "id": 1040,
        "make": "Ford",
        "model": "X5",
        "color": "Maroon",
        "plate": "PLT-1040",
        "image": "https://example.com/car-0.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4040,
        "type": "Interior Cleaning",
        "date": "2025-04-05",
        "amount": 18.05,
        "card": 3040,
        "location": "North Melissa Car Wash"
      }
    ],
    "card": {
      "id": 3040,
      "name": "Michael Williams",
      "address": "83107 Miller Crossroad Apt. 991",
      "city": "North Melissa",
      "state": "NY",
      "zip": 18231,
      "country": "USA",
      "card_number": 4111111111116943,
      "cvv": 524,
      "exp_date": "12/26"
    }
  },
  {
    "id": 41,
    "name": "Michael Nguyen",
    "email": "michael.nguyen98@example.com",
    "phone": "040-610-6009x216",
    "status": "active",
    "membership": {
      "id": 5041,
      "type": "Basic",
      "start": "2025-03-18",
      "renew": "2026-03-18"
    },
    "subscriptions": [
      {
        "id": 2041,
        "type": "Annual",
        "vehicle_id": 1041
      }
    ],
    "vehicles": [
      {
        "id": 1041,
        "make": "Audi",
        "model": "A4",
        "color": "MediumOrchid",
        "plate": "PLT-1041",
        "image": "https://example.com/car-1.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4041,
        "type": "Waxing",
        "date": "2025-03-20",
        "amount": 20.87,
        "card": 3041,
        "location": "North Robert Car Wash"
      }
    ],
    "card": {
      "id": 3041,
      "name": "Michael Nguyen",
      "address": "705 Reyes Meadows Suite 640",
      "city": "North Robert",
      "state": "ND",
      "zip": 71533,
      "country": "USA",
      "card_number": 4111111111111337,
      "cvv": 871,
      "exp_date": "12/26"
    }
  },
  {
    "id": 42,
    "name": "Samantha Schwartz",
    "email": "samantha.schwartz71@example.com",
    "phone": "231.963.6278x30409",
    "status": "overdue",
    "membership": {
      "id": 5042,
      "type": "Platinum",
      "start": "2025-02-22",
      "renew": "2026-02-22"
    },
    "subscriptions": [
      {
        "id": 2042,
        "type": "Monthly",
        "vehicle_id": 1042
      }
    ],
    "vehicles": [
      {
        "id": 1042,
        "make": "Nissan",
        "model": "Altima",
        "color": "DarkTurquoise",
        "plate": "PLT-1042",
        "image": "https://example.com/car-2.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4042,
        "type": "Car Wash",
        "date": "2025-02-24",
        "amount": 40.02,
        "card": 3042,
        "location": "West Amandaborough Car Wash"
      }
    ],
    "card": {
      "id": 3042,
      "name": "Samantha Schwartz",
      "address": "83033 Bradley Rapid Apt. 606",
      "city": "West Amandaborough",
      "state": "IL",
      "zip": 72361,
      "country": "USA",
      "card_number": 4111111111115380,
      "cvv": 331,
      "exp_date": "12/26"
    }
  },
  {
    "id": 43,
    "name": "Kenneth Holmes",
    "email": "kenneth.holmes46@example.com",
    "phone": "(602)960-5781x489",
    "status": "overdue",
    "membership": {
      "id": 5043,
      "type": "Basic",
      "start": "2025-02-16",
      "renew": "2026-02-16"
    },
    "subscriptions": [
      {
        "id": 2043,
        "type": "Annual",
        "vehicle_id": 1043
      }
    ],
    "vehicles": [
      {
        "id": 1043,
        "make": "Honda",
        "model": "Model 3",
        "color": "DarkOrchid",
        "plate": "PLT-1043",
        "image": "https://example.com/car-3.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4043,
        "type": "Car Wash",
        "date": "2025-02-18",
        "amount": 36.95,
        "card": 3043,
        "location": "South Johnstad Car Wash"
      }
    ],
    "card": {
      "id": 3043,
      "name": "Kenneth Holmes",
      "address": "28922 Butler Glens Apt. 419",
      "city": "South Johnstad",
      "state": "NH",
      "zip": 45126,
      "country": "USA",
      "card_number": 4111111111115724,
      "cvv": 275,
      "exp_date": "12/26"
    }
  },
  {
    "id": 44,
    "name": "Jose Thomas",
    "email": "jose.thomas47@example.com",
    "phone": "(918)924-6279x8550",
    "status": "overdue",
    "membership": {
      "id": 5044,
      "type": "Platinum",
      "start": "2025-03-11",
      "renew": "2026-03-11"
    },
    "subscriptions": [
      {
        "id": 2044,
        "type": "Annual",
        "vehicle_id": 1044
      }
    ],
    "vehicles": [
      {
        "id": 1044,
        "make": "Honda",
        "model": "A4",
        "color": "Red",
        "plate": "PLT-1044",
        "image": "https://example.com/car-4.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4044,
        "type": "Detailing",
        "date": "2025-03-13",
        "amount": 65.22,
        "card": 3044,
        "location": "East Cassandra Car Wash"
      }
    ],
    "card": {
      "id": 3044,
      "name": "Jose Thomas",
      "address": "65765 Donna Junction Suite 063",
      "city": "East Cassandra",
      "state": "RI",
      "zip": 86881,
      "country": "USA",
      "card_number": 4111111111111264,
      "cvv": 961,
      "exp_date": "12/26"
    }
  },
  {
    "id": 45,
    "name": "Sarah Garner",
    "email": "sarah.garner29@example.com",
    "phone": "993-361-6688",
    "status": "active",
    "membership": {
      "id": 5045,
      "type": "Platinum",
      "start": "2025-03-13",
      "renew": "2026-03-13"
    },
    "subscriptions": [
      {
        "id": 2045,
        "type": "Monthly",
        "vehicle_id": 1045
      }
    ],
    "vehicles": [
      {
        "id": 1045,
        "make": "Audi",
        "model": "Model 3",
        "color": "OldLace",
        "plate": "PLT-1045",
        "image": "https://example.com/car-0.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4045,
        "type": "Waxing",
        "date": "2025-03-15",
        "amount": 26.41,
        "card": 3045,
        "location": "East Laura Car Wash"
      }
    ],
    "card": {
      "id": 3045,
      "name": "Sarah Garner",
      "address": "847 Shaw Forges Apt. 624",
      "city": "East Laura",
      "state": "RI",
      "zip": 69589,
      "country": "USA",
      "card_number": 4111111111117595,
      "cvv": 258,
      "exp_date": "12/26"
    }
  },
  {
    "id": 46,
    "name": "Kayla Mccarty",
    "email": "kayla.mccarty87@example.com",
    "phone": "+1-217-399-5106x50397",
    "status": "overdue",
    "membership": {
      "id": 5046,
      "type": "Elite",
      "start": "2024-12-08",
      "renew": "2025-12-08"
    },
    "subscriptions": [
      {
        "id": 2046,
        "type": "Monthly",
        "vehicle_id": 1046
      }
    ],
    "vehicles": [
      {
        "id": 1046,
        "make": "Chevrolet",
        "model": "Impala",
        "color": "Blue",
        "plate": "PLT-1046",
        "image": "https://example.com/car-1.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4046,
        "type": "Interior Cleaning",
        "date": "2024-12-10",
        "amount": 59.34,
        "card": 3046,
        "location": "Blairbury Car Wash"
      }
    ],
    "card": {
      "id": 3046,
      "name": "Kayla Mccarty",
      "address": "96589 Amber Walks",
      "city": "Blairbury",
      "state": "AR",
      "zip": 78613,
      "country": "USA",
      "card_number": 4111111111118489,
      "cvv": 670,
      "exp_date": "12/26"
    }
  },
  {
    "id": 47,
    "name": "David Anderson",
    "email": "david.anderson35@example.com",
    "phone": "(656)114-5845x1390",
    "status": "active",
    "membership": {
      "id": 5047,
      "type": "Elite",
      "start": "2024-12-19",
      "renew": "2025-12-19"
    },
    "subscriptions": [
      {
        "id": 2047,
        "type": "Annual",
        "vehicle_id": 1047
      }
    ],
    "vehicles": [
      {
        "id": 1047,
        "make": "Honda",
        "model": "Impala",
        "color": "Plum",
        "plate": "PLT-1047",
        "image": "https://example.com/car-2.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4047,
        "type": "Interior Cleaning",
        "date": "2024-12-21",
        "amount": 24.1,
        "card": 3047,
        "location": "Ryanchester Car Wash"
      }
    ],
    "card": {
      "id": 3047,
      "name": "David Anderson",
      "address": "85129 Elizabeth Brooks Suite 402",
      "city": "Ryanchester",
      "state": "NY",
      "zip": 62110,
      "country": "USA",
      "card_number": 4111111111115380,
      "cvv": 597,
      "exp_date": "12/26"
    }
  },
  {
    "id": 48,
    "name": "Brittany Leon",
    "email": "brittany.leon17@example.com",
    "phone": "+1-699-254-7890x969",
    "status": "overdue",
    "membership": {
      "id": 5048,
      "type": "Basic",
      "start": "2025-01-20",
      "renew": "2026-01-20"
    },
    "subscriptions": [
      {
        "id": 2048,
        "type": "Annual",
        "vehicle_id": 1048
      }
    ],
    "vehicles": [
      {
        "id": 1048,
        "make": "Chevrolet",
        "model": "Camry",
        "color": "DarkOrange",
        "plate": "PLT-1048",
        "image": "https://example.com/car-3.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4048,
        "type": "Car Wash",
        "date": "2025-01-22",
        "amount": 62.27,
        "card": 3048,
        "location": "Lake Mirandaton Car Wash"
      }
    ],
    "card": {
      "id": 3048,
      "name": "Brittany Leon",
      "address": "6600 Rhonda Drives",
      "city": "Lake Mirandaton",
      "state": "ID",
      "zip": 40360,
      "country": "USA",
      "card_number": 4111111111116076,
      "cvv": 191,
      "exp_date": "12/26"
    }
  },
  {
    "id": 49,
    "name": "Kelly Bailey",
    "email": "kelly.bailey30@example.com",
    "phone": "(549)619-6104x0122",
    "status": "active",
    "membership": {
      "id": 5049,
      "type": "Gold",
      "start": "2025-01-18",
      "renew": "2026-01-18"
    },
    "subscriptions": [
      {
        "id": 2049,
        "type": "Annual",
        "vehicle_id": 1049
      }
    ],
    "vehicles": [
      {
        "id": 1049,
        "make": "Ford",
        "model": "Camry",
        "color": "LightCoral",
        "plate": "PLT-1049",
        "image": "https://example.com/car-4.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4049,
        "type": "Waxing",
        "date": "2025-01-20",
        "amount": 25.56,
        "card": 3049,
        "location": "Harriston Car Wash"
      }
    ],
    "card": {
      "id": 3049,
      "name": "Kelly Bailey",
      "address": "90179 Thompson Lights",
      "city": "Harriston",
      "state": "SC",
      "zip": 88551,
      "country": "USA",
      "card_number": 4111111111116869,
      "cvv": 745,
      "exp_date": "12/26"
    }
  },
  {
    "id": 50,
    "name": "George Baker",
    "email": "george.baker21@example.com",
    "phone": "165-845-2405x53080",
    "status": "active",
    "membership": {
      "id": 5050,
      "type": "Basic",
      "start": "2025-03-21",
      "renew": "2026-03-21"
    },
    "subscriptions": [
      {
        "id": 2050,
        "type": "Annual",
        "vehicle_id": 1050
      }
    ],
    "vehicles": [
      {
        "id": 1050,
        "make": "BMW",
        "model": "X5",
        "color": "Moccasin",
        "plate": "PLT-1050",
        "image": "https://example.com/car-0.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4050,
        "type": "Interior Cleaning",
        "date": "2025-03-23",
        "amount": 75.41,
        "card": 3050,
        "location": "Reyesbury Car Wash"
      }
    ],
    "card": {
      "id": 3050,
      "name": "George Baker",
      "address": "904 Johnson Crossroad Apt. 726",
      "city": "Reyesbury",
      "state": "AZ",
      "zip": 78791,
      "country": "USA",
      "card_number": 4111111111119061,
      "cvv": 646,
      "exp_date": "12/26"
    }
  },
  {
    "id": 51,
    "name": "Michael Cooper",
    "email": "michael.cooper19@example.com",
    "phone": "186.182.6892x5874",
    "status": "overdue",
    "membership": {
      "id": 5051,
      "type": "Silver",
      "start": "2025-04-18",
      "renew": "2026-04-18"
    },
    "subscriptions": [
      {
        "id": 2051,
        "type": "Monthly",
        "vehicle_id": 1051
      }
    ],
    "vehicles": [
      {
        "id": 1051,
        "make": "Tesla",
        "model": "Camry",
        "color": "Silver",
        "plate": "PLT-1051",
        "image": "https://example.com/car-1.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4051,
        "type": "Car Wash",
        "date": "2025-04-20",
        "amount": 25.78,
        "card": 3051,
        "location": "Melindaton Car Wash"
      }
    ],
    "card": {
      "id": 3051,
      "name": "Michael Cooper",
      "address": "74066 Little Via Suite 850",
      "city": "Melindaton",
      "state": "FL",
      "zip": 25999,
      "country": "USA",
      "card_number": 4111111111119024,
      "cvv": 131,
      "exp_date": "12/26"
    }
  },
  {
    "id": 52,
    "name": "Andrew Cline",
    "email": "andrew.cline21@example.com",
    "phone": "001-105-148-9643x15697",
    "status": "active",
    "membership": {
      "id": 5052,
      "type": "Platinum",
      "start": "2025-01-24",
      "renew": "2026-01-24"
    },
    "subscriptions": [
      {
        "id": 2052,
        "type": "Monthly",
        "vehicle_id": 1052
      }
    ],
    "vehicles": [
      {
        "id": 1052,
        "make": "BMW",
        "model": "F-150",
        "color": "LightGoldenRodYellow",
        "plate": "PLT-1052",
        "image": "https://example.com/car-2.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4052,
        "type": "Detailing",
        "date": "2025-01-26",
        "amount": 52.55,
        "card": 3052,
        "location": "New Lance Car Wash"
      }
    ],
    "card": {
      "id": 3052,
      "name": "Andrew Cline",
      "address": "5206 Dodson Tunnel Suite 622",
      "city": "New Lance",
      "state": "LA",
      "zip": 46163,
      "country": "USA",
      "card_number": 4111111111119930,
      "cvv": 155,
      "exp_date": "12/26"
    }
  },
  {
    "id": 53,
    "name": "Michael Mcclain",
    "email": "michael.mcclain10@example.com",
    "phone": "+1-751-515-5804x245",
    "status": "active",
    "membership": {
      "id": 5053,
      "type": "Platinum",
      "start": "2025-05-17",
      "renew": "2026-05-17"
    },
    "subscriptions": [
      {
        "id": 2053,
        "type": "Annual",
        "vehicle_id": 1053
      }
    ],
    "vehicles": [
      {
        "id": 1053,
        "make": "Tesla",
        "model": "Civic",
        "color": "Chartreuse",
        "plate": "PLT-1053",
        "image": "https://example.com/car-3.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4053,
        "type": "Waxing",
        "date": "2025-05-19",
        "amount": 39.53,
        "card": 3053,
        "location": "New Seanfort Car Wash"
      }
    ],
    "card": {
      "id": 3053,
      "name": "Michael Mcclain",
      "address": "493 Greene Forks Apt. 003",
      "city": "New Seanfort",
      "state": "NV",
      "zip": 18361,
      "country": "USA",
      "card_number": 4111111111117499,
      "cvv": 592,
      "exp_date": "12/26"
    }
  },
  {
    "id": 54,
    "name": "Jacqueline Rogers",
    "email": "jacqueline.rogers31@example.com",
    "phone": "212-217-9713x8348",
    "status": "active",
    "membership": {
      "id": 5054,
      "type": "Silver",
      "start": "2025-01-06",
      "renew": "2026-01-06"
    },
    "subscriptions": [
      {
        "id": 2054,
        "type": "Monthly",
        "vehicle_id": 1054
      }
    ],
    "vehicles": [
      {
        "id": 1054,
        "make": "Tesla",
        "model": "Model 3",
        "color": "DarkRed",
        "plate": "PLT-1054",
        "image": "https://example.com/car-4.jpg",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4054,
        "type": "Car Wash",
        "date": "2025-01-08",
        "amount": 22.76,
        "card": 3054,
        "location": "Zacharyfurt Car Wash"
      }
    ],
    "card": {
      "id": 3054,
      "name": "Jacqueline Rogers",
      "address": "00133 Jeanette Ville",
      "city": "Zacharyfurt",
      "state": "CT",
      "zip": 83678,
      "country": "USA",
      "card_number": 4111111111114615,
      "cvv": 964,
      "exp_date": "12/26"
    }
  },
  {
    "id": 55,
    "name": "Monica Rich",
    "email": "monica.rich90@example.com",
    "phone": "588.841.3535x944",
    "status": "overdue",
    "membership": {
      "id": 5055,
      "type": "Basic",
      "start": "2025-05-25",
      "renew": "2026-05-25"
    },
    "subscriptions": [
      {
        "id": 2055,
        "type": "Annual",
        "vehicle_id": 1055
      }
    ],
    "vehicles": [
      {
        "id": 1055,
        "make": "Ford",
        "model": "Model 3",
        "color": "LavenderBlush",
        "plate": "PLT-1055",
        "image": "https://example.com/car-0.jpg",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4055,
        "type": "Car Wash",
        "date": "2025-05-27",
        "amount": 75.02,
        "card": 3055,
        "location": "West Robert Car Wash"
      }
    ],
    "card": {
      "id": 3055,
      "name": "Monica Rich",
      "address": "733 Lopez Haven Apt. 265",
      "city": "West Robert",
      "state": "NM",
      "zip": 39917,
      "country": "USA",
      "card_number": 4111111111114512,
      "cvv": 397,
      "exp_date": "12/26"
    }
  }
]

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Customer[]>(customers);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
