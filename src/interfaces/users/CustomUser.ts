interface CustomUser {
  userId: number;
  username: string | null;
  email: string;
  isStaff: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
