import { PACKAGE_NAMES } from './interface/grpc.service.interface';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: process.env.GRPC_URL,
        package: PACKAGE_NAMES.RESTAURANT,
        protoPath: 'proto/restaurant.proto',
        loader: {
          keepCase: true,
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
