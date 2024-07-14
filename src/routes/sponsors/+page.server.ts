import { error } from "@sveltejs/kit";
import contentfulFetch from "$lib/contentful-fetch";
import type { Sponsor, SponsorResult } from "$interfaces/sponsor";

const query = `
{
	sponsorCollection {
    items {
        name,
        thumbnail {
        url(transform: {
          format: JPG
            })
          },
        description
        }
    }
}
`;

export async function load(): Promise<SponsorResult> {
  const response = await contentfulFetch(query);

  if (!response.ok) {
    throw error(404, {
      message: response.statusText,
    });
  }

  const { data } = await response.json();
  const { items } = data.sponsorCollection;

  return {
    sponsors: items.map((e: Sponsor) => {
      return {
        ...e,
      };
    }),
  };
}
