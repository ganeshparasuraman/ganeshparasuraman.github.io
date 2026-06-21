import { Component } from '@angular/core';
import { ArticleLayoutComponent, TocItem } from '../../shared/article-layout/article-layout.component';

@Component({
  selector: 'app-mongodb-uc',
  imports: [ArticleLayoutComponent],
  templateUrl: './mongodb-uc.component.html',
})
export class MongodbUcComponent {
  readonly toc: TocItem[] = [
    { id: 'why-mongodb', label: 'Why MongoDB?' },
    { id: 'beyond-tables', label: 'Beyond Tables' },
    { id: 'backend-safe', label: 'Keeping Backend Safe' },
    { id: 'architecture', label: 'Flexible Architecture' },
    { id: 'collections', label: 'Collections' },
    { id: 'embedded', label: 'Embedded Metadata' },
    { id: 'governance', label: 'Governance' },
    { id: 'final-thoughts', label: 'Final Thoughts' },
  ];
}
