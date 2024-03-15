import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestArticalComponent } from './latest-artical.component';

describe('LatestArticalComponent', () => {
  let component: LatestArticalComponent;
  let fixture: ComponentFixture<LatestArticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestArticalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestArticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
