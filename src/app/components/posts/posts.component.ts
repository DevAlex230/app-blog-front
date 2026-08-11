import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';

import { PostService } from '@services/post.service';

@Component({
  selector: 'app-posts',
  imports: [DatePipe],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  private readonly postService = inject(PostService);

  protected readonly posts = this.postService.postsResource;
}
