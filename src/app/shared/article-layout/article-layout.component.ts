import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

export interface TocItem {
  id: string;
  label: string;
}

/**
 * Shared blog article shell: hero header (eyebrow, title, subtitle, metadata
 * chips), an optional sticky table of contents, and a Material card body for
 * projected article content. Gives every blog page one consistent look.
 */
@Component({
  selector: 'app-article-layout',
  imports: [RouterLink, MatCardModule, MatChipsModule, MatIconModule],
  templateUrl: './article-layout.component.html',
  styleUrl: './article-layout.component.scss',
})
export class ArticleLayoutComponent {
  @Input({ required: true }) eyebrow = '';
  @Input({ required: true }) heading = '';
  @Input() subtitle = '';
  @Input() meta: string[] = [];
  @Input() toc: TocItem[] = [];
}
