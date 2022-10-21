import { ArgumentMetadata, BadRequestException, Body, PipeTransform } from "@nestjs/common";


export class pipeCostum implements PipeTransform {
    

    transform(value: string [], metadata: ArgumentMetadata) {
        
       if( metadata.type == 'body') 
       { 
        return value.join('-').toUpperCase();        
       }
     
    }
}