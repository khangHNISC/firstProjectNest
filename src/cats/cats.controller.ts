import {Controller, Get} from '@nestjs/common';

@Controller('cats')
export class CatsController {

    @Get()
    getCat(): string {
        return "Cat";
    }
}
