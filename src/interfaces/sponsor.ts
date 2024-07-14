import type { Thumbnail } from "./dog";

export interface SponsorResult {
    sponsors: Sponsor[];
  }

export interface Sponsor {
  name: string;
  thumbnail: Thumbnail;
  description: string;
}
