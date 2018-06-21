import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component'
import {DashBoardComponent} from './dashboard.component'
import { ProductComponent } from "./products/products.component"
import { MoviesComponent } from "./movies/movies.component"
import { upperValuePipe } from './products/upperValue.pipe';
import { addValuePipe } from './products/addValue.pipe';
@NgModule({

    //All module declare here
    imports :[
        BrowserModule,
        FormsModule
    ],
    //All component and Pipe
    declarations:[
        AppComponent,
        DashBoardComponent,
        ProductComponent,
        MoviesComponent,
        upperValuePipe,
        addValuePipe
        
    ],
    //only first component
    bootstrap :[AppComponent],
    //all services declare here
    providers:[]

})

export class AppModule
{

}
