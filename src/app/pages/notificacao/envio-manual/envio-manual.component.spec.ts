import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioManualComponent } from './envio-manual.component';

describe('EnvioManualComponent', () => {
  let component: EnvioManualComponent;
  let fixture: ComponentFixture<EnvioManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvioManualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvioManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
