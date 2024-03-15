import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedArticalComponent } from './featured-artical.component';

describe('FeaturedArticalComponent', () => {
  let component: FeaturedArticalComponent;
  let fixture: ComponentFixture<FeaturedArticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturedArticalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedArticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
