import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B4C] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span>Bright</span>
              <span className="text-[#E6B85C]"> Insight</span>
            </div>
            <p className="text-gray-300 text-sm">
              Centre de formation linguistique spécialisé en anglais pour tous niveaux à Casablanca.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#E6B85C] transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/sessions" className="hover:text-[#E6B85C] transition-colors">
                  Sessions
                </Link>
              </li>
              <li>
                <Link href="/methodes" className="hover:text-[#E6B85C] transition-colors">
                  Méthodes
                </Link>
              </li>
              <li>
                <Link href="/entreprise" className="hover:text-[#E6B85C] transition-colors">
                  Entreprise
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#E6B85C] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E6B85C] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4">Nos Programmes</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/sessions" className="hover:text-[#E6B85C] transition-colors">
                  Anglais pour enfants
                </Link>
              </li>
              <li>
                <Link href="/sessions" className="hover:text-[#E6B85C] transition-colors">
                  Anglais pour adultes
                </Link>
              </li>
              <li>
                <Link href="/sessions" className="hover:text-[#E6B85C] transition-colors">
                  Anglais Business
                </Link>
              </li>
              <li>
                <Link href="/sessions" className="hover:text-[#E6B85C] transition-colors">
                  TOEFL / IELTS
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[#E6B85C] mt-0.5 flex-shrink-0" />
                <span>
                  Ben Omar Center, 3ème étage<br />
                  Maârif, Casablanca
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#E6B85C] flex-shrink-0" />
                <a href="tel:+212XXXXXXXXX" className="hover:text-[#E6B85C] transition-colors">
                  +212 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#E6B85C] flex-shrink-0" />
                <a href="mailto:contact@brightinsight.ma" className="hover:text-[#E6B85C] transition-colors">
                  contact@brightinsight.ma
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-300 text-sm">
              Besoin d&apos;informations ? Contactez-nous directement sur WhatsApp
            </p>
            <Button
              asChild
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold"
            >
              <a
                href="https://wa.me/212XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Nous contacter sur WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bright Insight. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

