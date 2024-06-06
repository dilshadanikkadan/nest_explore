import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Query,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { ApiResponse, ApiConsumes } from '@nestjs/swagger';
import { ZodValidationPipe } from 'src/common/zod';
import { createUserSchema } from 'src/common/validation';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @Get()
  findAll(@Query('username') username: string) {
    console.log(username);

    return this.userService.findByQuery(username);
  }
}
