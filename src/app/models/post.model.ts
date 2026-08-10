
export interface Post {
  id: number;
  category_id: number | null;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

export interface CreatePost {
  category_id?: number;
  title: string;
  content: string;
  author: string;
}
