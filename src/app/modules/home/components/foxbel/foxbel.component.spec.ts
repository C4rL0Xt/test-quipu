import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoxbelComponent } from './foxbel.component';

describe('FoxbelComponent', () => {
  let component: FoxbelComponent;
  let fixture: ComponentFixture<FoxbelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoxbelComponent]
    });
    fixture = TestBed.createComponent(FoxbelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
