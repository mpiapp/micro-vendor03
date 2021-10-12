import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserAddDTO } from './dto/user.add.dto';
import { User } from './schema/user.schema';
import { UserService } from './user.service';

@ApiTags('User Module')
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() user: UserAddDTO): Promise<User> {
        try {
            // call user microservice here, wait for microservices API finish

            // then
            user.auth_id = 'X';
        
            delete user.password;
            return await this.userService.createUser(user);
        }
        catch(exception) {
            throw new BadRequestException(exception.message)
        }
    }
}
