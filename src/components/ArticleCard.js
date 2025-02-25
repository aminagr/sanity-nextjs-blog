import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

const ArticleCard = ({ title, description, imageUrl, slug, categories }) => {
  const category = categories && categories[0];
  const imageSrc = imageUrl ? urlFor(imageUrl).width(600).url() : '/default-image.jpg';

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={imageSrc} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        {category && (
        <Link href={`/articles/${slug}`} className="text-primary font-semibold hover:underline">
            Lire plus →
          </Link>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;