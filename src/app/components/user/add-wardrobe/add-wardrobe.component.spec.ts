import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWardrobeComponent } from './add-wardrobe.component';

describe('AddWardrobeComponent', () => {
  let component: AddWardrobeComponent;
  let fixture: ComponentFixture<AddWardrobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWardrobeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWardrobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
