export const roomsData = {
	id: "rooms",
	name: "Rooms",
	subcategories: [
		{
			id: "normal-rooms",
			name: "Normal Rooms",
			subcategories: [
				{
					id: "normal-twin",
					name: "Normal Twin",
					subcategories: [
						{
							id: "normal-twin-special",
							name: "Normal Twin Special",
							subcategories: [],
							rooms: [
								{
									id: "nts-101",
									name: "Normal Twin Special 101",
									price: 120,
									available: 5,
									description: "A special twin room with extra amenities",
								},
								{
									id: "nts-102",
									name: "Normal Twin Special 102",
									price: 125,
									available: 3,
									description: "A special twin room with garden view",
								},
							],
						},
					],
					rooms: [
						{
							id: "nt-101",
							name: "Normal Twin 101",
							price: 100,
							available: 10,
							description: "A comfortable twin room with two single beds",
						},
						{
							id: "nt-102",
							name: "Normal Twin 102",
							price: 100,
							available: 8,
							description: "A standard twin room with city view",
						},
					],
				},
				{
					id: "normal-triple",
					name: "Normal Triple",
					subcategories: [],
					rooms: [
						{
							id: "ntr-101",
							name: "Normal Triple 101",
							price: 150,
							available: 6,
							description: "A spacious triple room with three single beds",
						},
						{
							id: "ntr-102",
							name: "Normal Triple 102",
							price: 155,
							available: 4,
							description: "A triple room with mountain view",
						},
					],
				},
			],
		},
		{
			id: "executive-rooms",
			name: "Executive Rooms",
			subcategories: [
				{
					id: "executive-twin",
					name: "Executive Twin",
					subcategories: [
						{
							id: "executive-twin-special",
							name: "Executive Twin Special",
							subcategories: [],
							rooms: [
								{
									id: "ets-101",
									name: "Executive Twin Special 101",
									price: 220,
									available: 3,
									description: "A premium twin room with luxury amenities",
								},
								{
									id: "ets-102",
									name: "Executive Twin Special 102",
									price: 230,
									available: 2,
									description: "An executive twin room with panoramic view",
								},
							],
						},
					],
					rooms: [
						{
							id: "et-101",
							name: "Executive Twin 101",
							price: 200,
							available: 5,
							description: "A luxury twin room with premium amenities",
						},
						{
							id: "et-102",
							name: "Executive Twin 102",
							price: 210,
							available: 3,
							description: "An executive twin room with ocean view",
						},
					],
				},
				{
					id: "executive-triple",
					name: "Executive Triple",
					subcategories: [],
					rooms: [
						{
							id: "etr-101",
							name: "Executive Triple 101",
							price: 250,
							available: 4,
							description: "A premium triple room with deluxe facilities",
						},
						{
							id: "etr-102",
							name: "Executive Triple 102",
							price: 260,
							available: 2,
							description: "An executive triple room with panoramic view",
						},
					],
				},
			],
		},
	],
}

