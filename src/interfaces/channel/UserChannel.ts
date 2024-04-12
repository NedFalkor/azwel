interface UserChannel {
  userChannelId: number;
  liveStreamUserId: number;
  channelName: string;
  channelCategoryId: number;
  channelDescription: string | null;
  channelThumbnail: string | null;
  channelCreatedAt: string;
  channelUpdatedAt: string;
  channelSubscribersCount: number;
  liveStreamIds: number[];
  channelIsActive: boolean;
}
