declare const module: any;

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { get } from 'config';
import { IConfigServer } from './types';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  const configServer = get<IConfigServer>('server');
  const port = process.env.PORT || configServer.port;

  await app.listen(port);
  logger.log(`Application listening on port ${port}`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
