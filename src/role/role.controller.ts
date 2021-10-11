import { Body, Controller, Param, Post, Put, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RoleAddDTO } from './dto/role.add.dto';
import { RoleEditDTO } from './dto/role.edit.dto';
import { RoleService } from './role.service';
import { Role } from './schema/role.schema';

@ApiTags('Custom Role Module')
@Controller('role')
export class RoleController {

    constructor(private roleService: RoleService) {}
    
    @Post()
    async createRole(@Body() body: RoleAddDTO): Promise<Role> {
        return await this.roleService.createRole(body);
    }

    @Put('/:id') 
    async editRole(@Param('id') id: string, @Body() body: RoleEditDTO): Promise<Role> {
        return await this.roleService.editRole(id, body);
    }

    @Get('/:id') 
    async getRole(@Param('id') id: string): Promise<Role> {
        return await this.roleService.getRole(id);
    }

    @Get() 
    async getAllRole(): Promise<Role[]> {
        return await this.roleService.getAllRole();
    }

}
