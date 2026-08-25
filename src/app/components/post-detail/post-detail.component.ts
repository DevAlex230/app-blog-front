import { DatePipe, NgOptimizedImage} from '@angular/common';
import { HttpResourceRef } from '@angular/common/http';
import { Component, inject, input, numberAttribute } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Post } from '@models/post.model';
import { PostService } from '@services/post.service';

@Component({
  selector: 'app-post-detail',
  imports: [DatePipe, RouterLink, NgOptimizedImage],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent {
  private readonly postService = inject(PostService);

  // Прив'язується до параметра маршруту :id завдяки withComponentInputBinding().
  readonly id = input.required<number, string>({ transform: numberAttribute });

  protected readonly post: HttpResourceRef<Post | undefined> =
    this.postService.getPostById(this.id);
}
