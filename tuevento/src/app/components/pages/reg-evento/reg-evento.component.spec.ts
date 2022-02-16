import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegEventoComponent } from './reg-evento.component';

describe('RegEventoComponent', () => {
  let component: RegEventoComponent;
  let fixture: ComponentFixture<RegEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegEventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
