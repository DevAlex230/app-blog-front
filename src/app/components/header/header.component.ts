import { Component, inject, signal} from '@angular/core';
import { Router, RouterLink} from '@angular/router';
import {form } from '@angular/forms/signals';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  private readonly router = inject(Router);

  searchFormModel = signal<{title: string}>({
    title:'',
  });

  searchForm = form(this.searchFormModel);

  async onSearch(event: Event): Promise<void> {
    event.preventDefault();

    const title = this.searchForm.title().value().trim();

    console.log(title )
  }

  clearForm(): void {
    this.searchForm.title().reset('');
  }
}
