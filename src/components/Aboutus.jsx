import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const Aboutus = () => {
  const navigate = useNavigate();
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-purple-deep mb-6">
                About Krishita Events
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 15 years of experience in the event management
                industry, we have successfully organized hundreds of
                celebrations, from intimate gatherings to grand celebrations.
                Our team of dedicated professionals brings creativity,
                precision, and passion to every event.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe that every celebration is unique and deserves
                personalized attention. From the initial consultation to the
                final moment of your event, we're committed to exceeding your
                expectations and creating memories that last a lifetime.
              </p>
              <Button variant="luxury" size="lg" onClick={()=>navigate("/contactus")}>
                Get Started Today
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gold/10 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-gold mb-2">5000+</div>
                <div className="text-purple-deep font-semibold">
                  Events Completed
                </div>
              </div>
              <div className="bg-purple-deep/10 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-gold mb-2">
                  15+
                </div>
                <div className="text-purple-deep font-semibold">
                  Years Experience
                </div>
              </div>
              <div className="bg-rose-gold/20 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-gold mb-2">
                  100%
                </div>
                <div className="text-purple-deep font-semibold">
                  Satisfaction Rate
                </div>
              </div>
              <div className="bg-gold/10 p-6 rounded-xl text-center">
                <div className="text-3xl font-bold text-gold mb-2">24/7</div>
                <div className="text-purple-deep font-semibold">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
