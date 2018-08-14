import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ComboBoxComponent } from './combo-box/combo-box.component';
import { DropdownDirective, DropdownMenuDirective, DropdownToggleDirective, DropdownAnchorDirective } from './dropdown/dropdown.directive';
import { DropdownConfig } from './dropdown/dropdown-config';
import { MultiComboBoxComponent } from './mutli-combo-box/multi-combo-box.component';
import { BoxComponent } from './box/box.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
	declarations: [
		AppComponent,
		ComboBoxComponent,
		DropdownDirective,
		DropdownMenuDirective,
		DropdownToggleDirective,
		DropdownAnchorDirective,
		MultiComboBoxComponent,
		BoxComponent
	],
	imports: [
		BrowserModule,
		Ng2SearchPipeModule,
		NgbModule,
		FormsModule
	],
	providers: [
		DropdownConfig
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
