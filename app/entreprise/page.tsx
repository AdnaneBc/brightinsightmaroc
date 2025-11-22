import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Briefcase,
  Presentation,
  Mail,
  Users,
  Building2,
  Globe,
  FileText,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function EntreprisePage() {
  const programs = [
    {
      icon: Briefcase,
      title: "Business English",
      description: "Formation complète en anglais professionnel pour améliorer la communication en entreprise, les réunions et les interactions quotidiennes.",
    },
    {
      icon: Presentation,
      title: "Présentations & Négociations",
      description: "Maîtrisez l'art de présenter et négocier en anglais avec confiance. Techniques de communication persuasive et gestion des situations complexes.",
    },
    {
      icon: Mail,
      title: "Emails Professionnels",
      description: "Apprenez à rédiger des emails professionnels efficaces, clairs et adaptés au contexte international. Ton, structure et formules appropriées.",
    },
    {
      icon: Users,
      title: "Formation Interne pour Équipes",
      description: "Programmes sur mesure pour former toute votre équipe. Cohérence linguistique et amélioration de la communication interne et externe.",
    },
  ];

  const formats = [
    {
      title: "Sur Site",
      description: "Nos formateurs se déplacent dans vos locaux pour des sessions adaptées à votre environnement de travail.",
      icon: Building2,
    },
    {
      title: "En Ligne",
      description: "Formation à distance flexible avec des sessions interactives via notre plateforme moderne et sécurisée.",
      icon: Globe,
    },
    {
      title: "Bootcamps Intensifs",
      description: "Programmes intensifs sur plusieurs jours pour une progression rapide et une immersion totale dans la langue.",
      icon: CheckCircle,
    },
  ];

  const advantages = [
    "Facturation entreprise simplifiée",
    "Rapports de progression détaillés",
    "Formateurs natifs spécialisés en Business English",
    "Programmes personnalisés selon vos besoins",
    "Flexibilité des horaires et formats",
    "Support administratif dédié",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D1B4C] via-[#0D1B4C] to-[#1a2d6b] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-[#E6B85C] text-[#0D1B4C] hover:bg-[#E6B85C]/90">
              Solutions B2B
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Formations d&apos;anglais pour Entreprises & Équipes
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Développez les compétences linguistiques de vos équipes avec des programmes professionnels sur mesure.
            </p>
          </div>
        </div>
      </section>

      {/* Why English Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B4C]">
                  Pourquoi l&apos;anglais professionnel est indispensable dans le business marocain
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dans un contexte économique mondialisé, la maîtrise de l&apos;anglais est devenue un atout stratégique pour les entreprises marocaines. Que ce soit pour communiquer avec des partenaires internationaux, accéder à de nouveaux marchés ou améliorer la compétitivité, l&apos;anglais professionnel ouvre des opportunités considérables.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nos formations sont conçues spécifiquement pour répondre aux besoins du marché marocain, en tenant compte des contextes culturels et professionnels locaux tout en préparant vos équipes aux standards internationaux.
                </p>
              </div>
              <div className="h-80 bg-gradient-to-br from-[#E6B85C] to-[#d4a550] rounded-2xl flex items-center justify-center">
                <Globe className="h-32 w-32 text-[#0D1B4C] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B4C]">
              Programmes Spécialisés
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des formations ciblées pour chaque besoin professionnel
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="border-2 hover:border-[#E6B85C] transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="h-12 w-12 bg-[#E6B85C]/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-[#E6B85C]" />
                    </div>
                    <CardTitle className="text-[#0D1B4C]">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {program.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formats Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B4C]">
              Formats Flexibles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choisissez le format qui correspond le mieux à votre organisation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formats.map((format, index) => {
              const Icon = format.icon;
              return (
                <Card key={index} className="border-2 text-center hover:border-[#E6B85C] transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="h-16 w-16 bg-[#E6B85C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-[#E6B85C]" />
                    </div>
                    <CardTitle className="text-[#0D1B4C]">{format.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {format.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 md:py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="h-80 bg-gradient-to-br from-[#0D1B4C] to-[#1a2d6b] rounded-2xl flex items-center justify-center">
                <FileText className="h-32 w-32 text-[#E6B85C] opacity-80" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B4C]">
                  Avantages B2B
                </h2>
                <p className="text-lg text-gray-600">
                  Des solutions adaptées aux besoins des entreprises
                </p>
                <ul className="space-y-4">
                  {advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-[#E6B85C] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0D1B4C] to-[#1a2d6b] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Prêt à former vos équipes ?
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et recevoir un devis personnalisé pour votre entreprise.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#E6B85C] hover:bg-[#E6B85C]/90 text-[#0D1B4C] font-semibold text-base px-8 py-6"
          >
            <Link href="/contact">
              Demander un devis entreprise
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

