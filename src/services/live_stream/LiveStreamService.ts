import instance from '@/services/axiosConfig'

const API_URL = `${process.env.VUE_APP_API_BASE_URL}/live-streams/`

export class LiveStreamService {
  getAllLiveStreams () {
    return instance.get(API_URL)
  }

  getLiveStreamById (liveStreamId: number) {
    return instance.get(`${API_URL}${liveStreamId}/`)
  }

  createLiveStream (liveStreamData: any) {
    return instance.post(API_URL, liveStreamData)
  }

  updateLiveStream (liveStreamId: number, liveStreamData: any) {
    return instance.patch(`${API_URL}${liveStreamId}/`, liveStreamData)
  }

  deleteLiveStream (liveStreamId: number) {
    return instance.delete(`${API_URL}${liveStreamId}/`)
  }

  activateLiveStream (liveStreamId: number) {
    return instance.post(`${API_URL}${liveStreamId}/activate/`)
  }

  deactivateLiveStream (liveStreamId: number) {
    return instance.post(`${API_URL}${liveStreamId}/deactivate/`)
  }

  getLiveStreamsLiveNow () {
    return instance.get(`${API_URL}live_now/`)
  }
}

export const liveStreamService = new LiveStreamService()
