import { DatePipe, NgOptimizedImage} from '@angular/common';
import { HttpResourceRef } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Post, PostCategory} from '@models/post.model';
import { PostService } from '@services/post.service';
import {MatChip, MatChipSet} from '@angular/material/chips';

@Component({
  selector: 'app-posts',
  imports: [DatePipe, NgOptimizedImage, MatChipSet, MatChip],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  private readonly postService = inject(PostService);
  private readonly router = inject(Router);

  protected readonly posts: HttpResourceRef<Post[]> = this.postService.getPost;
  protected readonly categories: HttpResourceRef<PostCategory[]> = this.postService.getPostCategory;
  protected readonly selectedCategory = this.postService.selectedCategory;



  async routeToPostDetail(id: number): Promise<void> {
    await this.router.navigate([`/main/posts/${id}`]);
  }

  selectPostCategory(slug: string) {
    this.selectedCategory.set(slug);
  }
}
