import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Put,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('stack')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllElements(): string {
    return JSON.stringify(this.appService.getAll());
  }

  @Put(':element')
  addNew(@Param('element') element: string): string {
    if (parseInt(element)) {
      this.appService.add(Number(element));
      return `New element "${element}" was added successfully`;
    }
    throw new HttpException(
      `${element} is not a valid integer`,
      HttpStatus.BAD_REQUEST,
    );
  }

  @Patch()
  removeLast(): number {
    const result = this.appService.pop();
    if (!result) {
      throw new HttpException('Stack is empty', HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  @Delete()
  deleteAll(): void {
    this.appService.delete();
  }
}
