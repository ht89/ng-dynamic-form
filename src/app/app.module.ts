import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormControlComponent } from './dynamic-form/dynamic-form-control/dynamic-form-control.component';

@NgModule({
    declarations: [
        AppComponent,
        DynamicFormComponent,
        DynamicFormControlComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
