import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRecordImageDialogComponent } from './select-record-image-dialog.component';

describe('SelectRecordImageDialogComponent', () => {
  let component: SelectRecordImageDialogComponent;
  let fixture: ComponentFixture<SelectRecordImageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectRecordImageDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRecordImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
