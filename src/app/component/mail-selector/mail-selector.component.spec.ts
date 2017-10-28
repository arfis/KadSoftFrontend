import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSelectorComponent } from './mail-selector.component';

describe('MailSelectorComponent', () => {
  let component: MailSelectorComponent;
  let fixture: ComponentFixture<MailSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
