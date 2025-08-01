
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import birthdayImage from "@/assets/birthday-event.jpg";
import babyShowerImage from "@/assets/baby-shower.jpg";
import munjImage from "@/assets/munj-ceremony.jpg";
import heroImage from "@/assets/hero-events.jpg";
import aniversary from "@/assets/Aniversary.png";
import engagement from "@/assets/Engagement.png";
import namingCeremony from "@/assets/NamingCeremony.png";
import specialEvents from "@/assets/SpecialEvents.png";


import { useNavigate } from "react-router-dom";
import { log } from "console";

const Services = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const navigate = useNavigate();

  const galleryImages = [
    {
      id: 1,
      src: heroImage,
      category: "wedding",
      title: "Elegant Wedding Setup",
      description: "Luxury wedding decoration with golden themes",
      path:"/wedding"
    },
    {
      id: 2,
      src: birthdayImage,
      category: "birthday",
      title: "Birthday Celebration",
      description: "Colorful and fun birthday party setup",
      path:"/birthday"
    },
    {
      id: 3,
      src: babyShowerImage,
      category: "babyshower",
      title: "Baby Shower",
      description: "Gentle and elegant baby shower decoration",
      path:"/babyshower"
    },
    {
      id: 4,
      src: munjImage,
      category: "munj",
      title: "Munj Ceremony",
      description: "Traditional sacred thread ceremony setup",
      path:"/munj"
    },
    {
      id: 5,
      src: aniversary,
      category: "aniversary",
      title: "Aniversary Decor",
      description: "Grand Aniversary hall decoration",
      path:"/aniversary"
    },
    {
      id: 6,
      src: namingCeremony,
      category: "namingceremony",
      title: "Naming Ceremony",
      description: "Fun themed Naming Ceremony ",
      path:"/namingceremony"
    },
    {
      id: 7,
      src: engagement,
      category: "engagement",
      title: "Engagement Ceremony",
      description: "Outdoor Engagement with floral themes",
      path:"/engagement"
    },
    {
      id: 8,
      src: specialEvents,
      category: "specialactivity",
      title: "Special Events",
      description: "Authentic Special Events arrangements",
      path:"/specialactivity"
    },
  ];  

  const handleClick = (category)=>{
    navigate(`/${category}`);
  }

  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-deep mb-6">
            Our Event Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating extraordinary experiences for life's most important moments. 
            Each event is carefully crafted with attention to detail and personalized touches.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={image.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              onClick={()=>handleClick(image.category)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <ZoomIn className="h-8 w-8 text-white" /> */}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-1">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-sm opacity-90">
                  {filteredImages[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
