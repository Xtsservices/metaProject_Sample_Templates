import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export function Labs2Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<header className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white shadow-md">
				<div className="container mx-auto px-4 py-4 flex items-center justify-between">
					<Link to="/labs2" className="text-2xl font-extrabold tracking-tight text-white">
						Limpid Healthcare
					</Link>

					<nav className="hidden md:flex items-center gap-2">
						{[
							{ to: '/labs2', label: 'Home' },
							{ to: '/labs2/about', label: 'About' },
							{ to: '/labs2/blog', label: 'Blog' },
							{ to: '/labs2/clinicians', label: 'Clinicians' },
							{ to: '/labs2/contact', label: 'Contact' },
							{ to: '/labs2/pages', label: 'Pages' },
							{ to: '/labs2/patients', label: 'Patients' },
						].map((link) => (
							<NavLink
								key={link.to}
								to={link.to}
								className={({ isActive }) =>
									`px-3 py-2 rounded-md text-sm font-medium transition ${
										isActive
											? 'bg-white/20 text-white shadow'
											: 'text-white/90 hover:bg-white/10'
									}`
								}
							>
								{link.label}
							</NavLink>
						))}
					</nav>

					{/* Mobile menu placeholder */}
					<div className="md:hidden">
						<Link to="/labs2" className="text-sm font-medium text-white/90">
							Menu
						</Link>
					</div>
				</div>
			</header>

			<main className="min-h-screen bg-slate-50">
				<div className="container mx-auto px-4 py-12">{children}</div>
			</main>

			<footer className="bg-gradient-to-r from-slate-800 via-slate-900 to-black text-gray-300">
				<div className="container mx-auto px-4 py-8">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="text-sm">© 2026 Limpid Healthcare</div>
						<div className="flex gap-4 text-sm">
							<Link to="/labs2/pages" className="hover:text-white/90">
								Privacy
							</Link>
							<Link to="/labs2/pages" className="hover:text-white/90">
								Terms
							</Link>
							<Link to="/labs2/contact" className="hover:text-white/90">
								Contact
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
