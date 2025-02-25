import { getAllCategories, getAllTags } from '@/sanity/lib/queries';
import SearchBar from "./SearchBar";
import Link from "next/link";

export default async function Sidebar() {
  const categories = await getAllCategories();
  const tags = await getAllTags();

  return (
    <aside className="w-full lg:w-1/4 p-6 bg-white shadow-md rounded-lg">
      <SearchBar />


      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 border-b pb-2 mb-4">Catégories</h3>
        <ul className="text-gray-700 space-y-2">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <li key={index}>
                <Link href={`/category/${category.title}`} className="hover:text-primary">
                  {category.title}
                </Link>
              </li>
            ))
          ) : (
            <p>Aucune catégorie disponible.</p>
          )}
        </ul>
      </div>

    
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 border-b pb-2 mb-4">Tags populaires</h3>
        <div className="flex flex-wrap gap-2">
          {tags.length > 0 ? (
            tags.map((tag, index) => (
              <Link 
                key={index} 
                href={`/tag/${tag.name}`} 
                className="text-sm bg-gray-200 px-3 py-1 rounded-full hover:bg-primary hover:text-white"
              >
                #{tag.name}
              </Link>
            ))
          ) : (
            <p>Aucun tag disponible.</p>
          )}
        </div>
      </div>
    </aside>
  );
}
