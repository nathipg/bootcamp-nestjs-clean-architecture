import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApiExceptionFilter } from '@presentation/Filters/api-exceptions.filter';
import { AppModule } from './app.module';
import { setupSwagger } from './environment/swagger/swagger.configuration';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();

  setupSwagger(app, logger);

  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ApiExceptionFilter());

  await app.listen(3000);
}
bootstrap();
