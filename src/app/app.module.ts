import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxDropDownModule, IgxSelectModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { RegisterPageComponent } from './register-page/register-page.component';
import { PictureGridComponent } from './picture-grid/picture-grid.component';
import { PictureDescriptionComponent } from './picture-description/picture-description.component';
import { NewPictureComponent } from './new-picture/new-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    PictureGridComponent,
    PictureDescriptionComponent,
    NewPictureComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
