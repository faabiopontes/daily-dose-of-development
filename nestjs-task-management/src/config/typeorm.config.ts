import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { get } from 'config';
import { ConfigDB } from 'src/types';

const configDb = get<ConfigDB>('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: configDb.type,
  host: process.env.DB_HOST || configDb.host,
  port: ((process.env.DB_PORT as unknown) as number) || configDb.port,
  username: process.env.DB_USER || configDb.username,
  password: process.env.DB_PASSWORD || configDb.password,
  database: process.env.DB_DATABASE || configDb.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize:
    ((process.env.TYPEORM_SYNC as unknown) as boolean) || configDb.synchronize,
};
