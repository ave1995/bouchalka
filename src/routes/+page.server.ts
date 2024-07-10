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
        })
    }
    }
  }
}
`;

export async function load() {
  const response = await contentfulFetch(query);

  if (!response.ok) {
    throw error(404, {
      message: response.statusText,
    });
  }

  const { data } = await response.json();
  const { items } = data.dogCollection;

  return {
    dogs: items.map((e: any) => {
      return {
        ...e,
      };
    }),
  };
}
