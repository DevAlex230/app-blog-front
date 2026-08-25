
export interface Post {
  id: number;
  category_id: number | null;
  title: string;
  content?: string;
  excerpt?: string;
  author: string;
  createdAt: string;
  preview_img: string;
  main_img: string;
}

export interface CreatePost {
  category_id?: number;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  preview_img: string,
  main_img: string;
}
