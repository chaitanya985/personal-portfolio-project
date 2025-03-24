import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Blogs', href: '#blog' },
        { name: 'Contact', href: '#contact' }

    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-800 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-md text-gray-300">
                            Home
                        </a>
                    </div>

                    {/* Stack Button */}
                    <div className="relative">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center px-4 py-2 text-gray-300 
                                     hover:text-white bg-gray-800 rounded-md focus:outline-none"
                        >
                            <span>Menu</span>
                            <svg
                                className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${
                                    isOpen ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg 
                                          bg-gray-800 ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="menu" aria-orientation="vertical">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 
                                                     hover:text-white transition-colors duration-200"
                                            role="menuitem"
                                            onClick={toggleMenu}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}