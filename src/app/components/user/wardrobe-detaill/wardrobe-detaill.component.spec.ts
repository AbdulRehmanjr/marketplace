import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardrobeDetaillComponent } from './wardrobe-detaill.component';

describe('WardrobeDetaillComponent', () => {
  let component: WardrobeDetaillComponent;
  let fixture: ComponentFixture<WardrobeDetaillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardrobeDetaillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WardrobeDetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
