import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

import ArticleCard from '@/components/ArticleCard';

import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Contact from '@/components/Contact';
import { getAllPosts } from '@/sanity/lib/queries';

export default async function HomePage() {
  const articles = await getAllPosts(); 

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto p-6 md:flex">
        <div className="w-full flex flex-col items-center font-bold">
          <h1 className="text-primary p-6 text-2xl pb-8">
      Nos dernières recettes
      </h1>
        
      <main className="w-full grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 lg:gap-12 gap-6">
  {articles.length > 0 ? (
    articles.map((article) => (
      <ArticleCard
        key={article.slug.current}
        title={article.title}
        description={article.description}
        imageUrl={article.mainImage}
        slug={article.slug.current}
        categories={article.categories}
      />
    ))
  ) : (
    <p className="text-center">Aucun article disponible.</p>
  )}
 
</main>
</div>
   
      </div>
      <Newsletter />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
