import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxToggleModule, IgxDropDownModule, IgxButtonModule, IgxRippleModule, IgxIconModule } from 'igniteui-angular';
import { PictureGridComponent } from './picture-grid.component';

describe('PictureGridComponent', () => {
  let component: PictureGridComponent;
  let fixture: ComponentFixture<PictureGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureGridComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxToggleModule, IgxDropDownModule, IgxButtonModule, IgxRippleModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
