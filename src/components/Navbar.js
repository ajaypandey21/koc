import React, { useState, useRef, useEffect } from "react";
import { Heart, ShoppingCart, Menu, ChevronDown, X } from "lucide-react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);

  const menuItems = [
    {
      name: "Image",
      options: [
        "Images home",
        "Vectors",
        "Photos",
        "Editorial",
        "Premium images",
        "AI image generator",
        "Curated collections",
        "Categories",
      ],
    },
    {
      name: "Video",
      options: [
        "Videos home",
        "Stock videos",
        "Editorial",
        "Premium videos",
        "AI video generator",
        "Categories",
      ],
    },
    {
      name: "Browse",
      options: [
        "All content",
        "Popular items",
        "New arrivals",
        "Trending",
        "Collections",
      ],
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileSubmenu = (menu) => {
    setOpenMobileSubmenu(openMobileSubmenu === menu ? null : menu);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !dropdownButtonRef.current.contains(event.target)
    ) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <>
      <nav className="w-full flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex-shrink-0">
          <div className="flex items-center">
            <img
              src="https://www.pipeline-conference.com/sites/default/files/companies/KOC_0.jpg"
              alt="Company Logo"
              className="h-10 w-auto"
            />
            <p className="text-sm sm:block ml-2 sm:text-lg font-medium">
              KOC Media & Library System
            </p>

            <ul className="hidden sm:flex items-center ml-10 space-x-6">
              {menuItems.map((menu) => (
                <li
                  key={menu.name}
                  className="relative flex items-center cursor-pointer"
                  ref={dropdownButtonRef}
                  onClick={() => toggleDropdown(menu.name)}
                >
                  <p className="font-medium text-gray-700">{menu.name}</p>
                  <ChevronDown className="w-4 h-4 ml-1" />
                  {openDropdown === menu.name && (
                    <ul
                      ref={dropdownRef}
                      className="absolute top-full mt-2 w-40 bg-white shadow-lg border rounded-lg p-2 z-30"
                    >
                      {menu.options.map((item, index) => (
                        <li key={index} className="p-2 hover:bg-gray-100">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center space-x-4 sm:space-x-7 sm:mr-6">
          <Heart className="w-6 h-6 text-gray-600" />
          <ShoppingCart className="w-6 h-6 text-gray-600" />
          <Menu
            className="w-6 h-6 text-gray-600 sm:hidden cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden`}
      >
        <div className="w-64 bg-white h-full shadow-md p-4 absolute right-0 top-0 overflow-y-auto">
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">Menu</p>
            <X
              className="w-6 h-6 text-gray-600 cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
          <ul className="mt-6 space-y-4">
            {menuItems.map((menu) => (
              <li key={menu.name} className="cursor-pointer">
                <div
                  className="flex items-center justify-between"
                  onClick={() => toggleMobileSubmenu(menu.name)}
                >
                  <p className="font-medium">{menu.name}</p>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openMobileSubmenu === menu.name ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openMobileSubmenu === menu.name && (
                  <ul className="mt-2 ml-4 space-y-2">
                    {menu.options.map((item, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
