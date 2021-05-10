import {Appearance, ButtonDirective, Shape, Sizing} from './button.directive';
import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

@Component({
  template: `<button hmButton [appearance]="appearance" [size]="size" [shape]="shape" [disabled]="disabled"></button>`
})
class ButtonTestComponent {
  appearance: Appearance = undefined;
  size: Sizing = undefined;
  shape: Shape = undefined;
  disabled: boolean = false;
}

function getElementByDirective(fixture: ComponentFixture<ButtonTestComponent>): DebugElement {
  return fixture.debugElement.query(By.directive(ButtonDirective));
}

describe('ButtonDirective', () => {
  let fixture: ComponentFixture<ButtonTestComponent>;
  let component: ButtonTestComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonDirective, ButtonTestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(fixture.debugElement.query(By.directive(ButtonDirective))).toBeDefined();
  });

  describe('appearance', () => {
    it('should apply no appearance-class', () => {
      fixture.detectChanges();
      expect(getElementByDirective(fixture).nativeElement.classList.contains('btn-primary')).toEqual(false);
      expect(getElementByDirective(fixture).nativeElement.classList.contains('btn-secondary')).toEqual(false);
      expect(getElementByDirective(fixture).nativeElement.classList.contains('btn-success')).toEqual(false);
      expect(getElementByDirective(fixture).nativeElement.classList.contains('btn-danger')).toEqual(false);
      expect(getElementByDirective(fixture).nativeElement.classList.contains('btn-link')).toEqual(false);
    });
    it('should apply "btn-primary"', () => {
      component.appearance = 'primary';
      fixture.detectChanges();
      expect(getElementByDirective(fixture).nativeElement.classList.contains('btn-primary')).toEqual(true);
    });
    it('should apply "btn-secondary"', () => {
      component.appearance = 'secondary';
      fixture.detectChanges();
      expect(getElementByDirective(fixture).nativeElement.classList.contains('btn-secondary')).toEqual(true);
    });
    it('should apply "btn-success"', () => {
      component.appearance = 'success';
      fixture.detectChanges();
      expect(getElementByDirective(fixture).nativeElement.classList.contains('btn-success')).toEqual(true);
    });
    it('should apply "btn-danger"', () => {
      component.appearance = 'danger';
      fixture.detectChanges();
      expect(getElementByDirective(fixture).nativeElement.classList.contains('btn-danger')).toEqual(true);
    });
    it('should apply "btn-link"', () => {
      component.appearance = 'link';
      fixture.detectChanges();
      expect(getElementByDirective(fixture).nativeElement.classList.contains('btn-link')).toEqual(true);
    });
  });

  describe('size', () => {
    it('should apply no size class', () => {
      fixture.detectChanges();
      expect(getElementByDirective(fixture).nativeElement.classList.contains('btn-lg')).toEqual(false);
      expect(getElementByDirective(fixture).nativeElement.classList.contains('btn-sm')).toEqual(false);
    });
    it('should apply "btn-lg"', () => {
      component.size = 'lg';
      fixture.detectChanges();
      expect(getElementByDirective(fixture).nativeElement.classList.contains('btn-lg')).toEqual(true);
    });
    it('should apply "btn-sm"', () => {
      component.size = 'sm';
      fixture.detectChanges();
      expect(getElementByDirective(fixture).nativeElement.classList.contains('btn-sm')).toEqual(true);
    });
  });
  describe('shape', () => {
    it('should apply no shape class', () => {
      fixture.detectChanges();
      expect(getElementByDirective(fixture).nativeElement.classList.contains('btn-rounded')).toEqual(false);
      expect(getElementByDirective(fixture).nativeElement.classList.contains('btn-square')).toEqual(false);
    });
    it('should apply "btn-rounded"', () => {
      component.shape = 'rounded';
      fixture.detectChanges();
      expect(getElementByDirective(fixture).nativeElement.classList.contains('btn-rounded')).toEqual(true);
    });
    it('should apply "btn-square"', () => {
      component.shape = 'square';
      fixture.detectChanges();
      expect(getElementByDirective(fixture).nativeElement.classList.contains('btn-square')).toEqual(true);
    });
  });
  describe('disabled', () => {
    it('should not apply disabled', () => {
      fixture.detectChanges();
      expect(getElementByDirective(fixture).nativeElement.classList.contains('disabled')).toEqual(false);
      expect(getElementByDirective(fixture).nativeElement.hasAttribute('disabled')).toEqual(false);
    });
    it('should apply "btn-rounded"', () => {
      component.disabled = true;
      fixture.detectChanges();
      expect(getElementByDirective(fixture).nativeElement.classList.contains('disabled')).toEqual(true);
      expect(getElementByDirective(fixture).nativeElement.hasAttribute('disabled')).toEqual(true);
    });
  });
});
