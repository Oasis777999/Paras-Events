import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Music,
  Camera,
  Palette,
  Utensils,
  Sparkles,
  Users,
  Mic,
  Car,
  Crown,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Activities = () => {
  const navigate = useNavigate();
  const activities = [
    {
      icon: <Music className="h-8 w-8" />,
      title: "Live Entertainment",
      description:
        "Professional musicians, DJs, and performers to keep your guests entertained",
      features: [
        "Live Band",
        "DJ Services",
        "Cultural Performances",
        "Stand-up Comedy",
      ],
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Photography & Videography",
      description:
        "Capture every precious moment with our professional photography team",
      features: [
        "Pre-event Shoot",
        "Live Photography",
        "Videography",
        "Drone Coverage",
      ],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Makeup & Styling",
      description:
        "Professional makeup artists and stylists for the perfect look",
      features: [
        "Bridal Makeup",
        "Guest Styling",
        "Hair Styling",
        "Mehendi Artists",
      ],
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Catering Services",
      description: "Delicious cuisine options from traditional to contemporary",
      features: [
        "Multi-cuisine Menu",
        "Live Counters",
        "Special Dietary Options",
        "Dessert Station",
      ],
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Special Effects",
      description: "Add magic to your event with stunning visual effects",
      features: [
        "LED Lighting",
        "Fog Effects",
        "Confetti Cannons",
        "Fireworks Display",
      ],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Event Coordination",
      description: "Professional event managers to ensure smooth execution",
      features: [
        "Timeline Management",
        "Vendor Coordination",
        "Guest Management",
        "Emergency Support",
      ],
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Audio Visual Setup",
      description: "High-quality sound and visual equipment for your event",
      features: [
        "Professional Sound System",
        "LED Screens",
        "Projectors",
        "Microphone Setup",
      ],
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Transportation",
      description: "Comfortable transportation arrangements for guests",
      features: [
        "Luxury Cars",
        "Bus Services",
        "Valet Parking",
        "Airport Transfers",
      ],
    },
  ];

  return (
    <section id="activities" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-deep mb-6">
            Additional Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your event with our comprehensive range of additional
            services. From entertainment to logistics, we've got every aspect
            covered to make your celebration perfect.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-card bg-white"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-r from-gold to-rose-gold text-white w-fit">
                  {activity.icon}
                </div>
                <CardTitle className="text-lg font-bold text-purple-deep">
                  {activity.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm">
                  {activity.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-4">
                  {activity.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-gold text-gold hover:bg-gold hover:text-white"
                    onClick={()=>navigate("/contactus")}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Package Deals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-purple-deep to-purple-light text-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center">
                <Sparkles className="h-6 w-6 mr-2" />
                Premium Activity Bundle
              </CardTitle>
              <CardDescription className="text-white/80">
                Get the best value with our comprehensive activity package
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  ✓ Photography & Videography
                </div>
                <div className="flex items-center">✓ Live Entertainment</div>
                <div className="flex items-center">✓ Special Effects</div>
                <div className="flex items-center">✓ Audio Visual Setup</div>
                <div className="flex items-center">✓ Event Coordination</div>
              </div>
              {/* <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">₹25,000</div>
                  <div className="text-sm opacity-80">Save ₹5,000</div>
                </div>
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-purple-deep">
                  Choose Bundle
                </Button>
              </div> */}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gold to-rose-gold text-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center">
                <Crown className="h-6 w-6 mr-2" />
                Luxury Experience Package
              </CardTitle>
              <CardDescription className="text-white/80">
                Ultimate luxury with all premium services included
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  ✓ All Premium Activities
                </div>
                <div className="flex items-center">✓ Makeup & Styling</div>
                <div className="flex items-center">✓ Transportation</div>
                <div className="flex items-center">✓ Personal Concierge</div>
                <div className="flex items-center">✓ 24/7 Support</div>
              </div>
              {/* <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">₹45,000</div>
                  <div className="text-sm opacity-80">Save ₹10,000</div>
                </div>
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-gold">
                  Choose Luxury
                </Button>
              </div> */}
            </CardContent>
          </Card>
        </div>

        {/* Custom Services CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-card">
            <h3 className="text-3xl md:text-4xl font-bold text-purple-deep mb-4">
              Need Custom Services?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't see what you're looking for? We offer completely customized
              activity packages tailored to your specific event requirements and
              budget.
            </p>
            <Button variant="luxury" size="lg" onClick={()=>navigate("/contactus")}>
              Request Custom Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
