import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalparticipantePage } from './modalparticipante.page';

describe('ModalparticipantePage', () => {
  let component: ModalparticipantePage;
  let fixture: ComponentFixture<ModalparticipantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalparticipantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
