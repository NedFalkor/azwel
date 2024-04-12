interface LiveStreamViewer {
  id: number;
  userId: number;
  liveStreamId: number;
  viewerJoinTime: string;
  viewerLeaveTime: string | null;
  viewerStatus: 'watching' | 'paused' | 'commenting' | 'liking' | 'disliking' | 'left';
  viewerLikesCount: number;
  viewerDislikesCount: number;
  viewerCommentsCount: number;
}
