import { client } from '@/sanity/lib/client';


export async function getAllPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug { current },
    description,
    tags[]-> { title },
    readingTime,
    "authorName": author->name,
    "mainImage": mainImage.asset->url,
    "categories": categories[]->{title},
    publishedAt,
    body
  }`;

  try {
    return await client.fetch(query);
  } catch (error) {
   
    return [];
  }
}


export async function getAllCategories() {
  const query = `*[_type == "category"]{ title }`;

  try {
    return await client.fetch(query);
  } catch (error) {
 
    return [];
  }
}


export async function getAllTags() {
  const query = `*[_type == "tag"]{ name }`;

  try {
    return await client.fetch(query);
  } catch (error) {
   
    return [];
  }
}

export async function getArticleBySlug(slug) {
    return client.fetch(
     `*[_type == "post" && slug.current == $slug][0]{
    title,
    description,
    body,
    "imageUrl": mainImage.asset->url,
   "author": author->name,
"publishedAt": publishedAt,
queries,
    "categories": categories[]->title,
    readingTime
  }`,
      { slug }
    );
  }