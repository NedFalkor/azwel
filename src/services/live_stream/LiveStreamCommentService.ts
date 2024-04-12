// Assurez-vous que l'URL de base de l'API est correctement définie
import instance from '@/services/axiosConfig'

const API_URL = `${process.env.VUE_APP_API_BASE_URL}/live-stream-comments/`

export class LiveStreamCommentService {
  // Liste tous les commentaires pour un livestream donné
  getCommentsForLiveStream (liveStreamId: number) {
    return instance.get(API_URL, { params: { live_stream: liveStreamId } })
  }

  // Crée un nouveau commentaire sur un livestream
  createCommentForLiveStream (liveStreamId: number, commentText: string) {
    const commentData = {
      live_stream: liveStreamId,
      live_stream_comment_text: commentText
    }
    return instance.post(API_URL, commentData)
  }

  deleteComment (commentId: number) {
    return instance.delete(`${API_URL}${commentId}/`)
  }
}

export const liveStreamCommentService = new LiveStreamCommentService()
