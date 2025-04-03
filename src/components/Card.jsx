import { useState, useRef } from "react";

export default function Card({ caseData }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const maxPhotos = 4;
  const imagesToShow = caseData.imgs.slice(0, maxPhotos);
  const extraImagesCount = caseData.imgs.length - maxPhotos;

  // Close modal when clicking outside
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        className="h-auto overflow-hidden p-4 bg-gray-100 shadow-md rounded-lg cursor-pointer hover:shadow-2xl transition"
        onClick={() => setIsOpen(true)}
      >
        <div className="grid grid-cols-2 w-full rounded-lg overflow-hidden gap-1 relative">
          {imagesToShow.map((imgSrc, j) => (
            <div key={j} className="relative">
              <img
                src={imgSrc}
                className="w-full h-auto object-cover rounded-md"
                alt={`Case - Image ${j + 1}`}
              />
              {j === maxPhotos - 1 && extraImagesCount > 0 && (
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-2xl font-bold rounded-md">
                  +{extraImagesCount}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-xl md:text-2xl mt-4">
          <p>• Case: {caseData.case}</p>
          <p>• Treatment: {caseData.treatment}</p>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleClickOutside}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-lg p-6 overflow-auto relative w-full max-w-4xl h-[75vh]"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-3xl font-bold text-gray-700 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>

            {/* Case Details */}
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              {caseData.name}
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl">
              • Age: {caseData.age}
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl">
              • Case: {caseData.case}
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl">
              • Treatment: {caseData.treatment}
            </p>
            {caseData.extraNotes ? (
              <p className="text-xl md:text-2xl lg:text-3xl mb-5">
                • Notes: {caseData.extraNotes}
              </p>
            ) : (
              <div className="mb-5"></div>
            )}

            {/* All Images */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {caseData.imgs.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  className="w-full h-auto object-cover rounded-md"
                  alt={`Case - Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
