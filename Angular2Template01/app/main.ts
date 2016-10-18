// Hookup our app here (bootstrap).  Load our first component.

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";
import 'rxjs/add/operator/';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
