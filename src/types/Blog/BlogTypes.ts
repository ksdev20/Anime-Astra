export interface TocObject {
  text: string;
  link: string;
}

export interface StreamingPlatform {
  platform: string;
  link: string;
  message: string;
}

export interface PgObject {
  imdb: string;
  message: string;
}

export interface BigTextObj {
  heading: string;
  content: string;
}

export interface AnimeObject {
  id: string;
  title: {
    english: string;
    romaji: string;
  } | string;
  img: string;
  link: string;
  ratings: {
    imdb: {
      link: string;
      rating?: string;
    };
    mal: {
      link: string;
      rating?: string;
    };
  };
  seasonMetrics: {
    seasons: number;
    episodes: number;
  };
  languages: {
    sub: string[];
    dub: string[];
  };
  streaming: StreamingPlatform[];
  justwatch: string;
  releaseYear: number;
  genres: string[];
  pg: PgObject[];
  bigText: BigTextObj[];
}

export interface Blog {
  noImages?: boolean;
  title: string;
  description: string;
  keywords: string;
  url: string;
  imageUrl: string;
  subTitle: string;
  author: string;
  date: string;
  img: string;
  imgLarge?: string;
  categoryList: string[];
  slug: string;
  readMinutes: number;
  toc: TocObject[];
  nextPost: string;
  previousPost: string;
  animeObjects: AnimeObject[];
}
