import { DatePipe } from '@angular/common';
import { HttpResourceRef } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '@models/post.model';
import { PostService } from '@services/post.service';

@Component({
  selector: 'app-posts',
  imports: [DatePipe],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  private readonly postService = inject(PostService);
  private readonly router = inject(Router);

  protected readonly posts: HttpResourceRef<Post[]> = this.postService.getPost;


  async routeToPostDetail(id: number): Promise<void> {
    await this.router.navigate([`/main/posts/${id}`]);
  }
}
