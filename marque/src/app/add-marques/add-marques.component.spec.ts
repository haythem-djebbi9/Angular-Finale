import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarqueComponent } from './add-marques.component';

describe('AddMarquesComponent', () => {
  let component: AddMarqueComponent;
  let fixture: ComponentFixture<AddMarqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMarqueComponent]
    });
    fixture = TestBed.createComponent(AddMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});