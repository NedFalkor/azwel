interface ChannelVideo {
  channelId: number;
  videoTitle: string;
  videoData: string;
  videoThumbnail: string | null;
  videoDescription: string;
  videoLikes: number;
  videoDislikes: number;
  videoUploadTime: string;
  videoViews: number;
  videoCategories: CategoryId[];
  videoFile: string | null;
  videoDuration: string;
  explicit: boolean;
}
