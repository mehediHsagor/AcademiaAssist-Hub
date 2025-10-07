import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Button from "../../Components/Button";
// import { Menu, X } from "lucide-react"; // lucide-react icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md  py-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-red-600">Logo</div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10 font-medium">
                    <a href="#" className="hover:text-red-600">
                        Home
                    </a>
                    <a href="#" className="hover:text-red-600">
                        About
                    </a>
                    <a href="#" className="hover:text-red-600">
                        Contact
                    </a>
                </div>

                {/* Right Side */}
                <div className="hidden md:block">
                    <Button name="Login" />
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <IoMdClose size={28} />
                        ) : (
                            <FiMenu size={28} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col items-center gap-4 font-medium">
                    <a href="#" className="hover:text-red-600">
                        Home
                    </a>
                    <a href="#" className="hover:text-red-600">
                        About
                    </a>
                    <a href="#" className="hover:text-red-600">
                        Contact
                    </a>
                    <Button name="Login" navigate={`/`} />
                </div>
            )}
        </nav>
    );
};

export default Navbar;
