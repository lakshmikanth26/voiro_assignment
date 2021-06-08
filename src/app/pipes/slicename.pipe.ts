import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicename'
})
export class SlicenamePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    let res = value.split(".", 2); 
    let filename =''
       if(res[0].length> 25){
          let s = res[0].slice(res[0].length - 3)
            filename = res[0].substring(0, 8) + "..." + s +'.'+ res[1];
          }else{
            filename = value;
          }
    return filename;
  }

}
