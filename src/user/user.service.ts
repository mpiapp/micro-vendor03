import { Injectable } from '@nestjs/common';
import { UserAddDTO } from './dto/user.add.dto';
import { UserRepository } from './repository/user.repository';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
    constructor(private userRepository: UserRepository) {}

    async createUser(user: UserAddDTO): Promise<User> {
        return await this.userRepository.create(user);
    }
}
