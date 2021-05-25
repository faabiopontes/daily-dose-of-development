export interface Config {
  server: ConfigServer;
  db: ConfigDB;
  jwt: ConfigJWT;
}

export interface ConfigServer {
  port: number;
}

export interface ConfigDB {
  type: 'mysql' | 'mariadb' | 'postgres' | 'mssql';
  host: string;
  database: string;
  port: number;
  username: string;
  password: string;
  synchronize: boolean;
}

export interface ConfigJWT {
  expiresIn: number;
  secret: string;
}
