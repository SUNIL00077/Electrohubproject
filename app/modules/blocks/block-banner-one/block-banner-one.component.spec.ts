import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockBannerOneComponent } from './block-banner-one.component';

describe('BlockBannerOneComponent', () => {
  let component: BlockBannerOneComponent;
  let fixture: ComponentFixture<BlockBannerOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockBannerOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockBannerOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
