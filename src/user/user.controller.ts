import { BadRequestException, Body, Controller, HttpException, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserAddDTO } from './dto/user.add.dto';
import { UserEditDTO } from './dto/user.edit.dto';
import { User } from './schema/user.schema';
import { UserService } from './user.service';

@ApiTags('User Module')
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() user: UserAddDTO): Promise<User> {
        try {
            delete user.password;
            return await this.userService.createUser(user);
        }
        catch(exception) {
            throw new BadRequestException(exception.message)
        }
    }

    @Put('/:auth_id')
    async editUser(@Param('auth_id') auth_id: string, @Body() user: UserEditDTO): Promise<User> {

        try {
            delete user.password;
            return await this.userService.editUser(auth_id, user);            
        }
        catch(exception) {
            throw new BadRequestException(exception.message)
        } 
    }
}
