import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Awesome AC API')
    .setDescription('REST API for Animal Crossing New Horizons')
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    operationIdFactory: (controllerKey: string) => controllerKey.slice(0, 9),
  });
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 1337, () => {
    Logger.log(`Listening on http://localhost:${process.env.PORT || 1337}`);
  });
}
bootstrap();
