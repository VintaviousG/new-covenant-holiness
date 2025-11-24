"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message. We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>We would love to hear from you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="mailto:info@churchname.com" className="hover:underline">
                    info@churchname.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Phone</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <a href="tel:+1234567890" className="hover:underline">
                    (123) 456-7890
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Address</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  123 Church Street<br />
                  City, State 12345
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Office Hours</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we will respond as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message..."
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Google Map */}
        <Card>
          <CardHeader>
            <CardTitle>Find Us</CardTitle>
            <CardDescription>Visit us at our location</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841321915747!2d-73.98811768459418!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
              <a
                href="https://www.google.com/maps/place/123+Church+Street"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                View on Google Maps
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

