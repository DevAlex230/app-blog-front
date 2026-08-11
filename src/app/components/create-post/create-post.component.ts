import { Component, inject, signal} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {form, FormField} from '@angular/forms/signals';
import {CreatePost} from '@models/post.model';
import {PostService} from '@services/post.service';

@Component({
  selector: 'app-create-post',
  imports: [MatDialogModule, MatButton, MatFormFieldModule, MatIcon, MatInput, FormField],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss',
})
export class CreatePostComponent {

  private readonly postService = inject(PostService);

  postCreateModel = signal<CreatePost>({
    title:'',
    content: '',
    author: ''
  })

  createForm = form(this.postCreateModel);

  createPost(): void {
    console.log('test')
    console.log(this.createForm().value());
    this.postService.createPost(this.createForm().value()).subscribe();
  }
}
