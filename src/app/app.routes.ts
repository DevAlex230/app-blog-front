import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main',
  },
  {
    path: 'main',
    loadComponent: () =>
      import('@app/main/main.component').then((m) => m.MainComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'posts',
      },
      {
        path: 'posts',
        loadComponent: () =>
          import('@app/posts/posts.component').then((m) => m.PostsComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'main',
  },
];
