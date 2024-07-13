import { error } from "@sveltejs/kit";
import contentfulFetch from "$lib/contentful-fetch";
import type { LoadResult, Dog } from "../../interfaces/dog";

const query = `
{
	dogCollection {
    items {
      name,
        thumbnail {
        url(transform: {
          format: JPG
        })},
        sys {
            id
        },
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
