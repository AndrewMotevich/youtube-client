import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import AppModule from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => {
    throw new Error(err);
  });
