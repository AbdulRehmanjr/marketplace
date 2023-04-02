import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWardrobeComponent } from './list-wardrobe.component';

describe('ListWardrobeComponent', () => {
  let component: ListWardrobeComponent;
  let fixture: ComponentFixture<ListWardrobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWardrobeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWardrobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
