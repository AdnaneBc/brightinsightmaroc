"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-[#0D1B4C]">Bright</span>
              <span className="text-[#E6B85C]"> Insight</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium text-[#0D1B4C] hover:text-[#E6B85C] transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/sessions"
              className="text-sm font-medium text-[#0D1B4C] hover:text-[#E6B85C] transition-colors"
            >
              Sessions
            </Link>
            <Link
              href="/methodes"
              className="text-sm font-medium text-[#0D1B4C] hover:text-[#E6B85C] transition-colors"
            >
              Méthodes
            </Link>
            <Link
              href="/entreprise"
              className="text-sm font-medium text-[#0D1B4C] hover:text-[#E6B85C] transition-colors"
            >
              Entreprise
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-[#0D1B4C] hover:text-[#E6B85C] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#0D1B4C] hover:text-[#E6B85C] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              className="bg-[#E6B85C] hover:bg-[#E6B85C]/90 text-[#0D1B4C] font-semibold"
            >
              <Link href="/contact">Réserver un test</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#0D1B4C]" />
            ) : (
              <Menu className="h-6 w-6 text-[#0D1B4C]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t animate-slide-up">
            <Link
              href="/"
              className="block text-sm font-medium text-[#0D1B4C] hover:text-[#E6B85C] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/sessions"
              className="block text-sm font-medium text-[#0D1B4C] hover:text-[#E6B85C] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sessions
            </Link>
            <Link
              href="/methodes"
              className="block text-sm font-medium text-[#0D1B4C] hover:text-[#E6B85C] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Méthodes
            </Link>
            <Link
              href="/entreprise"
              className="block text-sm font-medium text-[#0D1B4C] hover:text-[#E6B85C] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Entreprise
            </Link>
            <Link
              href="/blog"
              className="block text-sm font-medium text-[#0D1B4C] hover:text-[#E6B85C] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium text-[#0D1B4C] hover:text-[#E6B85C] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              asChild
              className="w-full bg-[#E6B85C] hover:bg-[#E6B85C]/90 text-[#0D1B4C] font-semibold"
            >
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Réserver un test
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}

