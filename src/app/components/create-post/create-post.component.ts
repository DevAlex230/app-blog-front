import { Component, inject, signal, OnDestroy} from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {form, FormField} from '@angular/forms/signals';
import {Subject, takeUntil} from 'rxjs';
import {CreatePost, Post} from '@models/post.model';
import {PostService} from '@services/post.service';

@Component({
  selector: 'app-create-post',
  imports: [MatDialogModule, MatButton, MatFormFieldModule, MatIcon, MatInput, FormField],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
})
export class CreatePostComponent implements OnDestroy {

  private readonly postService = inject(PostService);
  private readonly dialogRef = inject<MatDialogRef<CreatePostComponent, Post>>(MatDialogRef);
  private readonly destroy$ = new Subject<void>();

  postCreateModel = signal<CreatePost>({
    title:'',
    content: '',
    excerpt: '',
    author: ''
  })

  createForm = form(this.postCreateModel);

  createPost(): void {
    this.postService.createPost(this.createForm().value())
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        if (data) {
          this.dialogRef.close(data);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
