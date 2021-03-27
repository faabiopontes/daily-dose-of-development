export interface IConfig {
  server: IConfigServer;
  db: IConfigDB;
  jwt: IConfigJWT;
}

export interface IConfigServer {
  port: number;
}

export interface IConfigDB {
  type: 'mysql' | 'mariadb' | 'postgres' | 'mssql';
  host: string;
  database: string;
  port: number;
  username: string;
  password: string;
  synchronize: boolean;
}

export interface IConfigJWT {
  expiresIn: number;
  secret: string;
}
