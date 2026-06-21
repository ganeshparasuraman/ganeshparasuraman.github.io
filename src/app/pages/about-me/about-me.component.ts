import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about-me',
  imports: [MatCardModule, MatIconModule],
  template: `
    <div class="stub-wrap">
      <mat-card appearance="outlined" class="stub-card">
        <mat-icon class="stub-icon">person</mat-icon>
        <h1>About Me</h1>
        <p class="article-body">
          Hi, I'm <strong>Ganesh Parasuraman</strong> — a software and data platform
          engineer. I write about metadata-driven data platforms, healthcare data
          engineering, and AI-native architecture.
        </p>
        <p class="article-body muted">
          This page is a placeholder — a fuller bio and background are on the way.
        </p>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .stub-wrap {
        width: min(100%, 760px);
        margin: 0 auto;
        padding: clamp(2.5rem, 6vw, 4.5rem) 1.5rem;
      }
      .stub-card {
        border-radius: 24px;
        padding: 2.5rem 2rem;
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
        letter-spacing: -0.02em;
      }
      .muted {
        color: var(--mat-sys-on-surface-variant);
      }
    `,
  ],
})
export class AboutMeComponent {}
