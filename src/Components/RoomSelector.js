import { useState } from "react";
import RoomCategoryItem from "./RoomCategoryItem";

export default function RoomSelector({ roomsData }) {
	const [ selectedCategories, setSelectedCategories ] = useState([]);
	const [ selectedRooms, setSelectedRooms ] = useState([]);
	const [ showResults, setShowResults ] = useState(false);

	const toggleCategory = (categoryId) => {
		setSelectedCategories((prev) =>
			prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [ ...prev, categoryId ]
		);
	};

	const toggleRoom = (roomId) => {
		setSelectedRooms((prev) => (prev.includes(roomId) ? prev.filter((id) => id !== roomId) : [ ...prev, roomId ]));
	};

	const handleSubmit = () => {
		setShowResults(true);
	};

	const closeDialog = () => {
		setShowResults(false);
	};

	const findRoomNames = () => {
		const findRoomInCategory = (category, roomIds) => {
			let results = [];

			if (roomIds.includes(category.id)) {
				results.push(category.name);
			}

			if (category.subcategories) {
				for (const subCategory of category.subcategories) {
					results = [ ...results, ...findRoomInCategory(subCategory, roomIds) ];
				}
			}

			return results;
		};

		return findRoomInCategory(roomsData, selectedRooms);
	};

	return (
		<>
			<div className="p-8 bg-slate-50">
				<div className="max-w-3xl mx-auto">
					<h1 className="text-3xl font-bold mb-2 text-slate-800">Room Selection</h1>
					<p className="text-slate-600 mb-6">Browse and select from our available rooms</p>
				</div>
			</div>

			<div className="container">
				<div className="bg-white rounded-lg shadow-lg overflow-hidden border mt-8">
					<div className="font-bold border-b border-gray-200 p-4 text-lg text-gray-800 bg-gray-100">
						{roomsData.name}
					</div>
					<div className="p-4">
						{roomsData.subcategories.map((category) => (
							<RoomCategoryItem
								key={category.id}
								category={category}
								selectedCategories={selectedCategories}
								selectedRooms={selectedRooms}
								toggleCategory={toggleCategory}
								toggleRoom={toggleRoom}
								level={1}
							/>
						))}
					</div>
					<div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end">
						<button
							onClick={handleSubmit}
							className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
						>
							Submit Selection
						</button>
					</div>
				</div>
			</div>

			{showResults && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
					<div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
						<h2 className="text-xl font-bold">Your Selected Rooms</h2>
						<p className="text-gray-600">You have selected the following rooms:</p>
						<div className="py-4">
							{selectedRooms.length > 0 ? (
								<ul className="space-y-2">
									{findRoomNames().map((roomName, index) => (
										<li key={index} className="flex items-center gap-2 p-2 bg-blue-50 rounded-md">
											<span className="text-green-500">✔</span>
											<span>{roomName}</span>
										</li>
									))}
								</ul>
							) : (
								<p className="text-gray-500 italic">No rooms selected</p>
							)}
						</div>
						<button
							onClick={closeDialog}
							className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</>
	);
}