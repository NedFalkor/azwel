// Assurez-vous que l'URL de base de l'API est correctement définie
import instance from '@/services/axiosConfig'

const API_URL = `${process.env.VUE_APP_API_BASE_URL}/live-stream-viewers/`

export class LiveStreamViewerService {
  // Rejoindre un livestream
  joinLiveStream (viewerId: number) {
    return instance.post(`${API_URL}${viewerId}/join/`)
  }

  // Quitter un livestream
  leaveLiveStream (viewerId: number) {
    return instance.post(`${API_URL}${viewerId}/leave/`)
  }

  // Mettre un livestream en pause
  pauseLiveStream (viewerId: number) {
    return instance.post(`${API_URL}${viewerId}/pause/`)
  }

  // Aimer un livestream
  likeLiveStream (viewerId: number) {
    return instance.post(`${API_URL}${viewerId}/like/`)
  }

  // Ne pas aimer un livestream
  dislikeLiveStream (viewerId: number) {
    return instance.post(`${API_URL}${viewerId}/dislike/`)
  }
}

// Exporter l'instance du service pour l'utiliser dans les composants
export const liveStreamViewerService = new LiveStreamViewerService()
