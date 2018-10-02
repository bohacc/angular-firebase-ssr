import { NgModule } from '@angular/core';
import { AppModule } from './app.module';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    ModuleMapLoaderModule
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppServerModule {

}
