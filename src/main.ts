import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:6000',
        package: 'restaurant',
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
