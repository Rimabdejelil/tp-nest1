import { Controller , Post , Get , Body} from '@nestjs/common';




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
       @Body('skills') skill
    ){
        this.skills.push(skill);
       return "skills array";
    }
}


 