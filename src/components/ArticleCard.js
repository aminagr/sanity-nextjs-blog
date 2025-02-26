import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

const ArticleCard = ({ title, description, imageUrl, slug, categories }) => {
  const category = categories && categories[0];
  const imageSrc = imageUrl ? urlFor(imageUrl).width(600).url() : '/default-image.jpg';

  return (
    <Link href={`/articles/${slug}`} className="block">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
        <img src={imageSrc} alt={title} className="w-full h-56 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mb-4">{description}</p>
          {category && (
            <span className="text-primary font-semibold hover:underline">
              Lire plus →
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
