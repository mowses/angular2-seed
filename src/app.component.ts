import {Component, provide} from 'angular2/core'
import {Http} from 'angular2/http'
import {MissingTranslationHandler, TranslateService, TranslateStaticLoader, TranslateLoader} from 'ng2-translate/ng2-translate'
import {WindowComponent} from 'dist/components/window/window.component'


@Component({
	moduleId: __moduleName,  // fully resolved filename; defined at module load time
	selector: 'my-app',
	templateUrl: 'app.html',
	directives: [WindowComponent],
	providers: [
	    provide(TranslateLoader, {
	      useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
	      deps: [Http]
	    }),
	    provide(MissingTranslationHandler, {
	      useFactory: MissingTranslationHandler
	    }),
	    TranslateService
	]
})

export class AppComponent {
	constructor(translate: TranslateService) {
		var userLang = navigator.language.split('-')[0]; // use navigator lang if available
        
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

        /*translate.setTranslation('en', {
		    "FOO": "foo worked"
		});*/
 
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use(userLang);
        console.log(translate.get('THATITLE'), translate.get('FOO'));
    }
}