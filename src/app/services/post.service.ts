import { HttpClient, HttpResourceRef, httpResource } from '@angular/common/http';
import { Service, Signal, inject } from '@angular/core';
import { Observable, tap} from 'rxjs';

import { environment } from '@environments/environment';
import { CreatePost, Post } from '@models/post.model';

@Service()
export class PostService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/posts`;

  readonly getPost = httpResource<Post[]>(() => ({
      url: this.baseUrl,
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
            url: `${this.baseUrl}/${postId}`,
            method: 'GET'
        };
    });
  }

  createPost(post: CreatePost): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post).pipe(
      tap(() => this.getPost.reload())
    );
  }
}
