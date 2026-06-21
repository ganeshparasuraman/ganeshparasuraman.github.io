import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="stub-wrap">
      <mat-card appearance="outlined" class="stub-card">
        <mat-icon class="stub-icon">explore_off</mat-icon>
        <h1>Page not found</h1>
        <p class="article-body muted">
          The page you're looking for doesn't exist or has moved.
        </p>
        <a mat-flat-button routerLink="/">
          <mat-icon>home</mat-icon>
          Back to home
        </a>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .stub-wrap {
        width: min(100%, 620px);
        margin: 0 auto;
        padding: clamp(3rem, 8vw, 6rem) 1.5rem;
      }
      .stub-card {
        border-radius: 24px;
        padding: 3rem 2rem;
        text-align: center;
      }
      .stub-icon {
        width: 56px;
        height: 56px;
        font-size: 56px;
        color: var(--mat-sys-primary);
      }
      h1 {
        margin: 1rem 0;
      }
      .muted {
        color: var(--mat-sys-on-surface-variant);
        margin-bottom: 1.5rem;
      }
    `,
  ],
})
export class NotFoundComponent {}
