import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuipuPageComponent } from './quipu-page.component';

describe('QuipuPageComponent', () => {
  let component: QuipuPageComponent;
  let fixture: ComponentFixture<QuipuPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuipuPageComponent]
    });
    fixture = TestBed.createComponent(QuipuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
