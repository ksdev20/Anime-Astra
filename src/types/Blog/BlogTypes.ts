export interface TocObject {
  text: String;
  link: String;
}

export interface StreamingPlatform {
  platform: String;
  link: String;
  message: String;
}

export interface PgObject {
  imdb: String;
  message: String;
}

export interface BigTextObj {
  heading: String;
  content: String;
}

export interface AnimeObject {
  id: String;
  title: {
    english: String;
    romaji: String;
  } | String;
  img: String;
  link: String;
  ratings: {
    imdb: {
      link: String;
      rating?: String;
    };
    mal: {
      link: String;
      rating?: String;
    };
  };
  seasonMetrics: {
    seasons: number;
    episodes: number;
  };
  languages: {
    sub: String[];
    dub: String[];
  };
  streaming: StreamingPlatform[];
  justwatch: String;
  releaseYear: number;
  genres: String[];
  pg: PgObject[];
  bigText: BigTextObj[];
}

export interface Blog {
  title: String;
  description: String;
  keywords: String;
  url: String;
  imageUrl: String;
  subTitle: String;
  author: String;
  date: String;
  img: String;
  imgLarge?: String;
  categoryList: String[];
  slug: String;
  readMinutes: number;
  toc: TocObject[];
  nextPost: String;
  previousPost: String;
  animeObjects: AnimeObject[];
}
