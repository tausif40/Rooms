import React from 'react'
import { ChevronRight } from "lucide-react";

function RoomCategoryItem({ category, selectedCategories, selectedRooms, toggleCategory, toggleRoom, level }) {
	const isSelected = selectedCategories.includes(category.id)
	const hasSubcategories = category.subcategories && category.subcategories.length > 0
	const isLeafNode = !hasSubcategories

	const handleItemClick = () => {
		toggleCategory(category.id)
	}

	const handleCheckboxClick = (e) => {
		e.stopPropagation()
		toggleRoom(category.id)
	}

	return (
		<div className="mb-3">
			<div
				className={`flex items-center p-3 rounded-md transition-all duration-200"	${isSelected ? "bg-blue-50 border-l-4 border-blue-500" : "hover:bg-slate-50 border-l-4 border-transparent"}	cursor-pointer`}
				onClick={handleItemClick}
			>
				{hasSubcategories ? (
					<ChevronRight
						className={`mr-3 h-5 w-5 text-blue-500 transition-transform duration-300 ${isSelected && "transform rotate-90"}`} />
				) : (
					<div onClick={handleCheckboxClick} className="mr-3">
						<input
							type="checkbox"
							id={category.id}
							checked={selectedRooms.includes(category.id)}
							onChange={() => { }}
							className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
						/>
					</div>
				)}
				<label
					htmlFor={category.id}
					className={`text-sm font-medium" ${isSelected ? "text-blue-700" : "text-slate-700"}`}
				>
					{category.name}
				</label>
			</div>

			{isSelected && hasSubcategories && (
				<div
					className={`pl-6 mt-2 overflow-hidden transition-all duration-300 ease-in-out"${level === 1 ? "border border-slate-200 rounded-md p-4 bg-white shadow-sm" : ""}`}
				>
					{level === 1 && <div className="font-bold mb-3 text-slate-700 border-b pb-2 text-lg">{category.name}</div>}

					{category.subcategories.map((subCategory) => (
						<RoomCategoryItem
							key={subCategory.id}
							category={subCategory}
							selectedCategories={selectedCategories}
							selectedRooms={selectedRooms}
							toggleCategory={toggleCategory}
							toggleRoom={toggleRoom}
							level={level + 1}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default RoomCategoryItem