import { Component, inject, signal} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MatFormField, MatInput, MatLabel, MatSuffix} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {form, FormField} from '@angular/forms/signals';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatFormField, MatIcon, MatInput, MatLabel, MatSuffix, FormField, MatIconButton],
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
