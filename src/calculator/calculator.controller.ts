import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CreateCalculatorDto } from './dto/create-calculator.dto';
import { UpdateCalculatorDto } from './dto/update-calculator.dto';
import { Counter, register} from 'prom-client'
@Controller('calculator')
export class CalculatorController {
  counter : Counter
  constructor(private readonly calculatorService: CalculatorService) {
    this.counter = new Counter({
      name: 'metric_calculator',
      help: '/'
    })
    register.registerMetric(this.counter)
  }

  @Post()
  create(@Body() createCalculatorDto: CreateCalculatorDto) {
    return this.calculatorService.create(createCalculatorDto);
  }

  @Get()
  findAll() {
  this.counter.inc(1)
    return this.calculatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calculatorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCalculatorDto: UpdateCalculatorDto) {
    return this.calculatorService.update(+id, updateCalculatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calculatorService.remove(+id);
  }
}
