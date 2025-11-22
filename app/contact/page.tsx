"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Merci pour votre message ! Nous vous contacterons bientôt.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D1B4C] via-[#0D1B4C] to-[#1a2d6b] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Contactez-nous
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Une question ? Un projet ? Nous sommes là pour vous aider.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0D1B4C]">
                    Envoyez-nous un message
                  </CardTitle>
                  <CardDescription>
                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="border-2 resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#E6B85C] hover:bg-[#E6B85C]/90 text-[#0D1B4C] font-semibold"
                    >
                      Envoyer le message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0D1B4C]">
                    Informations de contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-[#E6B85C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#E6B85C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0D1B4C] mb-1">Adresse</h3>
                      <p className="text-gray-600">
                        Ben Omar Center, 3ème étage<br />
                        Maârif, Casablanca
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-[#E6B85C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#E6B85C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0D1B4C] mb-1">Téléphone</h3>
                      <a
                        href="tel:+212XXXXXXXXX"
                        className="text-gray-600 hover:text-[#E6B85C] transition-colors"
                      >
                        +212 XX XXX XXXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-[#E6B85C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#E6B85C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0D1B4C] mb-1">Email</h3>
                      <a
                        href="mailto:contact@brightinsight.ma"
                        className="text-gray-600 hover:text-[#E6B85C] transition-colors"
                      >
                        contact@brightinsight.ma
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 bg-[#E6B85C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-[#E6B85C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0D1B4C] mb-1">Horaires</h3>
                      <p className="text-gray-600">
                        Lundi - Vendredi: 9h00 - 19h00<br />
                        Samedi: 9h00 - 17h00<br />
                        Dimanche: Fermé
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <Card className="border-2 border-[#25D366] bg-[#25D366]/5">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <MessageCircle className="h-8 w-8 text-[#25D366]" />
                    <h3 className="font-semibold text-[#0D1B4C]">
                      Contactez-nous sur WhatsApp
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Pour une réponse plus rapide, contactez-nous directement sur WhatsApp.
                  </p>
                  <Button
                    asChild
                    className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold"
                  >
                    <a
                      href="https://wa.me/212XXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>Ouvrir WhatsApp</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B4C] mb-4">
              Notre localisation
            </h2>
            <p className="text-gray-600">
              Retrouvez-nous au Ben Omar Center, 3ème étage, Maârif, Casablanca
            </p>
          </div>
          <div className="h-96 bg-gradient-to-br from-[#E6B85C] to-[#d4a550] rounded-2xl flex items-center justify-center">
            <div className="text-center text-[#0D1B4C]">
              <MapPin className="h-16 w-16 mx-auto mb-4" />
              <p className="text-lg font-semibold">Carte Google Maps</p>
              <p className="text-sm mt-2">
                Intégrez votre clé API Google Maps ici
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

