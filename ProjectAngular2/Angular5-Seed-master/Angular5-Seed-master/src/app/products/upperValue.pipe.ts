import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
        name:'myUpper'

})
export class upperValuePipe implements PipeTransform{

       // transform(value:string)
        //{
        //    value=value.toLocaleUpperCase()
       //     return value
       // }
       transform(value:string,type:string){
           var out;
           if(type=="upper")
           {
               out=value.toUpperCase()
           }
           else{
           out= value.toLowerCase()
           }

           return out
       }
}