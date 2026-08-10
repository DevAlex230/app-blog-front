import { HttpInterceptorFn } from '@angular/common/http';

import { environment } from '@environments/environment';

/**
 * Підставляє спільні заголовки в кожен запит до нашого API.
 * Аналог defaultHeaders з HttpService на проєкті front, але на функціональному
 * інтерсепторі — старий HTTP_INTERCEPTORS у standalone-застосунку не потрібен.
 */
export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  // Сторонні домени не чіпаємо, щоб не світити свої заголовки назовні.
  if (!req.url.startsWith(environment.apiUrl)) {
    return next(req);
  }

  const headers: Record<string, string> = {
    Accept: 'application/json',
    'Content-Language': 'uk',
    'Version-Client': environment.version,
  };

  // Content-Type має сенс лише там, де є тіло запиту.
  if (req.body !== null && req.body !== undefined) {
    headers['Content-Type'] = 'application/json';
  }

  return next(req.clone({ setHeaders: headers }));
};
