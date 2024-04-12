interface Podcast {
  podcastId: number;
  podcastTitle: string;
  podcastDescription: string;
  podcastCreatorId: number | null;
  podcastCoverImage: string | null;
  podcastPublishDate: string;
  podcastCategoryIds: number[];
}
