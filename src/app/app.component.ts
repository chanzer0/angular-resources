import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	options = [
		{ name: 'Name'},
		{ name: 'Othr name' },
		{ name: 'third name'}
	];

	selected;

	title = 'app';

}
