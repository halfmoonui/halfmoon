import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChange, SimpleChanges} from '@angular/core';

export type Appearance = 'primary' | 'secondary' | 'success' | 'danger' | 'link' | undefined;

export type Sizing = 'sm' | 'lg' | undefined;

export type Shape = 'rounded' | 'square' | undefined;

@Directive({
  selector: '[hmButton]',
})
export class ButtonDirective implements OnChanges {
  @Input() appearance: Appearance;
  @Input() size: Sizing;
  @Input() shape: Shape;
  @Input() disabled: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.addClass('btn');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.appearance) {
      this.applyChange(changes.appearance);
    }
    if (changes.size) {
      this.applyChange(changes.size);
    }
    if (changes.shape) {
      this.applyChange(changes.shape);
    }
    if (changes.disabled) {
      this.applyDisabled(changes.disabled);
    }
  }

  private applyChange(change: SimpleChange): void {
    if (this.hasValueChanged(change)) {
      return;
    }

    if (!change.isFirstChange()) {
      this.removeClass(`btn-${change.previousValue}`);
    }
    this.addClass(`btn-${change.currentValue}`);
  }

  private hasValueChanged(change: SimpleChange): boolean {
    return !change.currentValue || change.previousValue === change.currentValue;
  }

  private addClass(cls: string): void {
    this.renderer.addClass(this.el.nativeElement, cls);
  }

  private removeClass(cls: string): void {
    this.renderer.removeClass(this.el.nativeElement, cls);
  }

  private applyDisabled(change: SimpleChange): void {
    if (change.previousValue === change.currentValue) {
      return;
    }

    if (!change.currentValue) {
      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
      this.removeClass('disabled');
      return;
    }

    this.addClass('disabled');
    this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
  }
}
