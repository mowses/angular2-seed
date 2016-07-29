import {Component} from 'angular2/core';

/**
 * moduleId: __moduleName
 * The key lesson is to set the moduleId : module.id in the @Component decorator! Without the moduleId setting, Angular 2 will look for our files in paths relative to the application root.
*/

@Component({
	moduleId: __moduleName,  // fully resolved filename; defined at module load time
    selector: 'window',
    templateUrl: 'window.template.html',
    styleUrls: ['themes/theme1.css']
})

export class WindowComponent {
	constructor() {
		console.log('cocoroni a ilha');
	}
}