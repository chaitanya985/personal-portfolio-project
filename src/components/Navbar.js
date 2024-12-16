export default function Navbar({ currentPage }) {
    return (
        <nav className={`w-full px-5 sm:px-10 py-5 shadow-xl backdrop lgur lg ${currentPage === 'home' ? 'fixed' : ''} top-0 z-10`}>
            <div className="container flex flex-col lg:flex-row
                            gap-5 justify-between w-full">
                <a className="text-sm sm:text-base px-2 lg:px-5
                                        py-2 transition rounded text-stone-50
                                        hover:bg-slate-700"
                            href="#hero">
                            Home
                        </a>
                <ul className="flex gap-3 align-center p-1 flex-wrap" href="#hero">
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5
                                        py-2 transition rounded text-stone-50
                                        hover:bg-slate-700"
                            href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5
                                        py-2 transition rounded text-stone-50
                                        hover:bg-slate-700"
                            href="#skills">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5
                                        py-2 transition rounded text-stone-50
                                        hover:bg-slate-700"
                            href="#projects">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5
                                        py-2 transition rounded text-stone-50
                                        hover:bg-slate-700"
                            href="#experience">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5
                                        py-2 transition rounded text-stone-50
                                        hover:bg-slate-700"
                            href="#certificates">
                            Certificates
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5
                                        py-2 transition rounded text-stone-50
                                        hover:bg-slate-700"
                            href="#blog">
                            Blogs
                        </a>
                    </li>
                    <li>
                        <a className="text-sm sm:text-base px-2 lg:px-5
                                        py-2 transition rounded text-stone-50
                                        hover:bg-slate-700"
                            href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}