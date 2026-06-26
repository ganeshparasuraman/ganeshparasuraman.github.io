import { Component } from '@angular/core';
import { ArticleLayoutComponent, TocItem } from '../../shared/article-layout/article-layout.component';

@Component({
  selector: 'app-genai-flow',
  imports: [ArticleLayoutComponent],
  templateUrl: './genai-flow.component.html',
  styleUrl: './genai-flow.component.scss',
})
export class GenaiFlowComponent {
  readonly toc: TocItem[] = [
    { id: 'prompt', label: 'Prompt Engineering' },
    { id: 'simple', label: 'Simple GenAI App' },
    { id: 'agentic', label: 'Agentic App' },
    { id: 'tools', label: 'Why Agents Need Tools' },
    { id: 'mcp', label: 'MCP Server' },
    { id: 'interaction', label: 'Agents + MCP' },
    { id: 'workflow', label: 'Agentic Workflow' },
    { id: 'reasoning', label: 'CoT, ReAct & ToT' },
    { id: 'end-to-end', label: 'End-to-End Flow' },
    { id: 'types', label: 'Chatbot vs Agent vs Workflow' },
    { id: 'why', label: 'Why This Matters' },
    { id: 'final', label: 'Final Thought' },
  ];
}
