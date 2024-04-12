import instance from '@/services/axiosConfig'

const API_URL = `${process.env.VUE_APP_API_BASE_URL}/messages/`

export class MessageService {
  // Récupérer tous les messages liés à l'utilisateur authentifié
  getMessages () {
    return instance.get(API_URL)
  }

  // Récupérer un message spécifique par son ID
  getMessageById (messageId: number) {
    return instance.get(`${API_URL}${messageId}/`)
  }

  // Créer un nouveau message
  createMessage (messageData: any) {
    return instance.post(API_URL, messageData)
  }

  // Mettre à jour un message existant
  updateMessage (messageId: number, messageData: any) {
    return instance.patch(`${API_URL}${messageId}/`, messageData)
  }

  // Supprimer un message
  deleteMessage (messageId: number) {
    return instance.delete(`${API_URL}${messageId}/`)
  }
}

// Exporter l'instance du service pour l'utiliser dans les composants
export const messageService = new MessageService()
