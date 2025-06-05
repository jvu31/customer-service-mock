"use client"
import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react'
export interface Vehicle { // Export Vehicle interface
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

export interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string
    membership: Membership
    profileImage: string;
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
    "id": 1,
    "name": "Allison Hill",
    "email": "jillrhodes@miller.com",
    "phone": "890.838.6379",
    "status": "active",
    "membership": {
      "id": 5001,
      "type": "Platinum",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/clown.png",
    "subscriptions": [
      {
        "id": 2010,
        "type": "Monthly",
        "vehicle_id": 1010
      }
    ],
    "vehicles": [
      {
        "id": 1010,
        "make": "Pacheco-Smith",
        "model": "Sure",
        "color": "DimGray",
        "plate": "PLT-1010",
        "image": "/cars/sports.png",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4001,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 17.56,
        "card": 3001,
        "location": "Henderson, Ramirez and Lewis Car Wash"
      }
    ],
    "card": {
      "id": 3001,
      "name": "Allison Hill",
      "address": "16155 Roman Stream Suite 816",
      "city": "New Kellystad",
      "state": "ID",
      "zip": 92850,
      "country": "USA",
      "card_number": 5234131647525534,
      "cvv": 419,
      "exp_date": "05/28"
    }
  },
  {
    "id": 2,
    "name": "Danielle Ford",
    "email": "gabriellecameron@gmail.com",
    "phone": "056.413.9537",
    "status": "active",
    "membership": {
      "id": 5002,
      "type": "Elite",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/starbucks.png",
    "subscriptions": [],
    "vehicles": [],
    "purchases": [
      {
        "id": 4002,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 15.74,
        "card": 3002,
        "location": "Wilkerson-Day Car Wash"
      }
    ],
    "card": {
      "id": 3002,
      "name": "Danielle Ford",
      "address": "2388 Burgess Meadow",
      "city": "Coxberg",
      "state": "NM",
      "zip": 12416,
      "country": "USA",
      "card_number": 502022691666,
      "cvv": 784,
      "exp_date": "11/34"
    }
  },
  {
    "id": 3,
    "name": "Alexandra Le",
    "email": "daniel62@yahoo.com",
    "phone": "4828148932",
    "status": "active",
    "membership": {
      "id": 5003,
      "type": "Silver",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/lunar.jpg",
    "subscriptions": [],
    "vehicles": [
      {
        "id": 1030,
        "make": "Farmer-Ryan",
        "model": "Start",
        "color": "Wheat",
        "plate": "PLT-1030",
        "image": "/cars/audi.png",
        "subscription": ""
      }
    ],
    "purchases": [
      {
        "id": 4003,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 26.23,
        "card": 3003,
        "location": "George Group Car Wash"
      }
    ],
    "card": {
      "id": 3003,
      "name": "Alexandra Le",
      "address": "54303 Christopher Oval",
      "city": "Port Amandaberg",
      "state": "TN",
      "zip": 62797,
      "country": "USA",
      "card_number": 213148963834650,
      "cvv": 871,
      "exp_date": "08/29"
    }
  },
  {
    "id": 4,
    "name": "George Chapman",
    "email": "adrianzimmerman@perez.com",
    "phone": "834-738-2997",
    "status": "inactive",
    "membership": {
      "id": 5004,
      "type": "Gold",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/clown.png",
    "subscriptions": [
      {
        "id": 2041,
        "type": "Monthly",
        "vehicle_id": 1041
      },
      {
        "id": 2042,
        "type": "Monthly",
        "vehicle_id": 1042
      }
    ],
    "vehicles": [
      {
        "id": 1040,
        "make": "Mueller Group",
        "model": "Customer",
        "color": "DarkGray",
        "plate": "PLT-1040",
        "image": "/cars/dumb.png",
        "subscription": ""
      },
      {
        "id": 1041,
        "make": "Hopkins LLC",
        "model": "Land",
        "color": "PaleVioletRed",
        "plate": "PLT-1041",
        "image": "/cars/dumb.png",
        "subscription": "Monthly"
      },
      {
        "id": 1042,
        "make": "Shields-Brown",
        "model": "Ready",
        "color": "DarkGreen",
        "plate": "PLT-1042",
        "image": "/cars/dumb.png",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4004,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 17.42,
        "card": 3004,
        "location": "Powell LLC Car Wash"
      }
    ],
    "card": {
      "id": 3004,
      "name": "George Chapman",
      "address": "33872 White Mountain",
      "city": "Port Sandra",
      "state": "OH",
      "zip": 13334,
      "country": "USA",
      "card_number": 676380132677,
      "cvv": 360,
      "exp_date": "03/28"
    }
  },
  {
    "id": 5,
    "name": "William Baker",
    "email": "rodney87@gmail.com",
    "phone": "430.980.5009",
    "status": "inactive",
    "membership": {
      "id": 5005,
      "type": "Platinum",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/starbucks.png",
    "subscriptions": [],
    "vehicles": [],
    "purchases": [
      {
        "id": 4005,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 33.24,
        "card": 3005,
        "location": "Shaw-Farrell Car Wash"
      }
    ],
    "card": {
      "id": 3005,
      "name": "William Baker",
      "address": "81219 Emma Freeway",
      "city": "Wilsonshire",
      "state": "OR",
      "zip": 78425,
      "country": "USA",
      "card_number": 676216998549,
      "cvv": 534,
      "exp_date": "02/32"
    }
  },
  {
    "id": 6,
    "name": "Matthew Bryant",
    "email": "ellisyolanda@jones.net",
    "phone": "251-354-2784x980",
    "status": "active",
    "membership": {
      "id": 5006,
      "type": "Silver",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/old.jpg",
    "subscriptions": [
      {
        "id": 2061,
        "type": "Monthly",
        "vehicle_id": 1061
      }
    ],
    "vehicles": [
      {
        "id": 1060,
        "make": "Montoya, Evans and Alvarado",
        "model": "Wrong",
        "color": "DarkSlateBlue",
        "plate": "PLT-1060",
        "image": "/cars/sports.png",
        "subscription": ""
      },
      {
        "id": 1061,
        "make": "Wilson-Rodriguez",
        "model": "On",
        "color": "DeepSkyBlue",
        "plate": "PLT-1061",
        "image": "/cars/audi.png",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4006,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 31.53,
        "card": 3006,
        "location": "Campbell-Clark Car Wash"
      }
    ],
    "card": {
      "id": 3006,
      "name": "Matthew Bryant",
      "address": "48740 Cynthia Village Suite 005",
      "city": "Lake Tina",
      "state": "WA",
      "zip": 58413,
      "country": "USA",
      "card_number": 180080112805985,
      "cvv": 620,
      "exp_date": "09/30"
    }
  },
  {
    "id": 7,
    "name": "Timothy Stanton",
    "email": "jason31@deleon-henson.biz",
    "phone": "+1-232-260-2563x421",
    "status": "inactive",
    "membership": {
      "id": 5007,
      "type": "Gold",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/cs major.png",
    "subscriptions": [],
    "vehicles": [],
    "purchases": [
      {
        "id": 4007,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 24.5,
        "card": 3007,
        "location": "Brennan-Garrison Car Wash"
      }
    ],
    "card": {
      "id": 3007,
      "name": "Timothy Stanton",
      "address": "75433 Donna Locks",
      "city": "Joshualand",
      "state": "KY",
      "zip": 46526,
      "country": "USA",
      "card_number": 4850142940196556,
      "cvv": 981,
      "exp_date": "12/31"
    }
  },
  {
    "id": 8,
    "name": "Cheryl Williams",
    "email": "meyerlindsay@hotmail.com",
    "phone": "001-356-159-5148x4656",
    "status": "inactive",
    "membership": {
      "id": 5008,
      "type": "Gold",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/momo.png",
    "subscriptions": [],
    "vehicles": [
      {
        "id": 1080,
        "make": "Phillips, Martinez and Fisher",
        "model": "Yard",
        "color": "Olive",
        "plate": "PLT-1080",
        "image": "/cars/audi.png",
        "subscription": ""
      },
      {
        "id": 1081,
        "make": "Adkins, Thompson and Carroll",
        "model": "Into",
        "color": "AliceBlue",
        "plate": "PLT-1081",
        "image": "/cars/sports.png",
        "subscription": ""
      }
    ],
    "purchases": [
      {
        "id": 4008,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 38.42,
        "card": 3008,
        "location": "Mitchell-Jordan Car Wash"
      }
    ],
    "card": {
      "id": 3008,
      "name": "Cheryl Williams",
      "address": "7738 Leon Underpass Apt. 148",
      "city": "Clarencebury",
      "state": "ME",
      "zip": 29945,
      "country": "USA",
      "card_number": 4003791769367,
      "cvv": 632,
      "exp_date": "07/25"
    }
  },
  {
    "id": 9,
    "name": "Shannon Mcclure",
    "email": "gregoryrubio@hotmail.com",
    "phone": "083.172.7889x579",
    "status": "active",
    "membership": {
      "id": 5009,
      "type": "Gold",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/starbucks.png",
    "subscriptions": [
      {
        "id": 2090,
        "type": "Annual",
        "vehicle_id": 1090
      }
    ],
    "vehicles": [
      {
        "id": 1090,
        "make": "Mcclain, Simmons and Meadows",
        "model": "Like",
        "color": "DimGray",
        "plate": "PLT-1090",
        "image": "/cars/dumb.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4009,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 21.75,
        "card": 3009,
        "location": "Hensley, Cole and Walton Car Wash"
      }
    ],
    "card": {
      "id": 3009,
      "name": "Shannon Mcclure",
      "address": "734 Jones Heights Apt. 455",
      "city": "East Edwardfurt",
      "state": "FL",
      "zip": 93092,
      "country": "USA",
      "card_number": 4665876036696,
      "cvv": 96,
      "exp_date": "07/33"
    }
  },
  {
    "id": 10,
    "name": "Guy Molina",
    "email": "tracynelson@yahoo.com",
    "phone": "6562729806",
    "status": "active",
    "membership": {
      "id": 5010,
      "type": "Silver",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/momo.png",
    "subscriptions": [
      {
        "id": 2100,
        "type": "Annual",
        "vehicle_id": 1100
      }
    ],
    "vehicles": [
      {
        "id": 1100,
        "make": "Elliott, Johnson and Day",
        "model": "Central",
        "color": "SandyBrown",
        "plate": "PLT-1100",
        "image": "/cars/dumb.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4010,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 21.69,
        "card": 3010,
        "location": "Williams Group Car Wash"
      }
    ],
    "card": {
      "id": 3010,
      "name": "Guy Molina",
      "address": "75564 King Common Suite 080",
      "city": "Jeffreyland",
      "state": "SD",
      "zip": 5777,
      "country": "USA",
      "card_number": 563092327193,
      "cvv": 745,
      "exp_date": "04/28"
    }
  },
  {
    "id": 11,
    "name": "Tracey Higgins",
    "email": "daniel04@byrd.com",
    "phone": "931-491-9058",
    "status": "active",
    "membership": {
      "id": 5011,
      "type": "Platinum",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/starbucks.png",
    "subscriptions": [],
    "vehicles": [
      {
        "id": 1110,
        "make": "Stanley-Jones",
        "model": "Raise",
        "color": "MediumSpringGreen",
        "plate": "PLT-1110",
        "image": "/cars/dumb.png",
        "subscription": ""
      }
    ],
    "purchases": [
      {
        "id": 4011,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 37.12,
        "card": 3011,
        "location": "Atkinson Group Car Wash"
      }
    ],
    "card": {
      "id": 3011,
      "name": "Tracey Higgins",
      "address": "5726 Jessica Run",
      "city": "Christinaside",
      "state": "NJ",
      "zip": 61432,
      "country": "USA",
      "card_number": 6553147379965079,
      "cvv": 2735,
      "exp_date": "10/29"
    }
  },
  {
    "id": 12,
    "name": "Spencer Haynes",
    "email": "blackjames@gmail.com",
    "phone": "001-678-377-7014x3634",
    "status": "inactive",
    "membership": {
      "id": 5012,
      "type": "Platinum",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/luffy.png",
    "subscriptions": [
      {
        "id": 2120,
        "type": "Annual",
        "vehicle_id": 1120
      }
    ],
    "vehicles": [
      {
        "id": 1120,
        "make": "Perkins, Kennedy and Schmidt",
        "model": "Large",
        "color": "MediumPurple",
        "plate": "PLT-1120",
        "image": "/cars/sports.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4012,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 29.61,
        "card": 3012,
        "location": "Warner-Nelson Car Wash"
      }
    ],
    "card": {
      "id": 3012,
      "name": "Spencer Haynes",
      "address": "13518 James Streets Suite 498",
      "city": "Tinaborough",
      "state": "IN",
      "zip": 47802,
      "country": "USA",
      "card_number": 4082400842710944,
      "cvv": 775,
      "exp_date": "07/28"
    }
  },
  {
    "id": 13,
    "name": "Dawn Hensley",
    "email": "moralescharles@parks.com",
    "phone": "318-699-9386",
    "status": "inactive",
    "membership": {
      "id": 5013,
      "type": "Gold",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/momo.png",
    "subscriptions": [],
    "vehicles": [
      {
        "id": 1130,
        "make": "Kerr-Evans",
        "model": "Per",
        "color": "Pink",
        "plate": "PLT-1130",
        "image": "/cars/audi.png",
        "subscription": ""
      }
    ],
    "purchases": [
      {
        "id": 4013,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 33.89,
        "card": 3013,
        "location": "Carroll-Brown Car Wash"
      }
    ],
    "card": {
      "id": 3013,
      "name": "Dawn Hensley",
      "address": "34123 Andrea Estate",
      "city": "South Shannonfort",
      "state": "AZ",
      "zip": 30841,
      "country": "USA",
      "card_number": 4713493618324210241,
      "cvv": 947,
      "exp_date": "07/27"
    }
  },
  {
    "id": 14,
    "name": "Eric Powell",
    "email": "mkim@gmail.com",
    "phone": "(594)013-9904x90278",
    "status": "active",
    "membership": {
      "id": 5014,
      "type": "Gold",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/luffy.png",
    "subscriptions": [
      {
        "id": 2140,
        "type": "Annual",
        "vehicle_id": 1140
      }
    ],
    "vehicles": [
      {
        "id": 1140,
        "make": "Ramos, Ramirez and Shea",
        "model": "Least",
        "color": "SlateGray",
        "plate": "PLT-1140",
        "image": "/cars/dumb.png",
        "subscription": "Annual"
      },
      {
        "id": 1141,
        "make": "Harrison Group",
        "model": "Goal",
        "color": "MediumBlue",
        "plate": "PLT-1141",
        "image": "/cars/sports.png",
        "subscription": ""
      },
      {
        "id": 1142,
        "make": "Garcia, Martin and Jenkins",
        "model": "Mission",
        "color": "LightSlateGray",
        "plate": "PLT-1142",
        "image": "/cars/sports.png",
        "subscription": ""
      }
    ],
    "purchases": [
      {
        "id": 4014,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 36.52,
        "card": 3014,
        "location": "Landry, Cervantes and Pierce Car Wash"
      }
    ],
    "card": {
      "id": 3014,
      "name": "Eric Powell",
      "address": "54516 Diane Plains Suite 603",
      "city": "Cindyfort",
      "state": "NV",
      "zip": 7265,
      "country": "USA",
      "card_number": 4824771093241,
      "cvv": 86,
      "exp_date": "01/27"
    }
  },
  {
    "id": 15,
    "name": "Ryan Wilson",
    "email": "tyronemoran@thornton.info",
    "phone": "782.639.8214",
    "status": "active",
    "membership": {
      "id": 5015,
      "type": "Platinum",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/cs major.png",
    "subscriptions": [
      {
        "id": 2150,
        "type": "Annual",
        "vehicle_id": 1150
      },
      {
        "id": 2151,
        "type": "Annual",
        "vehicle_id": 1151
      }
    ],
    "vehicles": [
      {
        "id": 1150,
        "make": "Morgan-French",
        "model": "Example",
        "color": "AliceBlue",
        "plate": "PLT-1150",
        "image": "/cars/dumb.png",
        "subscription": "Annual"
      },
      {
        "id": 1151,
        "make": "Barber-Monroe",
        "model": "Particularly",
        "color": "SlateGray",
        "plate": "PLT-1151",
        "image": "/cars/audi.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4015,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 38.85,
        "card": 3015,
        "location": "Griffin Group Car Wash"
      }
    ],
    "card": {
      "id": 3015,
      "name": "Ryan Wilson",
      "address": "8867 Kane Square Apt. 963",
      "city": "Williamsfort",
      "state": "MS",
      "zip": 51105,
      "country": "USA",
      "card_number": 4702895171870260,
      "cvv": 217,
      "exp_date": "12/29"
    }
  },
  {
    "id": 16,
    "name": "Michael Santos",
    "email": "ofinley@hotmail.com",
    "phone": "001-780-913-4316x11724",
    "status": "inactive",
    "membership": {
      "id": 5016,
      "type": "Gold",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/santa.png",
    "subscriptions": [],
    "vehicles": [],
    "purchases": [
      {
        "id": 4016,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 36.76,
        "card": 3016,
        "location": "Williams Inc Car Wash"
      }
    ],
    "card": {
      "id": 3016,
      "name": "Michael Santos",
      "address": "5623 Knight Turnpike Apt. 221",
      "city": "Harveybury",
      "state": "OR",
      "zip": 19259,
      "country": "USA",
      "card_number": 4474074821755,
      "cvv": 464,
      "exp_date": "03/33"
    }
  },
  {
    "id": 17,
    "name": "Christina Cruz",
    "email": "youngashley@hotmail.com",
    "phone": "406-409-0974x3953",
    "status": "inactive",
    "membership": {
      "id": 5017,
      "type": "Gold",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/santa.png",
    "subscriptions": [],
    "vehicles": [
      {
        "id": 1170,
        "make": "Lee, King and Campos",
        "model": "Speak",
        "color": "DarkSlateGray",
        "plate": "PLT-1170",
        "image": "/cars/audi.png",
        "subscription": ""
      }
    ],
    "purchases": [
      {
        "id": 4017,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 28.48,
        "card": 3017,
        "location": "Davis, Burton and Williams Car Wash"
      }
    ],
    "card": {
      "id": 3017,
      "name": "Christina Cruz",
      "address": "95214 Burgess Extensions Apt. 285",
      "city": "Mariaview",
      "state": "NJ",
      "zip": 39185,
      "country": "USA",
      "card_number": 3517123685160483,
      "cvv": 754,
      "exp_date": "05/35"
    }
  },
  {
    "id": 18,
    "name": "Mark Watson",
    "email": "jjohnson@herman-walker.com",
    "phone": "+1-746-120-0471x1382",
    "status": "active",
    "membership": {
      "id": 5018,
      "type": "Platinum",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/starbucks.png",
    "subscriptions": [
      {
        "id": 2180,
        "type": "Monthly",
        "vehicle_id": 1180
      },
      {
        "id": 2182,
        "type": "Monthly",
        "vehicle_id": 1182
      }
    ],
    "vehicles": [
      {
        "id": 1180,
        "make": "Chavez-Santiago",
        "model": "Situation",
        "color": "Yellow",
        "plate": "PLT-1180",
        "image": "/cars/dumb.png",
        "subscription": "Monthly"
      },
      {
        "id": 1181,
        "make": "Matthews-Barber",
        "model": "Value",
        "color": "PapayaWhip",
        "plate": "PLT-1181",
        "image": "/cars/audi.png",
        "subscription": ""
      },
      {
        "id": 1182,
        "make": "Garcia",
        "model": "Far",
        "color": "BlanchedAlmond",
        "plate": "PLT-1182",
        "image": "/cars/sports.png",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 4018,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 38.67,
        "card": 3018,
        "location": "Wood, Ramos and Sampson Car Wash"
      }
    ],
    "card": {
      "id": 3018,
      "name": "Mark Watson",
      "address": "58506 Lopez Crossing Suite 139",
      "city": "North Kristinbury",
      "state": "WY",
      "zip": 74501,
      "country": "USA",
      "card_number": 4839335290422,
      "cvv": 842,
      "exp_date": "04/27"
    }
  },
  {
    "id": 19,
    "name": "Allison Smith",
    "email": "alfred40@harmon.com",
    "phone": "001-177-589-1783x9084",
    "status": "active",
    "membership": {
      "id": 5019,
      "type": "Silver",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/pajama.png",
    "subscriptions": [
      {
        "id": 2190,
        "type": "Annual",
        "vehicle_id": 1190
      }
    ],
    "vehicles": [
      {
        "id": 1190,
        "make": "Schneider-Johnson",
        "model": "Measure",
        "color": "PaleGoldenRod",
        "plate": "PLT-1190",
        "image": "/cars/sports.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4019,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 19.13,
        "card": 3019,
        "location": "Parks-Henry Car Wash"
      }
    ],
    "card": {
      "id": 3019,
      "name": "Allison Smith",
      "address": "15921 Joshua Roads Suite 698",
      "city": "Shawnchester",
      "state": "WY",
      "zip": 92484,
      "country": "USA",
      "card_number": 2703673657661567,
      "cvv": 4527,
      "exp_date": "07/26"
    }
  },
  {
    "id": 20,
    "name": "Bradley Reynolds",
    "email": "angelawillis@hotmail.com",
    "phone": "+1-516-560-4945",
    "status": "inactive",
    "membership": {
      "id": 5020,
      "type": "Gold",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/lunar.jpg",
    "subscriptions": [],
    "vehicles": [
      {
        "id": 1200,
        "make": "Lane and Sons",
        "model": "Clear",
        "color": "SkyBlue",
        "plate": "PLT-1200",
        "image": "/cars/sports.png",
        "subscription": ""
      },
      {
        "id": 1201,
        "make": "Boone LLC",
        "model": "Through",
        "color": "NavajoWhite",
        "plate": "PLT-1201",
        "image": "/cars/dumb.png",
        "subscription": ""
      }
    ],
    "purchases": [
      {
        "id": 4020,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 37.49,
        "card": 3020,
        "location": "Farmer PLC Car Wash"
      }
    ],
    "card": {
      "id": 3020,
      "name": "Bradley Reynolds",
      "address": "8998 Chelsea Shoals",
      "city": "Anthonyview",
      "state": "WV",
      "zip": 41000,
      "country": "USA",
      "card_number": 370229612018363,
      "cvv": 752,
      "exp_date": "09/31"
    }
  },
  {
    "id": 21,
    "name": "Frederick Pugh",
    "email": "moorekaren@craig.info",
    "phone": "+1-679-764-3815x61497",
    "status": "inactive",
    "membership": {
      "id": 5021,
      "type": "Gold",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/cs major.png",
    "subscriptions": [
      {
        "id": 2210,
        "type": "Annual",
        "vehicle_id": 1210
      }
    ],
    "vehicles": [
      {
        "id": 1210,
        "make": "Estrada",
        "model": "Place",
        "color": "Chartreuse",
        "plate": "PLT-1210",
        "image": "/cars/audi.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4021,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 29.71,
        "card": 3021,
        "location": "Harris and Sons Car Wash"
      }
    ],
    "card": {
      "id": 3021,
      "name": "Frederick Pugh",
      "address": "4510 Burgess Extensions",
      "city": "South Amanda",
      "state": "NY",
      "zip": 73734,
      "country": "USA",
      "card_number": 4160607159696640,
      "cvv": 605,
      "exp_date": "05/28"
    }
  },
  {
    "id": 22,
    "name": "Lisa Collier",
    "email": "kimdaniel@yahoo.com",
    "phone": "001-681-645-3521",
    "status": "active",
    "membership": {
      "id": 5022,
      "type": "Gold",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/starbucks.png",
    "subscriptions": [],
    "vehicles": [],
    "purchases": [
      {
        "id": 4022,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 16.77,
        "card": 3022,
        "location": "Schultz, Schmidt and Lee Car Wash"
      }
    ],
    "card": {
      "id": 3022,
      "name": "Lisa Collier",
      "address": "2312 Gonzalez Rapids Apt. 127",
      "city": "Webstershire",
      "state": "TX",
      "zip": 74490,
      "country": "USA",
      "card_number": 4527177449058140,
      "cvv": 700,
      "exp_date": "09/31"
    }
  },
  {
    "id": 23,
    "name": "Angela Lin",
    "email": "jford@huang.com",
    "phone": "978-207-1518x20377",
    "status": "active",
    "membership": {
      "id": 5023,
      "type": "Silver",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/lunar.jpg",
    "subscriptions": [],
    "vehicles": [],
    "purchases": [
      {
        "id": 4023,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 36.49,
        "card": 3023,
        "location": "Mills, Moore and Watson Car Wash"
      }
    ],
    "card": {
      "id": 3023,
      "name": "Angela Lin",
      "address": "6590 Jones Court Suite 449",
      "city": "West Christopher",
      "state": "FL",
      "zip": 46352,
      "country": "USA",
      "card_number": 4291486528168505422,
      "cvv": 573,
      "exp_date": "04/29"
    }
  },
  {
    "id": 24,
    "name": "Mrs. Elizabeth French DDS",
    "email": "nancy92@bennett.org",
    "phone": "(706)537-9473",
    "status": "active",
    "membership": {
      "id": 5024,
      "type": "Gold",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/santa.png",
    "subscriptions": [
      {
        "id": 2241,
        "type": "Annual",
        "vehicle_id": 1241
      }
    ],
    "vehicles": [
      {
        "id": 1240,
        "make": "Allen",
        "model": "Well",
        "color": "GoldenRod",
        "plate": "PLT-1240",
        "image": "/cars/audi.png",
        "subscription": ""
      },
      {
        "id": 1241,
        "make": "Gregory-Hudson",
        "model": "Let",
        "color": "SandyBrown",
        "plate": "PLT-1241",
        "image": "/cars/audi.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4024,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 34.62,
        "card": 3024,
        "location": "Strickland-Shaw Car Wash"
      }
    ],
    "card": {
      "id": 3024,
      "name": "Mrs. Elizabeth French DDS",
      "address": "39240 Sawyer Plaza Apt. 814",
      "city": "Port Ethanmouth",
      "state": "NY",
      "zip": 19814,
      "country": "USA",
      "card_number": 6011375060685369,
      "cvv": 530,
      "exp_date": "11/30"
    }
  },
  {
    "id": 25,
    "name": "Sara Santos",
    "email": "benjaminlowery@horton-taylor.info",
    "phone": "901.043.2898x614",
    "status": "inactive",
    "membership": {
      "id": 5025,
      "type": "Silver",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/lunar.jpg",
    "subscriptions": [],
    "vehicles": [],
    "purchases": [
      {
        "id": 4025,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 31.47,
        "card": 3025,
        "location": "Turner Inc Car Wash"
      }
    ],
    "card": {
      "id": 3025,
      "name": "Sara Santos",
      "address": "9711 Carlson Brook",
      "city": "Lake Douglas",
      "state": "AL",
      "zip": 81085,
      "country": "USA",
      "card_number": 349621851888886,
      "cvv": 670,
      "exp_date": "01/32"
    }
  },
  {
    "id": 26,
    "name": "Mrs. Alexis Kramer",
    "email": "jessicafuller@hotmail.com",
    "phone": "001-520-585-2772x2170",
    "status": "inactive",
    "membership": {
      "id": 5026,
      "type": "Elite",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/old.jpg",
    "subscriptions": [
      {
        "id": 2260,
        "type": "Monthly",
        "vehicle_id": 1260
      }
    ],
    "vehicles": [
      {
        "id": 1260,
        "make": "Harris-Moody",
        "model": "Various",
        "color": "BlueViolet",
        "plate": "PLT-1260",
        "image": "/cars/audi.png",
        "subscription": "Monthly"
      },
      {
        "id": 1261,
        "make": "Mahoney-Robertson",
        "model": "Teacher",
        "color": "YellowGreen",
        "plate": "PLT-1261",
        "image": "/cars/sports.png",
        "subscription": ""
      },
      {
        "id": 1262,
        "make": "King-Mullins",
        "model": "Cut",
        "color": "LightSlateGray",
        "plate": "PLT-1262",
        "image": "/cars/audi.png",
        "subscription": ""
      }
    ],
    "purchases": [
      {
        "id": 4026,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 21.22,
        "card": 3026,
        "location": "Atkins-Williams Car Wash"
      }
    ],
    "card": {
      "id": 3026,
      "name": "Mrs. Alexis Kramer",
      "address": "1566 Kline Lights Suite 277",
      "city": "Sandrahaven",
      "state": "CO",
      "zip": 95801,
      "country": "USA",
      "card_number": 601169284511544,
      "cvv": 962,
      "exp_date": "12/32"
    }
  },
  {
    "id": 27,
    "name": "Andrew Berg",
    "email": "yhill@gmail.com",
    "phone": "658-202-9702",
    "status": "active",
    "membership": {
      "id": 5027,
      "type": "Elite",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/santa.png",
    "subscriptions": [],
    "vehicles": [
      {
        "id": 1270,
        "make": "Young Ltd",
        "model": "Hit",
        "color": "MistyRose",
        "plate": "PLT-1270",
        "image": "/cars/audi.png",
        "subscription": ""
      }
    ],
    "purchases": [
      {
        "id": 4027,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 21.96,
        "card": 3027,
        "location": "Herring-Johnson Car Wash"
      }
    ],
    "card": {
      "id": 3027,
      "name": "Andrew Berg",
      "address": "755 Hines Ports",
      "city": "New Michael",
      "state": "SD",
      "zip": 37029,
      "country": "USA",
      "card_number": 4027868144733,
      "cvv": 473,
      "exp_date": "07/27"
    }
  },
  {
    "id": 28,
    "name": "Benjamin Thompson",
    "email": "cochrantammy@yahoo.com",
    "phone": "+1-518-844-2258x31323",
    "status": "active",
    "membership": {
      "id": 5028,
      "type": "Elite",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/cs major.png",
    "subscriptions": [],
    "vehicles": [],
    "purchases": [
      {
        "id": 4028,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 16.26,
        "card": 3028,
        "location": "Johnson-Spencer Car Wash"
      }
    ],
    "card": {
      "id": 3028,
      "name": "Benjamin Thompson",
      "address": "8291 Kyle Stravenue Suite 866",
      "city": "East Teresaland",
      "state": "NH",
      "zip": 89644,
      "country": "USA",
      "card_number": 180028922680189,
      "cvv": 422,
      "exp_date": "12/30"
    }
  },
  {
    "id": 29,
    "name": "Courtney Meza",
    "email": "kingcynthia@hotmail.com",
    "phone": "249-818-2992x299",
    "status": "active",
    "membership": {
      "id": 5029,
      "type": "Gold",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/cs major.png",
    "subscriptions": [],
    "vehicles": [
      {
        "id": 1290,
        "make": "Kirby-Elliott",
        "model": "That",
        "color": "Black",
        "plate": "PLT-1290",
        "image": "/cars/dumb.png",
        "subscription": ""
      }
    ],
    "purchases": [
      {
        "id": 4029,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 27.03,
        "card": 3029,
        "location": "Williams Ltd Car Wash"
      }
    ],
    "card": {
      "id": 3029,
      "name": "Courtney Meza",
      "address": "396 Tyler Road Suite 473",
      "city": "Evansland",
      "state": "AR",
      "zip": 21220,
      "country": "USA",
      "card_number": 36773592555627,
      "cvv": 8815,
      "exp_date": "07/29"
    }
  },
  {
    "id": 30,
    "name": "Derek Wright",
    "email": "robertspatrick@barnes.com",
    "phone": "001-532-787-7470",
    "status": "inactive",
    "membership": {
      "id": 5030,
      "type": "Gold",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/clown.png",
    "subscriptions": [
      {
        "id": 2300,
        "type": "Annual",
        "vehicle_id": 1300
      }
    ],
    "vehicles": [
      {
        "id": 1300,
        "make": "Landry PLC",
        "model": "Lot",
        "color": "LawnGreen",
        "plate": "PLT-1300",
        "image": "/cars/dumb.png",
        "subscription": "Annual"
      },
      {
        "id": 1301,
        "make": "Aguilar Inc",
        "model": "Apply",
        "color": "LightSkyBlue",
        "plate": "PLT-1301",
        "image": "/cars/dumb.png",
        "subscription": ""
      },
      {
        "id": 1302,
        "make": "Harper-Cameron",
        "model": "Remember",
        "color": "SeaShell",
        "plate": "PLT-1302",
        "image": "/cars/sports.png",
        "subscription": ""
      }
    ],
    "purchases": [
      {
        "id": 4030,
        "type": "Car Wash",
        "date": "2025-04-27",
        "amount": 38.93,
        "card": 3030,
        "location": "Herrera-Boone Car Wash"
      }
    ],
    "card": {
      "id": 3030,
      "name": "Derek Wright",
      "address": "45650 Williams Points Apt. 584",
      "city": "South Williamside",
      "state": "RI",
      "zip": 89682,
      "country": "USA",
      "card_number": 3521655852398689,
      "cvv": 2,
      "exp_date": "02/31"
    }
  }
]

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize with all customers, or a slice if intended for pagination from the start
  const [user, setUser] = useState<Customer[]>(customers);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
