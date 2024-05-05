import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Link2Component } from './link2.component';

describe('Link1Component', () => {
  
  let component: Link2Component;
  let fixture: ComponentFixture<Link2Component>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link2Component ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(Link2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
