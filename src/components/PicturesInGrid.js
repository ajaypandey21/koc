import React from "react";

const PicturesInGrid = () => {
  const images = [
    "https://picsum.photos/300/300?random=1",
    "https://picsum.photos/300/300?random=2",
    "https://picsum.photos/300/300?random=3",
    "https://picsum.photos/300/300?random=4",
    "https://picsum.photos/300/300?random=5",
    "https://picsum.photos/300/300?random=6",
    "https://picsum.photos/300/300?random=7",
    "https://picsum.photos/300/300?random=8",
    "https://picsum.photos/300/300?random=9",
  ];

  return (
    <div className="mt-8 flex flex-wrap gap-4 justify-center">
      {images.map((src, index) => (
        <div key={index} className="w-1/3 sm:w-1/4 p-1">
          <img
            src={src}
            alt={`R`}
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

export default PicturesInGrid;
