import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "Pourquoi apprendre l'anglais aujourd'hui ?",
      excerpt: "Dans un monde de plus en plus connecté, l'anglais est devenu la langue universelle du business, de la technologie et de la culture. Découvrez pourquoi maîtriser l'anglais est un investissement essentiel pour votre avenir professionnel et personnel.",
      category: "Conseils",
      date: "15 Janvier 2025",
      image: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Comment améliorer son accent en anglais ?",
      excerpt: "L'accent est souvent l'un des défis les plus difficiles à surmonter. Découvrez des techniques pratiques et des exercices efficaces pour améliorer votre prononciation et gagner en confiance à l'oral.",
      category: "Techniques",
      date: "10 Janvier 2025",
      image: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Erreurs fréquentes des francophones en anglais",
      excerpt: "Les francophones font souvent les mêmes erreurs lorsqu'ils apprennent l'anglais. Identifiez ces pièges courants et apprenez à les éviter pour progresser plus rapidement.",
      category: "Grammaire",
      date: "5 Janvier 2025",
      image: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      title: "Comment progresser en Business English ?",
      excerpt: "L'anglais professionnel nécessite des compétences spécifiques. Apprenez les stratégies et les ressources pour développer votre Business English et exceller dans votre carrière.",
      category: "Business",
      date: "1 Janvier 2025",
      image: "from-orange-500 to-orange-600",
    },
    {
      id: 5,
      title: "Les meilleures ressources pour apprendre l'anglais en ligne",
      excerpt: "Explorez une sélection des meilleures plateformes, applications et ressources en ligne pour compléter votre apprentissage de l'anglais et progresser à votre rythme.",
      category: "Ressources",
      date: "28 Décembre 2024",
      image: "from-red-500 to-red-600",
    },
    {
      id: 6,
      title: "Préparer le TOEFL : guide complet",
      excerpt: "Tout ce que vous devez savoir pour réussir le TOEFL. Stratégies de préparation, structure de l'examen, conseils pratiques et ressources pour obtenir le score que vous visez.",
      category: "Examens",
      date: "20 Décembre 2024",
      image: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D1B4C] via-[#0D1B4C] to-[#1a2d6b] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Blog Bright Insight
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Conseils, astuces et ressources pour progresser en anglais
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="border-2 hover:border-[#E6B85C] transition-all hover:shadow-xl group overflow-hidden cursor-pointer"
              >
                <Link href={`/blog/${article.id}`}>
                  <div className={`h-48 bg-gradient-to-br ${article.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                    <Badge className="absolute top-4 left-4 bg-white/90 text-[#0D1B4C] hover:bg-white">
                      {article.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <CardTitle className="text-[#0D1B4C] group-hover:text-[#E6B85C] transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                    <div className="mt-4 flex items-center text-[#E6B85C] font-medium group-hover:translate-x-2 transition-transform">
                      Lire la suite
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-20 bg-[#F5F7FA]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6 bg-white p-8 md:p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B4C]">
              Restez informé
            </h2>
            <p className="text-lg text-gray-600">
              Recevez nos derniers articles et conseils directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#E6B85C]"
              />
              <button className="px-8 py-3 bg-[#E6B85C] hover:bg-[#E6B85C]/90 text-[#0D1B4C] font-semibold rounded-md transition-colors">
                S&apos;abonner
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

