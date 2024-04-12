interface Category {
  categoryId: number;
  categoryName: string;
  categoryDescription: string | null;
  categoryCreatedAt: string;
  categoryUpdatedAt: string;
  categoryIcon: string | null;
}

type CategoryId = number;
