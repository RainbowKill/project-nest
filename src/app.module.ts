import {Module, OnModuleInit} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculatorModule } from './calculator/calculator.module';
const client = require('prom-client')

@Module({
  imports: [CalculatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  public onModuleInit(): any   {
    //client.collectDefaultMetrics();
  }
}
