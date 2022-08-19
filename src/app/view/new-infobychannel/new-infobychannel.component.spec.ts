import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInfobychannelComponent } from './new-infobychannel.component';

describe('NewInfobychannelComponent', () => {
  let component: NewInfobychannelComponent;
  let fixture: ComponentFixture<NewInfobychannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInfobychannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInfobychannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
