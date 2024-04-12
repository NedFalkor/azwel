interface PodcastEpisode {
  podcastEpisodeId: number;
  podcastId: number;
  podcastEpisodeNumber: number;
  podcastEpisodePlayCount: number;
  podcastEpisodeTitle: string;
  podcastEpisodeDescription: string;
  podcastEpisodeLength: string;
  explicit: boolean;
  podcastEpisodeAudioFile: string;
  podcastEpisodePublishDate: string;
  podcastEpisodeCreatorId: number | null;
  podcastEpisodeStatus: 'draft' | 'published' | 'archived';
}
