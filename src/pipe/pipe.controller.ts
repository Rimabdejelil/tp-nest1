import { Controller , Post , Get , Body} from '@nestjs/common';
import { pipeCostum } from './pipeCustom/pipeCostum';



@Controller('pipe')
export class PipeController {

   private skills =[];
    @Get('')
     getArray()
     {
        return this.skills;
     }

    @Post('')
    postArray(
       @Body('skills' , new pipeCostum()) skill
    ){
        this.skills.push(skill);
       return "skills array";
    }
}


 