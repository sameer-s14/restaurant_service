import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './modules/app.module';
import { grpcPackages, grpcProtoPaths } from './constants/grpc.constants';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: process.env.GRPC_URL,
        package: grpcPackages,
        protoPath: grpcProtoPaths,
        loader: {
          keepCase: true,
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
