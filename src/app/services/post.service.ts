import { HttpClient, httpResource } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Observable, tap} from 'rxjs';

import { environment } from '@environments/environment';
import { CreatePost, Post } from '@models/post.model';

@Service()
export class PostService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/posts`;

  readonly postsResource = httpResource<Post[]>(() => ({
      url: this.baseUrl,
      method: 'GET',
      }),
      {
        defaultValue: []
      }
    );

  createPost(post: CreatePost): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post).pipe(
      tap(() => this.postsResource.reload())
    );
  }
}
