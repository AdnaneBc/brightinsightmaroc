import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import {
  Headphones,
  Mic,
  Languages,
  BookOpen,
  FileText,
  GraduationCap,
} from "lucide-react";

export default function SessionsPage() {
  const sessions = [
    {
      id: 1,
      title: "Listening",
      icon: Headphones,
      description: "Développez votre compréhension orale avec des exercices interactifs, des podcasts authentiques et des conversations réelles. Apprenez à comprendre différents accents et contextes.",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Speaking",
      icon: Mic,
      description: "Améliorez votre expression orale grâce à des jeux de rôle, des discussions guidées et des simulations de situations réelles. Gagnez en confiance et en fluidité.",
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Accent",
      icon: Languages,
      description: "Perfectionnez votre prononciation et votre accent avec des techniques spécifiques, des exercices de phonétique et un suivi personnalisé par des enseignants natifs.",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      title: "ELA (English Language Acquisition)",
      icon: GraduationCap,
      description: "Acquisition complète de la langue anglaise à travers une approche structurée et progressive. Développez toutes les compétences linguistiques de manière équilibrée.",
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 5,
      title: "Vocabulaire",
      icon: BookOpen,
      description: "Enrichissez votre vocabulaire avec des méthodes mnémotechniques, des contextes pratiques et des exercices variés. Apprenez les mots essentiels pour chaque situation.",
      color: "from-red-500 to-red-600",
    },
    {
      id: 6,
      title: "Writing",
      icon: FileText,
      description: "Maîtrisez l'écriture anglaise avec des exercices pratiques, des corrections détaillées et des conseils personnalisés. De l'email professionnel à la rédaction académique.",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D1B4C] via-[#0D1B4C] to-[#1a2d6b] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Nos Sessions d&apos;Anglais
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Des sessions spécialisées pour développer chaque compétence linguistique de manière ciblée et efficace.
            </p>
          </div>
        </div>
      </section>

      {/* Sessions Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sessions.map((session) => {
              const Icon = session.icon;
              return (
                <Card
                  key={session.id}
                  className="border-2 hover:border-[#E6B85C] transition-all hover:shadow-xl group overflow-hidden"
                >
                  <div className={`h-48 bg-gradient-to-br ${session.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                    <Icon className="h-16 w-16 text-white relative z-10" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#0D1B4C]">{session.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {session.description}
                    </CardDescription>
                    <Button
                      asChild
                      className="w-full bg-[#E6B85C] hover:bg-[#E6B85C]/90 text-[#0D1B4C] font-semibold"
                    >
                      <Link href="/contact">Réserver une séance d&apos;essai</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B4C]">
            Besoin d&apos;aide pour choisir ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contactez-nous pour une évaluation gratuite et découvrez quelles sessions correspondent le mieux à vos objectifs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#E6B85C] hover:bg-[#E6B85C]/90 text-[#0D1B4C] font-semibold text-base px-8 py-6"
          >
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

