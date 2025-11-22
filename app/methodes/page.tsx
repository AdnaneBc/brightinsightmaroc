import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ClipboardCheck,
  Users,
  Monitor,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

export default function MethodesPage() {
  const methods = [
    {
      icon: ClipboardCheck,
      title: "Évaluation & Personnalisation",
      description: "Chaque parcours commence par une évaluation complète de votre niveau et de vos objectifs. Nous créons ensuite un programme sur mesure adapté à vos besoins spécifiques, votre rythme d'apprentissage et vos contraintes.",
      details: [
        "Test de niveau détaillé",
        "Analyse de vos objectifs",
        "Plan d'apprentissage personnalisé",
        "Suivi régulier de la progression",
      ],
    },
    {
      icon: Users,
      title: "Immersion Progressive",
      description: "Plongez dans la langue anglaise grâce à des méthodes immersives : jeux de rôle, discussions authentiques, simulations professionnelles. Apprenez naturellement en contexte réel.",
      details: [
        "Jeux de rôle interactifs",
        "Discussions en groupe",
        "Simulations professionnelles",
        "Pratique conversationnelle intensive",
      ],
    },
    {
      icon: Monitor,
      title: "Plateformes E-Learning",
      description: "Accédez à une plateforme moderne avec des exercices interactifs, des vidéos pédagogiques, des podcasts et des ressources multimédias. Apprenez où et quand vous voulez.",
      details: [
        "Exercices interactifs en ligne",
        "Vidéos pédagogiques",
        "Podcasts et ressources audio",
        "Accès 24/7 à la plateforme",
      ],
    },
    {
      icon: TrendingUp,
      title: "Suivi & Motivation",
      description: "Restez motivé avec un suivi régulier de votre progression. Tests périodiques, rapports détaillés et feedback constructif vous permettent de mesurer vos améliorations et d'ajuster votre parcours.",
      details: [
        "Tests réguliers",
        "Rapports de progression détaillés",
        "Feedback personnalisé",
        "Objectifs clairs et mesurables",
      ],
    },
    {
      icon: Lightbulb,
      title: "Pratique Quotidienne",
      description: "Intégrez l'anglais dans votre quotidien avec nos conseils pratiques et nos ressources. Apprenez à créer des habitudes d'apprentissage durables pour progresser rapidement.",
      details: [
        "Conseils pratiques quotidiens",
        "Ressources complémentaires",
        "Techniques de mémorisation",
        "Stratégies d'apprentissage efficaces",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D1B4C] via-[#0D1B4C] to-[#1a2d6b] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Notre Approche Pédagogique
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Une méthode éprouvée qui combine personnalisation, immersion et technologie pour des résultats durables.
            </p>
          </div>
        </div>
      </section>

      {/* Methods Sections */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {methods.map((method, index) => {
              const Icon = method.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="h-64 md:h-80 bg-gradient-to-br from-[#E6B85C] to-[#d4a550] rounded-2xl flex items-center justify-center">
                      <Icon className="h-32 w-32 text-[#0D1B4C] opacity-80" />
                    </div>
                  </div>
                  <div className={`${isEven ? "lg:order-2" : "lg:order-1"} space-y-6`}>
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 bg-[#E6B85C]/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-8 w-8 text-[#E6B85C]" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B4C]">
                        {method.title}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {method.description}
                    </p>
                    <ul className="space-y-3">
                      {method.details.map((detail, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="h-6 w-6 bg-[#E6B85C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="h-2 w-2 bg-[#0D1B4C] rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B4C]">
            Prêt à découvrir notre méthode ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Réservez une séance d&apos;essai gratuite et expérimentez notre approche pédagogique unique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-6 bg-[#E6B85C] hover:bg-[#E6B85C]/90 text-[#0D1B4C] font-semibold rounded-md transition-colors"
            >
              Réserver une séance d&apos;essai
            </a>
            <a
              href="/sessions"
              className="inline-flex items-center justify-center px-8 py-6 border-2 border-[#0D1B4C] text-[#0D1B4C] hover:bg-[#0D1B4C] hover:text-white font-semibold rounded-md transition-colors"
            >
              Voir nos sessions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

