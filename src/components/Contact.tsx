import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-deep mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start planning your perfect event? Get in touch with us
            today and let's bring your celebration dreams to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-deep">
                  <Phone className="h-5 w-5 mr-2 text-gold" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">+91 98901 97070</p>
                <p className="text-gray-600">+91 92263 65365</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-deep">
                  <Mail className="h-5 w-5 mr-2 text-gold" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">events7070@gmail.com</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-deep">
                  <MapPin className="h-5 w-5 mr-2 text-gold" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  1149 , Raviwar Peth , Govind Halwai Chowk, <br /> 2nd Floor,
                  Dhanwarsha Market
                  <br /> Pune,411002, Maharashtra, India
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-purple-deep">
                  <Clock className="h-5 w-5 mr-2 text-gold" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p>Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-4">
              <a
                href="https://wa.me/919226365365"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button variant="luxury" className="w-full">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Chat
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-deep">
                  Get a Quote
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24
                  hours with a customized quote.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="eventType">Event Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="birthday">Birthday</SelectItem>
                        <SelectItem value="babyshower">Baby Shower</SelectItem>
                        <SelectItem value="munj">Munj Ceremony</SelectItem>
                        <SelectItem value="corporate">
                          Corporate Event
                        </SelectItem>
                        <SelectItem value="anniversary">Anniversary</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="package">Preferred Package</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gold">Gold Package</SelectItem>
                        <SelectItem value="diamond">Diamond Package</SelectItem>
                        <SelectItem value="platinum">
                          Platinum Package
                        </SelectItem>
                        <SelectItem value="custom">Custom Package</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="eventDate">Event Date</Label>
                    <Input id="eventDate" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guestCount">Expected Guests</Label>
                    <Input
                      id="guestCount"
                      type="number"
                      placeholder="Number of guests"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                      <SelectItem value="50k-100k">
                        ₹50,000 - ₹1,00,000
                      </SelectItem>
                      <SelectItem value="100k-200k">
                        ₹1,00,000 - ₹2,00,000
                      </SelectItem>
                      <SelectItem value="200k+">₹2,00,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your event requirements, venue preferences, or any special requests..."
                    rows={5}
                  />
                </div>

                <Button variant="luxury" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Quote Request
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our Terms of Service and
                  Privacy Policy. We'll only use your information to provide you
                  with the requested quote.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-5">
          <Card className="border-0 shadow-card overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-purple-deep text-center p-2">
                Visit Our Office
              </CardTitle>
              <CardDescription className="text-center">
                Come visit our showroom to see our decoration samples and
                discuss your event in person.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7971061885233!2d73.85827547509827!3d18.517406699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c071aaaaaaab%3A0x6a8a283a442ca1ef!2sKrishita%20Events!5e0!3m2!1sen!2sin!4v1722441600000!5m2!1sen!2sin"
                  title="Company Location"
                  style={{ border: 0, width: "100%", height: "450px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
