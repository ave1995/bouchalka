import type { Dog } from "$interfaces/dog.js";
import contentfulFetch from "$lib/contentful-fetch";
import { error } from "@sveltejs/kit";

function generateDogQuery(id: string) {
  return `
        query dogEntryQuery {
    dog(id: "${id}") {
            name,
            photosCollection
                {
                    items {
                        url(transform: {
                            format: JPG
                            })}
                },
                description
            }
    }
    `;
}

export async function load({ params }): Promise<Dog> {
  const { slug } = params;
  // Fetch dog data from an API or database based on the slug
  const response = await contentfulFetch(generateDogQuery(slug));

  if (!response.ok) {
    throw error(404, {
      message: response.statusText,
    });
  }

  const { data } = await response.json();
  return data.dog;
}
