import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupWebComponent } from './setup-web.component';

describe('SetupWebComponent', () => {
  let component: SetupWebComponent;
  let fixture: ComponentFixture<SetupWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
