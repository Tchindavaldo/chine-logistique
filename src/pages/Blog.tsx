import { Calendar, Clock, User, ArrowRight, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Blog() {
  const featuredPost = {
    title: 'Guide Complet 2024 : Tout Savoir sur l\'Import-Export Chine-Afrique',
    excerpt: 'Découvrez les meilleures pratiques, les réglementations douanières et les conseils d\'experts pour réussir vos importations depuis la Chine vers l\'Afrique.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200',
    category: 'Guides',
    date: '15 Janvier 2024',
    readTime: '8 min',
    author: 'Marie Kouassi',
  };

  const posts = [
    {
      title: 'Fret Maritime vs Fret Aérien : Comment Choisir ?',
      excerpt: 'Analysez les avantages et inconvénients de chaque mode de transport pour optimiser vos coûts et délais.',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=800',
      category: 'Logistique',
      date: '12 Janvier 2024',
      readTime: '5 min',
      author: 'Jean-Pierre Mbeki',
    },
    {
      title: 'Nouveaux Accords Douaniers 2024 : Ce qui Change',
      excerpt: 'Les dernières modifications réglementaires qui impactent vos expéditions internationales.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800',
      category: 'Réglementation',
      date: '10 Janvier 2024',
      readTime: '6 min',
      author: 'Fatou Diallo',
    },
    {
      title: 'Optimiser les Coûts de Transport : 10 Astuces d\'Experts',
      excerpt: 'Réduisez vos dépenses logistiques grâce à ces stratégies éprouvées par nos experts.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800',
      category: 'Conseils',
      date: '08 Janvier 2024',
      readTime: '7 min',
      author: 'Pierre Nguema',
    },
    {
      title: 'E-commerce : Gérer la Logistique de Vos Produits Chinois',
      excerpt: 'Solutions adaptées aux boutiques en ligne pour une gestion efficace des stocks et livraisons.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800',
      category: 'E-commerce',
      date: '05 Janvier 2024',
      readTime: '6 min',
      author: 'Aminata Touré',
    },
    {
      title: 'Tendances du Marché Africain 2024',
      excerpt: 'Analyse des secteurs porteurs et opportunités d\'import-export pour cette année.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
      category: 'Marché',
      date: '03 Janvier 2024',
      readTime: '9 min',
      author: 'Kwame Asante',
    },
    {
      title: 'Comment Éviter les Retards de Livraison ?',
      excerpt: 'Stratégies et bonnes pratiques pour garantir des délais de livraison respectés.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800',
      category: 'Guides',
      date: '01 Janvier 2024',
      readTime: '5 min',
      author: 'Marie Kouassi',
    },
  ];

  const categories = [
    { name: 'Tous', count: 24 },
    { name: 'Guides', count: 8 },
    { name: 'Logistique', count: 6 },
    { name: 'Réglementation', count: 4 },
    { name: 'E-commerce', count: 3 },
    { name: 'Marché', count: 3 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Blog & Actualités - ChineLogistique | Conseils Import-Export"
        description="Restez informé des dernières actualités logistiques, conseils d'experts, guides pratiques et tendances du marché import-export Chine-Afrique."
        keywords="blog logistique, actualités import-export, conseils transport chine, guides douane, tendances marché africain, e-commerce chine"
        canonical="https://chinelogistique.com/blog"
      />
      <Header />

      <section className="relative bg-red-600 text-white py-24 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <p className="text-sm font-medium">📰 Restez Informé</p>
            </div>
            <h1 className="text-6xl font-bold mb-4 leading-tight">
              Blog & Actualités
            </h1>
            <p className="text-2xl text-red-50 mb-6">Guides, conseils et tendances de la logistique internationale</p>
            <div className="flex items-center gap-2 text-red-100">
              <span className="font-medium">Home</span>
              <span>/</span>
              <span className="text-white font-semibold">Blog</span>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 -left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              ARTICLE VEDETTE
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative h-96 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{featuredPost.readTime} de lecture</span>
                  </div>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2 w-fit">
                  Lire l'Article
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar */}
              <div className="lg:w-1/4">
                <div className="bg-gray-50 rounded-2xl p-6 sticky top-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Catégories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-4 py-3 rounded-lg hover:bg-white hover:shadow-md transition flex items-center justify-between group"
                      >
                        <span className="font-medium text-gray-700 group-hover:text-red-600">
                          {category.name}
                        </span>
                        <span className="text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                      <TrendingUp size={20} className="text-red-600" />
                      Articles Populaires
                    </h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="font-semibold text-gray-900 mb-1 hover:text-red-600 cursor-pointer">
                          Guide des Incoterms 2024
                        </p>
                        <p className="text-gray-500 text-xs">12 000 vues</p>
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-gray-900 mb-1 hover:text-red-600 cursor-pointer">
                          Calculer les frais de douane
                        </p>
                        <p className="text-gray-500 text-xs">9 500 vues</p>
                      </div>
                      <div className="text-sm">
                        <p className="font-semibold text-gray-900 mb-1 hover:text-red-600 cursor-pointer">
                          Choisir son transporteur
                        </p>
                        <p className="text-gray-500 text-xs">8 200 vues</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Posts Grid */}
              <div className="lg:w-3/4">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">Derniers Articles</h2>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600">
                    <option>Plus récents</option>
                    <option>Plus populaires</option>
                    <option>Plus commentés</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {posts.map((post, index) => (
                    <article 
                      key={index}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur-sm text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-red-600 transition">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <div className="flex items-center gap-2">
                            <User size={14} />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock size={14} />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        <button className="text-red-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                          Lire la suite
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-2 mt-12">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    Précédent
                  </button>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg">1</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">2</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">3</button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    Suivant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Restez Informé des Dernières Actualités
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Recevez nos guides, conseils et analyses directement dans votre boîte mail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition whitespace-nowrap">
                S'abonner
              </button>
            </div>
            <p className="text-sm text-red-100 mt-4">
              ✓ Articles exclusifs • ✓ Guides pratiques • ✓ Pas de spam
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
