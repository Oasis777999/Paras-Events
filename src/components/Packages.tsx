import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Diamond } from "lucide-react";
import { useEffect, useState } from "react";

import birthdayPackage from "../Packages/Birthday.json";
import weddingPackage from "../Packages/Wedding.json";
import babyshower from "../Packages/Babyshower.json";
import munj from "../Packages/Munj.json";
import { useNavigate } from "react-router-dom";

const Packages = () => {
  const [currentCategory, setCurrentCategory] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate();

  const categories = [
    { id: "weddings", name: "Weddings" },
    { id: "birthdays", name: "Birthdays" },
    { id: "babyshower", name: "Baby Showers" },
    { id: "munj", name: "Munj Ceremonies" },
  ];

  console.log(currentCategory);

  useEffect(() => {
    console.log(currentCategory);

    if (currentCategory == "weddings") {
      setSelectedPackage(weddingPackage);
    } else if (currentCategory == "birthdays") {
      setSelectedPackage(birthdayPackage);
    } else if (currentCategory == "babyshower") {
      setSelectedPackage(babyshower);
    }
     else if (currentCategory == "munj") {
      setSelectedPackage(munj);
    }  else {
      // maybe clear selection or set default
      setSelectedPackage(weddingPackage);
    }
  }, [currentCategory]);

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header  */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-deep mb-6">
           Exclusive Event Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your celebration. Each package is
            designed to provide exceptional value and can be customized to meet
            your specific requirements.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={currentCategory === category.id ? "luxury" : "outline"}
              onClick={() => setCurrentCategory(category.id)}
              className={
                currentCategory !== category.id
                  ? "border-gold text-gold hover:bg-gold hover:text-white"
                  : ""
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {selectedPackage ? (
            selectedPackage.map((pkg, index) => (
              <Card
                key={index}
                className={`relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-4 border-0 shadow-card overflow-hidden ${
                  pkg.popular ? "ring-2 ring-gold ring-offset-4 scale-105" : ""
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-5`}
                />

                <CardHeader className="text-center pt-8 relative z-10">
                  <div
                    className={`mx-auto mb-4 p-3 rounded-full bg-gradient-to-r ${pkg.gradient} text-white w-fit`}
                  >
                    {pkg.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-purple-deep">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-gold mb-2">
                    {pkg.price}
                  </div>
                  <CardDescription className="text-gray-600">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))
          ) : (
            <h1>Please select package</h1>
          )}
        </div>

        {/* Custom Package CTA */}
        <div className="bg-gradient-to-r from-purple-deep to-gold p-8 md:p-12 rounded-2xl text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Need Something Custom?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Every event is unique. Let us create a personalized package that
            perfectly matches your vision, budget, and requirements.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-purple-deep"
            onClick={()=>navigate("/contactus")}
          >
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
