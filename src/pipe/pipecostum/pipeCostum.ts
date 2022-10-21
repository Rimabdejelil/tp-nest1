import { ArgumentMetadata, BadRequestException, Body, PipeTransform } from "@nestjs/common";


export class pipeCostum implements PipeTransform {
    

    transform(value: any, metadata: ArgumentMetadata) {
       if( metadata.type == 'body') 
       {
         
        
       }
       else {
        throw new BadRequestException('input invalid') ; 
       }

    }
}