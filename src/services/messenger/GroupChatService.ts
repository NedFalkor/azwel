// Assurez-vous que l'URL de base de l'API est correctement définie
import instance from '@/services/axiosConfig'

const API_URL = `${process.env.VUE_APP_API_BASE_URL}/group-chats/`

export class GroupChatService {
  // Récupérer tous les groupes de chat liés à l'utilisateur authentifié
  getGroupChats () {
    return instance.get(API_URL)
  }

  // Récupérer un groupe de chat spécifique par son ID
  getGroupChatById (groupChatId: number) {
    return instance.get(`${API_URL}${groupChatId}/`)
  }

  // Créer un nouveau groupe de chat
  createGroupChat (groupChatData: any) {
    return instance.post(API_URL, groupChatData)
  }

  // Mettre à jour un groupe de chat existant
  updateGroupChat (groupChatId: number, groupChatData: any) {
    return instance.patch(`${API_URL}${groupChatId}/`, groupChatData)
  }

  // Supprimer un groupe de chat
  deleteGroupChat (groupChatId: number) {
    return instance.delete(`${API_URL}${groupChatId}/`)
  }

  // Ajouter un message à un groupe de chat
  addMessageToGroupChat (groupChatId: number, messageId: number) {
    return instance.post(`${API_URL}${groupChatId}/add_message/`, { message_id: messageId })
  }

  // Retirer un message d'un groupe de chat
  removeMessageFromGroupChat (groupChatId: number, messageId: number) {
    return instance.post(`${API_URL}${groupChatId}/remove_message/`, { message_id: messageId })
  }
}

// Exporter l'instance du service pour l'utiliser dans les composants
export const groupChatService = new GroupChatService()
