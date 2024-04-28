import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const path = useLocation().pathname;

    return (
        <div className="container py-8 px-2.5 mx-auto flex justify-between relative">
            <a href="/" className="text-3xl tracking-widest font-bold">VILLA</a>

            <div className="ms-auto cursor-pointer lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faBars} size="xl" />
            </div>

            <nav>
                <ul className="lg:flex hidden items-center gap-10">
                    <li>
                        <Link to="/" className={`${path == '/' && 'text-primary'} font-medium hover:text-primary transition-colors duration-300`}>Home</Link>
                    </li>
                    <li>
                        <Link to="/properties" className={`${path == '/properties' && 'text-primary'} font-medium hover:text-primary transition-colors duration-300`}>Properties</Link>
                    </li>
                    <li>
                        <Link to="/property-details" className={`${path == '/property-details' && 'text-primary'} font-medium hover:text-primary transition-colors duration-300`}>Property Details</Link>
                    </li>
                    <li>
                        <Link to="/contact-us" className={`${path == '/contact-us' && 'text-primary'} font-medium hover:text-primary transition-colors duration-300`}>Contact Us</Link>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-3 text-white text-sm bg-black pe-5 rounded-3xl hover:text-primary transition-colors duration-300">
                            <div className="w-[40px] h-[40px] rounded-full grid place-items-center bg-primary">
                                <FontAwesomeIcon icon={faCalendar} inverse />
                            </div>
                            <span>Schedule a visit</span>
                        </a>
                    </li>
                </ul>

                {/* Mobile menu */}
                <ul className={`${isOpen ? 'block' : 'hidden'} absolute top-full left-0 bg-white w-full lg:hidden z-20 shadow-lg border-2 border-stone-100 p-3`}>
                    <li className="mb-3">
                        <Link to="/" className={`${path == '/' && 'text-primary'} font-medium hover:text-primary transition-colors duration-300`}>Home</Link>
                    </li>
                    <li className="mb-3">
                        <Link to="/properties" className={`${path == '/properties' && 'text-primary'} font-medium hover:text-primary transition-colors duration-300`}>Properties</Link>
                    </li>
                    <li className="mb-3">
                        <Link to="/property-details" className={`${path == '/property-details' && 'text-primary'} font-medium hover:text-primary transition-colors duration-300`}>Property Details</Link>
                    </li>
                    <li className="mb-3">
                        <Link to="/contact-us" className={`${path == '/contact-us' && 'text-primary'} font-medium hover:text-primary transition-colors duration-300`}>Contact Us</Link>
                    </li>
                    <li className="inline-block">
                        <a href="#" className="flex items-center gap-3 text-white text-sm bg-black pe-5 rounded-3xl hover:text-primary transition-colors duration-300">
                            <div className="w-[40px] h-[40px] rounded-full grid place-items-center bg-primary">
                                <FontAwesomeIcon icon={faCalendar} inverse />
                            </div>
                            <span>Schedule a visit</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;