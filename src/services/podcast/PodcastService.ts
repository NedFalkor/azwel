import instance from '@/services/axiosConfig'

const API_URL = `${process.env.VUE_APP_API_BASE_URL}/podcasts/`
const EPISODES_API_URL = (podcastId: number): string => `${API_URL}${podcastId}/episodes/`

export class PodcastService {
  getPodcasts () {
    return instance.get(API_URL)
  }

  getPodcastById (podcastId: number) {
    return instance.get(`${API_URL}${podcastId}/`)
  }

  createPodcast (podcastData: any) {
    return instance.post(API_URL, podcastData)
  }

  updatePodcast (podcastId: number, podcastData: any) {
    return instance.patch(`${API_URL}${podcastId}/`, podcastData)
  }

  deletePodcast (podcastId: number) {
    return instance.delete(`${API_URL}${podcastId}/`)
  }

  addEpisodeToPodcast (podcastId: number, episodeData: any) {
    return instance.post(EPISODES_API_URL(podcastId), episodeData)
  }

  getEpisodesByPodcast (podcastId: number) {
    return instance.get(EPISODES_API_URL(podcastId))
  }

  updatePodcastEpisode (podcastId: number, episodeId: number, episodeData: any) {
    return instance.patch(`${EPISODES_API_URL(podcastId)}${episodeId}/`, episodeData)
  }

  deletePodcastEpisode (podcastId: number, episodeId: number) {
    return instance.delete(`${EPISODES_API_URL(podcastId)}${episodeId}/`)
  }
}

export const podcastService = new PodcastService()
