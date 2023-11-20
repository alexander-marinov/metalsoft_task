import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  stackArray: number[] = [];

  getAll(): number[] {
    return this.stackArray;
  }

  add(element: number): void {
    this.stackArray.push(element);
  }

  pop(): number {
    return this.stackArray.pop();
  }

  delete(): void {
    this.stackArray = [];
  }
}
