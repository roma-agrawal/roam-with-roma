const trip = {
  title: "Switzerland Adventure 🇨🇭",
  startDate: "2026-08-17",
  endDate: "2026-08-25",

  travelers: [
    "Roma",
    "Husband",
    "Ryan"
  ],

  budget: {
    flights: 214000,
    hotels: 200000,
    carRentalCHF: 600,
    food: 50000,
    misc: 50000
  },

  flights: [
    {
      from: "Hyderabad",
      to: "Delhi",
      flight: "AI2870",
      departure: "16 Aug 2026 21:30",
      arrival: "16 Aug 2026 23:55"
    },
    {
      from: "Delhi",
      to: "Zurich",
      flight: "LX2647",
      departure: "17 Aug 2026 01:40",
      arrival: "17 Aug 2026 07:00"
    },
    {
      from: "Zurich",
      to: "Delhi",
      flight: "LX146",
      departure: "25 Aug 2026 12:10",
      arrival: "25 Aug 2026 23:35"
    },
    {
      from: "Delhi",
      to: "Hyderabad",
      flight: "AI2577",
      departure: "26 Aug 2026 02:00",
      arrival: "26 Aug 2026 04:20"
    }
  ],

  hotels: [
    {
      name: "Bellagio Area Hotel",
      nights: 2,
      dates: "17–19 Aug"
    },
    {
      name: "Interlaken Youth Hostel",
      nights: 6,
      dates: "19–25 Aug"
    }
  ],

  days: [
    {
      day: 1,
      date: "17 Aug",
      title: "Arrival Zurich → Lake Como",
      icon: "🚗"
    },
    {
      day: 2,
      date: "18 Aug",
      title: "Explore Lake Como",
      icon: "⛵"
    },
    {
      day: 3,
      date: "19 Aug",
      title: "Drive to Interlaken & Lake Brienz Cruise",
      icon: "🚢"
    },
    {
    id:"day4",

    day:4,

    date:"20 Aug 2026",

    title:"Paragliding • Lauterbrunnen • Mürren",

    icon:"🪂",

    timeline:[

        {
            time:"07:00",
            icon:"☀️",
            title:"Wake Up",
            subtitle:"Get ready for adventure"
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
            subtitle:"Interlaken → Stechelberg (Approx. 20–25 min)"
        },

        {
            time:"08:45",
            icon:"🅿",
            title:"Parking",
            subtitle:"Stechelberg Parking"
        },

        {
            time:"08:50",
            icon:"🚶",
            title:"Walk",
            subtitle:"5 mins to meeting point"
        },

        {
            time:"09:00",
            icon:"🪂",
            title:"Tandem Paragliding",
            subtitle:"First Slot"
        },

        {
            time:"12:00",
            icon:"🍽",
            title:"Lunch",
            subtitle:"Lauterbrunnen Village"
        },

        {
            time:"13:30",
            icon:"🚠",
            title:"Visit Mürren",
            subtitle:"Cable car from Stechelberg"
        },

        {
            time:"18:00",
            icon:"🏨",
            title:"Return",
            subtitle:"Interlaken Youth Hostel"
        }

    ]
},
    {
      day: 5,
      date: "21 Aug",
      title: "Grindelwald First",
      icon: "🏔️"
    },
    {
      day: 6,
      date: "22 Aug",
      title: "Brienz Rothorn & Aare Gorge",
      icon: "🚂"
    },
    {
      day: 7,
      date: "23 Aug",
      title: "Oeschinensee",
      icon: "🥾"
    },
    {
      day: 8,
      date: "24 Aug",
      title: "Gelmerbahn & Lucerne",
      icon: "🚠"
    },
    {
      day: 9,
      date: "25 Aug",
      title: "Return to Zurich Airport",
      icon: "✈️"
    }
  ]
};
