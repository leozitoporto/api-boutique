import { Module } from '@nestjs/common'
import { PrismaService } from './Prisma/prisma.service'
import { CreateAcountController } from './controllers/create-account.controller'

@Module({
  controllers: [CreateAcountController],
  providers: [PrismaService],
})
export class AppModule {}
