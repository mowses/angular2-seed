import {provide, PLATFORM_PIPES} from 'angular2/core'
import {HTTP_PROVIDERS} from 'angular2/http'
import {TranslateService, TranslateStaticLoader, TranslatePipe, TranslateLoader} from 'ng2-translate/ng2-translate'
import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    provide(PLATFORM_PIPES, {
    	useValue: [],
    	multi: true
    }),
    TranslateService
]);