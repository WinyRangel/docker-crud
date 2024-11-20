import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarProductoComponent,
    CrearProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    }),
    HttpClientModule
  ],
  providers: [
    provideHttpClient(withFetch())  // Configurar HttpClient para usar fetch APIs
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
