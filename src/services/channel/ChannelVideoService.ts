import instance from '@/services/axiosConfig'

const API_URL = `${process.env.VUE_APP_API_BASE_URL}/channel-videos/`

export default {
  getChannelVideos () {
    return instance.get(API_URL)
  },

  getChannelVideoById (videoId: number) {
    return instance.get(`${API_URL}${videoId}/`)
  },

  createChannelVideo (videoData: any) {
    return instance.post(API_URL, videoData)
  },

  updateChannelVideo (videoId: number, videoData: any) {
    return instance.patch(`${API_URL}${videoId}/`, videoData)
  },

  deleteChannelVideo (videoId: number) {
    return instance.delete(`${API_URL}${videoId}/`)
  },

  likeChannelVideo (videoId: number) {
    return instance.post(`${API_URL}${videoId}/like/`)
  },

  dislikeChannelVideo (videoId: number) {
    return instance.post(`${API_URL}${videoId}/dislike/`)
  },

  unlikeChannelVideo (videoId: number) {
    return instance.post(`${API_URL}${videoId}/unlike/`)
  },

  undislikeChannelVideo (videoId: number) {
    return instance.post(`${API_URL}${videoId}/undislike/`)
  },

  shareChannelVideo (videoId: number) {
    // Implementez cette méthode selon la manière dont le partage doit fonctionner dans votre application
    console.log('Fonctionnalité de partage non implémentée.')
  }
}
