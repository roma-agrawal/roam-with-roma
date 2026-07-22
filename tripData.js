const trip = {
  title: "Switzerland Adventure 🇨🇭",
  startDate: "2026-08-17",
  endDate: "2026-08-25",

  travellers: [
    "Roma",
    "Husband",
    "Ryan"
  ],

  budget: {
    flights: 214000,
    hotels: 200000,
    food: 50000,
    misc: 50000,
    carRentalCHF: 600
  },

  flights: [
    {
      sector: "Hyderabad → Delhi",
      flight: "AI2870",
      departure: "16 Aug 2026 21:30",
      arrival: "16 Aug 2026 23:55"
    },
    {
      sector: "Delhi → Zurich",
      flight: "LX2647",
      departure: "17 Aug 2026 01:40",
      arrival: "17 Aug 2026 07:00"
    },
    {
      sector: "Zurich → Delhi",
      flight: "LX146",
      departure: "25 Aug 2026 12:10",
      arrival: "25 Aug 2026 23:35"
    },
    {
      sector: "Delhi → Hyderabad",
      flight: "AI2577",
      departure: "26 Aug 2026 02:00",
      arrival: "26 Aug 2026 04:20"
    }
  ],

  hotels: [
    {
      name: "Bellagio Area Hotel",
      dates: "17–19 Aug",
      nights: 2
    },
    {
      name: "Interlaken Youth Hostel",
      dates: "19–25 Aug",
      nights: 6
    }
  ],

  packing: [
    "Passport",
    "Swiss Half Fare Card",
    "Driving Licence",
    "International Driving Permit",
    "Credit Cards",
    "Power Bank",
    "Universal Adapter",
    "Warm Jacket",
    "Rain Jacket",
    "Hiking Shoes",
    "Sunglasses",
    "Cap",
    "Water Bottle",
    "Insta360 X4",
    "Phone Charger",
    "Camera Batteries",
    "Medicines"
  ],

  emergency: {
    police: "117",
    ambulance: "144",
    fire: "118",
    roadside: "140"
  },

  days: [

    {
      id: "day1",
      date: "17 Aug 2026",
      title: "Arrival Zurich → Lake Como",
      icon: "🇮🇹",

      timeline: [

        {time:"07:00",icon:"🛬",title:"Arrive Zurich Airport",subtitle:"Immigration & baggage"},

        {time:"08:00",icon:"🚗",title:"Collect Rental Car",subtitle:"Airport Rental Centre"},

        {time:"08:45",icon:"☕",title:"Coffee Break",subtitle:"Before long drive"},

        {time:"09:00",icon:"🛣️",title:"Drive to Bellagio",subtitle:"Approx. 4 hrs + breaks"},

        {time:"11:15",icon:"🍽️",title:"Lunch Stop",subtitle:"Service Area in Switzerland / Italy"},

        {time:"14:00",icon:"🏨",title:"Hotel Check-in",subtitle:"Bellagio Area"},

        {time:"16:00",icon:"🚶",title:"Explore Bellagio",subtitle:"Old Town & Lakeside"},

        {time:"19:00",icon:"🍕",title:"Dinner",subtitle:"Lakefront Restaurant"},

        {time:"21:00",icon:"😴",title:"Sleep Early",subtitle:"Recover from overnight flight"}

      ]

    },

    {
      id:"day2",

      date:"18 Aug 2026",

      title:"Lake Como",

      icon:"⛵",

      timeline:[

        {time:"08:00",icon:"☀️",title:"Wake Up",subtitle:"Relaxed Morning"},

        {time:"08:45",icon:"🥐",title:"Breakfast",subtitle:"Hotel"},

        {time:"10:00",icon:"⛴️",title:"Bellagio Ferry",subtitle:"Explore Varenna & Menaggio"},

        {time:"13:00",icon:"🍝",title:"Lunch",subtitle:"Lake Como"},

        {time:"15:00",icon:"📸",title:"Photo Stops",subtitle:"Bellagio Streets & Gardens"},

        {time:"17:30",icon:"☕",title:"Coffee",subtitle:"Lakefront Café"},

        {time:"20:00",icon:"🍽️",title:"Dinner",subtitle:"Bellagio"},

        {time:"22:00",icon:"😴",title:"Rest",subtitle:"Prepare for Switzerland"}

      ]

    },

    {
      id:"day3",

      date:"19 Aug 2026",

      title:"Drive to Interlaken & Lake Brienz Cruise",

      icon:"🚢",

      timeline:[

        {time:"07:00",icon:"☀️",title:"Wake Up",subtitle:"Check-out Day"},

        {time:"08:00",icon:"🥐",title:"Breakfast",subtitle:"Hotel"},

        {time:"09:00",icon:"🚗",title:"Drive to Interlaken",subtitle:"Approx. 3 hrs"},

        {time:"12:00",icon:"🏨",title:"Check-in",subtitle:"Interlaken Youth Hostel"},

        {time:"13:30",icon:"🍽️",title:"Lunch",subtitle:"Interlaken"},

        {time:"15:00",icon:"🚢",title:"Lake Brienz Cruise",subtitle:"Relax & Sightseeing"},

        {time:"18:00",icon:"🚶",title:"Explore Interlaken",subtitle:"Around Höhematte"},

        {time:"20:00",icon:"🍕",title:"Dinner",subtitle:"Near Hostel"},

        {time:"22:00",icon:"😴",title:"Sleep Early",subtitle:"Adventure starts tomorrow"}

      ]

    },

    {
      id:"day4",

      date:"20 Aug 2026",

      title:"Paragliding • Lauterbrunnen • Mürren",

      icon:"🪂",

      timeline:[

        {time:"07:00",icon:"☀️",title:"Wake Up",subtitle:"Adventure Day"},

        {time:"07:45",icon:"🥐",title:"Breakfast",subtitle:"Youth Hostel"},

        {time:"08:15",icon:"🚗",title:"Drive",subtitle:"Interlaken → Stechelberg"},

        {time:"08:45",icon:"🅿️",title:"Parking",subtitle:"Stechelberg"},

        {time:"08:50",icon:"🚶",title:"Walk",subtitle:"Meeting Point"},

        {time:"09:00",icon:"🪂",title:"Tandem Paragliding",subtitle:"First Slot"},

        {time:"12:00",icon:"🍔",title:"Lunch",subtitle:"Lauterbrunnen"},

        {time:"13:30",icon:"🚠",title:"Visit Mürren",subtitle:"Cable Car"},

        {time:"17:30",icon:"🚗",title:"Return",subtitle:"Back to Interlaken"},

        {time:"20:00",icon:"🍽️",title:"Dinner",subtitle:"Interlaken"}

      ]

    },

    {
      id:"day5",

      date:"21 Aug 2026",

      title:"Grindelwald First",

      icon:"🏔️",

      timeline:[

        {time:"06:45",icon:"☀️",title:"Wake Up",subtitle:"Leave Early"},

        {time:"07:30",icon:"🥐",title:"Breakfast",subtitle:"Hostel"},

        {time:"08:00",icon:"🚗",title:"Drive",subtitle:"To Grindelwald Terminal"},

        {time:"08:30",icon:"🅿️",title:"Parking",subtitle:"Terminal Parking"},

        {time:"09:00",icon:"🚠",title:"First Gondola",subtitle:"To First"},

        {time:"10:00",icon:"🦅",title:"First Flyer",subtitle:"Adventure"},

        {time:"11:00",icon:"🪂",title:"First Glider",subtitle:"Adventure"},

        {time:"12:00",icon:"🛺",title:"Mountain Cart",subtitle:"Adventure"},

        {time:"14:00",icon:"🍽️",title:"Lunch",subtitle:"Grindelwald Village"},

        {time:"16:00",icon:"☕",title:"Explore Village",subtitle:"Shopping & Coffee"},

        {time:"18:00",icon:"🚗",title:"Return",subtitle:"Interlaken"}

      ]

    }
    ,
{
    id:"day6",

    date:"22 Aug 2026",

    title:"Brienz Rothorn Steam Train & Aare Gorge",

    icon:"🚂",

    timeline:[

        {
            time:"07:00",
            icon:"☀️",
            title:"Wake Up",
            subtitle:"Adventure Day"
        },

        {
            time:"07:45",
            icon:"🥐",
            title:"Breakfast",
            subtitle:"Interlaken Youth Hostel"
        },

        {
            time:"08:15",
            icon:"🚗",
            title:"Drive",
            subtitle:"Interlaken → Brienz"
        },

        {
            time:"09:00",
            icon:"🚂",
            title:"Brienz Rothorn Steam Train",
            subtitle:"Round Trip Journey"
        },

        {
            time:"13:00",
            icon:"🍔",
            title:"Lunch",
            subtitle:"Brienz"
        },

        {
            time:"14:30",
            icon:"🥾",
            title:"Aare Gorge",
            subtitle:"Walk through the Gorge"
        },

        {
            time:"17:00",
            icon:"☕",
            title:"Coffee Break",
            subtitle:"Brienz Lakefront"
        },

        {
            time:"18:00",
            icon:"🚗",
            title:"Return",
            subtitle:"Interlaken"
        },

        {
            time:"20:00",
            icon:"🍽️",
            title:"Dinner",
            subtitle:"Near Hostel"
        }

    ]

},

{
    id:"day7",

    date:"23 Aug 2026",

    title:"Oeschinensee Lake",

    icon:"🏞️",

    timeline:[

        {
            time:"06:45",
            icon:"☀️",
            title:"Wake Up",
            subtitle:"Early Start"
        },

        {
            time:"07:30",
            icon:"🥐",
            title:"Breakfast",
            subtitle:"Youth Hostel"
        },

        {
            time:"08:00",
            icon:"🚗",
            title:"Drive",
            subtitle:"Interlaken → Kandersteg"
        },

        {
            time:"09:15",
            icon:"🚠",
            title:"Cable Car",
            subtitle:"To Oeschinensee"
        },

        {
            time:"10:00",
            icon:"🥾",
            title:"Hike Down to Lake",
            subtitle:"Enjoy Scenic Trail"
        },

        {
            time:"12:00",
            icon:"📸",
            title:"Photography",
            subtitle:"Relax by the Lake"
        },

        {
            time:"13:00",
            icon:"🍽️",
            title:"Lunch",
            subtitle:"Near Lake"
        },

        {
            time:"15:00",
            icon:"🚠",
            title:"Return Cable Car",
            subtitle:"Back to Parking"
        },

        {
            time:"17:00",
            icon:"🚗",
            title:"Drive Back",
            subtitle:"Interlaken"
        }

    ]

},

{
    id:"day8",

    date:"24 Aug 2026",

    title:"Gelmerbahn & Lucerne",

    icon:"🚠",

    timeline:[

        {
            time:"06:45",
            icon:"☀️",
            title:"Wake Up",
            subtitle:"Last Full Day"
        },

        {
            time:"07:30",
            icon:"🥐",
            title:"Breakfast",
            subtitle:"Youth Hostel"
        },

        {
            time:"08:00",
            icon:"🚗",
            title:"Drive",
            subtitle:"Interlaken → Gelmerbahn"
        },

        {
            time:"09:30",
            icon:"🚠",
            title:"Ride Gelmerbahn",
            subtitle:"Steep Funicular"
        },

        {
            time:"11:00",
            icon:"🚗",
            title:"Drive",
            subtitle:"To Lucerne"
        },

        {
            time:"12:30",
            icon:"🍽️",
            title:"Lunch",
            subtitle:"Lucerne Old Town"
        },

        {
            time:"14:00",
            icon:"🚆",
            title:"GoldenPass Scenic Train",
            subtitle:"Lucerne → Interlaken"
        },

        {
            time:"16:00",
            icon:"🚗",
            title:"Collect Car",
            subtitle:"Interlaken Station Parking"
        },

        {
            time:"18:00",
            icon:"🧳",
            title:"Pack Bags",
            subtitle:"Prepare for Departure"
        }

    ]

},

{
    id:"day9",

    date:"25 Aug 2026",

    title:"Return Home",

    icon:"✈️",

    timeline:[

        {
            time:"05:00",
            icon:"☀️",
            title:"Wake Up",
            subtitle:"Departure Day"
        },

        {
            time:"05:30",
            icon:"🧳",
            title:"Check Out",
            subtitle:"Interlaken Youth Hostel"
        },

        {
            time:"05:45",
            icon:"🚗",
            title:"Drive",
            subtitle:"Interlaken → Zurich Airport"
        },

        {
            time:"09:00",
            icon:"🚗",
            title:"Return Rental Car",
            subtitle:"Zurich Airport"
        },

        {
            time:"09:30",
            icon:"🛫",
            title:"Airport Check-in",
            subtitle:"Swiss LX146"
        },

        {
            time:"12:10",
            icon:"✈️",
            title:"Flight",
            subtitle:"Zurich → Delhi"
        },

        {
            time:"23:35",
            icon:"🌙",
            title:"Arrive Delhi",
            subtitle:"Transit"
        },

        {
            time:"02:00",
            icon:"✈️",
            title:"Delhi → Hyderabad",
            subtitle:"AI2577"
        },

        {
            time:"04:20",
            icon:"🏠",
            title:"Reach Home",
            subtitle:"Trip Complete ❤️"
        }

    ]

}

  ]
};
