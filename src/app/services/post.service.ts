import { HttpClient, HttpResourceRef, httpResource } from '@angular/common/http';
import { Service, Signal, inject, signal} from '@angular/core';
import { Observable, tap} from 'rxjs';

import { environment } from '@environments/environment';
import { CreatePost, Post, PostCategory} from '@models/post.model';

@Service()
export class PostService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  readonly selectedCategory = signal<string | null>(null);

  readonly getPost = httpResource<Post[]>(
    () => {
      const slug = this.selectedCategory();        // ← читання = залежність ресурсу
      return {
        url: `${this.baseUrl}/posts`,
        method: 'GET',
        params: slug ? { category: slug } : undefined,
      };
    },
    { defaultValue: [] },
  );

  readonly getPostCategory = httpResource<PostCategory[]>(() => ({
      url: `${this.baseUrl}/categories`,
      method: 'GET',
    }),
    {
      defaultValue: []
    }
  );



  getPostById(id: Signal<number | undefined>): HttpResourceRef<Post | undefined> {
    return httpResource<Post>(() => {
      const postId = id();
      return postId === undefined ? undefined
        : {
            url: `${this.baseUrl}/posts/${postId}`,
            method: 'GET'
        };
    });
  }

  createPost(post: CreatePost): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}/posts`, post).pipe(
      tap(() => this.getPost.reload())
    );
  }
}
