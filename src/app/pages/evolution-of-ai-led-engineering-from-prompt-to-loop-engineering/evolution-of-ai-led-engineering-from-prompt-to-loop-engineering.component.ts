import { Component } from '@angular/core';
import { ArticleLayoutComponent, TocItem } from '../../shared/article-layout/article-layout.component';

@Component({
  selector: 'app-evolution-of-ai-led-engineering-from-prompt-to-loop-engineering',
  imports: [ArticleLayoutComponent],
  templateUrl: './evolution-of-ai-led-engineering-from-prompt-to-loop-engineering.component.html',
  styleUrl: './evolution-of-ai-led-engineering-from-prompt-to-loop-engineering.component.scss',
})
export class EvolutionOfAiLedEngineeringFromPromptToLoopEngineeringComponent {
  readonly toc: TocItem[] = [
    { id: 'prompt-engineering', label: 'Prompt Engineering' },
    { id: 'context-engineering', label: 'Context Engineering' },
    { id: 'harness-engineering', label: 'Harness Engineering' },
    { id: 'loop-engineering', label: 'Loop Engineering' },
    { id: 'evolution', label: 'The Evolution' },
    { id: 'example', label: 'A Practical Example' },
    { id: 'final', label: 'Final Thought' },
  ];
}
