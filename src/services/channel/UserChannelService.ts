import instance from '@/services/axiosConfig'

const API_URL = `${process.env.VUE_APP_API_BASE_URL}/user-channels/`

export class UserChannelService {
  getAllUserChannels () {
    return instance.get(API_URL)
  }

  getUserChannelById (channelId: number) {
    return instance.get(`${API_URL}${channelId}/`)
  }

  createUserChannel (channelData: any) {
    return instance.post(API_URL, channelData)
  }

  updateUserChannel (channelId: number, channelData: any) {
    return instance.patch(`${API_URL}${channelId}/`, channelData)
  }

  deleteUserChannel (channelId: number) {
    return instance.delete(`${API_URL}${channelId}/`)
  }

  subscribeToChannel (channelId: number) {
    return instance.post(`${API_URL}${channelId}/subscribe/`)
  }

  unsubscribeFromChannel (channelId: number) {
    return instance.post(`${API_URL}${channelId}/unsubscribe/`)
  }
}

export const userChannelService = new UserChannelService()
