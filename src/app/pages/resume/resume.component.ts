import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-resume',
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="stub-wrap">
      <mat-card appearance="outlined" class="stub-card">
        <mat-icon class="stub-icon">description</mat-icon>
        <h1>Resume</h1>
        <p class="article-body">
          A detailed resume covering my work in data platforms, streaming systems,
          and backend engineering is being prepared.
        </p>
        <p class="article-body muted">
          Check back soon, or reach out if you'd like a copy in the meantime.
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
export class ResumeComponent {}
