import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserAddDTO } from '../dto/user.add.dto';
import { User, UserDocument } from '../schema/user.schema';

@Injectable()
export class UserRepository {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async create(user: UserAddDTO): Promise<User> {
        return await this.userModel.create(user);
    }
}