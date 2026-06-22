import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ArticleLayoutComponent, TocItem } from '../../shared/article-layout/article-layout.component';

@Component({
  selector: 'app-dto-blog-part2',
  imports: [ArticleLayoutComponent, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './dto-blog-part2.component.html',
  styleUrl: './dto-blog-part2.component.scss',
})
export class DtoBlogPart2Component {
  readonly toc: TocItem[] = [
    { id: 'context', label: 'Context' },
    { id: 'ltap', label: 'LTAP' },
    { id: 'compare', label: 'HTAP vs LTAP' },
    { id: 'dto-impact', label: 'DTO Impact' },
    { id: 'stack', label: 'New Stack' },
    { id: 'verdict', label: 'Verdict' },
  ];
}
