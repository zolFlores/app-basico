import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'filter'
})


export class FilterPipe implements PipeTransform{
   
    

    transform(values:string[], arg: string):string [] {
        if (!arg ) return values;
        let result = [];
        for (const value of values){
             if (value.toLowerCase().indexOf (arg.toLowerCase())>-1){
                result=[...result, value];
             }   
         console.log (result);
            }
 return result;
}

}