import { Component } from '@angular/core';
import { ArticleLayoutComponent, TocItem } from '../../shared/article-layout/article-layout.component';

@Component({
  selector: 'app-ai-data-mesh',
  imports: [ArticleLayoutComponent],
  templateUrl: './ai-data-mesh.component.html',
})
export class AiDataMeshComponent {
  readonly toc: TocItem[] = [
    { id: 'vision', label: 'The Platform Vision' },
    { id: 'why', label: 'Why It Is Needed' },
    { id: 'architecture', label: 'The Refined Architecture' },
    { id: 'principles', label: 'Key Design Principles' },
    { id: 'roadmap', label: 'Implementation Roadmap' },
    { id: 'final', label: 'Final Thought' },
  ];
}
