import { Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {CreatePostComponent} from '@components/create-post/create-post.component';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, MatButton],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {

  private dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(CreatePostComponent, {
      autoFocus: false,
      width: '95vw',
      maxWidth: 800,
    })
  }
}

