import { Component } from '@angular/core';
import { ArticleLayoutComponent, TocItem } from '../../shared/article-layout/article-layout.component';

@Component({
  selector: 'app-edi-ndjson',
  imports: [ArticleLayoutComponent],
  templateUrl: './edi-ndjson.component.html',
})
export class EdiNdjsonComponent {
  readonly toc: TocItem[] = [
    { id: 'problem', label: 'The problem with EDI' },
    { id: 'goal', label: 'What we built' },
    { id: 'arch', label: 'Architecture' },
    { id: 'parsing', label: 'Parsing with Smooks' },
    { id: 'yaml', label: 'Config-driven segments' },
    { id: 'correlation', label: 'Correlation keys' },
    { id: 'cas', label: 'Repeating groups (CAS)' },
    { id: 'cloud', label: 'Pluggable cloud I/O' },
    { id: 'secrets', label: 'Secrets & credentials' },
    { id: 'api', label: 'Using the API' },
    { id: 'takeaways', label: 'Takeaways' },
  ];
}
