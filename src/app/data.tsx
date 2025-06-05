"use client"
import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react'
import user_data from './user_data.json'

export interface Vehicle { // Export Vehicle interface
    id: number;
    make: string
    model: string
    color: string
    plate: string
    image: string
    subscription: string
}

export interface Purchases {
    id: number;
    type: string
    date: string
    amount: number
    card: number
    location: string
}

export interface Card {
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
    "name": "Joann Miller",
    "email": "fbarton@hotmail.com",
    "phone": "984-691-1834",
    "status": "inactive",
    "membership": {
      "id": 5001,
      "type": "Elite",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/lunar.jpg",
    "subscriptions": [],
    "vehicles": [],
    "purchases": [
      {
        "id": 1000,
        "type": "Subscription Service",
        "date": "2025-02-24",
        "amount": 60.3,
        "card": 100,
        "location": "Atkinson, Smith and Wiggins Car Wash"
      },
      {
        "id": 1001,
        "type": "Subscription Service",
        "date": "2025-04-12",
        "amount": 21.1,
        "card": 100,
        "location": "Garcia-Mcfarland Car Wash"
      },
      {
        "id": 1002,
        "type": "Subscription Service",
        "date": "2025-04-01",
        "amount": 26.52,
        "card": 100,
        "location": "Chen-Sawyer Car Wash"
      },
      {
        "id": 1003,
        "type": "Subscription Service",
        "date": "2025-03-05",
        "amount": 27.75,
        "card": 100,
        "location": "Brooks, White and Taylor Car Wash"
      },
      {
        "id": 1004,
        "type": "Subscription Service",
        "date": "2025-02-21",
        "amount": 97.24,
        "card": 100,
        "location": "Mitchell, Hester and Hicks Car Wash"
      },
      {
        "id": 1005,
        "type": "Car Wash",
        "date": "2025-04-15",
        "amount": 56.58,
        "card": 100,
        "location": "Ortiz-Burke Car Wash"
      },
      {
        "id": 1006,
        "type": "Car Wash",
        "date": "2025-05-09",
        "amount": 78.51,
        "card": 100,
        "location": "Gomez Ltd Car Wash"
      },
      {
        "id": 1007,
        "type": "Subscription Service",
        "date": "2024-10-20",
        "amount": 46.1,
        "card": 100,
        "location": "Gordon, Hawkins and Gregory Car Wash"
      },
      {
        "id": 1008,
        "type": "Subscription Service",
        "date": "2025-05-08",
        "amount": 56.48,
        "card": 100,
        "location": "Christensen-Knight Car Wash"
      },
      {
        "id": 1009,
        "type": "Subscription Service",
        "date": "2024-10-01",
        "amount": 72.48,
        "card": 100,
        "location": "Johnson-Gill Car Wash"
      },
      {
        "id": 1010,
        "type": "Subscription Service",
        "date": "2025-05-06",
        "amount": 18.43,
        "card": 100,
        "location": "Ellis-Mccullough Car Wash"
      }
    ],
    "card": {
      "id": 100,
      "name": "Theresa Garcia",
      "address": "071 Wendy Tunnel Suite 198",
      "city": "North Lauren",
      "state": "SC",
      "zip": 92731,
      "country": "USA",
      "card_number": 4687773944476377,
      "cvv": 999,
      "exp_date": "07/27"
    }
  },
  {
    "id": 2,
    "name": "April Russell",
    "email": "crosssherry@hotmail.com",
    "phone": "388-321-5064",
    "status": "inactive",
    "membership": {
      "id": 5002,
      "type": "Silver",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/pajama.png",
    "subscriptions": [
      {
        "id": 200,
        "type": "Monthly",
        "vehicle_id": 2000
      },
      {
        "id": 201,
        "type": "Monthly",
        "vehicle_id": 2001
      },
      {
        "id": 202,
        "type": "Annual",
        "vehicle_id": 2002
      },
      {
        "id": 203,
        "type": "Annual",
        "vehicle_id": 2003
      }
    ],
    "vehicles": [
      {
        "id": 2000,
        "make": "Nissan",
        "model": "Altima",
        "color": "WhiteSmoke",
        "plate": "NIS-2000",
        "image": "/cars/sports.png",
        "subscription": "Monthly"
      },
      {
        "id": 2001,
        "make": "BMW",
        "model": "3 Series",
        "color": "Orange",
        "plate": "BMW-2001",
        "image": "/cars/sports.png",
        "subscription": "Monthly"
      },
      {
        "id": 2002,
        "make": "Mercedes",
        "model": "C-Class",
        "color": "DeepPink",
        "plate": "MER-2002",
        "image": "/cars/sports.png",
        "subscription": "Annual"
      },
      {
        "id": 2003,
        "make": "Ford",
        "model": "Fusion",
        "color": "OrangeRed",
        "plate": "FOR-2003",
        "image": "/cars/dumb.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 2000,
        "type": "Car Wash",
        "date": "2024-06-08",
        "amount": 15.23,
        "card": 200,
        "location": "Smith-Brown Car Wash"
      },
      {
        "id": 2001,
        "type": "Car Wash",
        "date": "2025-04-04",
        "amount": 88.82,
        "card": 200,
        "location": "Gonzalez Ltd Car Wash"
      },
      {
        "id": 2002,
        "type": "Subscription Service",
        "date": "2024-07-28",
        "amount": 38.54,
        "card": 200,
        "location": "Lopez PLC Car Wash"
      },
      {
        "id": 2003,
        "type": "Car Wash",
        "date": "2025-02-01",
        "amount": 90.44,
        "card": 200,
        "location": "Haley, Williams and Davis Car Wash"
      },
      {
        "id": 2004,
        "type": "Car Wash",
        "date": "2024-06-21",
        "amount": 52.09,
        "card": 200,
        "location": "Henson-Richardson Car Wash"
      },
      {
        "id": 2005,
        "type": "Subscription Service",
        "date": "2025-03-16",
        "amount": 48.76,
        "card": 200,
        "location": "Jimenez, Cobb and Noble Car Wash"
      },
      {
        "id": 2006,
        "type": "Car Wash",
        "date": "2025-04-06",
        "amount": 54.19,
        "card": 200,
        "location": "Cole Ltd Car Wash"
      },
      {
        "id": 2007,
        "type": "Subscription Service",
        "date": "2024-07-27",
        "amount": 89.97,
        "card": 200,
        "location": "Lewis-Vang Car Wash"
      },
      {
        "id": 2008,
        "type": "Car Wash",
        "date": "2025-05-19",
        "amount": 65.57,
        "card": 200,
        "location": "Wood Ltd Car Wash"
      },
      {
        "id": 2009,
        "type": "Car Wash",
        "date": "2024-08-22",
        "amount": 32.21,
        "card": 200,
        "location": "Campbell-Maxwell Car Wash"
      },
      {
        "id": 2010,
        "type": "Car Wash",
        "date": "2025-02-19",
        "amount": 99.45,
        "card": 200,
        "location": "Green-Richardson Car Wash"
      },
      {
        "id": 2011,
        "type": "Subscription Service",
        "date": "2024-10-24",
        "amount": 64.47,
        "card": 200,
        "location": "Stone-Brown Car Wash"
      },
      {
        "id": 2012,
        "type": "Car Wash",
        "date": "2024-11-21",
        "amount": 74.63,
        "card": 200,
        "location": "Allen, Fowler and Franklin Car Wash"
      },
      {
        "id": 2013,
        "type": "Car Wash",
        "date": "2024-06-26",
        "amount": 86.91,
        "card": 200,
        "location": "Wright, Robinson and Mason Car Wash"
      },
      {
        "id": 2014,
        "type": "Subscription Service",
        "date": "2024-12-14",
        "amount": 14.9,
        "card": 200,
        "location": "Grant and Sons Car Wash"
      }
    ],
    "card": {
      "id": 200,
      "name": "Albert Watson",
      "address": "118 Ross Estate Apt. 339",
      "city": "New Jenniferborough",
      "state": "VA",
      "zip": 6189,
      "country": "USA",
      "card_number": 30039815896099,
      "cvv": 2898,
      "exp_date": "01/34"
    }
  },
  {
    "id": 3,
    "name": "April Ware",
    "email": "catherine00@woods-frey.com",
    "phone": "597-766-9623",
    "status": "active",
    "membership": {
      "id": 5003,
      "type": "Elite",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/lunar.jpg",
    "subscriptions": [],
    "vehicles": [],
    "purchases": [
      {
        "id": 3000,
        "type": "Car Wash",
        "date": "2024-11-05",
        "amount": 16.31,
        "card": 300,
        "location": "King LLC Car Wash"
      },
      {
        "id": 3001,
        "type": "Car Wash",
        "date": "2024-07-10",
        "amount": 71.66,
        "card": 300,
        "location": "Vazquez-Davis Car Wash"
      },
      {
        "id": 3002,
        "type": "Car Wash",
        "date": "2025-05-05",
        "amount": 10.81,
        "card": 300,
        "location": "Petty Inc Car Wash"
      },
      {
        "id": 3003,
        "type": "Subscription Service",
        "date": "2025-03-29",
        "amount": 57.78,
        "card": 300,
        "location": "Smith-Barron Car Wash"
      },
      {
        "id": 3004,
        "type": "Subscription Service",
        "date": "2024-06-14",
        "amount": 53.4,
        "card": 300,
        "location": "Brewer PLC Car Wash"
      },
      {
        "id": 3005,
        "type": "Subscription Service",
        "date": "2024-10-16",
        "amount": 29.17,
        "card": 300,
        "location": "Sanford, Miller and Hendrix Car Wash"
      },
      {
        "id": 3006,
        "type": "Subscription Service",
        "date": "2024-09-02",
        "amount": 19.03,
        "card": 300,
        "location": "Romero-Dunn Car Wash"
      },
      {
        "id": 3007,
        "type": "Car Wash",
        "date": "2024-10-25",
        "amount": 20.47,
        "card": 300,
        "location": "Cross, Holland and Cummings Car Wash"
      },
      {
        "id": 3008,
        "type": "Car Wash",
        "date": "2024-07-01",
        "amount": 47.19,
        "card": 300,
        "location": "Cabrera PLC Car Wash"
      },
      {
        "id": 3009,
        "type": "Car Wash",
        "date": "2025-02-10",
        "amount": 34.74,
        "card": 300,
        "location": "Bailey-Perez Car Wash"
      },
      {
        "id": 3010,
        "type": "Subscription Service",
        "date": "2025-01-20",
        "amount": 57.38,
        "card": 300,
        "location": "Brown-Foster Car Wash"
      },
      {
        "id": 3011,
        "type": "Car Wash",
        "date": "2024-07-24",
        "amount": 44.89,
        "card": 300,
        "location": "Wilson, Miller and Mason Car Wash"
      },
      {
        "id": 3012,
        "type": "Car Wash",
        "date": "2025-04-14",
        "amount": 75.12,
        "card": 300,
        "location": "Beck, Huff and Gray Car Wash"
      },
      {
        "id": 3013,
        "type": "Car Wash",
        "date": "2025-04-11",
        "amount": 22.91,
        "card": 300,
        "location": "Meyer, Adams and Stevens Car Wash"
      },
      {
        "id": 3014,
        "type": "Subscription Service",
        "date": "2024-10-01",
        "amount": 69.64,
        "card": 300,
        "location": "Contreras Inc Car Wash"
      },
      {
        "id": 3015,
        "type": "Car Wash",
        "date": "2024-08-13",
        "amount": 24.33,
        "card": 300,
        "location": "Salazar-Gonzalez Car Wash"
      },
      {
        "id": 3016,
        "type": "Subscription Service",
        "date": "2025-04-23",
        "amount": 68.71,
        "card": 300,
        "location": "Jones Ltd Car Wash"
      },
      {
        "id": 3017,
        "type": "Car Wash",
        "date": "2025-05-03",
        "amount": 88.76,
        "card": 300,
        "location": "Decker Ltd Car Wash"
      }
    ],
    "card": {
      "id": 300,
      "name": "Richard Williams",
      "address": "467 Andrew Cliffs",
      "city": "Perrymouth",
      "state": "DE",
      "zip": 51200,
      "country": "USA",
      "card_number": 3557832916362723,
      "cvv": 668,
      "exp_date": "04/29"
    }
  },
  {
    "id": 4,
    "name": "Sarah Chapman",
    "email": "joseph34@perez.com",
    "phone": "118-865-6627",
    "status": "active",
    "membership": {
      "id": 5004,
      "type": "Silver",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/lunar.jpg",
    "subscriptions": [
      {
        "id": 400,
        "type": "Annual",
        "vehicle_id": 4000
      }
    ],
    "vehicles": [
      {
        "id": 4000,
        "make": "Honda",
        "model": "Accord",
        "color": "GoldenRod",
        "plate": "HON-4000",
        "image": "/cars/dumb.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 4000,
        "type": "Car Wash",
        "date": "2024-09-15",
        "amount": 45.61,
        "card": 400,
        "location": "Steele-Rivera Car Wash"
      },
      {
        "id": 4001,
        "type": "Subscription Service",
        "date": "2024-09-29",
        "amount": 11.86,
        "card": 400,
        "location": "Gomez-Wilson Car Wash"
      },
      {
        "id": 4002,
        "type": "Subscription Service",
        "date": "2024-06-30",
        "amount": 49.31,
        "card": 400,
        "location": "Tucker, Yu and Ramos Car Wash"
      },
      {
        "id": 4003,
        "type": "Subscription Service",
        "date": "2025-02-27",
        "amount": 21.31,
        "card": 400,
        "location": "Buck and Sons Car Wash"
      },
      {
        "id": 4004,
        "type": "Car Wash",
        "date": "2025-01-06",
        "amount": 89.72,
        "card": 400,
        "location": "Saunders Group Car Wash"
      },
      {
        "id": 4005,
        "type": "Subscription Service",
        "date": "2025-05-26",
        "amount": 77.41,
        "card": 400,
        "location": "Meyer, Torres and Hudson Car Wash"
      },
      {
        "id": 4006,
        "type": "Subscription Service",
        "date": "2024-09-14",
        "amount": 84.55,
        "card": 400,
        "location": "Rosario, Burke and Gregory Car Wash"
      },
      {
        "id": 4007,
        "type": "Car Wash",
        "date": "2024-11-25",
        "amount": 97.27,
        "card": 400,
        "location": "Stuart Ltd Car Wash"
      },
      {
        "id": 4008,
        "type": "Car Wash",
        "date": "2024-11-09",
        "amount": 40.51,
        "card": 400,
        "location": "Dillon, Mcfarland and Soto Car Wash"
      },
      {
        "id": 4009,
        "type": "Car Wash",
        "date": "2024-11-30",
        "amount": 58.41,
        "card": 400,
        "location": "Meyer PLC Car Wash"
      },
      {
        "id": 4010,
        "type": "Car Wash",
        "date": "2024-11-02",
        "amount": 32.56,
        "card": 400,
        "location": "Miller-Williams Car Wash"
      },
      {
        "id": 4011,
        "type": "Car Wash",
        "date": "2025-02-28",
        "amount": 10.11,
        "card": 400,
        "location": "Higgins LLC Car Wash"
      },
      {
        "id": 4012,
        "type": "Car Wash",
        "date": "2025-02-16",
        "amount": 53.51,
        "card": 400,
        "location": "Wood, Hunter and Buchanan Car Wash"
      },
      {
        "id": 4013,
        "type": "Subscription Service",
        "date": "2025-02-07",
        "amount": 90.36,
        "card": 400,
        "location": "Sims-Brooks Car Wash"
      },
      {
        "id": 4014,
        "type": "Car Wash",
        "date": "2025-06-03",
        "amount": 63.64,
        "card": 400,
        "location": "Payne Group Car Wash"
      },
      {
        "id": 4015,
        "type": "Subscription Service",
        "date": "2025-01-24",
        "amount": 51.37,
        "card": 400,
        "location": "Larson-Glenn Car Wash"
      }
    ],
    "card": {
      "id": 400,
      "name": "Tony Garcia",
      "address": "44121 Angel Bridge",
      "city": "North Thomasside",
      "state": "NM",
      "zip": 6841,
      "country": "USA",
      "card_number": 3500826006877499,
      "cvv": 692,
      "exp_date": "10/28"
    }
  },
  {
    "id": 5,
    "name": "Sara Luna",
    "email": "brownkevin@hotmail.com",
    "phone": "776-235-1893",
    "status": "active",
    "membership": {
      "id": 5005,
      "type": "Basic",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/mcdonalds.png",
    "subscriptions": [
      {
        "id": 500,
        "type": "Monthly",
        "vehicle_id": 5000
      }
    ],
    "vehicles": [
      {
        "id": 5000,
        "make": "Ford",
        "model": "Fusion",
        "color": "LightCyan",
        "plate": "FOR-5000",
        "image": "/cars/dumb.png",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 5000,
        "type": "Subscription Service",
        "date": "2025-02-09",
        "amount": 78.33,
        "card": 500,
        "location": "Robinson-Hoffman Car Wash"
      },
      {
        "id": 5001,
        "type": "Car Wash",
        "date": "2025-02-23",
        "amount": 37.63,
        "card": 500,
        "location": "Duffy-Savage Car Wash"
      },
      {
        "id": 5002,
        "type": "Subscription Service",
        "date": "2025-02-01",
        "amount": 89.09,
        "card": 500,
        "location": "Conway, Johnson and Cummings Car Wash"
      },
      {
        "id": 5003,
        "type": "Subscription Service",
        "date": "2024-07-13",
        "amount": 21.17,
        "card": 500,
        "location": "Montgomery Inc Car Wash"
      },
      {
        "id": 5004,
        "type": "Car Wash",
        "date": "2025-02-24",
        "amount": 78.09,
        "card": 500,
        "location": "Shaffer-Good Car Wash"
      },
      {
        "id": 5005,
        "type": "Subscription Service",
        "date": "2024-09-02",
        "amount": 73.85,
        "card": 500,
        "location": "Stephenson-Smith Car Wash"
      },
      {
        "id": 5006,
        "type": "Subscription Service",
        "date": "2024-09-11",
        "amount": 97.48,
        "card": 500,
        "location": "Ellis, Gomez and Jackson Car Wash"
      },
      {
        "id": 5007,
        "type": "Car Wash",
        "date": "2024-11-03",
        "amount": 10.63,
        "card": 500,
        "location": "Trujillo-Thompson Car Wash"
      },
      {
        "id": 5008,
        "type": "Subscription Service",
        "date": "2024-12-22",
        "amount": 92.87,
        "card": 500,
        "location": "Freeman and Sons Car Wash"
      },
      {
        "id": 5009,
        "type": "Subscription Service",
        "date": "2024-08-14",
        "amount": 44.69,
        "card": 500,
        "location": "Jackson-Smith Car Wash"
      },
      {
        "id": 5010,
        "type": "Subscription Service",
        "date": "2024-07-05",
        "amount": 60.99,
        "card": 500,
        "location": "Johnson, Adams and Reilly Car Wash"
      },
      {
        "id": 5011,
        "type": "Car Wash",
        "date": "2024-07-30",
        "amount": 50.43,
        "card": 500,
        "location": "Lin and Sons Car Wash"
      },
      {
        "id": 5012,
        "type": "Car Wash",
        "date": "2024-11-03",
        "amount": 82.08,
        "card": 500,
        "location": "Cooper, Davis and Strickland Car Wash"
      },
      {
        "id": 5013,
        "type": "Subscription Service",
        "date": "2025-01-21",
        "amount": 11.16,
        "card": 500,
        "location": "Rocha-Graham Car Wash"
      },
      {
        "id": 5014,
        "type": "Car Wash",
        "date": "2024-07-11",
        "amount": 60.79,
        "card": 500,
        "location": "Lawrence-Ramirez Car Wash"
      },
      {
        "id": 5015,
        "type": "Car Wash",
        "date": "2024-09-11",
        "amount": 40.49,
        "card": 500,
        "location": "Palmer and Sons Car Wash"
      },
      {
        "id": 5016,
        "type": "Car Wash",
        "date": "2024-07-07",
        "amount": 79.53,
        "card": 500,
        "location": "Washington, Wiley and Johnson Car Wash"
      },
      {
        "id": 5017,
        "type": "Subscription Service",
        "date": "2024-09-07",
        "amount": 93.31,
        "card": 500,
        "location": "Gray, Williams and Mills Car Wash"
      },
      {
        "id": 5018,
        "type": "Subscription Service",
        "date": "2025-04-21",
        "amount": 16.31,
        "card": 500,
        "location": "Vazquez-Kane Car Wash"
      },
      {
        "id": 5019,
        "type": "Subscription Service",
        "date": "2024-06-09",
        "amount": 39.18,
        "card": 500,
        "location": "Freeman-Ross Car Wash"
      }
    ],
    "card": {
      "id": 500,
      "name": "Daniel Kent",
      "address": "645 Bell Court Apt. 907",
      "city": "Kelleyside",
      "state": "CT",
      "zip": 10834,
      "country": "USA",
      "card_number": 6545064164917028,
      "cvv": 827,
      "exp_date": "12/32"
    }
  },
  {
    "id": 6,
    "name": "David Smith PhD",
    "email": "omccann@bradshaw.com",
    "phone": "584-388-2040",
    "status": "active",
    "membership": {
      "id": 5006,
      "type": "Elite",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/momo.png",
    "subscriptions": [
      {
        "id": 600,
        "type": "Monthly",
        "vehicle_id": 6000
      },
      {
        "id": 601,
        "type": "Annual",
        "vehicle_id": 6001
      },
      {
        "id": 602,
        "type": "Annual",
        "vehicle_id": 6002
      }
    ],
    "vehicles": [
      {
        "id": 6000,
        "make": "Dodge",
        "model": "Charger",
        "color": "Thistle",
        "plate": "DOD-6000",
        "image": "/cars/sports.png",
        "subscription": "Monthly"
      },
      {
        "id": 6001,
        "make": "Volkswagen",
        "model": "Golf",
        "color": "GreenYellow",
        "plate": "VOL-6001",
        "image": "/cars/dumb.png",
        "subscription": "Annual"
      },
      {
        "id": 6002,
        "make": "Honda",
        "model": "Accord",
        "color": "Beige",
        "plate": "HON-6002",
        "image": "/cars/sports.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 6000,
        "type": "Subscription Service",
        "date": "2024-10-18",
        "amount": 21.15,
        "card": 600,
        "location": "Lucas LLC Car Wash"
      },
      {
        "id": 6001,
        "type": "Car Wash",
        "date": "2025-01-08",
        "amount": 85.56,
        "card": 600,
        "location": "Tate, Thompson and Grant Car Wash"
      },
      {
        "id": 6002,
        "type": "Car Wash",
        "date": "2024-12-22",
        "amount": 55.56,
        "card": 600,
        "location": "Foley-Avery Car Wash"
      },
      {
        "id": 6003,
        "type": "Car Wash",
        "date": "2025-01-13",
        "amount": 47.94,
        "card": 600,
        "location": "Armstrong, Adams and Gonzales Car Wash"
      },
      {
        "id": 6004,
        "type": "Car Wash",
        "date": "2024-08-11",
        "amount": 55.1,
        "card": 600,
        "location": "Santana Group Car Wash"
      },
      {
        "id": 6005,
        "type": "Car Wash",
        "date": "2025-02-21",
        "amount": 55.85,
        "card": 600,
        "location": "Dawson-Sanders Car Wash"
      },
      {
        "id": 6006,
        "type": "Subscription Service",
        "date": "2024-07-29",
        "amount": 97.31,
        "card": 600,
        "location": "Cook, Hale and Blackburn Car Wash"
      },
      {
        "id": 6007,
        "type": "Car Wash",
        "date": "2025-03-19",
        "amount": 82.57,
        "card": 600,
        "location": "Monroe-Brown Car Wash"
      },
      {
        "id": 6008,
        "type": "Subscription Service",
        "date": "2024-10-14",
        "amount": 36.16,
        "card": 600,
        "location": "Lowe-Williams Car Wash"
      },
      {
        "id": 6009,
        "type": "Car Wash",
        "date": "2024-06-09",
        "amount": 81.06,
        "card": 600,
        "location": "Waters-Shaw Car Wash"
      },
      {
        "id": 6010,
        "type": "Subscription Service",
        "date": "2025-04-03",
        "amount": 69.52,
        "card": 600,
        "location": "Jackson-Davis Car Wash"
      },
      {
        "id": 6011,
        "type": "Subscription Service",
        "date": "2024-06-28",
        "amount": 17.98,
        "card": 600,
        "location": "Burke Group Car Wash"
      },
      {
        "id": 6012,
        "type": "Subscription Service",
        "date": "2025-01-07",
        "amount": 80.81,
        "card": 600,
        "location": "Kirby, Spencer and Cantu Car Wash"
      },
      {
        "id": 6013,
        "type": "Car Wash",
        "date": "2025-01-12",
        "amount": 86.93,
        "card": 600,
        "location": "Williams-Keller Car Wash"
      },
      {
        "id": 6014,
        "type": "Subscription Service",
        "date": "2024-09-03",
        "amount": 35.69,
        "card": 600,
        "location": "Ross-Anderson Car Wash"
      },
      {
        "id": 6015,
        "type": "Car Wash",
        "date": "2025-03-13",
        "amount": 60.56,
        "card": 600,
        "location": "Suarez, Dawson and Beasley Car Wash"
      },
      {
        "id": 6016,
        "type": "Car Wash",
        "date": "2024-12-19",
        "amount": 60.19,
        "card": 600,
        "location": "Callahan-Raymond Car Wash"
      },
      {
        "id": 6017,
        "type": "Car Wash",
        "date": "2025-04-14",
        "amount": 70.19,
        "card": 600,
        "location": "Burke-Mcdonald Car Wash"
      }
    ],
    "card": {
      "id": 600,
      "name": "Joshua Maldonado",
      "address": "899 Perez Pike",
      "city": "Nicholasfurt",
      "state": "HI",
      "zip": 76978,
      "country": "USA",
      "card_number": 639053722513,
      "cvv": 821,
      "exp_date": "05/32"
    }
  },
  {
    "id": 7,
    "name": "Jared Hamilton",
    "email": "allison03@hotmail.com",
    "phone": "611-692-8160",
    "status": "inactive",
    "membership": {
      "id": 5007,
      "type": "Gold",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/santa.png",
    "subscriptions": [],
    "vehicles": [],
    "purchases": [
      {
        "id": 7000,
        "type": "Subscription Service",
        "date": "2024-11-02",
        "amount": 31.14,
        "card": 700,
        "location": "Jones-King Car Wash"
      },
      {
        "id": 7001,
        "type": "Subscription Service",
        "date": "2024-10-06",
        "amount": 27.48,
        "card": 700,
        "location": "Mccormick Inc Car Wash"
      },
      {
        "id": 7002,
        "type": "Car Wash",
        "date": "2024-12-28",
        "amount": 70.43,
        "card": 700,
        "location": "Blankenship Group Car Wash"
      },
      {
        "id": 7003,
        "type": "Subscription Service",
        "date": "2024-11-28",
        "amount": 51.43,
        "card": 700,
        "location": "Gillespie-Vazquez Car Wash"
      },
      {
        "id": 7004,
        "type": "Car Wash",
        "date": "2025-02-04",
        "amount": 81.35,
        "card": 700,
        "location": "Williams Group Car Wash"
      },
      {
        "id": 7005,
        "type": "Car Wash",
        "date": "2025-02-01",
        "amount": 68.44,
        "card": 700,
        "location": "Lewis-Perkins Car Wash"
      },
      {
        "id": 7006,
        "type": "Subscription Service",
        "date": "2024-10-18",
        "amount": 57.92,
        "card": 700,
        "location": "Rhodes-Thompson Car Wash"
      },
      {
        "id": 7007,
        "type": "Subscription Service",
        "date": "2024-12-12",
        "amount": 85.24,
        "card": 700,
        "location": "Crane, Griffith and Castaneda Car Wash"
      },
      {
        "id": 7008,
        "type": "Car Wash",
        "date": "2025-01-08",
        "amount": 97.8,
        "card": 700,
        "location": "Cook-Hampton Car Wash"
      },
      {
        "id": 7009,
        "type": "Subscription Service",
        "date": "2024-07-04",
        "amount": 75.84,
        "card": 700,
        "location": "Andrade-Nelson Car Wash"
      },
      {
        "id": 7010,
        "type": "Subscription Service",
        "date": "2025-02-13",
        "amount": 92.3,
        "card": 700,
        "location": "Arnold-Marsh Car Wash"
      },
      {
        "id": 7011,
        "type": "Subscription Service",
        "date": "2024-12-12",
        "amount": 19.23,
        "card": 700,
        "location": "Cole Ltd Car Wash"
      },
      {
        "id": 7012,
        "type": "Car Wash",
        "date": "2024-10-20",
        "amount": 95.95,
        "card": 700,
        "location": "Blake, Martinez and Flores Car Wash"
      },
      {
        "id": 7013,
        "type": "Car Wash",
        "date": "2025-02-25",
        "amount": 43.3,
        "card": 700,
        "location": "Mack Inc Car Wash"
      },
      {
        "id": 7014,
        "type": "Car Wash",
        "date": "2024-08-04",
        "amount": 35.29,
        "card": 700,
        "location": "Ellis, Morgan and Rodriguez Car Wash"
      },
      {
        "id": 7015,
        "type": "Subscription Service",
        "date": "2025-04-01",
        "amount": 16.89,
        "card": 700,
        "location": "David, Williams and Ramsey Car Wash"
      }
    ],
    "card": {
      "id": 700,
      "name": "Jacob Clark",
      "address": "822 Cheryl River Apt. 074",
      "city": "West Shannonland",
      "state": "GA",
      "zip": 18575,
      "country": "USA",
      "card_number": 180093680545586,
      "cvv": 810,
      "exp_date": "06/28"
    }
  },
  {
    "id": 8,
    "name": "Melissa Lee",
    "email": "ttran@gmail.com",
    "phone": "299-653-3732",
    "status": "active",
    "membership": {
      "id": 5008,
      "type": "Platinum",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/momo.png",
    "subscriptions": [
      {
        "id": 800,
        "type": "Annual",
        "vehicle_id": 8000
      }
    ],
    "vehicles": [
      {
        "id": 8000,
        "make": "Honda",
        "model": "Accord",
        "color": "Turquoise",
        "plate": "HON-8000",
        "image": "/cars/sports.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 8000,
        "type": "Subscription Service",
        "date": "2024-08-06",
        "amount": 63.47,
        "card": 800,
        "location": "Thompson-Christian Car Wash"
      },
      {
        "id": 8001,
        "type": "Subscription Service",
        "date": "2025-03-01",
        "amount": 84.85,
        "card": 800,
        "location": "Rogers Inc Car Wash"
      },
      {
        "id": 8002,
        "type": "Car Wash",
        "date": "2024-09-16",
        "amount": 29.97,
        "card": 800,
        "location": "Mendoza Group Car Wash"
      },
      {
        "id": 8003,
        "type": "Subscription Service",
        "date": "2024-10-19",
        "amount": 88.89,
        "card": 800,
        "location": "Lopez, Allen and Robertson Car Wash"
      },
      {
        "id": 8004,
        "type": "Subscription Service",
        "date": "2024-08-07",
        "amount": 80.27,
        "card": 800,
        "location": "Lewis, Beltran and Hebert Car Wash"
      },
      {
        "id": 8005,
        "type": "Subscription Service",
        "date": "2024-08-17",
        "amount": 22.68,
        "card": 800,
        "location": "Harris-Bradley Car Wash"
      },
      {
        "id": 8006,
        "type": "Subscription Service",
        "date": "2024-07-20",
        "amount": 57.71,
        "card": 800,
        "location": "Johnson-Cruz Car Wash"
      },
      {
        "id": 8007,
        "type": "Subscription Service",
        "date": "2024-10-07",
        "amount": 28.79,
        "card": 800,
        "location": "Sexton, Spencer and Schultz Car Wash"
      },
      {
        "id": 8008,
        "type": "Car Wash",
        "date": "2025-03-31",
        "amount": 51.01,
        "card": 800,
        "location": "Dunlap Ltd Car Wash"
      },
      {
        "id": 8009,
        "type": "Subscription Service",
        "date": "2024-09-20",
        "amount": 82.91,
        "card": 800,
        "location": "Brown, White and Lee Car Wash"
      },
      {
        "id": 8010,
        "type": "Subscription Service",
        "date": "2024-12-30",
        "amount": 82.75,
        "card": 800,
        "location": "Jordan-Jackson Car Wash"
      },
      {
        "id": 8011,
        "type": "Subscription Service",
        "date": "2024-06-11",
        "amount": 28.95,
        "card": 800,
        "location": "Ferrell-Williams Car Wash"
      },
      {
        "id": 8012,
        "type": "Car Wash",
        "date": "2024-12-16",
        "amount": 16.44,
        "card": 800,
        "location": "Clark, Ford and Bates Car Wash"
      },
      {
        "id": 8013,
        "type": "Subscription Service",
        "date": "2024-10-17",
        "amount": 83.04,
        "card": 800,
        "location": "Mejia Inc Car Wash"
      },
      {
        "id": 8014,
        "type": "Car Wash",
        "date": "2025-04-26",
        "amount": 58.24,
        "card": 800,
        "location": "Hall, Cobb and Walsh Car Wash"
      },
      {
        "id": 8015,
        "type": "Subscription Service",
        "date": "2024-08-01",
        "amount": 85.07,
        "card": 800,
        "location": "Johnson, Williams and Lowe Car Wash"
      },
      {
        "id": 8016,
        "type": "Car Wash",
        "date": "2024-07-12",
        "amount": 52.55,
        "card": 800,
        "location": "Lewis-Lopez Car Wash"
      },
      {
        "id": 8017,
        "type": "Subscription Service",
        "date": "2025-02-01",
        "amount": 42.85,
        "card": 800,
        "location": "Warren, Wolf and Jackson Car Wash"
      }
    ],
    "card": {
      "id": 800,
      "name": "Herbert Schmidt",
      "address": "1861 Christopher Fields",
      "city": "Martinezmouth",
      "state": "OK",
      "zip": 20815,
      "country": "USA",
      "card_number": 347754278484237,
      "cvv": 430,
      "exp_date": "09/27"
    }
  },
  {
    "id": 9,
    "name": "Chad Ortiz",
    "email": "emily51@yahoo.com",
    "phone": "474-860-1929",
    "status": "active",
    "membership": {
      "id": 5009,
      "type": "Basic",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/clown.png",
    "subscriptions": [
      {
        "id": 900,
        "type": "Annual",
        "vehicle_id": 9000
      }
    ],
    "vehicles": [
      {
        "id": 9000,
        "make": "Mercedes",
        "model": "C-Class",
        "color": "Ivory",
        "plate": "MER-9000",
        "image": "/cars/dumb.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 9000,
        "type": "Subscription Service",
        "date": "2025-03-31",
        "amount": 67.36,
        "card": 900,
        "location": "Anderson-Porter Car Wash"
      },
      {
        "id": 9001,
        "type": "Subscription Service",
        "date": "2024-09-07",
        "amount": 67.56,
        "card": 900,
        "location": "Stark-Jefferson Car Wash"
      },
      {
        "id": 9002,
        "type": "Car Wash",
        "date": "2025-04-04",
        "amount": 51.32,
        "card": 900,
        "location": "Stafford, Carpenter and Murphy Car Wash"
      },
      {
        "id": 9003,
        "type": "Subscription Service",
        "date": "2025-03-29",
        "amount": 81.27,
        "card": 900,
        "location": "Harris-Manning Car Wash"
      },
      {
        "id": 9004,
        "type": "Car Wash",
        "date": "2024-10-27",
        "amount": 92.29,
        "card": 900,
        "location": "Friedman-Smith Car Wash"
      },
      {
        "id": 9005,
        "type": "Car Wash",
        "date": "2024-12-28",
        "amount": 53.22,
        "card": 900,
        "location": "Kline LLC Car Wash"
      },
      {
        "id": 9006,
        "type": "Car Wash",
        "date": "2025-01-11",
        "amount": 13.21,
        "card": 900,
        "location": "Tucker and Sons Car Wash"
      },
      {
        "id": 9007,
        "type": "Subscription Service",
        "date": "2025-04-22",
        "amount": 55.97,
        "card": 900,
        "location": "Mccormick, Reed and Henderson Car Wash"
      },
      {
        "id": 9008,
        "type": "Car Wash",
        "date": "2024-09-20",
        "amount": 28.28,
        "card": 900,
        "location": "Griffith Inc Car Wash"
      },
      {
        "id": 9009,
        "type": "Subscription Service",
        "date": "2024-06-07",
        "amount": 24.0,
        "card": 900,
        "location": "Davis-Cowan Car Wash"
      }
    ],
    "card": {
      "id": 900,
      "name": "Mark Wilson",
      "address": "761 Harrison Vista Suite 275",
      "city": "North Laura",
      "state": "AL",
      "zip": 57126,
      "country": "USA",
      "card_number": 4716658046052397,
      "cvv": 608,
      "exp_date": "12/32"
    }
  },
  {
    "id": 10,
    "name": "Anna Cline",
    "email": "kevin67@benson.biz",
    "phone": "819-540-2787",
    "status": "active",
    "membership": {
      "id": 5010,
      "type": "Platinum",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/luffy.png",
    "subscriptions": [],
    "vehicles": [],
    "purchases": [
      {
        "id": 10000,
        "type": "Subscription Service",
        "date": "2025-01-14",
        "amount": 40.3,
        "card": 1000,
        "location": "Foster-Stuart Car Wash"
      },
      {
        "id": 10001,
        "type": "Subscription Service",
        "date": "2025-03-25",
        "amount": 34.47,
        "card": 1000,
        "location": "Patel and Sons Car Wash"
      },
      {
        "id": 10002,
        "type": "Car Wash",
        "date": "2024-09-14",
        "amount": 34.19,
        "card": 1000,
        "location": "Salazar, Bush and Harris Car Wash"
      },
      {
        "id": 10003,
        "type": "Subscription Service",
        "date": "2024-06-12",
        "amount": 37.64,
        "card": 1000,
        "location": "Harding and Sons Car Wash"
      },
      {
        "id": 10004,
        "type": "Car Wash",
        "date": "2024-06-13",
        "amount": 98.07,
        "card": 1000,
        "location": "Edwards, Mills and Rogers Car Wash"
      },
      {
        "id": 10005,
        "type": "Subscription Service",
        "date": "2024-07-18",
        "amount": 68.4,
        "card": 1000,
        "location": "Rose, Cox and Lee Car Wash"
      },
      {
        "id": 10006,
        "type": "Car Wash",
        "date": "2025-05-29",
        "amount": 56.71,
        "card": 1000,
        "location": "Wilson-Silva Car Wash"
      },
      {
        "id": 10007,
        "type": "Car Wash",
        "date": "2024-12-29",
        "amount": 23.51,
        "card": 1000,
        "location": "Thompson, Fowler and Spencer Car Wash"
      },
      {
        "id": 10008,
        "type": "Subscription Service",
        "date": "2024-09-29",
        "amount": 66.01,
        "card": 1000,
        "location": "Rivas-Bond Car Wash"
      },
      {
        "id": 10009,
        "type": "Car Wash",
        "date": "2025-01-07",
        "amount": 96.97,
        "card": 1000,
        "location": "Gillespie-Blankenship Car Wash"
      },
      {
        "id": 10010,
        "type": "Car Wash",
        "date": "2024-12-07",
        "amount": 90.01,
        "card": 1000,
        "location": "Duncan-Maynard Car Wash"
      },
      {
        "id": 10011,
        "type": "Subscription Service",
        "date": "2025-03-19",
        "amount": 86.79,
        "card": 1000,
        "location": "Terrell-Mitchell Car Wash"
      },
      {
        "id": 10012,
        "type": "Subscription Service",
        "date": "2024-12-22",
        "amount": 67.94,
        "card": 1000,
        "location": "Rios, Smith and Clark Car Wash"
      }
    ],
    "card": {
      "id": 1000,
      "name": "Jeffrey Wright",
      "address": "637 Paul Walks",
      "city": "South Isaiahchester",
      "state": "MD",
      "zip": 80750,
      "country": "USA",
      "card_number": 347549129823538,
      "cvv": 914,
      "exp_date": "07/28"
    }
  },
  {
    "id": 11,
    "name": "Jessica Bates",
    "email": "uunderwood@yahoo.com",
    "phone": "172-962-5353",
    "status": "inactive",
    "membership": {
      "id": 5011,
      "type": "Silver",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/momo.png",
    "subscriptions": [
      {
        "id": 1100,
        "type": "Monthly",
        "vehicle_id": 11000
      },
      {
        "id": 1101,
        "type": "Monthly",
        "vehicle_id": 11001
      },
      {
        "id": 1102,
        "type": "Monthly",
        "vehicle_id": 11002
      },
      {
        "id": 1103,
        "type": "Monthly",
        "vehicle_id": 11003
      }
    ],
    "vehicles": [
      {
        "id": 11000,
        "make": "Honda",
        "model": "Accord",
        "color": "GoldenRod",
        "plate": "HON-11000",
        "image": "/cars/audi.png",
        "subscription": "Monthly"
      },
      {
        "id": 11001,
        "make": "Mercedes",
        "model": "C-Class",
        "color": "Navy",
        "plate": "MER-11001",
        "image": "/cars/sports.png",
        "subscription": "Monthly"
      },
      {
        "id": 11002,
        "make": "Honda",
        "model": "Accord",
        "color": "MediumAquaMarine",
        "plate": "HON-11002",
        "image": "/cars/audi.png",
        "subscription": "Monthly"
      },
      {
        "id": 11003,
        "make": "Ford",
        "model": "Fusion",
        "color": "MediumBlue",
        "plate": "FOR-11003",
        "image": "/cars/sports.png",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 11000,
        "type": "Subscription Service",
        "date": "2024-06-25",
        "amount": 57.42,
        "card": 1100,
        "location": "Thomas-Norris Car Wash"
      },
      {
        "id": 11001,
        "type": "Subscription Service",
        "date": "2024-11-14",
        "amount": 75.73,
        "card": 1100,
        "location": "Wolfe LLC Car Wash"
      },
      {
        "id": 11002,
        "type": "Car Wash",
        "date": "2025-04-12",
        "amount": 88.84,
        "card": 1100,
        "location": "Lewis Inc Car Wash"
      },
      {
        "id": 11003,
        "type": "Subscription Service",
        "date": "2025-04-01",
        "amount": 86.72,
        "card": 1100,
        "location": "Mitchell and Sons Car Wash"
      },
      {
        "id": 11004,
        "type": "Subscription Service",
        "date": "2024-08-15",
        "amount": 52.87,
        "card": 1100,
        "location": "Castillo LLC Car Wash"
      },
      {
        "id": 11005,
        "type": "Car Wash",
        "date": "2024-08-24",
        "amount": 26.98,
        "card": 1100,
        "location": "Li Ltd Car Wash"
      },
      {
        "id": 11006,
        "type": "Car Wash",
        "date": "2024-10-17",
        "amount": 62.43,
        "card": 1100,
        "location": "Moses, Taylor and Moore Car Wash"
      },
      {
        "id": 11007,
        "type": "Car Wash",
        "date": "2025-03-13",
        "amount": 94.33,
        "card": 1100,
        "location": "Wood PLC Car Wash"
      },
      {
        "id": 11008,
        "type": "Car Wash",
        "date": "2025-02-16",
        "amount": 37.17,
        "card": 1100,
        "location": "Whitaker-Williams Car Wash"
      },
      {
        "id": 11009,
        "type": "Subscription Service",
        "date": "2024-11-19",
        "amount": 83.27,
        "card": 1100,
        "location": "Tyler Group Car Wash"
      },
      {
        "id": 11010,
        "type": "Car Wash",
        "date": "2024-08-12",
        "amount": 19.29,
        "card": 1100,
        "location": "Carpenter, Frederick and Thompson Car Wash"
      },
      {
        "id": 11011,
        "type": "Car Wash",
        "date": "2025-01-25",
        "amount": 43.69,
        "card": 1100,
        "location": "Gamble-Kennedy Car Wash"
      },
      {
        "id": 11012,
        "type": "Car Wash",
        "date": "2024-10-04",
        "amount": 41.42,
        "card": 1100,
        "location": "Wilson, Rios and Calhoun Car Wash"
      },
      {
        "id": 11013,
        "type": "Subscription Service",
        "date": "2025-05-26",
        "amount": 72.68,
        "card": 1100,
        "location": "Fowler PLC Car Wash"
      },
      {
        "id": 11014,
        "type": "Subscription Service",
        "date": "2024-08-28",
        "amount": 47.04,
        "card": 1100,
        "location": "Lloyd-Harper Car Wash"
      },
      {
        "id": 11015,
        "type": "Subscription Service",
        "date": "2024-12-22",
        "amount": 89.67,
        "card": 1100,
        "location": "Vaughan, Weber and Parrish Car Wash"
      },
      {
        "id": 11016,
        "type": "Car Wash",
        "date": "2024-12-30",
        "amount": 87.14,
        "card": 1100,
        "location": "Villa-Porter Car Wash"
      },
      {
        "id": 11017,
        "type": "Car Wash",
        "date": "2024-11-05",
        "amount": 27.48,
        "card": 1100,
        "location": "Kennedy, Montgomery and Walker Car Wash"
      }
    ],
    "card": {
      "id": 1100,
      "name": "Jerry Weeks",
      "address": "93975 Elliott Knolls",
      "city": "Lake Nathaniel",
      "state": "WY",
      "zip": 26330,
      "country": "USA",
      "card_number": 213157821748689,
      "cvv": 605,
      "exp_date": "04/28"
    }
  },
  {
    "id": 12,
    "name": "Sean Munoz",
    "email": "greerlinda@hotmail.com",
    "phone": "478-337-3740",
    "status": "active",
    "membership": {
      "id": 5012,
      "type": "Silver",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/luffy.png",
    "subscriptions": [
      {
        "id": 1200,
        "type": "Annual",
        "vehicle_id": 12000
      },
      {
        "id": 1201,
        "type": "Annual",
        "vehicle_id": 12001
      },
      {
        "id": 1202,
        "type": "Annual",
        "vehicle_id": 12002
      }
    ],
    "vehicles": [
      {
        "id": 12000,
        "make": "Honda",
        "model": "Accord",
        "color": "Plum",
        "plate": "HON-12000",
        "image": "/cars/audi.png",
        "subscription": "Annual"
      },
      {
        "id": 12001,
        "make": "Mercedes",
        "model": "C-Class",
        "color": "Gold",
        "plate": "MER-12001",
        "image": "/cars/sports.png",
        "subscription": "Annual"
      },
      {
        "id": 12002,
        "make": "Dodge",
        "model": "Charger",
        "color": "GoldenRod",
        "plate": "DOD-12002",
        "image": "/cars/sports.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 12000,
        "type": "Subscription Service",
        "date": "2024-10-27",
        "amount": 31.58,
        "card": 1200,
        "location": "Alvarado Ltd Car Wash"
      },
      {
        "id": 12001,
        "type": "Car Wash",
        "date": "2024-06-15",
        "amount": 88.27,
        "card": 1200,
        "location": "Jones, Mora and Martin Car Wash"
      },
      {
        "id": 12002,
        "type": "Car Wash",
        "date": "2025-03-22",
        "amount": 68.04,
        "card": 1200,
        "location": "Smith LLC Car Wash"
      },
      {
        "id": 12003,
        "type": "Car Wash",
        "date": "2025-04-10",
        "amount": 15.11,
        "card": 1200,
        "location": "Gray-Davis Car Wash"
      },
      {
        "id": 12004,
        "type": "Car Wash",
        "date": "2024-08-23",
        "amount": 15.73,
        "card": 1200,
        "location": "Reynolds-Spencer Car Wash"
      },
      {
        "id": 12005,
        "type": "Subscription Service",
        "date": "2025-02-23",
        "amount": 97.5,
        "card": 1200,
        "location": "Ortiz-Brown Car Wash"
      },
      {
        "id": 12006,
        "type": "Subscription Service",
        "date": "2024-07-02",
        "amount": 18.78,
        "card": 1200,
        "location": "Hunt PLC Car Wash"
      },
      {
        "id": 12007,
        "type": "Car Wash",
        "date": "2025-01-04",
        "amount": 54.88,
        "card": 1200,
        "location": "Cruz-Stevens Car Wash"
      },
      {
        "id": 12008,
        "type": "Car Wash",
        "date": "2025-03-11",
        "amount": 15.43,
        "card": 1200,
        "location": "Alvarez, Williams and Schmidt Car Wash"
      },
      {
        "id": 12009,
        "type": "Car Wash",
        "date": "2025-02-22",
        "amount": 37.82,
        "card": 1200,
        "location": "Newton, Joseph and Marquez Car Wash"
      },
      {
        "id": 12010,
        "type": "Subscription Service",
        "date": "2024-09-26",
        "amount": 79.55,
        "card": 1200,
        "location": "Torres and Sons Car Wash"
      },
      {
        "id": 12011,
        "type": "Subscription Service",
        "date": "2025-03-01",
        "amount": 87.32,
        "card": 1200,
        "location": "Gamble, Rice and Hudson Car Wash"
      },
      {
        "id": 12012,
        "type": "Car Wash",
        "date": "2025-02-16",
        "amount": 34.62,
        "card": 1200,
        "location": "Lang, Martin and Hunter Car Wash"
      },
      {
        "id": 12013,
        "type": "Subscription Service",
        "date": "2024-11-07",
        "amount": 12.83,
        "card": 1200,
        "location": "Casey-Brown Car Wash"
      }
    ],
    "card": {
      "id": 1200,
      "name": "Robert Rush",
      "address": "608 Hinton Corner Suite 625",
      "city": "Port Fernando",
      "state": "NC",
      "zip": 45809,
      "country": "USA",
      "card_number": 2557228458906229,
      "cvv": 304,
      "exp_date": "03/27"
    }
  },
  {
    "id": 13,
    "name": "Ashley Hernandez",
    "email": "ashley75@cook.com",
    "phone": "944-868-4638",
    "status": "inactive",
    "membership": {
      "id": 5013,
      "type": "Basic",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/starbucks.png",
    "subscriptions": [
      {
        "id": 1300,
        "type": "Monthly",
        "vehicle_id": 13000
      },
      {
        "id": 1301,
        "type": "Annual",
        "vehicle_id": 13001
      },
      {
        "id": 1302,
        "type": "Annual",
        "vehicle_id": 13002
      }
    ],
    "vehicles": [
      {
        "id": 13000,
        "make": "Toyota",
        "model": "Camry",
        "color": "Purple",
        "plate": "TOY-13000",
        "image": "/cars/dumb.png",
        "subscription": "Monthly"
      },
      {
        "id": 13001,
        "make": "Dodge",
        "model": "Charger",
        "color": "LightSalmon",
        "plate": "DOD-13001",
        "image": "/cars/sports.png",
        "subscription": "Annual"
      },
      {
        "id": 13002,
        "make": "BMW",
        "model": "3 Series",
        "color": "GoldenRod",
        "plate": "BMW-13002",
        "image": "/cars/audi.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 13000,
        "type": "Car Wash",
        "date": "2025-03-24",
        "amount": 41.43,
        "card": 1300,
        "location": "Baxter-Lynch Car Wash"
      },
      {
        "id": 13001,
        "type": "Subscription Service",
        "date": "2025-05-07",
        "amount": 72.25,
        "card": 1300,
        "location": "Rogers, Hayes and Bailey Car Wash"
      },
      {
        "id": 13002,
        "type": "Car Wash",
        "date": "2025-04-13",
        "amount": 43.78,
        "card": 1300,
        "location": "Pierce Group Car Wash"
      },
      {
        "id": 13003,
        "type": "Car Wash",
        "date": "2024-10-19",
        "amount": 75.17,
        "card": 1300,
        "location": "Rogers, Arnold and Adams Car Wash"
      },
      {
        "id": 13004,
        "type": "Car Wash",
        "date": "2025-04-16",
        "amount": 96.94,
        "card": 1300,
        "location": "Kim PLC Car Wash"
      },
      {
        "id": 13005,
        "type": "Car Wash",
        "date": "2024-06-29",
        "amount": 84.02,
        "card": 1300,
        "location": "Taylor and Sons Car Wash"
      },
      {
        "id": 13006,
        "type": "Car Wash",
        "date": "2024-09-16",
        "amount": 86.69,
        "card": 1300,
        "location": "Crane-Griffin Car Wash"
      },
      {
        "id": 13007,
        "type": "Car Wash",
        "date": "2025-03-29",
        "amount": 58.96,
        "card": 1300,
        "location": "Rosario, Adams and Liu Car Wash"
      },
      {
        "id": 13008,
        "type": "Car Wash",
        "date": "2025-05-13",
        "amount": 19.83,
        "card": 1300,
        "location": "Smith-Mcbride Car Wash"
      },
      {
        "id": 13009,
        "type": "Subscription Service",
        "date": "2024-08-20",
        "amount": 47.67,
        "card": 1300,
        "location": "Bruce Inc Car Wash"
      },
      {
        "id": 13010,
        "type": "Subscription Service",
        "date": "2024-12-10",
        "amount": 72.99,
        "card": 1300,
        "location": "Edwards and Sons Car Wash"
      },
      {
        "id": 13011,
        "type": "Subscription Service",
        "date": "2024-12-17",
        "amount": 55.16,
        "card": 1300,
        "location": "Smith Inc Car Wash"
      },
      {
        "id": 13012,
        "type": "Car Wash",
        "date": "2024-09-10",
        "amount": 13.86,
        "card": 1300,
        "location": "Hughes Group Car Wash"
      },
      {
        "id": 13013,
        "type": "Car Wash",
        "date": "2025-03-21",
        "amount": 32.86,
        "card": 1300,
        "location": "Williams-Williams Car Wash"
      },
      {
        "id": 13014,
        "type": "Car Wash",
        "date": "2025-05-20",
        "amount": 26.65,
        "card": 1300,
        "location": "Nelson-Lawrence Car Wash"
      },
      {
        "id": 13015,
        "type": "Subscription Service",
        "date": "2024-12-08",
        "amount": 55.64,
        "card": 1300,
        "location": "Payne-Hess Car Wash"
      },
      {
        "id": 13016,
        "type": "Car Wash",
        "date": "2025-03-31",
        "amount": 40.86,
        "card": 1300,
        "location": "Moore-Morales Car Wash"
      },
      {
        "id": 13017,
        "type": "Car Wash",
        "date": "2024-07-27",
        "amount": 94.08,
        "card": 1300,
        "location": "Delgado, Jones and Simmons Car Wash"
      },
      {
        "id": 13018,
        "type": "Subscription Service",
        "date": "2025-04-20",
        "amount": 40.02,
        "card": 1300,
        "location": "Chavez-Gonzalez Car Wash"
      }
    ],
    "card": {
      "id": 1300,
      "name": "Joshua Mendoza",
      "address": "8600 Jamie Mount Apt. 269",
      "city": "Quinnshire",
      "state": "WY",
      "zip": 13172,
      "country": "USA",
      "card_number": 6538876736196669,
      "cvv": 502,
      "exp_date": "12/29"
    }
  },
  {
    "id": 14,
    "name": "Lawrence Davis",
    "email": "nancy11@kelley.com",
    "phone": "783-031-1996",
    "status": "inactive",
    "membership": {
      "id": 5014,
      "type": "Basic",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/santa.png",
    "subscriptions": [
      {
        "id": 1400,
        "type": "Annual",
        "vehicle_id": 14000
      }
    ],
    "vehicles": [
      {
        "id": 14000,
        "make": "Honda",
        "model": "Accord",
        "color": "MistyRose",
        "plate": "HON-14000",
        "image": "/cars/sports.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 14000,
        "type": "Subscription Service",
        "date": "2025-05-31",
        "amount": 19.4,
        "card": 1400,
        "location": "Sweeney, Ward and Haney Car Wash"
      },
      {
        "id": 14001,
        "type": "Car Wash",
        "date": "2024-12-29",
        "amount": 93.14,
        "card": 1400,
        "location": "Long Group Car Wash"
      },
      {
        "id": 14002,
        "type": "Car Wash",
        "date": "2024-07-25",
        "amount": 64.75,
        "card": 1400,
        "location": "Hawkins LLC Car Wash"
      },
      {
        "id": 14003,
        "type": "Subscription Service",
        "date": "2024-06-19",
        "amount": 84.05,
        "card": 1400,
        "location": "Clark Inc Car Wash"
      },
      {
        "id": 14004,
        "type": "Car Wash",
        "date": "2024-12-09",
        "amount": 31.59,
        "card": 1400,
        "location": "Smith, Abbott and Knight Car Wash"
      },
      {
        "id": 14005,
        "type": "Car Wash",
        "date": "2024-08-03",
        "amount": 29.04,
        "card": 1400,
        "location": "Farmer, Barnes and Hall Car Wash"
      },
      {
        "id": 14006,
        "type": "Subscription Service",
        "date": "2025-05-27",
        "amount": 91.17,
        "card": 1400,
        "location": "Middleton, Higgins and David Car Wash"
      },
      {
        "id": 14007,
        "type": "Subscription Service",
        "date": "2025-02-16",
        "amount": 45.75,
        "card": 1400,
        "location": "Alvarado, Petty and Mcpherson Car Wash"
      },
      {
        "id": 14008,
        "type": "Car Wash",
        "date": "2024-06-24",
        "amount": 45.46,
        "card": 1400,
        "location": "Nelson and Sons Car Wash"
      },
      {
        "id": 14009,
        "type": "Car Wash",
        "date": "2024-12-10",
        "amount": 24.58,
        "card": 1400,
        "location": "Washington Ltd Car Wash"
      },
      {
        "id": 14010,
        "type": "Car Wash",
        "date": "2024-06-06",
        "amount": 76.15,
        "card": 1400,
        "location": "Jennings, Martinez and Williams Car Wash"
      },
      {
        "id": 14011,
        "type": "Subscription Service",
        "date": "2025-05-20",
        "amount": 57.83,
        "card": 1400,
        "location": "Martin, Taylor and Smith Car Wash"
      },
      {
        "id": 14012,
        "type": "Car Wash",
        "date": "2025-05-31",
        "amount": 14.42,
        "card": 1400,
        "location": "Foster-Davidson Car Wash"
      },
      {
        "id": 14013,
        "type": "Car Wash",
        "date": "2024-06-22",
        "amount": 19.61,
        "card": 1400,
        "location": "Dougherty, Aguirre and Miller Car Wash"
      }
    ],
    "card": {
      "id": 1400,
      "name": "Brent Lopez",
      "address": "5622 Michelle Mountain Suite 446",
      "city": "Zacharyhaven",
      "state": "MD",
      "zip": 2534,
      "country": "USA",
      "card_number": 3539574766296741,
      "cvv": 226,
      "exp_date": "08/31"
    }
  },
  {
    "id": 15,
    "name": "Holly Snyder",
    "email": "hudsonrobert@neal-stephens.com",
    "phone": "967-431-5568",
    "status": "active",
    "membership": {
      "id": 5015,
      "type": "Basic",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/momo.png",
    "subscriptions": [
      {
        "id": 1500,
        "type": "Monthly",
        "vehicle_id": 15000
      }
    ],
    "vehicles": [
      {
        "id": 15000,
        "make": "Dodge",
        "model": "Charger",
        "color": "LightGray",
        "plate": "DOD-15000",
        "image": "/cars/dumb.png",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 15000,
        "type": "Car Wash",
        "date": "2025-04-08",
        "amount": 76.75,
        "card": 1500,
        "location": "Rivera-Navarro Car Wash"
      },
      {
        "id": 15001,
        "type": "Subscription Service",
        "date": "2024-09-17",
        "amount": 11.55,
        "card": 1500,
        "location": "Murphy Group Car Wash"
      },
      {
        "id": 15002,
        "type": "Car Wash",
        "date": "2025-01-16",
        "amount": 75.18,
        "card": 1500,
        "location": "Smith and Sons Car Wash"
      },
      {
        "id": 15003,
        "type": "Car Wash",
        "date": "2025-01-25",
        "amount": 40.45,
        "card": 1500,
        "location": "Wells Group Car Wash"
      },
      {
        "id": 15004,
        "type": "Subscription Service",
        "date": "2024-08-29",
        "amount": 38.35,
        "card": 1500,
        "location": "Collins LLC Car Wash"
      },
      {
        "id": 15005,
        "type": "Subscription Service",
        "date": "2024-12-26",
        "amount": 45.44,
        "card": 1500,
        "location": "Little, Klein and Moss Car Wash"
      },
      {
        "id": 15006,
        "type": "Car Wash",
        "date": "2025-02-18",
        "amount": 19.87,
        "card": 1500,
        "location": "Nunez and Sons Car Wash"
      },
      {
        "id": 15007,
        "type": "Car Wash",
        "date": "2025-06-03",
        "amount": 53.15,
        "card": 1500,
        "location": "Jones, Trujillo and Holland Car Wash"
      },
      {
        "id": 15008,
        "type": "Subscription Service",
        "date": "2025-01-27",
        "amount": 90.91,
        "card": 1500,
        "location": "Banks-Powers Car Wash"
      },
      {
        "id": 15009,
        "type": "Car Wash",
        "date": "2025-05-29",
        "amount": 83.97,
        "card": 1500,
        "location": "Stewart Group Car Wash"
      },
      {
        "id": 15010,
        "type": "Subscription Service",
        "date": "2024-11-30",
        "amount": 89.36,
        "card": 1500,
        "location": "Gallegos, Shelton and Cook Car Wash"
      },
      {
        "id": 15011,
        "type": "Subscription Service",
        "date": "2024-12-20",
        "amount": 39.78,
        "card": 1500,
        "location": "Schwartz, Calderon and Tran Car Wash"
      },
      {
        "id": 15012,
        "type": "Subscription Service",
        "date": "2024-07-10",
        "amount": 68.74,
        "card": 1500,
        "location": "Carrillo Ltd Car Wash"
      },
      {
        "id": 15013,
        "type": "Car Wash",
        "date": "2025-03-05",
        "amount": 73.21,
        "card": 1500,
        "location": "Hood-Green Car Wash"
      },
      {
        "id": 15014,
        "type": "Car Wash",
        "date": "2024-07-06",
        "amount": 52.72,
        "card": 1500,
        "location": "Walker Group Car Wash"
      }
    ],
    "card": {
      "id": 1500,
      "name": "Timothy Byrd",
      "address": "58942 Kelsey Ramp Suite 108",
      "city": "Michaelshire",
      "state": "OK",
      "zip": 951,
      "country": "USA",
      "card_number": 3512552644783883,
      "cvv": 205,
      "exp_date": "05/34"
    }
  },
  {
    "id": 16,
    "name": "Spencer Parker",
    "email": "andersontricia@bowman.com",
    "phone": "204-411-9158",
    "status": "active",
    "membership": {
      "id": 5016,
      "type": "Elite",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/luffy.png",
    "subscriptions": [],
    "vehicles": [],
    "purchases": [
      {
        "id": 16000,
        "type": "Car Wash",
        "date": "2025-02-17",
        "amount": 56.09,
        "card": 1600,
        "location": "Schultz-Warren Car Wash"
      },
      {
        "id": 16001,
        "type": "Subscription Service",
        "date": "2025-02-17",
        "amount": 75.03,
        "card": 1600,
        "location": "Bush-Chen Car Wash"
      },
      {
        "id": 16002,
        "type": "Car Wash",
        "date": "2025-03-16",
        "amount": 32.77,
        "card": 1600,
        "location": "Knox, Chase and Arellano Car Wash"
      },
      {
        "id": 16003,
        "type": "Subscription Service",
        "date": "2025-05-15",
        "amount": 85.58,
        "card": 1600,
        "location": "Harrington-Stevens Car Wash"
      },
      {
        "id": 16004,
        "type": "Subscription Service",
        "date": "2025-02-27",
        "amount": 95.9,
        "card": 1600,
        "location": "Tucker-Price Car Wash"
      },
      {
        "id": 16005,
        "type": "Car Wash",
        "date": "2024-09-06",
        "amount": 10.11,
        "card": 1600,
        "location": "Schultz Ltd Car Wash"
      },
      {
        "id": 16006,
        "type": "Car Wash",
        "date": "2025-03-26",
        "amount": 96.61,
        "card": 1600,
        "location": "Miller-Williams Car Wash"
      },
      {
        "id": 16007,
        "type": "Car Wash",
        "date": "2025-01-26",
        "amount": 37.3,
        "card": 1600,
        "location": "Hubbard-Hayes Car Wash"
      },
      {
        "id": 16008,
        "type": "Car Wash",
        "date": "2024-09-21",
        "amount": 69.25,
        "card": 1600,
        "location": "Nguyen-Smith Car Wash"
      },
      {
        "id": 16009,
        "type": "Subscription Service",
        "date": "2024-10-26",
        "amount": 78.89,
        "card": 1600,
        "location": "Gomez, Ross and Golden Car Wash"
      },
      {
        "id": 16010,
        "type": "Car Wash",
        "date": "2025-02-27",
        "amount": 99.1,
        "card": 1600,
        "location": "Rosales LLC Car Wash"
      },
      {
        "id": 16011,
        "type": "Car Wash",
        "date": "2024-08-02",
        "amount": 68.72,
        "card": 1600,
        "location": "Johnson, Smith and Braun Car Wash"
      },
      {
        "id": 16012,
        "type": "Car Wash",
        "date": "2024-10-21",
        "amount": 24.39,
        "card": 1600,
        "location": "Robbins, Hicks and Reed Car Wash"
      },
      {
        "id": 16013,
        "type": "Subscription Service",
        "date": "2024-09-10",
        "amount": 10.19,
        "card": 1600,
        "location": "Cohen, Bentley and Wilkerson Car Wash"
      },
      {
        "id": 16014,
        "type": "Subscription Service",
        "date": "2025-03-03",
        "amount": 43.54,
        "card": 1600,
        "location": "Glover, Gonzalez and Martin Car Wash"
      },
      {
        "id": 16015,
        "type": "Car Wash",
        "date": "2025-01-21",
        "amount": 59.33,
        "card": 1600,
        "location": "Baird LLC Car Wash"
      }
    ],
    "card": {
      "id": 1600,
      "name": "Jennifer Davis",
      "address": "81885 Perry Ranch",
      "city": "Jessicaside",
      "state": "NV",
      "zip": 55704,
      "country": "USA",
      "card_number": 3573603205872452,
      "cvv": 386,
      "exp_date": "02/35"
    }
  },
  {
    "id": 17,
    "name": "Molly Parker",
    "email": "vancedavid@hotmail.com",
    "phone": "546-285-7584",
    "status": "inactive",
    "membership": {
      "id": 5017,
      "type": "Gold",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/starbucks.png",
    "subscriptions": [],
    "vehicles": [],
    "purchases": [
      {
        "id": 17000,
        "type": "Subscription Service",
        "date": "2025-05-18",
        "amount": 63.64,
        "card": 1700,
        "location": "Bauer LLC Car Wash"
      },
      {
        "id": 17001,
        "type": "Subscription Service",
        "date": "2025-01-24",
        "amount": 47.71,
        "card": 1700,
        "location": "Bowman, Rodriguez and Martin Car Wash"
      },
      {
        "id": 17002,
        "type": "Car Wash",
        "date": "2025-05-11",
        "amount": 66.18,
        "card": 1700,
        "location": "Potts-Mccullough Car Wash"
      },
      {
        "id": 17003,
        "type": "Car Wash",
        "date": "2024-08-21",
        "amount": 15.72,
        "card": 1700,
        "location": "Cook Group Car Wash"
      },
      {
        "id": 17004,
        "type": "Car Wash",
        "date": "2024-08-25",
        "amount": 70.86,
        "card": 1700,
        "location": "Baker, Miller and Ellis Car Wash"
      },
      {
        "id": 17005,
        "type": "Car Wash",
        "date": "2024-08-17",
        "amount": 18.16,
        "card": 1700,
        "location": "Nolan PLC Car Wash"
      },
      {
        "id": 17006,
        "type": "Subscription Service",
        "date": "2024-07-30",
        "amount": 41.13,
        "card": 1700,
        "location": "Swanson-Parrish Car Wash"
      },
      {
        "id": 17007,
        "type": "Car Wash",
        "date": "2024-10-23",
        "amount": 64.15,
        "card": 1700,
        "location": "Scott, Smith and Harrison Car Wash"
      },
      {
        "id": 17008,
        "type": "Subscription Service",
        "date": "2025-01-30",
        "amount": 10.29,
        "card": 1700,
        "location": "Ray Ltd Car Wash"
      },
      {
        "id": 17009,
        "type": "Car Wash",
        "date": "2025-03-03",
        "amount": 68.48,
        "card": 1700,
        "location": "Sweeney Group Car Wash"
      },
      {
        "id": 17010,
        "type": "Car Wash",
        "date": "2025-05-14",
        "amount": 10.4,
        "card": 1700,
        "location": "Anderson, Barnes and Small Car Wash"
      },
      {
        "id": 17011,
        "type": "Car Wash",
        "date": "2024-09-16",
        "amount": 25.59,
        "card": 1700,
        "location": "Mcmahon, Pugh and Miller Car Wash"
      },
      {
        "id": 17012,
        "type": "Car Wash",
        "date": "2024-08-27",
        "amount": 96.53,
        "card": 1700,
        "location": "Neal LLC Car Wash"
      }
    ],
    "card": {
      "id": 1700,
      "name": "Marcus Richardson",
      "address": "670 Johnston Island",
      "city": "Melindafurt",
      "state": "IA",
      "zip": 43136,
      "country": "USA",
      "card_number": 501824516287,
      "cvv": 545,
      "exp_date": "11/32"
    }
  },
  {
    "id": 18,
    "name": "Donald Strong",
    "email": "amartinez@schmidt-perkins.biz",
    "phone": "128-368-9850",
    "status": "inactive",
    "membership": {
      "id": 5018,
      "type": "Elite",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/momo.png",
    "subscriptions": [
      {
        "id": 1800,
        "type": "Annual",
        "vehicle_id": 18000
      },
      {
        "id": 1801,
        "type": "Annual",
        "vehicle_id": 18001
      }
    ],
    "vehicles": [
      {
        "id": 18000,
        "make": "Ford",
        "model": "Fusion",
        "color": "CornflowerBlue",
        "plate": "FOR-18000",
        "image": "/cars/dumb.png",
        "subscription": "Annual"
      },
      {
        "id": 18001,
        "make": "Dodge",
        "model": "Charger",
        "color": "LightSkyBlue",
        "plate": "DOD-18001",
        "image": "/cars/sports.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 18000,
        "type": "Car Wash",
        "date": "2024-06-06",
        "amount": 77.71,
        "card": 1800,
        "location": "Aguirre, Phelps and Rivera Car Wash"
      },
      {
        "id": 18001,
        "type": "Subscription Service",
        "date": "2024-12-07",
        "amount": 18.29,
        "card": 1800,
        "location": "Harris-Mullins Car Wash"
      },
      {
        "id": 18002,
        "type": "Car Wash",
        "date": "2024-06-17",
        "amount": 65.84,
        "card": 1800,
        "location": "Reynolds LLC Car Wash"
      },
      {
        "id": 18003,
        "type": "Subscription Service",
        "date": "2024-08-05",
        "amount": 78.24,
        "card": 1800,
        "location": "Carlson Group Car Wash"
      },
      {
        "id": 18004,
        "type": "Car Wash",
        "date": "2025-05-28",
        "amount": 99.56,
        "card": 1800,
        "location": "Sparks, Parrish and Johnson Car Wash"
      },
      {
        "id": 18005,
        "type": "Subscription Service",
        "date": "2024-08-07",
        "amount": 76.3,
        "card": 1800,
        "location": "Johnson LLC Car Wash"
      },
      {
        "id": 18006,
        "type": "Subscription Service",
        "date": "2024-09-03",
        "amount": 11.47,
        "card": 1800,
        "location": "Phelps Inc Car Wash"
      },
      {
        "id": 18007,
        "type": "Car Wash",
        "date": "2024-07-29",
        "amount": 13.48,
        "card": 1800,
        "location": "Hart, Hodges and Dyer Car Wash"
      },
      {
        "id": 18008,
        "type": "Subscription Service",
        "date": "2025-02-26",
        "amount": 97.76,
        "card": 1800,
        "location": "Saunders, Phillips and Stephens Car Wash"
      },
      {
        "id": 18009,
        "type": "Subscription Service",
        "date": "2024-06-19",
        "amount": 48.47,
        "card": 1800,
        "location": "Lopez, Moore and Dixon Car Wash"
      },
      {
        "id": 18010,
        "type": "Car Wash",
        "date": "2024-07-17",
        "amount": 13.71,
        "card": 1800,
        "location": "Bryant, Scott and Nelson Car Wash"
      },
      {
        "id": 18011,
        "type": "Car Wash",
        "date": "2025-04-11",
        "amount": 20.54,
        "card": 1800,
        "location": "Clark Ltd Car Wash"
      },
      {
        "id": 18012,
        "type": "Subscription Service",
        "date": "2024-07-07",
        "amount": 79.89,
        "card": 1800,
        "location": "Johnson, Rhodes and Jones Car Wash"
      },
      {
        "id": 18013,
        "type": "Subscription Service",
        "date": "2025-03-23",
        "amount": 89.5,
        "card": 1800,
        "location": "Maddox, Frank and Ellis Car Wash"
      },
      {
        "id": 18014,
        "type": "Car Wash",
        "date": "2024-12-16",
        "amount": 72.15,
        "card": 1800,
        "location": "Bradford, Mccormick and Miller Car Wash"
      },
      {
        "id": 18015,
        "type": "Subscription Service",
        "date": "2024-11-13",
        "amount": 58.49,
        "card": 1800,
        "location": "Warner, Harvey and Waters Car Wash"
      },
      {
        "id": 18016,
        "type": "Car Wash",
        "date": "2024-08-30",
        "amount": 52.64,
        "card": 1800,
        "location": "Kane, Ramirez and Barrett Car Wash"
      },
      {
        "id": 18017,
        "type": "Car Wash",
        "date": "2024-09-27",
        "amount": 36.86,
        "card": 1800,
        "location": "Barrett, Yu and Duran Car Wash"
      },
      {
        "id": 18018,
        "type": "Subscription Service",
        "date": "2024-07-09",
        "amount": 97.35,
        "card": 1800,
        "location": "May-Baker Car Wash"
      }
    ],
    "card": {
      "id": 1800,
      "name": "Bryan Hartman",
      "address": "5821 Miller Lights Apt. 929",
      "city": "North Brian",
      "state": "CO",
      "zip": 65749,
      "country": "USA",
      "card_number": 4567709980012713,
      "cvv": 39,
      "exp_date": "07/25"
    }
  },
  {
    "id": 19,
    "name": "Chris Quinn",
    "email": "zhansen@ray.com",
    "phone": "069-549-3786",
    "status": "active",
    "membership": {
      "id": 5019,
      "type": "Silver",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/old.jpg",
    "subscriptions": [
      {
        "id": 1900,
        "type": "Monthly",
        "vehicle_id": 19000
      },
      {
        "id": 1901,
        "type": "Annual",
        "vehicle_id": 19001
      },
      {
        "id": 1902,
        "type": "Annual",
        "vehicle_id": 19002
      },
      {
        "id": 1903,
        "type": "Annual",
        "vehicle_id": 19003
      }
    ],
    "vehicles": [
      {
        "id": 19000,
        "make": "Ford",
        "model": "Fusion",
        "color": "Thistle",
        "plate": "FOR-19000",
        "image": "/cars/dumb.png",
        "subscription": "Monthly"
      },
      {
        "id": 19001,
        "make": "Dodge",
        "model": "Charger",
        "color": "SeaShell",
        "plate": "DOD-19001",
        "image": "/cars/audi.png",
        "subscription": "Annual"
      },
      {
        "id": 19002,
        "make": "Honda",
        "model": "Accord",
        "color": "FireBrick",
        "plate": "HON-19002",
        "image": "/cars/sports.png",
        "subscription": "Annual"
      },
      {
        "id": 19003,
        "make": "Dodge",
        "model": "Charger",
        "color": "LightCoral",
        "plate": "DOD-19003",
        "image": "/cars/audi.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 19000,
        "type": "Subscription Service",
        "date": "2025-03-28",
        "amount": 96.22,
        "card": 1900,
        "location": "Arroyo, Riley and Mitchell Car Wash"
      },
      {
        "id": 19001,
        "type": "Car Wash",
        "date": "2024-07-07",
        "amount": 98.86,
        "card": 1900,
        "location": "Rice, Johnson and Dyer Car Wash"
      },
      {
        "id": 19002,
        "type": "Car Wash",
        "date": "2024-10-26",
        "amount": 78.52,
        "card": 1900,
        "location": "Jackson Ltd Car Wash"
      },
      {
        "id": 19003,
        "type": "Car Wash",
        "date": "2025-02-01",
        "amount": 58.27,
        "card": 1900,
        "location": "Watson Inc Car Wash"
      },
      {
        "id": 19004,
        "type": "Subscription Service",
        "date": "2024-12-20",
        "amount": 64.1,
        "card": 1900,
        "location": "Pennington-Russell Car Wash"
      },
      {
        "id": 19005,
        "type": "Subscription Service",
        "date": "2024-08-13",
        "amount": 85.47,
        "card": 1900,
        "location": "Stephenson, Grant and Snyder Car Wash"
      },
      {
        "id": 19006,
        "type": "Subscription Service",
        "date": "2024-11-07",
        "amount": 95.57,
        "card": 1900,
        "location": "Poole PLC Car Wash"
      },
      {
        "id": 19007,
        "type": "Subscription Service",
        "date": "2024-09-24",
        "amount": 86.08,
        "card": 1900,
        "location": "Smith-Rodriguez Car Wash"
      },
      {
        "id": 19008,
        "type": "Car Wash",
        "date": "2025-02-09",
        "amount": 66.37,
        "card": 1900,
        "location": "Phillips-Graham Car Wash"
      },
      {
        "id": 19009,
        "type": "Car Wash",
        "date": "2024-12-16",
        "amount": 82.58,
        "card": 1900,
        "location": "Robertson Inc Car Wash"
      },
      {
        "id": 19010,
        "type": "Subscription Service",
        "date": "2024-08-17",
        "amount": 15.34,
        "card": 1900,
        "location": "Espinoza, Brown and Hall Car Wash"
      },
      {
        "id": 19011,
        "type": "Subscription Service",
        "date": "2024-06-04",
        "amount": 78.15,
        "card": 1900,
        "location": "Hughes, West and Taylor Car Wash"
      }
    ],
    "card": {
      "id": 1900,
      "name": "Keith Carpenter",
      "address": "043 Sherry Spring Suite 888",
      "city": "South Kimberlyborough",
      "state": "MT",
      "zip": 85021,
      "country": "USA",
      "card_number": 4534460994815879,
      "cvv": 767,
      "exp_date": "07/29"
    }
  },
  {
    "id": 20,
    "name": "Ms. Christina Newton DDS",
    "email": "sandymorton@lee-adams.biz",
    "phone": "882-851-9012",
    "status": "inactive",
    "membership": {
      "id": 5020,
      "type": "Platinum",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/mcdonalds.png",
    "subscriptions": [
      {
        "id": 2000,
        "type": "Annual",
        "vehicle_id": 20000
      }
    ],
    "vehicles": [
      {
        "id": 20000,
        "make": "Nissan",
        "model": "Altima",
        "color": "Chocolate",
        "plate": "NIS-20000",
        "image": "/cars/sports.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 20000,
        "type": "Car Wash",
        "date": "2025-05-11",
        "amount": 25.94,
        "card": 2000,
        "location": "Gomez LLC Car Wash"
      },
      {
        "id": 20001,
        "type": "Subscription Service",
        "date": "2024-12-28",
        "amount": 22.25,
        "card": 2000,
        "location": "Carlson-Burgess Car Wash"
      },
      {
        "id": 20002,
        "type": "Car Wash",
        "date": "2024-07-12",
        "amount": 44.62,
        "card": 2000,
        "location": "Mcknight, Kelly and Wilson Car Wash"
      },
      {
        "id": 20003,
        "type": "Subscription Service",
        "date": "2025-03-22",
        "amount": 42.88,
        "card": 2000,
        "location": "Kim, Monroe and Barrera Car Wash"
      },
      {
        "id": 20004,
        "type": "Subscription Service",
        "date": "2025-01-17",
        "amount": 91.04,
        "card": 2000,
        "location": "Salazar Ltd Car Wash"
      },
      {
        "id": 20005,
        "type": "Car Wash",
        "date": "2024-10-22",
        "amount": 47.41,
        "card": 2000,
        "location": "Hodge LLC Car Wash"
      },
      {
        "id": 20006,
        "type": "Subscription Service",
        "date": "2025-03-29",
        "amount": 57.08,
        "card": 2000,
        "location": "Taylor-Thompson Car Wash"
      },
      {
        "id": 20007,
        "type": "Subscription Service",
        "date": "2025-04-22",
        "amount": 83.78,
        "card": 2000,
        "location": "Ramirez, Wells and Mejia Car Wash"
      },
      {
        "id": 20008,
        "type": "Car Wash",
        "date": "2024-10-06",
        "amount": 82.13,
        "card": 2000,
        "location": "Hernandez and Sons Car Wash"
      },
      {
        "id": 20009,
        "type": "Car Wash",
        "date": "2025-03-15",
        "amount": 63.13,
        "card": 2000,
        "location": "White and Sons Car Wash"
      },
      {
        "id": 20010,
        "type": "Subscription Service",
        "date": "2025-05-21",
        "amount": 94.05,
        "card": 2000,
        "location": "Walker-Hebert Car Wash"
      },
      {
        "id": 20011,
        "type": "Car Wash",
        "date": "2025-03-24",
        "amount": 67.94,
        "card": 2000,
        "location": "Herrera-Davis Car Wash"
      },
      {
        "id": 20012,
        "type": "Subscription Service",
        "date": "2024-06-24",
        "amount": 49.52,
        "card": 2000,
        "location": "Ellis Inc Car Wash"
      }
    ],
    "card": {
      "id": 2000,
      "name": "Donald Glover",
      "address": "42231 Bianca Union",
      "city": "Jonathanmouth",
      "state": "HI",
      "zip": 17385,
      "country": "USA",
      "card_number": 60498465255,
      "cvv": 161,
      "exp_date": "07/33"
    }
  },
  {
    "id": 21,
    "name": "Daniel Christensen",
    "email": "landerson@kim.com",
    "phone": "645-821-8780",
    "status": "active",
    "membership": {
      "id": 5021,
      "type": "Platinum",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/clown.png",
    "subscriptions": [],
    "vehicles": [],
    "purchases": [
      {
        "id": 21000,
        "type": "Subscription Service",
        "date": "2024-08-19",
        "amount": 14.12,
        "card": 2100,
        "location": "Hopkins, Mcmahon and Barker Car Wash"
      },
      {
        "id": 21001,
        "type": "Subscription Service",
        "date": "2024-06-06",
        "amount": 43.65,
        "card": 2100,
        "location": "Meyer-Knight Car Wash"
      },
      {
        "id": 21002,
        "type": "Car Wash",
        "date": "2024-09-13",
        "amount": 83.58,
        "card": 2100,
        "location": "Jimenez, Gomez and Sanchez Car Wash"
      },
      {
        "id": 21003,
        "type": "Subscription Service",
        "date": "2024-11-19",
        "amount": 28.57,
        "card": 2100,
        "location": "Hill, Perez and Lee Car Wash"
      },
      {
        "id": 21004,
        "type": "Subscription Service",
        "date": "2024-10-04",
        "amount": 70.7,
        "card": 2100,
        "location": "Peterson, Choi and Gross Car Wash"
      },
      {
        "id": 21005,
        "type": "Subscription Service",
        "date": "2025-04-20",
        "amount": 34.97,
        "card": 2100,
        "location": "Mueller-Parks Car Wash"
      },
      {
        "id": 21006,
        "type": "Subscription Service",
        "date": "2025-03-07",
        "amount": 13.5,
        "card": 2100,
        "location": "Duffy and Sons Car Wash"
      },
      {
        "id": 21007,
        "type": "Car Wash",
        "date": "2024-09-02",
        "amount": 35.18,
        "card": 2100,
        "location": "Obrien Group Car Wash"
      },
      {
        "id": 21008,
        "type": "Subscription Service",
        "date": "2024-10-04",
        "amount": 50.39,
        "card": 2100,
        "location": "Tate-Price Car Wash"
      },
      {
        "id": 21009,
        "type": "Car Wash",
        "date": "2024-10-19",
        "amount": 14.75,
        "card": 2100,
        "location": "Rodriguez, Barrett and Smith Car Wash"
      },
      {
        "id": 21010,
        "type": "Subscription Service",
        "date": "2025-05-03",
        "amount": 54.31,
        "card": 2100,
        "location": "Schmitt, Peters and Campbell Car Wash"
      },
      {
        "id": 21011,
        "type": "Car Wash",
        "date": "2024-08-26",
        "amount": 56.76,
        "card": 2100,
        "location": "Hanna and Sons Car Wash"
      },
      {
        "id": 21012,
        "type": "Car Wash",
        "date": "2024-09-02",
        "amount": 81.06,
        "card": 2100,
        "location": "Stephens, Cox and Morales Car Wash"
      }
    ],
    "card": {
      "id": 2100,
      "name": "Linda Daniels",
      "address": "4898 Johnson Ridges Suite 603",
      "city": "North Edwinstad",
      "state": "TX",
      "zip": 81341,
      "country": "USA",
      "card_number": 180096717843320,
      "cvv": 859,
      "exp_date": "11/26"
    }
  },
  {
    "id": 22,
    "name": "Tyler Stone",
    "email": "mark35@reed.biz",
    "phone": "628-186-2898",
    "status": "inactive",
    "membership": {
      "id": 5022,
      "type": "Platinum",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/lunar.jpg",
    "subscriptions": [
      {
        "id": 2200,
        "type": "Annual",
        "vehicle_id": 22000
      },
      {
        "id": 2201,
        "type": "Monthly",
        "vehicle_id": 22001
      }
    ],
    "vehicles": [
      {
        "id": 22000,
        "make": "BMW",
        "model": "3 Series",
        "color": "Silver",
        "plate": "BMW-22000",
        "image": "/cars/audi.png",
        "subscription": "Annual"
      },
      {
        "id": 22001,
        "make": "Toyota",
        "model": "Camry",
        "color": "Turquoise",
        "plate": "TOY-22001",
        "image": "/cars/sports.png",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 22000,
        "type": "Subscription Service",
        "date": "2024-12-03",
        "amount": 95.96,
        "card": 2200,
        "location": "Hart-Williams Car Wash"
      },
      {
        "id": 22001,
        "type": "Subscription Service",
        "date": "2024-08-28",
        "amount": 39.05,
        "card": 2200,
        "location": "Rodriguez Group Car Wash"
      },
      {
        "id": 22002,
        "type": "Car Wash",
        "date": "2025-02-08",
        "amount": 91.29,
        "card": 2200,
        "location": "Robertson-Salazar Car Wash"
      },
      {
        "id": 22003,
        "type": "Subscription Service",
        "date": "2024-06-11",
        "amount": 72.87,
        "card": 2200,
        "location": "Morton Inc Car Wash"
      },
      {
        "id": 22004,
        "type": "Car Wash",
        "date": "2025-02-21",
        "amount": 53.21,
        "card": 2200,
        "location": "Browning and Sons Car Wash"
      },
      {
        "id": 22005,
        "type": "Subscription Service",
        "date": "2024-10-18",
        "amount": 41.74,
        "card": 2200,
        "location": "Jones-Vasquez Car Wash"
      },
      {
        "id": 22006,
        "type": "Subscription Service",
        "date": "2024-12-16",
        "amount": 39.8,
        "card": 2200,
        "location": "Zamora, Lopez and Turner Car Wash"
      },
      {
        "id": 22007,
        "type": "Car Wash",
        "date": "2024-11-06",
        "amount": 92.55,
        "card": 2200,
        "location": "Mosley-Davis Car Wash"
      },
      {
        "id": 22008,
        "type": "Car Wash",
        "date": "2024-06-05",
        "amount": 25.19,
        "card": 2200,
        "location": "Thompson, Smith and Camacho Car Wash"
      },
      {
        "id": 22009,
        "type": "Car Wash",
        "date": "2025-03-05",
        "amount": 56.66,
        "card": 2200,
        "location": "Flores Inc Car Wash"
      },
      {
        "id": 22010,
        "type": "Subscription Service",
        "date": "2024-09-06",
        "amount": 53.56,
        "card": 2200,
        "location": "Andrade-Martinez Car Wash"
      }
    ],
    "card": {
      "id": 2200,
      "name": "Rachel Romero MD",
      "address": "692 Tim Fords",
      "city": "Port Tinatown",
      "state": "OR",
      "zip": 34278,
      "country": "USA",
      "card_number": 567533557995,
      "cvv": 149,
      "exp_date": "01/34"
    }
  },
  {
    "id": 23,
    "name": "Bradley Reed",
    "email": "kmartin@bentley-morgan.com",
    "phone": "503-187-8148",
    "status": "active",
    "membership": {
      "id": 5023,
      "type": "Elite",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/mcdonalds.png",
    "subscriptions": [
      {
        "id": 2300,
        "type": "Annual",
        "vehicle_id": 23000
      },
      {
        "id": 2301,
        "type": "Monthly",
        "vehicle_id": 23001
      },
      {
        "id": 2302,
        "type": "Monthly",
        "vehicle_id": 23002
      }
    ],
    "vehicles": [
      {
        "id": 23000,
        "make": "Honda",
        "model": "Accord",
        "color": "Orange",
        "plate": "HON-23000",
        "image": "/cars/dumb.png",
        "subscription": "Annual"
      },
      {
        "id": 23001,
        "make": "Dodge",
        "model": "Charger",
        "color": "Wheat",
        "plate": "DOD-23001",
        "image": "/cars/sports.png",
        "subscription": "Monthly"
      },
      {
        "id": 23002,
        "make": "BMW",
        "model": "3 Series",
        "color": "Plum",
        "plate": "BMW-23002",
        "image": "/cars/dumb.png",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 23000,
        "type": "Car Wash",
        "date": "2025-02-25",
        "amount": 12.35,
        "card": 2300,
        "location": "Kennedy Ltd Car Wash"
      },
      {
        "id": 23001,
        "type": "Car Wash",
        "date": "2025-01-17",
        "amount": 64.48,
        "card": 2300,
        "location": "Lopez, Hardin and Lindsey Car Wash"
      },
      {
        "id": 23002,
        "type": "Subscription Service",
        "date": "2025-03-02",
        "amount": 61.04,
        "card": 2300,
        "location": "Nguyen-Mccarthy Car Wash"
      },
      {
        "id": 23003,
        "type": "Car Wash",
        "date": "2024-06-15",
        "amount": 13.16,
        "card": 2300,
        "location": "Rodriguez Group Car Wash"
      },
      {
        "id": 23004,
        "type": "Subscription Service",
        "date": "2024-09-25",
        "amount": 18.5,
        "card": 2300,
        "location": "Cruz-Shaw Car Wash"
      },
      {
        "id": 23005,
        "type": "Car Wash",
        "date": "2025-04-13",
        "amount": 40.41,
        "card": 2300,
        "location": "Holland-Anderson Car Wash"
      },
      {
        "id": 23006,
        "type": "Car Wash",
        "date": "2025-05-15",
        "amount": 61.84,
        "card": 2300,
        "location": "Oliver, Cunningham and Jones Car Wash"
      },
      {
        "id": 23007,
        "type": "Subscription Service",
        "date": "2024-08-15",
        "amount": 94.14,
        "card": 2300,
        "location": "Lawrence LLC Car Wash"
      },
      {
        "id": 23008,
        "type": "Car Wash",
        "date": "2024-11-19",
        "amount": 27.71,
        "card": 2300,
        "location": "Hatfield, Scott and Jenkins Car Wash"
      },
      {
        "id": 23009,
        "type": "Car Wash",
        "date": "2024-06-23",
        "amount": 36.98,
        "card": 2300,
        "location": "Montgomery Group Car Wash"
      },
      {
        "id": 23010,
        "type": "Subscription Service",
        "date": "2025-04-26",
        "amount": 60.36,
        "card": 2300,
        "location": "Beck, Calhoun and Massey Car Wash"
      },
      {
        "id": 23011,
        "type": "Subscription Service",
        "date": "2024-09-26",
        "amount": 64.06,
        "card": 2300,
        "location": "Lara, Garner and Smith Car Wash"
      },
      {
        "id": 23012,
        "type": "Subscription Service",
        "date": "2024-06-29",
        "amount": 71.34,
        "card": 2300,
        "location": "Rogers-Harris Car Wash"
      },
      {
        "id": 23013,
        "type": "Car Wash",
        "date": "2024-12-01",
        "amount": 59.3,
        "card": 2300,
        "location": "Barnett LLC Car Wash"
      },
      {
        "id": 23014,
        "type": "Car Wash",
        "date": "2024-06-15",
        "amount": 38.49,
        "card": 2300,
        "location": "Ellis, Wilcox and Reyes Car Wash"
      },
      {
        "id": 23015,
        "type": "Car Wash",
        "date": "2025-03-05",
        "amount": 43.71,
        "card": 2300,
        "location": "Sharp PLC Car Wash"
      },
      {
        "id": 23016,
        "type": "Subscription Service",
        "date": "2025-02-02",
        "amount": 86.67,
        "card": 2300,
        "location": "Jensen Group Car Wash"
      }
    ],
    "card": {
      "id": 2300,
      "name": "Mary Cruz",
      "address": "69356 James Fork",
      "city": "New Angelton",
      "state": "ME",
      "zip": 77235,
      "country": "USA",
      "card_number": 4950874573335726,
      "cvv": 270,
      "exp_date": "04/26"
    }
  },
  {
    "id": 24,
    "name": "Lisa Ortiz",
    "email": "jodiaguilar@simpson.com",
    "phone": "407-160-5638",
    "status": "inactive",
    "membership": {
      "id": 5024,
      "type": "Basic",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/mcdonalds.png",
    "subscriptions": [
      {
        "id": 2400,
        "type": "Monthly",
        "vehicle_id": 24000
      },
      {
        "id": 2401,
        "type": "Annual",
        "vehicle_id": 24001
      }
    ],
    "vehicles": [
      {
        "id": 24000,
        "make": "Volkswagen",
        "model": "Golf",
        "color": "Peru",
        "plate": "VOL-24000",
        "image": "/cars/dumb.png",
        "subscription": "Monthly"
      },
      {
        "id": 24001,
        "make": "Honda",
        "model": "Accord",
        "color": "PaleGoldenRod",
        "plate": "HON-24001",
        "image": "/cars/audi.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 24000,
        "type": "Car Wash",
        "date": "2024-12-18",
        "amount": 45.43,
        "card": 2400,
        "location": "Mahoney, Landry and White Car Wash"
      },
      {
        "id": 24001,
        "type": "Car Wash",
        "date": "2024-12-24",
        "amount": 42.05,
        "card": 2400,
        "location": "Morse, Hawkins and Jackson Car Wash"
      },
      {
        "id": 24002,
        "type": "Car Wash",
        "date": "2025-03-18",
        "amount": 31.16,
        "card": 2400,
        "location": "Smith-Richard Car Wash"
      },
      {
        "id": 24003,
        "type": "Subscription Service",
        "date": "2024-08-08",
        "amount": 30.95,
        "card": 2400,
        "location": "Lara, Howard and Hughes Car Wash"
      },
      {
        "id": 24004,
        "type": "Subscription Service",
        "date": "2025-01-07",
        "amount": 77.38,
        "card": 2400,
        "location": "Jennings, Roman and Zamora Car Wash"
      },
      {
        "id": 24005,
        "type": "Subscription Service",
        "date": "2025-01-11",
        "amount": 44.26,
        "card": 2400,
        "location": "Clark, Tate and Mcclain Car Wash"
      },
      {
        "id": 24006,
        "type": "Subscription Service",
        "date": "2025-05-16",
        "amount": 23.58,
        "card": 2400,
        "location": "Kim PLC Car Wash"
      },
      {
        "id": 24007,
        "type": "Subscription Service",
        "date": "2025-02-20",
        "amount": 33.79,
        "card": 2400,
        "location": "Hale Group Car Wash"
      },
      {
        "id": 24008,
        "type": "Subscription Service",
        "date": "2025-04-03",
        "amount": 11.53,
        "card": 2400,
        "location": "Berg Inc Car Wash"
      },
      {
        "id": 24009,
        "type": "Subscription Service",
        "date": "2025-03-16",
        "amount": 51.34,
        "card": 2400,
        "location": "Hernandez LLC Car Wash"
      }
    ],
    "card": {
      "id": 2400,
      "name": "Andrew Bender",
      "address": "06578 Brandy Bypass",
      "city": "West Gabrielberg",
      "state": "FL",
      "zip": 17030,
      "country": "USA",
      "card_number": 3595317894155780,
      "cvv": 11,
      "exp_date": "05/27"
    }
  },
  {
    "id": 25,
    "name": "Sheryl Dunlap",
    "email": "kmills@thomas.com",
    "phone": "055-276-9793",
    "status": "active",
    "membership": {
      "id": 5025,
      "type": "Platinum",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/luffy.png",
    "subscriptions": [
      {
        "id": 2500,
        "type": "Annual",
        "vehicle_id": 25000
      },
      {
        "id": 2501,
        "type": "Monthly",
        "vehicle_id": 25001
      },
      {
        "id": 2502,
        "type": "Annual",
        "vehicle_id": 25002
      },
      {
        "id": 2503,
        "type": "Annual",
        "vehicle_id": 25003
      }
    ],
    "vehicles": [
      {
        "id": 25000,
        "make": "Toyota",
        "model": "Camry",
        "color": "SlateGray",
        "plate": "TOY-25000",
        "image": "/cars/audi.png",
        "subscription": "Annual"
      },
      {
        "id": 25001,
        "make": "Toyota",
        "model": "Camry",
        "color": "LemonChiffon",
        "plate": "TOY-25001",
        "image": "/cars/audi.png",
        "subscription": "Monthly"
      },
      {
        "id": 25002,
        "make": "Chevrolet",
        "model": "Impala",
        "color": "LightSalmon",
        "plate": "CHE-25002",
        "image": "/cars/dumb.png",
        "subscription": "Annual"
      },
      {
        "id": 25003,
        "make": "Dodge",
        "model": "Charger",
        "color": "DeepSkyBlue",
        "plate": "DOD-25003",
        "image": "/cars/sports.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 25000,
        "type": "Car Wash",
        "date": "2025-01-24",
        "amount": 15.51,
        "card": 2500,
        "location": "Contreras-Young Car Wash"
      },
      {
        "id": 25001,
        "type": "Car Wash",
        "date": "2025-05-11",
        "amount": 52.12,
        "card": 2500,
        "location": "Smith LLC Car Wash"
      },
      {
        "id": 25002,
        "type": "Subscription Service",
        "date": "2024-07-21",
        "amount": 58.31,
        "card": 2500,
        "location": "Davis, Cunningham and Trevino Car Wash"
      },
      {
        "id": 25003,
        "type": "Car Wash",
        "date": "2025-02-10",
        "amount": 68.25,
        "card": 2500,
        "location": "Castillo-Peters Car Wash"
      },
      {
        "id": 25004,
        "type": "Subscription Service",
        "date": "2025-04-07",
        "amount": 77.06,
        "card": 2500,
        "location": "Solomon-Collier Car Wash"
      },
      {
        "id": 25005,
        "type": "Subscription Service",
        "date": "2025-04-21",
        "amount": 33.64,
        "card": 2500,
        "location": "Woods, Smith and Lee Car Wash"
      },
      {
        "id": 25006,
        "type": "Subscription Service",
        "date": "2024-12-29",
        "amount": 37.43,
        "card": 2500,
        "location": "Daniels-Stanley Car Wash"
      },
      {
        "id": 25007,
        "type": "Car Wash",
        "date": "2024-11-11",
        "amount": 27.05,
        "card": 2500,
        "location": "King and Sons Car Wash"
      },
      {
        "id": 25008,
        "type": "Subscription Service",
        "date": "2025-01-24",
        "amount": 14.86,
        "card": 2500,
        "location": "Brown, Cannon and Oliver Car Wash"
      },
      {
        "id": 25009,
        "type": "Subscription Service",
        "date": "2025-04-10",
        "amount": 47.72,
        "card": 2500,
        "location": "Roy-Lee Car Wash"
      },
      {
        "id": 25010,
        "type": "Subscription Service",
        "date": "2024-11-14",
        "amount": 42.54,
        "card": 2500,
        "location": "Crosby Ltd Car Wash"
      },
      {
        "id": 25011,
        "type": "Subscription Service",
        "date": "2025-03-29",
        "amount": 13.04,
        "card": 2500,
        "location": "Ferrell Inc Car Wash"
      },
      {
        "id": 25012,
        "type": "Car Wash",
        "date": "2024-07-24",
        "amount": 28.5,
        "card": 2500,
        "location": "Ford, Murphy and Hull Car Wash"
      },
      {
        "id": 25013,
        "type": "Subscription Service",
        "date": "2024-11-23",
        "amount": 52.28,
        "card": 2500,
        "location": "Zuniga-Horton Car Wash"
      },
      {
        "id": 25014,
        "type": "Car Wash",
        "date": "2025-02-03",
        "amount": 95.69,
        "card": 2500,
        "location": "Huerta-Howard Car Wash"
      },
      {
        "id": 25015,
        "type": "Car Wash",
        "date": "2024-08-19",
        "amount": 37.15,
        "card": 2500,
        "location": "Santos Ltd Car Wash"
      },
      {
        "id": 25016,
        "type": "Car Wash",
        "date": "2025-04-03",
        "amount": 71.51,
        "card": 2500,
        "location": "Benjamin PLC Car Wash"
      },
      {
        "id": 25017,
        "type": "Car Wash",
        "date": "2024-08-17",
        "amount": 14.9,
        "card": 2500,
        "location": "Doyle LLC Car Wash"
      },
      {
        "id": 25018,
        "type": "Car Wash",
        "date": "2025-02-06",
        "amount": 37.52,
        "card": 2500,
        "location": "Morales Inc Car Wash"
      }
    ],
    "card": {
      "id": 2500,
      "name": "Jacob Murphy",
      "address": "05729 Trevino Road",
      "city": "Moorehaven",
      "state": "MD",
      "zip": 55773,
      "country": "USA",
      "card_number": 4056755679069892,
      "cvv": 81,
      "exp_date": "12/30"
    }
  },
  {
    "id": 26,
    "name": "Paula Stewart",
    "email": "jennifer82@gmail.com",
    "phone": "110-287-0287",
    "status": "inactive",
    "membership": {
      "id": 5026,
      "type": "Gold",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/old.jpg",
    "subscriptions": [
      {
        "id": 2600,
        "type": "Annual",
        "vehicle_id": 26000
      },
      {
        "id": 2601,
        "type": "Annual",
        "vehicle_id": 26001
      },
      {
        "id": 2602,
        "type": "Monthly",
        "vehicle_id": 26002
      }
    ],
    "vehicles": [
      {
        "id": 26000,
        "make": "Chevrolet",
        "model": "Impala",
        "color": "LightGreen",
        "plate": "CHE-26000",
        "image": "/cars/sports.png",
        "subscription": "Annual"
      },
      {
        "id": 26001,
        "make": "Dodge",
        "model": "Charger",
        "color": "Magenta",
        "plate": "DOD-26001",
        "image": "/cars/sports.png",
        "subscription": "Annual"
      },
      {
        "id": 26002,
        "make": "Chevrolet",
        "model": "Impala",
        "color": "Beige",
        "plate": "CHE-26002",
        "image": "/cars/sports.png",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 26000,
        "type": "Car Wash",
        "date": "2025-04-01",
        "amount": 11.1,
        "card": 2600,
        "location": "Parker Ltd Car Wash"
      },
      {
        "id": 26001,
        "type": "Car Wash",
        "date": "2024-08-04",
        "amount": 69.03,
        "card": 2600,
        "location": "Vaughan-Bernard Car Wash"
      },
      {
        "id": 26002,
        "type": "Car Wash",
        "date": "2025-03-06",
        "amount": 62.0,
        "card": 2600,
        "location": "Perry Inc Car Wash"
      },
      {
        "id": 26003,
        "type": "Car Wash",
        "date": "2025-04-02",
        "amount": 87.09,
        "card": 2600,
        "location": "Martinez, Gomez and Smith Car Wash"
      },
      {
        "id": 26004,
        "type": "Subscription Service",
        "date": "2024-09-19",
        "amount": 62.83,
        "card": 2600,
        "location": "Rodriguez Group Car Wash"
      },
      {
        "id": 26005,
        "type": "Car Wash",
        "date": "2025-02-07",
        "amount": 75.92,
        "card": 2600,
        "location": "Jones PLC Car Wash"
      },
      {
        "id": 26006,
        "type": "Car Wash",
        "date": "2024-06-30",
        "amount": 78.53,
        "card": 2600,
        "location": "Baker, Wells and Howe Car Wash"
      },
      {
        "id": 26007,
        "type": "Car Wash",
        "date": "2025-03-27",
        "amount": 70.29,
        "card": 2600,
        "location": "Murphy PLC Car Wash"
      },
      {
        "id": 26008,
        "type": "Car Wash",
        "date": "2025-02-21",
        "amount": 46.62,
        "card": 2600,
        "location": "Anderson-Melendez Car Wash"
      },
      {
        "id": 26009,
        "type": "Subscription Service",
        "date": "2024-12-14",
        "amount": 54.13,
        "card": 2600,
        "location": "Cooper-Martinez Car Wash"
      },
      {
        "id": 26010,
        "type": "Subscription Service",
        "date": "2025-02-26",
        "amount": 80.12,
        "card": 2600,
        "location": "Hodge, Bender and Clark Car Wash"
      },
      {
        "id": 26011,
        "type": "Car Wash",
        "date": "2024-11-10",
        "amount": 18.05,
        "card": 2600,
        "location": "Barnes, Hall and Watson Car Wash"
      },
      {
        "id": 26012,
        "type": "Subscription Service",
        "date": "2024-12-29",
        "amount": 66.65,
        "card": 2600,
        "location": "Bush Ltd Car Wash"
      },
      {
        "id": 26013,
        "type": "Car Wash",
        "date": "2024-12-06",
        "amount": 51.59,
        "card": 2600,
        "location": "Hall, Reed and Sanford Car Wash"
      },
      {
        "id": 26014,
        "type": "Car Wash",
        "date": "2025-03-15",
        "amount": 52.69,
        "card": 2600,
        "location": "Johnson, Carney and Wong Car Wash"
      },
      {
        "id": 26015,
        "type": "Car Wash",
        "date": "2024-08-07",
        "amount": 30.44,
        "card": 2600,
        "location": "Hickman Inc Car Wash"
      },
      {
        "id": 26016,
        "type": "Car Wash",
        "date": "2024-11-14",
        "amount": 94.46,
        "card": 2600,
        "location": "Sandoval-Price Car Wash"
      }
    ],
    "card": {
      "id": 2600,
      "name": "Jonathan Martinez MD",
      "address": "1904 Sanchez Shores Apt. 534",
      "city": "Lake Mary",
      "state": "KY",
      "zip": 33856,
      "country": "USA",
      "card_number": 213120198288614,
      "cvv": 971,
      "exp_date": "04/26"
    }
  },
  {
    "id": 27,
    "name": "Robert Hutchinson",
    "email": "brendan98@yahoo.com",
    "phone": "158-323-1918",
    "status": "active",
    "membership": {
      "id": 5027,
      "type": "Basic",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/luffy.png",
    "subscriptions": [
      {
        "id": 2700,
        "type": "Monthly",
        "vehicle_id": 27000
      },
      {
        "id": 2701,
        "type": "Monthly",
        "vehicle_id": 27001
      },
      {
        "id": 2702,
        "type": "Monthly",
        "vehicle_id": 27002
      }
    ],
    "vehicles": [
      {
        "id": 27000,
        "make": "Toyota",
        "model": "Camry",
        "color": "MediumOrchid",
        "plate": "TOY-27000",
        "image": "/cars/dumb.png",
        "subscription": "Monthly"
      },
      {
        "id": 27001,
        "make": "Mercedes",
        "model": "C-Class",
        "color": "Cyan",
        "plate": "MER-27001",
        "image": "/cars/dumb.png",
        "subscription": "Monthly"
      },
      {
        "id": 27002,
        "make": "Nissan",
        "model": "Altima",
        "color": "Violet",
        "plate": "NIS-27002",
        "image": "/cars/dumb.png",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 27000,
        "type": "Car Wash",
        "date": "2024-12-13",
        "amount": 20.05,
        "card": 2700,
        "location": "Petersen-Flores Car Wash"
      },
      {
        "id": 27001,
        "type": "Car Wash",
        "date": "2025-03-12",
        "amount": 17.26,
        "card": 2700,
        "location": "Hess, Jimenez and Johnston Car Wash"
      },
      {
        "id": 27002,
        "type": "Subscription Service",
        "date": "2024-12-29",
        "amount": 43.15,
        "card": 2700,
        "location": "Johnson LLC Car Wash"
      },
      {
        "id": 27003,
        "type": "Car Wash",
        "date": "2024-08-21",
        "amount": 92.7,
        "card": 2700,
        "location": "Mccarty-Mueller Car Wash"
      },
      {
        "id": 27004,
        "type": "Car Wash",
        "date": "2025-03-03",
        "amount": 58.31,
        "card": 2700,
        "location": "Burns-Roberts Car Wash"
      },
      {
        "id": 27005,
        "type": "Subscription Service",
        "date": "2025-03-23",
        "amount": 74.02,
        "card": 2700,
        "location": "Brennan-Martin Car Wash"
      },
      {
        "id": 27006,
        "type": "Car Wash",
        "date": "2024-08-27",
        "amount": 79.73,
        "card": 2700,
        "location": "Thomas-Hughes Car Wash"
      },
      {
        "id": 27007,
        "type": "Subscription Service",
        "date": "2025-01-17",
        "amount": 14.29,
        "card": 2700,
        "location": "Singh, Stewart and Willis Car Wash"
      },
      {
        "id": 27008,
        "type": "Car Wash",
        "date": "2024-06-23",
        "amount": 18.51,
        "card": 2700,
        "location": "Barnett Group Car Wash"
      },
      {
        "id": 27009,
        "type": "Subscription Service",
        "date": "2025-01-23",
        "amount": 80.15,
        "card": 2700,
        "location": "Ford LLC Car Wash"
      },
      {
        "id": 27010,
        "type": "Subscription Service",
        "date": "2024-12-10",
        "amount": 25.53,
        "card": 2700,
        "location": "Cortez, Parker and Vazquez Car Wash"
      },
      {
        "id": 27011,
        "type": "Subscription Service",
        "date": "2025-04-05",
        "amount": 89.93,
        "card": 2700,
        "location": "Taylor-Jones Car Wash"
      },
      {
        "id": 27012,
        "type": "Car Wash",
        "date": "2025-05-07",
        "amount": 59.67,
        "card": 2700,
        "location": "Porter-Baker Car Wash"
      },
      {
        "id": 27013,
        "type": "Car Wash",
        "date": "2025-04-19",
        "amount": 48.07,
        "card": 2700,
        "location": "Contreras and Sons Car Wash"
      },
      {
        "id": 27014,
        "type": "Car Wash",
        "date": "2025-02-22",
        "amount": 91.46,
        "card": 2700,
        "location": "Mitchell Inc Car Wash"
      },
      {
        "id": 27015,
        "type": "Car Wash",
        "date": "2025-01-28",
        "amount": 52.82,
        "card": 2700,
        "location": "Hernandez, Esparza and Craig Car Wash"
      },
      {
        "id": 27016,
        "type": "Subscription Service",
        "date": "2024-07-22",
        "amount": 28.71,
        "card": 2700,
        "location": "Zimmerman-Rich Car Wash"
      }
    ],
    "card": {
      "id": 2700,
      "name": "Donna Terrell",
      "address": "156 Huynh Glens Apt. 489",
      "city": "Kennethstad",
      "state": "MA",
      "zip": 59272,
      "country": "USA",
      "card_number": 3557886367692244,
      "cvv": 435,
      "exp_date": "09/34"
    }
  },
  {
    "id": 28,
    "name": "Richard Smith",
    "email": "lovejennifer@gmail.com",
    "phone": "206-419-7671",
    "status": "active",
    "membership": {
      "id": 5028,
      "type": "Basic",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/lunar.jpg",
    "subscriptions": [
      {
        "id": 2800,
        "type": "Monthly",
        "vehicle_id": 28000
      },
      {
        "id": 2801,
        "type": "Monthly",
        "vehicle_id": 28001
      },
      {
        "id": 2802,
        "type": "Monthly",
        "vehicle_id": 28002
      }
    ],
    "vehicles": [
      {
        "id": 28000,
        "make": "Honda",
        "model": "Accord",
        "color": "OrangeRed",
        "plate": "HON-28000",
        "image": "/cars/dumb.png",
        "subscription": "Monthly"
      },
      {
        "id": 28001,
        "make": "Nissan",
        "model": "Altima",
        "color": "Peru",
        "plate": "NIS-28001",
        "image": "/cars/audi.png",
        "subscription": "Monthly"
      },
      {
        "id": 28002,
        "make": "Honda",
        "model": "Accord",
        "color": "SeaShell",
        "plate": "HON-28002",
        "image": "/cars/dumb.png",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 28000,
        "type": "Car Wash",
        "date": "2024-08-24",
        "amount": 58.74,
        "card": 2800,
        "location": "Brooks-Mitchell Car Wash"
      },
      {
        "id": 28001,
        "type": "Car Wash",
        "date": "2024-07-29",
        "amount": 59.76,
        "card": 2800,
        "location": "Franklin-Padilla Car Wash"
      },
      {
        "id": 28002,
        "type": "Subscription Service",
        "date": "2025-03-07",
        "amount": 33.25,
        "card": 2800,
        "location": "Mcintosh LLC Car Wash"
      },
      {
        "id": 28003,
        "type": "Subscription Service",
        "date": "2025-04-06",
        "amount": 57.64,
        "card": 2800,
        "location": "Williams and Sons Car Wash"
      },
      {
        "id": 28004,
        "type": "Subscription Service",
        "date": "2024-09-08",
        "amount": 27.83,
        "card": 2800,
        "location": "Riley-Johnson Car Wash"
      },
      {
        "id": 28005,
        "type": "Subscription Service",
        "date": "2025-05-21",
        "amount": 13.59,
        "card": 2800,
        "location": "Carey-Rasmussen Car Wash"
      },
      {
        "id": 28006,
        "type": "Subscription Service",
        "date": "2024-08-10",
        "amount": 65.15,
        "card": 2800,
        "location": "Jones-Butler Car Wash"
      },
      {
        "id": 28007,
        "type": "Subscription Service",
        "date": "2025-04-06",
        "amount": 20.43,
        "card": 2800,
        "location": "Browning and Sons Car Wash"
      },
      {
        "id": 28008,
        "type": "Subscription Service",
        "date": "2024-12-22",
        "amount": 69.49,
        "card": 2800,
        "location": "Munoz PLC Car Wash"
      },
      {
        "id": 28009,
        "type": "Car Wash",
        "date": "2025-01-20",
        "amount": 81.27,
        "card": 2800,
        "location": "Smith and Sons Car Wash"
      },
      {
        "id": 28010,
        "type": "Car Wash",
        "date": "2024-12-05",
        "amount": 63.09,
        "card": 2800,
        "location": "Perkins-Wright Car Wash"
      }
    ],
    "card": {
      "id": 2800,
      "name": "Beth Nichols",
      "address": "34728 William Circle Apt. 813",
      "city": "West Jason",
      "state": "NC",
      "zip": 91581,
      "country": "USA",
      "card_number": 5214629953518302,
      "cvv": 317,
      "exp_date": "04/35"
    }
  },
  {
    "id": 29,
    "name": "James Allen",
    "email": "stephanie28@arnold.com",
    "phone": "499-995-6154",
    "status": "active",
    "membership": {
      "id": 5029,
      "type": "Platinum",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/old.jpg",
    "subscriptions": [
      {
        "id": 2900,
        "type": "Annual",
        "vehicle_id": 29000
      }
    ],
    "vehicles": [
      {
        "id": 29000,
        "make": "Ford",
        "model": "Fusion",
        "color": "Aqua",
        "plate": "FOR-29000",
        "image": "/cars/audi.png",
        "subscription": "Annual"
      }
    ],
    "purchases": [
      {
        "id": 29000,
        "type": "Subscription Service",
        "date": "2025-05-08",
        "amount": 62.84,
        "card": 2900,
        "location": "Kelly-Richardson Car Wash"
      },
      {
        "id": 29001,
        "type": "Car Wash",
        "date": "2025-01-26",
        "amount": 16.94,
        "card": 2900,
        "location": "Rivera, White and Hines Car Wash"
      },
      {
        "id": 29002,
        "type": "Car Wash",
        "date": "2024-07-24",
        "amount": 20.3,
        "card": 2900,
        "location": "Nelson, Johnson and Phillips Car Wash"
      },
      {
        "id": 29003,
        "type": "Car Wash",
        "date": "2025-01-21",
        "amount": 75.2,
        "card": 2900,
        "location": "Cross Group Car Wash"
      },
      {
        "id": 29004,
        "type": "Car Wash",
        "date": "2024-11-24",
        "amount": 96.86,
        "card": 2900,
        "location": "Melendez-Hudson Car Wash"
      },
      {
        "id": 29005,
        "type": "Subscription Service",
        "date": "2024-12-04",
        "amount": 44.45,
        "card": 2900,
        "location": "May-Marshall Car Wash"
      },
      {
        "id": 29006,
        "type": "Car Wash",
        "date": "2025-05-04",
        "amount": 41.81,
        "card": 2900,
        "location": "Steele and Sons Car Wash"
      },
      {
        "id": 29007,
        "type": "Subscription Service",
        "date": "2025-02-02",
        "amount": 78.89,
        "card": 2900,
        "location": "Vazquez PLC Car Wash"
      },
      {
        "id": 29008,
        "type": "Car Wash",
        "date": "2024-12-25",
        "amount": 54.96,
        "card": 2900,
        "location": "Krueger-Ferguson Car Wash"
      },
      {
        "id": 29009,
        "type": "Subscription Service",
        "date": "2025-05-14",
        "amount": 26.28,
        "card": 2900,
        "location": "Zimmerman and Sons Car Wash"
      },
      {
        "id": 29010,
        "type": "Subscription Service",
        "date": "2024-12-01",
        "amount": 87.66,
        "card": 2900,
        "location": "Woods, Williams and Rodriguez Car Wash"
      },
      {
        "id": 29011,
        "type": "Subscription Service",
        "date": "2025-01-21",
        "amount": 68.13,
        "card": 2900,
        "location": "Buck LLC Car Wash"
      }
    ],
    "card": {
      "id": 2900,
      "name": "John Ramirez",
      "address": "8602 Gross Mall Apt. 448",
      "city": "Juarezland",
      "state": "RI",
      "zip": 76441,
      "country": "USA",
      "card_number": 378513424354344,
      "cvv": 381,
      "exp_date": "09/31"
    }
  },
  {
    "id": 30,
    "name": "Dylan Myers PhD",
    "email": "utaylor@yahoo.com",
    "phone": "400-515-7205",
    "status": "active",
    "membership": {
      "id": 5030,
      "type": "Platinum",
      "start": "2024-01-01",
      "renew": "2025-01-01"
    },
    "profileImage": "/profilepictures/old.jpg",
    "subscriptions": [
      {
        "id": 3000,
        "type": "Annual",
        "vehicle_id": 30000
      },
      {
        "id": 3001,
        "type": "Monthly",
        "vehicle_id": 30001
      }
    ],
    "vehicles": [
      {
        "id": 30000,
        "make": "Mercedes",
        "model": "C-Class",
        "color": "DeepSkyBlue",
        "plate": "MER-30000",
        "image": "/cars/sports.png",
        "subscription": "Annual"
      },
      {
        "id": 30001,
        "make": "BMW",
        "model": "3 Series",
        "color": "HotPink",
        "plate": "BMW-30001",
        "image": "/cars/sports.png",
        "subscription": "Monthly"
      }
    ],
    "purchases": [
      {
        "id": 30000,
        "type": "Subscription Service",
        "date": "2025-02-27",
        "amount": 83.89,
        "card": 3000,
        "location": "Lewis-Yang Car Wash"
      },
      {
        "id": 30001,
        "type": "Subscription Service",
        "date": "2025-05-18",
        "amount": 66.96,
        "card": 3000,
        "location": "Rogers, Jordan and Pierce Car Wash"
      },
      {
        "id": 30002,
        "type": "Subscription Service",
        "date": "2024-12-03",
        "amount": 28.11,
        "card": 3000,
        "location": "Carlson-Acosta Car Wash"
      },
      {
        "id": 30003,
        "type": "Subscription Service",
        "date": "2024-06-22",
        "amount": 68.14,
        "card": 3000,
        "location": "Hanson, Owens and Obrien Car Wash"
      },
      {
        "id": 30004,
        "type": "Car Wash",
        "date": "2025-01-20",
        "amount": 58.93,
        "card": 3000,
        "location": "Mclean Inc Car Wash"
      },
      {
        "id": 30005,
        "type": "Subscription Service",
        "date": "2024-10-24",
        "amount": 43.11,
        "card": 3000,
        "location": "Vazquez, Welch and Miller Car Wash"
      },
      {
        "id": 30006,
        "type": "Car Wash",
        "date": "2025-01-19",
        "amount": 48.37,
        "card": 3000,
        "location": "Boyle PLC Car Wash"
      },
      {
        "id": 30007,
        "type": "Car Wash",
        "date": "2024-08-16",
        "amount": 67.88,
        "card": 3000,
        "location": "Gill, Hughes and Compton Car Wash"
      },
      {
        "id": 30008,
        "type": "Car Wash",
        "date": "2025-01-14",
        "amount": 98.5,
        "card": 3000,
        "location": "Wright, Snyder and Valencia Car Wash"
      },
      {
        "id": 30009,
        "type": "Car Wash",
        "date": "2024-07-23",
        "amount": 73.02,
        "card": 3000,
        "location": "Walsh Inc Car Wash"
      },
      {
        "id": 30010,
        "type": "Subscription Service",
        "date": "2024-12-22",
        "amount": 19.13,
        "card": 3000,
        "location": "Carpenter-Baker Car Wash"
      },
      {
        "id": 30011,
        "type": "Car Wash",
        "date": "2024-07-14",
        "amount": 76.12,
        "card": 3000,
        "location": "Ayala, Short and Nelson Car Wash"
      },
      {
        "id": 30012,
        "type": "Subscription Service",
        "date": "2024-08-20",
        "amount": 22.87,
        "card": 3000,
        "location": "Berger LLC Car Wash"
      },
      {
        "id": 30013,
        "type": "Subscription Service",
        "date": "2025-02-08",
        "amount": 88.75,
        "card": 3000,
        "location": "Lara, Jones and Becker Car Wash"
      }
    ],
    "card": {
      "id": 3000,
      "name": "Lisa Vaughn",
      "address": "3379 Young Lights",
      "city": "Garciaview",
      "state": "MA",
      "zip": 93741,
      "country": "USA",
      "card_number": 30298375705476,
      "cvv": 514,
      "exp_date": "08/33"
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
