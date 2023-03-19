export type ItemObj = {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
};

type Snippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    [key: string]: {
      url: string;
      width: string;
      height: string;
    };
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
};

type Statistics = {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
};

type SearchResponse = {
  kind: string;
  etag: string;
  pageInfo: { totalResults: number; resultsPerPage: number };
  items: ItemObj[];
};

export default interface SearchResponseModel {
  searchResponse: SearchResponse;
  getSearchItems(query: string): Promise<void>;
}
