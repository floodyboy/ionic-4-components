import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StepperComponent } from './stepper/stepper.component';
import { StepComponent } from './step/step.component';
import { StepHeaderComponent } from './step-header/step-header.component';
import { StepContentComponent } from './step-content/step-content.component';
import { ExpandableComponent } from './expandable/expandable.component';
import { RouterItemComponent } from './router-item/router-item.component';
import { CenterDirective } from './center/center.directive';
import { CollapsableMenuDirective } from './collapsable-menu/collapsable-menu.directive';
import { CollapsableMenuButtonComponent } from './collapsable-menu/collapsable-menu-button/collapsable-menu-button.component';
import { PasswordComponent } from './password/password.component';
import { ToolbarSearchComponent } from './toolbar-search/toolbar-search.component';
import { LoadingButtonComponent } from './loading-button/loading-button.component';
import { LoadingProgressBarComponent } from './loading-progress-bar/loading-progress-bar.component';
import { LoadingContentComponent } from './loading-content/loading-content.component';
import { LoadingFabComponent } from './loading-fab/loading-fab.component';
import { AppBarComponent } from './app-bar/app-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    ExpandableComponent,
    PasswordComponent,
    StepperComponent,
    StepComponent,
    StepHeaderComponent,
    StepContentComponent,
    RouterItemComponent,
    CenterDirective,
    CollapsableMenuButtonComponent,
    CollapsableMenuDirective,
    ToolbarSearchComponent,
    LoadingButtonComponent,
    LoadingProgressBarComponent,
    LoadingContentComponent,
    LoadingFabComponent,
    AppBarComponent,
  ],
  exports: [
    ExpandableComponent,
    PasswordComponent,
    StepperComponent,
    StepComponent,
    StepHeaderComponent,
    StepContentComponent,
    RouterItemComponent,
    CollapsableMenuDirective,
    CenterDirective,
    CollapsableMenuButtonComponent,
    ToolbarSearchComponent,
    LoadingButtonComponent,
    LoadingProgressBarComponent,
    LoadingContentComponent,
    LoadingFabComponent,
    AppBarComponent,
  ]
})
export class FivethreeCoreModule { }