import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailViewComponent } from './shop-detail-view.component';

describe('ShopDetailViewComponent', () => {
  let component: ShopDetailViewComponent;
  let fixture: ComponentFixture<ShopDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopDetailViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
