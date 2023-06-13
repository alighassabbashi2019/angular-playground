import { ElementRef } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const el: ElementRef = new Element() as any;
    const directive = new HighlightDirective(el);
    expect(directive).toBeTruthy();
  });
});
