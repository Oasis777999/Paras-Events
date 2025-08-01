import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-purple-deep text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gold to-rose-gold bg-clip-text text-transparent mb-4">
                Paras Events
              </h3>
              <p className="text-white/80 mb-4 max-w-md">
                Creating unforgettable moments and bringing your celebration
                dreams to life with exceptional attention to detail and
                unparalleled elegance.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white/60 hover:text-gold transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-gold transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-gold transition-colors"
                >
                  YouTube
                </a>
                <a
                  href="#"
                  className="text-white/60 hover:text-gold transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/aboutus"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/packages"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Packages
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/contactus"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mt-8 mb-4 text-gold">
                Contact
              </h4>
              <ul className="space-y-2 text-white/80">
                <li>Phone: +9198901 97070 / +9192263 65365</li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:info@example.com"
                    className="underline hover:text-gold"
                  >
                    events7070@gmail.com
                  </a>
                </li>
                <li>
                  Address: 1149 , Raviwar Peth , Govind Halwai Chowk, <br/> 2nd Floor,
                  Dhanwarsha Market Pune,411002, Maharashtra, India
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60">
              © 2025 ADVAIT TELESERVICES. All rights reserved. | Privacy Policy
              | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
