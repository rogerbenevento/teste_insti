import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaEditComponent } from './despesa-edit.component';

describe('DespesaEditComponent', () => {
  let component: DespesaEditComponent;
  let fixture: ComponentFixture<DespesaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DespesaEditComponent]
    });
    fixture = TestBed.createComponent(DespesaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
