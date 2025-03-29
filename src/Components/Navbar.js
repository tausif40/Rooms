import { Building2 } from "lucide-react"
import { Link } from "react-router-dom"

export default function Navbar() {
	return (
		<nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link to="/" className="flex items-center space-x-2">
							<Building2 className="h-8 w-8" />
							<span className="font-bold text-xl">RoomFinder</span>
						</Link>
					</div>

				</div>
			</div>
		</nav>
	)
}

