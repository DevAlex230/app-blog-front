import { Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {CreatePostComponent} from '@components/create-post/create-post.component';
import {HeaderComponent} from '@components/header/header.component';
import {FooterComponent} from '@components/footer/footer.component';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, MatButton, HeaderComponent, FooterComponent],
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

