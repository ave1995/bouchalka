export interface LoadResult {
    dogs: Dog[];
  }
  
  export interface Dog {
    name: string;
    description: string;
    thumbnail: Thumbnail;
    slug: string;
    sys: Sys;
    photosCollection: PhotosCollection;
  }
  
  interface Sys {
    id: string;
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
  