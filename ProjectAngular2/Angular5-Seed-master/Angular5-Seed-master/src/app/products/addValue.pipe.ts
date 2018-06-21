import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'addVal'
})
export class addValuePipe implements PipeTransform{

    transform(value:number){
        if(value>20){
            value=value+10  
        }
        return value
    }
}