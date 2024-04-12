interface LiveStream {
  liveStreamId: number;
  liveStreamTitle: string;
  liveStreamData: string;
  liveStreamThumbnail: string | null;
  liveStreamDescription: string;
  liveStreamLikes: number;
  liveStreamDislikes: number;
  liveStreamStartTime: string;
  liveStreamEndTime: string | null;
  liveStreamIsActive: boolean;
}
