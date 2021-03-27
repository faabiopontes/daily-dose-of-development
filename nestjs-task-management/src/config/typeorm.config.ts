import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { get } from 'config';
import { IConfigDB } from 'src/types';

const configDb = get<IConfigDB>('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: configDb.type,
  host: process.env.RDS_HOSTNAME || configDb.host,
  port: ((process.env.RDS_PORT as unknown) as number) || configDb.port,
  username: process.env.RDS_USERNAME || configDb.username,
  password: process.env.RDS_PASSWORD || configDb.password,
  database: process.env.RDS_DATABASE || configDb.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize:
    ((process.env.TYPEORM_SYNC as unknown) as boolean) || configDb.synchronize,
};
