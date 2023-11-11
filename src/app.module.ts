import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './Prisma/prisma.service'
import { CreateAcountController } from './controllers/create-account.controller'
import { envSchema } from 'src/env'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
  ],
  controllers: [CreateAcountController],
  providers: [PrismaService],
})
export class AppModule {}
