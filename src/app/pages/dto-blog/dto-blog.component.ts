import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ArticleLayoutComponent, TocItem } from '../../shared/article-layout/article-layout.component';

@Component({
  selector: 'app-dto-blog',
  imports: [ArticleLayoutComponent, MatButtonModule, MatIconModule],
  templateUrl: './dto-blog.component.html',
  styleUrl: './dto-blog.component.scss',
})
export class DtoBlogComponent {
  readonly toc: TocItem[] = [
    { id: 'intro', label: 'Intro' },
    { id: 'gap', label: 'The Gap' },
    { id: 'what', label: 'What Is DTO' },
    { id: 'pattern', label: 'The Pattern' },
    { id: 'questions', label: '3 Questions' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'charter', label: 'New Charter' },
  ];
}
