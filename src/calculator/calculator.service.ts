import { Injectable } from '@nestjs/common';
import { CreateCalculatorDto } from './dto/create-calculator.dto';
import { UpdateCalculatorDto } from './dto/update-calculator.dto';
import {popNumber} from "rxjs/internal/util/args";

@Injectable()
export class CalculatorService {
  create(createCalculatorDto: CreateCalculatorDto) {
    console.log(createCalculatorDto)
    let result : number
    let firstNum = createCalculatorDto.firstNum
    let secondNum = createCalculatorDto.secondNum
    switch (createCalculatorDto.action) {
      case ('+') :
        return result = firstNum + secondNum;
      case ('-') :
        return result = firstNum - secondNum;
      case ('*') :
        return result = firstNum * secondNum;
      case ('/') :
        return result = firstNum / secondNum;
    }
    return 'Wrong action'
  }

  findAll() {
    return `This action returns all calculator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} calculator`;
  }

  update(id: number, updateCalculatorDto: UpdateCalculatorDto) {
    return `This action updates a #${id} calculator`;
  }

  remove(id: number) {
    return `This action removes a #${id} calculator`;
  }
}
