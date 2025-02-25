import { getArticleBySlug } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={urlFor(value).width(800).url()}
        alt={value.alt || 'Image'}
        className="w-full object-cover rounded-lg"
      />
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold my-4 text-gray-800">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold my-3 text-gray-700">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold my-2 text-gray-600">{children}</h3>,
    normal: ({ children }) => <p className="text-lg my-2 text-gray-700 text-justify">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600 bg-gray-100 p-3">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => <ul className="list-disc pl-6 text-gray-700 space-y-1">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 text-gray-700 space-y-1">{children}</ol>,
    li: ({ children }) => <li className="ml-4">{children}</li>,
    code: ({ children }) => (
      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
        <code className="font-mono">{children}</code>
      </pre>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {children}
      </a>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-lg text-gray-700 text-justify">{children}</li>,
    number: ({ children }) => <li className="text-lg text-gray-700 text-justify">{children}</li>,
  },
  types: {
    table: ({ value }) => (
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              {value.rows[0].cells.map((cell, index) => (
                <th key={index} className="border border-gray-300 p-2 text-left">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {value.rows.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex} className="odd:bg-gray-50">
                {row.cells.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-300 p-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
};


export default async function postPage({ params }) {
  const { slug } = params;
  const post = await getArticleBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 lg:p-12 bg-white shadow-lg rounded-lg mt-10">
        <div className="relative w-full h-80 overflow-hidden rounded-t-lg">
          <img
            src={post.imageUrl ? urlFor(post.imageUrl).width(1200).url() : '/default-image.jpg'}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Écrit par {post.author} • {new Date(post.publishedAt).toLocaleDateString()}
          </p>
        </div>
        <div className="prose max-w-none px-6">
          <PortableText value={post.body} components={myPortableTextComponents} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
