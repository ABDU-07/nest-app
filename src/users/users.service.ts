import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './users.madel';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users) private readonly usersModel: typeof Users) {}
  create(createUserDto: CreateUserDto) {
    return this.usersModel.create(createUserDto);
  }

  findAll() {
    return this.usersModel.findAll();
  }

  findOne(id: number) {
    return this.usersModel.findByPk(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersModel.update(updateUserDto, { where: { id } });
  }

  remove(id: number) {
    return this.usersModel.destroy({ where: { id } });
  }
}
