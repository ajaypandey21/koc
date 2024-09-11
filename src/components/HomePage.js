import React, { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, Image, Video, Music } from "lucide-react";

const HomePage = () => {
  const mediaOptions = [
    {
      name: "All images",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M19.5 3.75h-15A1.5 1.5 0 003 5.25v13.5a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5zM18 17.25H6L10.6 12.6a.75.75 0 011.05 0L14.25 15l3.75-3.75V17.25zM18 8.25A1.5 1.5 0 1116.5 6.75 1.5 1.5 0 0118 8.25z" />
        </svg>
      ),
    },
    {
      name: "Photos",
      icon: <Image />,
    },
    {
      name: "3D Objects",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Vector",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.471l3.386-5.08A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Illustrations",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      name: "Editorial",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
        </svg>
      ),
    },

    {
      name: "Video",
      icon: <Video />,
    },
    {
      name: "Music",
      icon: <Music />,
    },
  ];
  const mediaOptionsW = [
    {
      name: "Images",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-6 h-6"
        >
          <path d="M19.5 3.75h-15A1.5 1.5 0 003 5.25v13.5a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5zM18 17.25H6L10.6 12.6a.75.75 0 011.05 0L14.25 15l3.75-3.75V17.25zM18 8.25A1.5 1.5 0 1116.5 6.75 1.5 1.5 0 0118 8.25z" />
        </svg>
      ),
    },

    {
      name: "3D Objects",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Vector",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 00-3.471 2.987 10.04 10.04 0 014.815 4.815 18.748 18.748 0 002.987-3.471l3.386-5.08A1.902 1.902 0 0020.599 1.5zm-8.3 14.025a18.76 18.76 0 001.896-1.207 8.026 8.026 0 00-4.513-4.513A18.75 18.75 0 008.475 11.7l-.278.5a5.26 5.26 0 013.601 3.602l.502-.278zM6.75 13.5A3.75 3.75 0 003 17.25a1.5 1.5 0 01-1.601 1.497.75.75 0 00-.7 1.123 5.25 5.25 0 009.8-2.62 3.75 3.75 0 00-3.75-3.75z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Illustrations",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

    {
      name: "Editorial",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-6 h-6"
        >
          <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
        </svg>
      ),
    },

    {
      name: "Video",
      icon: <Video />,
    },
    {
      name: "Music",
      icon: <Music />,
    },
  ];
  const photos = [
    {
      src: "https://picsum.photos/id/1016/1080/720",
      name: "Forest",
    },
    {
      src: "https://picsum.photos/id/1020/1080/720",
      name: "Mountains",
    },
    {
      src: "https://picsum.photos/id/1024/1080/720",
      name: "Beach",
    },
    {
      src: "https://picsum.photos/id/1032/1080/720",
      name: "City",
    },
    {
      src: "https://picsum.photos/id/1033/1080/720",
      name: "Desert",
    },
    {
      src: "https://picsum.photos/id/1036/1080/720",
      name: "River",
    },
    {
      src: "https://picsum.photos/id/1040/1080/720",
      name: "Lava",
    },
    {
      src: "https://picsum.photos/id/1041/1080/720",
      name: "Snow",
    },
    {
      src: "https://picsum.photos/id/1045/1080/720",
      name: "Swamp",
    },
    {
      src: "https://picsum.photos/id/1051/1080/720",
      name: "Rainforest",
    },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(mediaOptions[0]);
  const dropdownRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null); // Manage selected item

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter photos based on the search term
  const filteredPhotos = photos.filter((photo) =>
    photo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div
        className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-start
        p-4 relative pt-[4rem] "
        style={{
          backgroundImage:
            "url('https://images.ctfassets.net/hrltx12pl8hq/703epYjcNn6LkOTds55r7E/92b60412462efd533b9f9edb7f514d30/CVRT_1457_Starry_Night_HP_background.webp?fit=fill&w=1280&h=720')",
        }}
      >
        <div className="text-white text-center mb-12 ">
          <h1 className="text-xl font-bold sm:text-5xl">
            One library, millions of ways to tell your story
          </h1>
        </div>
        <div className="hidden sm:flex w-full justify-center space-x-8 mb-12 ">
          {mediaOptionsW.map((item) => (
            <div
              key={item.name}
              className={`flex items-center space-x-2 cursor-pointer ${
                selectedItem === item.name ? "border-b-2 border-white" : ""
              }`}
              onClick={() => setSelectedItem(item.name)}
            >
              <span>{item.icon}</span>
              <span className="text-white">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="w-full sm:w-[62%] flex items-center space-x-1 sm:space-x-4">
          <div
            className="bg-white rounded-md overflow-visible shadow-lg relative"
            ref={dropdownRef}
          >
            <button
              onClick={toggleDropdown}
              className="bg-white flex items-center p-[10px] rounded-md shadow-lg "
            >
              <span className="mr-2">{selectedOption.icon}</span>
              <span className="hidden sm:inline">{selectedOption.name}</span>
              <ChevronDown className="ml-2" />
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-white rounded-md shadow-lg z-10 left-0 top-0 max-h-[300px] overflow-y-auto w-full">
                {mediaOptions.map((item, index) => (
                  <div
                    key={index}
                    className="p-[10px] text-gray-700 flex items-center cursor-pointer hover:bg-gray-100"
                    onClick={() => handleOptionClick(item)}
                  >
                    <span className="sm:mr-2">{item.icon}</span>
                    <span className="hidden sm:inline">{item.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg flex-grow flex items-center sm:w-1/2">
            <input
              type="text"
              placeholder="Start your next project"
              className="w-full outline-none text-gray-700 px-4 py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-red-500 text-white p-3 ">
              <Search size={20} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-10 gap-4">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={photo.src}
                alt={photo.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center text-sm">
                {photo.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
