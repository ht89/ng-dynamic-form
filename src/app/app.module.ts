import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question/dynamic-form-question.component';
import { QuestionService } from './question.service';


@NgModule({
    declarations: [
        AppComponent,
        DynamicFormComponent,
        DynamicFormQuestionComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    providers: [QuestionService],
    bootstrap: [AppComponent]
})
export class AppModule { }
