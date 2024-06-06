import { HttpCode, Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/model/user.model';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userSchema: Model<User>) {}
  private users: User[] = [];
  findUser() {
    return 'thi is dilshad from user';
  }

  create(createUser: CreateUserDto) {
    const newUser = new this.userSchema(createUser);
    return newUser.save();
  }
  findByQuery(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
