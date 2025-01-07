"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CompanyLogoImage from "@/assets/logo.png";
const Header = () => {
  // تعريف NAV_ITEMS مباشرة داخل الهيدر
  const NAV_ITEMS = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About Us",
      link: "/about",
    },
    {
      label: "Services",
      link: "/services",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-slate-400 text-white shadow-md sticky top-0 z-50 ">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={CompanyLogoImage}
            alt="Company Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <span className="text-xl font-bold">Your Company</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              className=" px-4 hover:text-gray-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-gray-700">
          <ul className="flex flex-col space-y-2 p-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.link}
                  className="block py-2 text-white hover:text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
