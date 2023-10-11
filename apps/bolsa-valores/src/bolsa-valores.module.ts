import { Module } from '@nestjs/common';
import { MongooseModule } from '@Nestjs/mongoose';
import { BolsaValoresController } from './bolsa-valores.controller';
import { BolsaValoresService } from './bolsa-valores.service';
import { OrdersModule } from './orders/orders.module';

const dns_mongo = 'mongodb://root:root@localhost:27017/bolsa_valores?authSource=admin&directConnection=true'

@Module({
  imports: [OrdersModule, 
    MongooseModule.forRoot(dns_mongo)
  ],
  controllers: [BolsaValoresController],
  providers: [BolsaValoresService],
})
export class BolsaValoresModule {}
