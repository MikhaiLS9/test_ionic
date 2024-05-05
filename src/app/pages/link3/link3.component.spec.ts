import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Link3Component } from './link3.component';

describe('Link1Component', () => {
  
  let component: Link3Component;
  let fixture: ComponentFixture<Link3Component>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link3Component ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(Link3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
