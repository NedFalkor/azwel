interface Message {
  messageId: number;
  messageSenderId: number;
  messageRecipientId: number;
  messageContent: string;
  messageSentAt: string;
  messageReceivedAt: string | null;
  messageType: 'chat' | 'mail';
}
