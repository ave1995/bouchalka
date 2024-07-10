import { error } from "@sveltejs/kit";
import contentfulFetch from "$lib/contentful-fetch";

const query = `
{
	dogCollection {
    items {
      name,
      description,
        thumbnail {
        url(transform: {
          format: JPG
        })},
        slug,
        _id,
        photosCollection
        {
            items {
                url(transform: {
                    format: JPG
                    })}
            }
        }
    }
  }
`;

export async function load(): Promise<LoadResult> {
  const response = await contentfulFetch(query);

  if (!response.ok) {
    throw error(404, {
      message: response.statusText,
    });
  }

  const { data } = await response.json();
  const { items } = data.dogCollection;

  return {
    dogs: items.map((e: Dog) => {
      return {
        ...e,
      };
    }),
  };
}

export interface LoadResult {
  dogs: Dog[];
}

export interface Dog {
  name: string;
  description: string;
  thumbnail: Thumbnail;
  slug: string;
  _id: string;
  photosCollection: PhotosCollection;
}

interface Thumbnail {
  url: string;
}

interface PhotosCollection {
  items: Photo[];
}

interface Photo {
  url: string;
}
