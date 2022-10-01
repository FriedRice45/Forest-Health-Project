import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule } from 'igniteui-angular';
import { NewPictureComponent } from './new-picture.component';

describe('NewPictureComponent', () => {
  let component: NewPictureComponent;
  let fixture: ComponentFixture<NewPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPictureComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
