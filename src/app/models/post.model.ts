
export interface Post {
  id: number;
  category_id: number | null;
  title: string;
  content?: string;
  excerpt?: string;
  author: string;
  createdAt: string;
}

export interface CreatePost {
  category_id?: number;
  title: string;
  content: string;
  excerpt: string;
  author: string;
}
