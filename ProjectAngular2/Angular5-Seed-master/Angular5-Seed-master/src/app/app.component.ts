import {Component} from '@angular/core';

@Component(
    {
        selector :'app-comp',
        template: `<div>
                    <h1></h1>
                    <prod-comp></prod-comp>
                    <movie-comp></movie-comp>
                    <dash-comp></dash-comp>
                    </div>`
    }
)

export class AppComponent
{


}

