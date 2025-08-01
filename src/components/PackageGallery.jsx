import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import packages from "../Packages/Birthday.json";

const PackageGallery = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  console.log(packages);

  const openModal = (index) => {
    setSelectedPackage(index);
  };

  const closeModal = () => {
    setSelectedPackage(null);
  };

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-deep mb-6">
            Event Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from a variety of decoration packages tailored to your event
            needs.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.id}
              onClick={() => openModal(index)}
              className="cursor-pointer backdrop-blur-sm border border-gray-800 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all transform hover:-translate-y-2 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-400 text-white p-4">
                <h3 className="text-lg font-bold">{pkg.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <ul className="text-gray-700 text-sm space-y-3 max-h-48 overflow-y-auto pr-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="border-b last:border-none pb-2">
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 text-right">
                  <p className="text-sm text-purple-600 font-medium">
                    Tap to view full details →
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedPackage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="relative max-w-2xl w-full bg-white rounded-lg p-6 shadow-lg">
              <Button
                variant="ghost"
                size="icon"
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
              >
                <X className="h-6 w-6" />
              </Button>

              <h3 className="text-2xl font-bold text-purple-deep mb-4">
                {packages[selectedPackage].title}
              </h3>

              <ul className="text-gray-800 list-disc list-inside space-y-2 text-sm max-h-[70vh] overflow-y-auto pr-2">
                {packages[selectedPackage].features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PackageGallery;
