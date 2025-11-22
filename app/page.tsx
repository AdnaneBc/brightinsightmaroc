import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import {
  Users,
  Award,
  Clock,
  CheckCircle,
  GraduationCap,
  Briefcase,
  BookOpen,
  Globe,
  Star,
  ArrowRight,
  PlayCircle,
  Headphones,
  Mic,
  FileText,
  Languages,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0D1B4C] via-[#0D1B4C] to-[#1a2d6b] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-[#E6B85C] text-[#0D1B4C] hover:bg-[#E6B85C]/90">
                Formation linguistique d&apos;excellence
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Boost Your English.
                <br />
                <span className="text-[#E6B85C]">Boost Your Future.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Cours d&apos;anglais modernes pour enfants, adultes et professionnels à Casablanca — en présentiel, en ligne ou à domicile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#E6B85C] hover:bg-[#E6B85C]/90 text-[#0D1B4C] font-semibold text-base px-8 py-6"
                >
                  <Link href="/contact">Réserver un test de niveau gratuit</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold text-base px-8 py-6"
                >
                  <Link href="/sessions">Voir nos sessions</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#E6B85C] to-[#d4a550] flex items-center justify-center">
                  <div className="text-center text-[#0D1B4C] p-8">
                    <Users className="h-24 w-24 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Photo d&apos;étudiants</p>
                    <p className="text-sm mt-2">Image à remplacer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#0D1B4C]">23+</div>
              <div className="text-sm md:text-base text-gray-600">projets réussis</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#0D1B4C]">16k+</div>
              <div className="text-sm md:text-base text-gray-600">clients satisfaits</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#0D1B4C]">8+</div>
              <div className="text-sm md:text-base text-gray-600">ans d&apos;expérience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#0D1B4C]">100%</div>
              <div className="text-sm md:text-base text-gray-600">taux de satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B4C]">
              À propos de Bright Insight
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Bright Insight est un centre de formation linguistique spécialisé en anglais pour tous niveaux. Notre méthode interactive, personnalisée et structurée garantit une progression rapide et durable.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B4C]">
              Nos Programmes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des formations adaptées à chaque besoin et niveau
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-[#E6B85C] transition-all hover:shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-[#E6B85C]/10 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-[#E6B85C]" />
                </div>
                <CardTitle className="text-[#0D1B4C]">Anglais pour enfants</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Méthodes ludiques et interactives adaptées aux jeunes apprenants.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#E6B85C] transition-all hover:shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-[#E6B85C]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#E6B85C]" />
                </div>
                <CardTitle className="text-[#0D1B4C]">Anglais pour adultes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Cours personnalisés pour progresser à votre rythme.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#E6B85C] transition-all hover:shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-[#E6B85C]/10 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-[#E6B85C]" />
                </div>
                <CardTitle className="text-[#0D1B4C]">Anglais Business</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Formation professionnelle pour exceller en entreprise.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-[#E6B85C] transition-all hover:shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-[#E6B85C]/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-[#E6B85C]" />
                </div>
                <CardTitle className="text-[#0D1B4C]">Préparation TOEFL / IELTS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Préparation intensive pour réussir vos examens internationaux.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B4C]">
              Pourquoi choisir Bright Insight ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des avantages qui font la différence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-[#E6B85C]/10 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-[#E6B85C]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0D1B4C]">
                Enseignants natifs et certifiés
              </h3>
              <p className="text-gray-600">
                Des professionnels qualifiés pour une immersion authentique
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-[#E6B85C]/10 rounded-full flex items-center justify-center mx-auto">
                <PlayCircle className="h-8 w-8 text-[#E6B85C]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0D1B4C]">
                Méthodes interactives et immersives
              </h3>
              <p className="text-gray-600">
                Apprentissage actif et engageant pour des résultats durables
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-[#E6B85C]/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-[#E6B85C]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0D1B4C]">
                Flexibilité totale
              </h3>
              <p className="text-gray-600">
                Présentiel, domicile ou en ligne selon vos préférences
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-[#E6B85C]/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-[#E6B85C]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0D1B4C]">
                Suivi personnalisé
              </h3>
              <p className="text-gray-600">
                Accompagnement sur mesure pour votre progression
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B4C]">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-gray-600">
              Des témoignages authentiques de nos apprenants
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Fatima A.",
                role: "Étudiante",
                content: "Bright Insight a transformé mon niveau d'anglais. Les méthodes sont vraiment efficaces et les enseignants sont excellents. Je recommande vivement !",
                rating: 5,
              },
              {
                name: "Ahmed B.",
                role: "Professionnel",
                content: "Grâce à Bright Insight, j'ai pu améliorer mon anglais professionnel et obtenir une promotion. Le suivi personnalisé fait toute la différence.",
                rating: 5,
              },
              {
                name: "Sara C.",
                role: "Étudiante TOEFL",
                content: "La préparation TOEFL était parfaite. J'ai obtenu le score que je voulais et je peux maintenant postuler pour mes études à l'étranger.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar>
                      <AvatarFallback className="bg-[#E6B85C] text-[#0D1B4C]">
                        {testimonial.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-[#0D1B4C]">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#E6B85C] text-[#E6B85C]" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">&quot;{testimonial.content}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B4C]">
              Suivez-nous sur Instagram
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez notre quotidien et les moments de nos apprenants
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-[#E6B85C] to-[#d4a550] rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
              >
                <div className="text-center text-[#0D1B4C] p-4">
                  <BookOpen className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-xs">Post Instagram</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              className="border-2 border-[#0D1B4C] text-[#0D1B4C] hover:bg-[#0D1B4C] hover:text-white"
            >
              <a href="https://instagram.com/brightinsight" target="_blank" rel="noopener noreferrer">
                Voir plus sur Instagram
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0D1B4C] to-[#1a2d6b] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Prêt à booster votre anglais ?
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Réservez votre test de niveau gratuit dès aujourd&apos;hui et découvrez le programme adapté à vos besoins.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#E6B85C] hover:bg-[#E6B85C]/90 text-[#0D1B4C] font-semibold text-base px-8 py-6"
          >
            <Link href="/contact">Réserver un test gratuit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
