import { log } from "console";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import weddingData from "../Images/wedding.json";
import birthdayData from "../Images/birthday.json";
import munjBaby from "../Images/BirthMunjName.json";
import special from "../Images/Special.json";

const ImageGallery = () => {
  const { category } = useParams();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);

  console.log(images);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    setLoading(false);
    if (category === "wedding") {
      setImages(weddingData);
    } else if (category === "birthday") {
      setImages(birthdayData);
    } else if (category === "aniversary") {
      setImages(weddingData);
    } else if (category === "munj") {
      setImages(munjBaby);
    } else if (category === "namingceremony") {
      setImages(munjBaby);
    } else if (category === "babyshower") {
      setImages(munjBaby);
    } else if (category === "engagement") {
      setImages(weddingData);
    } else if (category === "specialactivity") {
      setImages(special);
    } else {
      setImages([]); // or handle default case
    }
  }, [category]); // Re-fetch when the category changes

  if (loading) {
    return (
      <div className="text-center py-10">
        <span className="text-xl">Loading images...</span>
      </div>
    );
  }

  return (
    <div className="p-1 py-12">
      {/* Grid of images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => openModal(index)}
            className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-xl transition-all h-54 duration-300 hover:-translate-y-2"
          >
            <div className="relative overflow-hidden">
              <img
                src={image.src}
                alt={image.title}
                className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold"
            onClick={closeModal}
          >
            &times;
          </button>

          {/* Left arrow */}
          <button
            className="absolute left-4 text-white text-5xl font-bold"
            onClick={prevImage}
          >
            &#8249;
          </button>

          {/* Image content */}
          <div className="w-full max-w-5xl mx-4 text-center">
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].title}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <h2 className="text-white text-xl font-bold mt-4">
              {images[selectedIndex].title}
            </h2>
            <p className="text-white text-sm">
              {images[selectedIndex].description}
            </p>
          </div>

          {/* Right arrow */}
          <button
            className="absolute right-4 text-white text-5xl font-bold"
            onClick={nextImage}
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
